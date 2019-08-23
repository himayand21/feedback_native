import React from "react";
import {
  View,
  ScrollView,
  RefreshControl,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import Modal from "react-native-modalbox";
import ToggleSwitch from "toggle-switch-react-native";

import SearchBar from "../searchBar";
import InterviewerList from "./interviewerList";
import { getPanel, makeAdmin, deleteUser } from "../../../actions/user";
import styles from "../../../styles";

class InterviewerBox extends React.Component {
  componentDidMount() {
    this.props.getPanel(this.props.teamId);
  }
  state = {
    spinning: false,
    search: "",
    toggle: false
  };
  updateState = (title, text) => this.setState({ [title]: text });
  refresh = async () => {
    await this.setState({ spinning: true });
    await this.props.getPanel(this.props.teamId);
    await this.setState({ spinning: false });
  };
  render() {
    const { store } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 2 }}>
            <SearchBar
              updateState={this.updateState}
              search={this.state.search}
              placeholder={
                this.state.toggle ? "Admin Interviewers" : "Interviewers"
              }
            />
          </View>
          <View style={{ flex: 1 }}>
            <View
              style={{
                position: "absolute",
                right: 30,
                bottom: 0
              }}
            >
              <ToggleSwitch
                isOn={this.state.toggle}
                onColor="steelblue"
                offColor="lightgrey"
                label="Admin "
                size="small"
                labelStyle={{ color: "steelblue", fontWeight: "100" }}
                onToggle={() => this.setState({ toggle: !this.state.toggle })}
              />
            </View>
          </View>
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.spinning}
              onRefresh={async () => this.refresh()}
              tintColor={"steelblue"}
            />
          }
        >
          <InterviewerList
            data={store.filter(
              interviewer =>
                interviewer.name
                  .toUpperCase()
                  .includes(this.state.search.toUpperCase()) &&
                interviewer.admin === this.state.toggle
            )}
            upgrade={this.props.makeAdmin}
            delete={this.props.deleteUser}
            teamId={this.props.teamId}
          />
        </ScrollView>
        <Modal
          style={styles.doneMessage}
          isOpen={this.props.message === "spinning"}
          position={"center"}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <ActivityIndicator size="large" color="steelblue" />
          </View>
        </Modal>
      </View>
    );
  }
}

function mapStatetoProps(state) {
  return {
    store: state.userData.interviewers,
    teamName: state.userData.teamName,
    teamId: state.userData.teamId,
    message: state.userData.message
  };
}

export default connect(
  mapStatetoProps,
  { getPanel, makeAdmin, deleteUser }
)(InterviewerBox);
