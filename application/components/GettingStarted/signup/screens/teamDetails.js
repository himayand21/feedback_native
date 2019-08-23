import React from "react";
import { View, ScrollView } from "react-native";
import { connect } from "react-redux";

import { Icon } from "../../../CommonElements";
import styles from "../../../../styles";
import Back from "../back";
import TeamForm from "../teamFormElements/teamForm";

import { resetSignUp } from "../../../../actions/signup";
import DoneMessage from "../../../Form/doneMessage";

const TeamDetails = props => {
  const { notification } = props;
  move = screen => props.navigation.navigate(screen);

  reset = () => {
    props.navigation.navigate('BasicDetails');
    props.navigation.navigate('login');
    props.resetSignUp();
  }
  return (
    <View>
      <ScrollView>
        <View style={{ ...styles.form, paddingHorizontal: 0 }}>
          <Back action={() => move("SignUpPage")} left={25} />
          <Icon type="FontAwesome" name="gears" />
          <TeamForm />
        </View>
      </ScrollView>
      <DoneMessage navigate={() => reset()} message={notification}/>
    </View>
  );
};

function mapStatetoProps(state) {
  return {
    notification: state.team.notification
  };
}
export default connect(
  mapStatetoProps,
  { resetSignUp }
)(TeamDetails);
