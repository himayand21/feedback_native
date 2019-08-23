import React from "react";
import { View, ScrollView, AsyncStorage, BackHandler, Alert} from "react-native";
import { connect } from "react-redux";

import { updateState, submitAndVerify, resetState } from "../../actions/user";
import { formParams } from "../../constants";
import styles from "../../styles";

import { Icon, Button, InputBox, Warning, Title } from "../CommonElements";

class Login extends React.Component {
  componentDidMount() {
    AsyncStorage.setItem("name", "");
    AsyncStorage.setItem("email", "");
    AsyncStorage.setItem("password", "");
    this.props.resetState();
  }
  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backPressed);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
  }
  backPressed = () => {
    Alert.alert(
      "Exit App",
      "Do you want to exit?",
      [
        {
          text: "No",
          onPress: () => {},
          style: "cancel"
        },
        { text: "Yes", onPress: () => BackHandler.exitApp() }
      ],
      { cancelable: false }
    );
    return true;
  };
  login = () => {
    this.props.navigation.navigate("LoginLoad");
  };
  render() {
    const { loginParams } = formParams;
    const { store } = this.props;
    return (
      <View>
        <ScrollView>
          <View style={{ ...styles.form, paddingHorizontal: 25 }}>
            <Icon name="user-alt" />
            {loginParams.map(loginParam => (
              <InputBox
                key={"loginForm-" + loginParam.title}
                title={loginParam.title}
                placeholder={loginParam.placeholder}
                input={store[loginParam.title]}
                updateState={this.props.updateState}
              />
            ))}
            <Warning key={"login-warning"} message={store.message} />
            <Button
              disabled={!store.name || !store.email || !store.password}
              buttonAction={() => this.login()}
              name="Login"
            />
          </View>
        </ScrollView>
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
  { updateState, submitAndVerify, resetState }
)(Login);
