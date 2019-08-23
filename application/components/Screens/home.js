import React, { Component } from "react";
import { connect } from "react-redux";
import { View, ScrollView, RefreshControl } from "react-native";
import Modal from "react-native-modalbox";

import { TopBar, NoData } from "../CommonElements";
import { FeedbackList, SearchBar } from "../Home";
import { adminLogin } from "../../actions/user";
import { getForm } from "../../actions/form";
import SortModal from "../Home/sortModal";
import styles from "../../styles";
import getRating from "../../utils/getRating";

class Home extends Component {
    state = {
        spinning: false,
        search: "",
        sort: "rating",
        parameter: "name",
        filter: "",
        isVisible: false
    };
    componentDidMount() {
        const { teamId } = this.props.store;
        this.props.getForm(teamId);
    }
    refresh = async ({ teamId, userId, admin }) => {
        await this.setState({ spinning: true });
        if (admin) await this.props.adminLogin(teamId);
        else await this.props.interviewerLogin(userId);
        await this.setState({ spinning: false });
    };
    updateState = (title, text) => this.setState({ [title]: text });
    toggleState = (row, column) => {
        if (this.state.filter === column) this.setState({ filter: "" });
        else this.setState({ [row]: column });
    };
    toggleModal = () => this.setState({ isVisible: !this.state.isVisible });

    render() {
        const { navigate } = this.props.navigation;
        const { store } = this.props;
        return (
            <View style={{flex: 1}}>
                <TopBar
                    name={store.name}
                    iconName="menu"
                    action={() => this.props.navigation.openDrawer()}
                />
                <SearchBar
                    search={this.state.search}
                    updateState={this.updateState}
                    toggleModal={this.toggleModal}
                    parameter={this.state.parameter}
                />
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.spinning}
                            onRefresh={() =>
                                this.refresh({
                                    teamId: store.teamId,
                                    userId: store.userId,
                                    admin: store.admin
                                })
                            }
                            tintColor={"steelblue"}
                        />
                    }
                >
                {store.data.length ? 
                    <FeedbackList
                        data={store.data
                            .filter(feedback =>
                                feedback[this.state.parameter]
                                    .toUpperCase()
                                    .includes(this.state.search.toUpperCase())
                            )
                            .sort((a, b) => {
                                switch (this.state.sort) {
                                    case "date":
                                        return Date.parse(b.date) - Date.parse(a.date);
                                    case "experience":
                                        return (
                                            b.exp_year * 12 +
                                            b.exp_month -
                                            (a.exp_year * 12 + a.exp_month)
                                        );
                                    case "rating":
                                        return getRating(b.skill) - getRating(a.skill);
                                }
                            })
                            .filter(
                                feedback => !this.state.filter || feedback.status.toUpperCase().replace(" ", "_") === this.state.filter.toUpperCase()
                            )}
                        navigate={navigate}
                    /> : <NoData text="No feedbacks yet."/>}
                </ScrollView>
                <Modal
                    style={styles.sortModal}
                    isOpen={this.state.isVisible}
                    position={"center"}
                    onClosed={this.toggleModal}
                >
                    <SortModal
                        admin={store.admin}
                        sort={this.state.sort}
                        parameter={this.state.parameter}
                        filter={this.state.filter}
                        changeState={this.updateState}
                        toggleState={this.toggleState}
                    />
                </Modal>
            </View>
        );
    }
}
function mapStatetoProps(state) {
    return {
        store: state.userData
    };
}

export default connect(
    mapStatetoProps,
    { adminLogin, getForm }
)(Home);