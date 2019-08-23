import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { InputBox, SubHeader, Icon } from "../CommonElements";
import {addSkill} from "../../actions/form"

import styles from "../../styles";

class OtherSkills extends React.Component {
  state = {
    search_skills: ""
  };
  button = skill => {
    this.props.addSkill(skill);
  };
  render() {
    const { options } = this.props;
    const otherSkills = options.filter(option =>
      option.toUpperCase().includes(this.state.search_skills.toUpperCase())
    );
    return (
      <View style={{ width: "100%" }}>
        {options ? (
          <InputBox
            title={"search_skills"}
            placeholder={"Search skills here"}
            input={this.state.search_skills}
            updateState={(key, value) => this.setState({ [key]: value })}
            search={null}
          />
        ) : null}
        {this.state.search_skills ? (
          <View>
            <View style={{ marginBottom: 10 }}>
              <SubHeader text="Other Skills" />
            </View>
            {otherSkills.length ? (
              <View>
                {otherSkills.map((skill, index) => (
                  <View
                    style={{
                      flexDirection: "row",
                      width: "100%",
                      paddingVertical: 5
                    }}
                    key={"other-" + index}
                  >
                    <View style={{ flex: 5, justifyContent: "center" }}>
                      <Text>{skill}</Text>
                    </View>
                    <View style={{ flex: 1, alignContent: "flex-end" }}>
                      <TouchableOpacity
                        onPress={() => this.button(skill)}
                        style={{ ...styles.submitButton, paddingVertical: 3, paddingLeft: 5, backgroundColor: "white"}}
                      >
                        <Icon size="small" name="plus" color="steelblue"/>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </View>
            ) : (
                <Text
                  style={{
                    color: "slategray",
                    fontWeight: "100",
                    fontSize: 22
                  }}
                >
                  {"No Search Results"}
                </Text>
            )}
          </View>
        ) : null}
      </View>
    );
  }
}

function mapStatetoProps(state) {
  return {
    options: state.form.others
  };
}

export default connect(
  mapStatetoProps,
  {
    addSkill
  }
)(OtherSkills);