import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";

import { InputBox, Icon } from "../../../CommonElements";
import styles from "../../../../styles";
import Skill from "./skill";

const Skills = props => {
  const { store } = props;
  const disabledFlag = !props.skill || store.data[props.index].skills.includes(props.skill)
  return (
    <View style={styles.center}>
      <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
        <View style={{ flex: 7 }}>
          <InputBox
            marginTop={10}
            key={"teamDetails-" + "skill"}
            title={"skill"}
            input={props.skill}
            updateState={props.updateState}
            placeholder={"Add skills for "+props.designation+"..."}
          />
        </View>
        <TouchableOpacity
          disabled={disabledFlag}
          style={{ ...styles.sortButton, borderWidth: 0, marginTop: 15, opacity: disabledFlag ? 0.5 : 1 }}
          onPress={props.onPress}
        >
          <Icon size="small" name="plus-circle" color="steelblue" />
        </TouchableOpacity>
      </View>
      {store.data[props.index].skills.length ? (
        <View style={{...styles.center, marginTop: 15}}>
          {store.data[props.index].skills.map((skill, index) => (
            <Skill
              key={"team-" + index}
              skill={skill}
              index={index}
              designationIndex={props.index}
            />
          ))}
          {props.error ? <Text style={{color: "red", fontSize: 12, paddingTop: 20}}>{props.error}</Text> : null}
        </View>
      ) : (
          <Text
            style={{
              color: "slategray",
              fontWeight: "100",
              fontSize: 16,
              paddingTop: 20
            }}
          >
            No Skills Added.
        </Text>
        )}
    </View>
  );
};

function mapStatetoProps(state) {
  return {
    store: state.team
  };
}
export default connect(
  mapStatetoProps,
  {}
)(Skills);
