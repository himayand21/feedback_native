import React from "react";
import { Text, View, TextInput } from "react-native";
import { connect } from "react-redux";

import styles from "../../styles";
import {updateFormState} from "../../actions/form";

const Experience = props => {
    formatExperience = () => {
        if(props.month  >= 12) {
            props.updateFormState("exp_year", (parseInt(props.year || 0) + Math.floor(parseInt(props.month) / 12))).toString();
            props.updateFormState("exp_month", (parseInt(props.month) % 12)).toString();
        }
    }
    changeText = async text => {
        await props.updateFormState("exp_month", text.replace(/[^0-9]/g, ""));
        await formatExperience();
    }
    return (
        <View style={{ flexDirection: "row", marginTop: 25 }}>
            <View style={{ ...styles.input, flex: 1, paddingRight: 10 }}>
                <Text style={styles.inputHeading}>{"EXPERIENCE"}</Text>
                <TextInput
                    placeholder={"Years"}
                    style={styles.inputText}
                    maxLength={2}
                    value={props.year.toString()}
                    onChangeText={text =>
                        props.updateFormState("exp_year", text.replace(/[^0-9]/g, ""))
                    }
                />
            </View>
            <View style={{ ...styles.input, flex: 1, paddingLeft: 10 }}>
                <Text />
                <TextInput
                    placeholder={"Months"}
                    style={styles.inputText}
                    maxLength={2}
                    value={props.month.toString()}
                    onChangeText={text => changeText(text)}
                />
            </View>
        </View>
    );
};
function mapStatetoProps(state) {
    return {
        year: state.form.exp_year,
        month: state.form.exp_month
    };
  }
  
export default connect(
    mapStatetoProps,
    {
      updateFormState,
    }
  )(Experience);
