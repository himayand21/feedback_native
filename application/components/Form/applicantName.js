import React from "react";
import { connect } from "react-redux";

import { InputBox } from "../CommonElements";
import { updateFormState, checkApplicant } from "../../actions/form";

const ApplicantName = props => {
  updateName = async(title, text) => {
    await props.updateFormState(title, text);
    await props.checkApplicant(text);
  }
  return (
    <InputBox
      title={"applicant_name"}
      placeholder={"Enter applicant's name"}
      input={props.applicantName}
      updateState={updateName}
      marginTop={25}
    />
  );
};
function mapStatetoProps(state) {
  return {
    applicantName: state.form.applicant_name
  };
}
export default connect(
  mapStatetoProps,
  {
    updateFormState,
    checkApplicant
  }
)(ApplicantName);
