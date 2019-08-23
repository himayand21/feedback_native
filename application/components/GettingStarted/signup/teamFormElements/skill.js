import React from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import { connect } from "react-redux";

import { removeSkill, editSkill } from "../../../../actions/team";
import { Icon } from "../../../CommonElements";
import styles from "../../../../styles";

const Skill = props => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: 15,
        borderLeftColor: "lightgrey",
        borderLeftWidth: 0.5,
        marginLeft: 20,
      }}
    >
      <View
        style={{
          flex: 3,
          textAlign: "left",
          marginTop: 10,
          paddingBottom: 7
        }}
      >
        <TextInput
          style={{ fontWeight: "400", fontSize: 13 }}
          value={props.skill}
          onChangeText={text =>
            props.editSkill(props.designationIndex, text, props.index)
          }
        />
      </View>
      <TouchableOpacity
        onPress={() => props.removeSkill(props.designationIndex, props.index)}
        style={{ ...styles.sortButton, marginTop: 0, borderWidth: 0 }}
      >
        <Icon size="small" color="grey" name="times" />
      </TouchableOpacity>
    </View>
  );
};

function mapStatetoProps() {
  return {};
}
export default connect(
  mapStatetoProps,
  { removeSkill, editSkill }
)(Skill);
