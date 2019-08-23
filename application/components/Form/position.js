import React from "react";
import { Select } from "../CommonElements";
import { connect } from "react-redux";

import { handleDesignationChange } from "../../actions/form";

const Position = props => {
  return (
    <Select
      title={"APPLYING FOR"}
      value={props.applyingFor}
      onChange={props.handleDesignationChange}
      items={props.options}
    />
  );
};
function mapStatetoProps(state) {
  return {
    applyingFor: state.form.applying_for,
    options: state.form.options
  };
}

export default connect(
  mapStatetoProps,
  {
    handleDesignationChange
  }
)(Position);
