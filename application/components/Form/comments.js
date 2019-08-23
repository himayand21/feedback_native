import React from "react";
import { connect } from "react-redux";

import { InputBox } from "../CommonElements";
import { updateFormState } from "../../actions/form";

const Comments = props => {
  return (
    <InputBox
      title={"comments"}
      placeholder={"Comments on the interview..."}
      input={props.comments}
      updateState={props.updateFormState}
    />
  );
};
function mapStatetoProps(state) {
  return {
    comments: state.form.comments
  };
}
export default connect(
  mapStatetoProps,
  {
    updateFormState
  }
)(Comments);
