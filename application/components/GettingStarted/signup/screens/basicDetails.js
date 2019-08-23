import React from "react";
import { View, ScrollView } from "react-native";
import { connect } from "react-redux";

import { Icon, InputBox, Warning, Button, Title } from "../../../CommonElements";
import { formParams } from "../../../../constants"
import styles from "../../../../styles";
import { updateStateSignUp, searchName } from "../../../../actions/signup";

const BasicDetails = props => {
  const { signupParams } = formParams;
  const { store } = props;
  proceed = (screen) => props.navigation.navigate(screen);
  updateAndSearch = async(title, text) => {
    await props.updateStateSignUp(title,text);
    await props.searchName(text);
  }
  return (
    <View>
      <ScrollView>
      <View style={{...styles.form, paddingHorizontal: 25}}>
          <Icon name="user-plus" />
          {signupParams.map((signupParam, index) => (
            <InputBox
              key={"signupForm-" + signupParam.title}
              title={signupParam.title}
              placeholder={signupParam.placeholder}
              input={store[signupParam.title]}
              updateState={index === 0 ? updateAndSearch : props.updateStateSignUp}
            />
          ))}
          <Warning key={"signup-warning"} message={store.message} />
          <Button
            disabled={
              store.message.length > 0 ||
              !store.name ||
              !store.email ||
              !store.password
            }
            buttonAction={() => proceed('SecurityQuestions')}
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
  { updateStateSignUp, searchName }
)(BasicDetails);
