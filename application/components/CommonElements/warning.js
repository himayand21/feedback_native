import React from "react";
import { Text, View } from "react-native";
import styles from "../../styles";

const Warning = props => {
  return (
    <View style={styles.warningView}>
      <Text style={styles.warning}>{props.message}</Text>
    </View>
  );
};

export default Warning;
