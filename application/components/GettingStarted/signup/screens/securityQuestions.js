import React from "react";
import { View, ScrollView } from "react-native";
import { connect } from "react-redux";

import { SECURITY_Q } from "../../../../constants";
import { Icon, InputBox, Select, Button, Warning } from "../../../CommonElements";
import styles from "../../../../styles";
import { updateStateSignUp, selectQuestion } from "../../../../actions/signup";
import Back from '../back';

const SecurityQuestions = props => {
  const { store } = props;
  move = screen => props.navigation.navigate(screen);
  return (
    <View>
      <ScrollView>
      <View style={{...styles.form, paddingHorizontal: 25}}>
          <Back action ={() => move("BasicDetails")}/>
          <Icon name="user-shield" />
          <Select
            title={"SECURITY QUESTION"}
            value={store.selectedOption}
            onChange={props.selectQuestion}
            items={SECURITY_Q}
          />
          <InputBox
            key={"signupForm-" + "securityAnswer"}
            title={"answer"}
            input={store.answer}
            updateState={props.updateStateSignUp}
          />
          <Warning message="" />
          <Button
            disabled={!store.answer || !store.selectedOption}
            buttonAction={() => move("SignUpPage")}
            name="Continue"
          />
        </View>
      </ScrollView>
    </View>
  );
};

function mapStatetoProps(state) {
  return {
    store: state.signUp
  };
}
export default connect(
  mapStatetoProps,
  { updateStateSignUp, selectQuestion }
)(SecurityQuestions);
