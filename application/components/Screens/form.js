import React from "react";
import { View, ScrollView, } from "react-native";
import { connect } from "react-redux";

import {
  addSkill,
  submitForm,
  resetForm
} from "../../actions/form";
import { adminLogin, interviewerLogin } from "../../actions/user";
import { TopBar, Icon, Button, Warning } from "../CommonElements";

import styles from "../../styles";

import {
  DateOfInterview,
  ApplicantName,
  Experience,
  Position,
  Rating,
  OtherSkills,
  Comments,
  Status,
  DoneMessage
} from "../Form";

const navigate = async (props) => {
  const { userId, teamId, admin } = props.store.userData;
  if (admin) await props.adminLogin(teamId);
  else await props.interviewerLogin(userId);
  await props.navigation.navigate("Home");
  await props.resetForm();
};

const Form = props => {
  const { form } = props;
  const { store } = props;

  return (
    <View>
      <TopBar
        name="Feedback Form"
        iconName="menu"
        action={() => props.navigation.openDrawer()}
      />
      <ScrollView>
        <View style={{ ...styles.form, marginBottom: 100, marginTop: 20 }}>
          <Icon name="wpforms" />
          <ApplicantName />
          <DateOfInterview />
          <Experience />
          <Position />
          {form.applying_for ? (
            <View style={{ width: "100%" }}>
              <Rating />
              <OtherSkills />
            </View>
          ) : null}
          <Comments />
          <Status />
          <Warning
            key={"login-warning"}
            message={
              form.message === "done" || form.message === "started"
                ? ""
                : form.message
            }
          />
          <Button
            disabled={
              !form.applicant_name ||
              !form.exp_month ||
              !form.exp_year ||
              !form.applying_for ||
              !Object.keys(form.rating).length ||
              !form.status ||
              !form.comments || form.message.length !== 0
            }
            buttonAction={() => props.submitForm(store)}
            name={"Submit"}
          />
        </View>
      </ScrollView>
      <DoneMessage navigate={() => navigate(props)} message={form.message}/>
    </View>
  );
};
function mapStatetoProps(state) {
  return {
    form: state.form,
    store: state
  };
}

export default connect(
  mapStatetoProps,
  {
    addSkill,
    submitForm,
    adminLogin,
    interviewerLogin,
    resetForm
  }
)(Form);