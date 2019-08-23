import React from "react";
import { View, ScrollView, } from "react-native";
import { connect } from "react-redux";

import { Icon, TopBar } from "../CommonElements";
import styles from "../../styles";
import TeamForm from "../GettingStarted/signup/teamFormElements/teamForm";

import { configTeam, updateTeamState } from "../../actions/team";
import DoneMessage from "../Form/doneMessage";

class Settings extends React.Component {
    componentDidMount() {
        this.props.configTeam(this.props.teamId)
    }
    render() {
        const { notification } = this.props;
        move = () => {
            this.props.navigation.navigate('Home');
            this.props.updateTeamState("notification", "");
        }
        return (
            <View>
                <TopBar
                    name="Settings"
                    iconName="menu"
                    action={() => this.props.navigation.openDrawer()}
                />
                <ScrollView>
                    <View style={{ ...styles.form, paddingHorizontal: 0, marginBottom: 100 }}>
                        <Icon type="FontAwesome" name="gears" />
                        <TeamForm />
                    </View>
                </ScrollView>
                <DoneMessage navigate={() => move()} message={notification} />
            </View>
        );

    }
};

function mapStatetoProps(state) {
    return {
        notification: state.team.notification,
        teamId: state.userData.teamId
    };
}
export default connect(
    mapStatetoProps,
    { configTeam, updateTeamState }
)(Settings);
