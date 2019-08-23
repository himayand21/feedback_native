import React from "react";
import { View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { Icon, InputBox, Button } from "../../../CommonElements";
import styles from "../../../../styles";
import { updateTeamState, addDesignation, submitTeam } from "../../../../actions/team";
import Designation from "./designation";

const TeamForm = props => {
  const { teamId } = props;
  const { store } = props;
  const disabledFlag = !store.designation || store.data.filter(data => data.designation === store.designation).length > 0;
  const error = store.data.filter(
    data =>
      data.error !== "" || data.skillError !== "" || data.skills.length === 0 || data.designation.length === 0
  );
  return (
    <View style={styles.center}>
      <View style={{ flexDirection: "row", paddingHorizontal: 25, paddingBottom: 15 }}>
        <View style={{ flex: 7 }}>
          <InputBox
            key={"teamDetails-" + "designation"}
            title={"designation"}
            input={store.designation}
            updateState={props.updateTeamState}
          />
        </View>
        <TouchableOpacity
          disabled={disabledFlag}
          style={{ ...styles.sortButton, borderWidth: 0, opacity: disabledFlag ? 0.5 : 1 }}
          onPress={props.addDesignation}
        >
          <Icon size="small" name="plus-circle" color="steelblue" />
        </TouchableOpacity>
      </View>
      {store.data.map((data, index) => (
        <Designation
          key={"teamDetails-desgn-" + index}
          index={index}
          data={data}
        />
      ))}
      <View style={{ width: "100%", paddingHorizontal: 25 }}>
        <Button
          disabled={error.length > 0 || store.data.length === 0}
          buttonAction={() => props.submitTeam(props.state)}
          name={teamId ? "Update Team" : "Sign team Up"}
        />
      </View>
    </View>
  );
};

function mapStatetoProps(state) {
  return {
    store: state.team,
    teamId: state.userData.teamId,
    state
  };
}
export default connect(
  mapStatetoProps,
  { updateTeamState, submitTeam, addDesignation }
)(TeamForm);
