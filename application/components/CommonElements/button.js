import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../../styles";

const Button = props => {
  return (
    <View style={styles.buttonView}>
      <TouchableOpacity
        disabled={props.disabled}
        onPress={props.buttonAction}
        style={props.disabled ? {...styles.submitButton, opacity: 0.5} : styles.submitButton}
      >
        <Text style={styles.submitButtonText}> {props.name} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
