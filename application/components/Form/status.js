import React from "react";
import { connect } from "react-redux";

import { updateFormState } from "../../actions/form";
import { Select } from "../CommonElements";

const Status = props => {
  options = [
    { value: "Selected", label: "Selected" },
    { value: "Rejected", label: "Rejected" },
    { value: "On hold", label: "On hold" }
  ];
  return (
    <Select
      title={"STATUS"}
      value={props.status}
      onChange={value => props.updateFormState("status", value)}
      items={options}
    />
  );
};
function mapStatetoProps(state) {
  return {
    status: state.form.status
  };
}
export default connect(
  mapStatetoProps,
  {
    updateFormState
  }
)(Status);
