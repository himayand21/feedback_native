import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { connect } from "react-redux";

import { Icon, Select, SubHeader, Button, InputBox, Warning } from "../../../CommonElements";
import styles from "../../../../styles";

import {DoneMessage} from "../../../Form";
import { getTeamNames, handleTeamChange, signUp, resetSignUp } from "../../../../actions/signup";
import { updateTeamState } from "../../../../actions/team";

import Back from '../back';

class SignUpPage extends Component {
  componentDidMount() {
    this.props.getTeamNames();
    this.props.updateTeamState("data", []);
  }
  reset = () => {
    this.props.navigation.navigate('BasicDetails');
    this.props.navigation.navigate('login');
    this.props.resetSignUp();
  }
  update = (title, text, teamNames) => {
    const teams = teamNames.map(teamName => teamName.label);
    if(text && teams.includes(text))
    this.props.updateTeamState("message", text + ' already exists');
    else
    this.props.updateTeamState("message","");
    this.props.updateTeamState(title, text);
  }
  move = screen => this.props.navigation.navigate(screen);
  render() {
    const { store, team } = this.props;
    return (
      <View>
        <ScrollView>
          <View style={{ ...styles.form, paddingHorizontal: 25 }}>
            <Back action={() => this.move("SecurityQuestions")} />
            <Icon name="users" />
            <SubHeader text="Pick a panel" />
            <Select
              title={"SELECT PANEL"}
              value={store.team}
              onChange={this.props.handleTeamChange}
              items={store.teamNames}
            />
            <Button
              disabled={!store.team}
              buttonAction={() => this.props.signUp(store)}
              name="Sign up"
            />
            <Text
              style={{
                fontSize: 24,
                color: "steelblue",
                fontWeight: "100",
                marginTop: 30
              }}
            >
              {"--OR--"}
            </Text>
            <SubHeader text="Make your own" />
            <InputBox
            key={"signupForm-" + "teamDetails"}
            title={"teamName"}
            input={team.teamName}
            updateState={(title, text) => this.update(title, text, store.teamNames)}
            />
            <Warning message={team.message}/>
            <Button
              disabled={!team.teamName || team.message.length > 0}
              buttonAction={() => this.move("TeamDetails")}
              name="Continue"
            />
          </View>
        </ScrollView>
        <DoneMessage navigate={() => this.reset()} message={store.message}/>
      </View>
    );
  }
}

function mapStatetoProps(state) {
  return {
    store: state.signUp,
    team: state.team
  };
}
export default connect(
  mapStatetoProps,
  { getTeamNames, handleTeamChange, signUp, resetSignUp, updateTeamState }
)(SignUpPage);
