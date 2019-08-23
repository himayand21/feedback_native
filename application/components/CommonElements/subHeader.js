import React from "react";
import { Text, View } from "react-native";
import styles from "../../styles";

const SubHeader = props => {
  return (
    <View style={props.nameTag ? styles.nameTagView : props.searchTag ? styles.searchTagView : styles.subHeaderView}>
      <Text style={styles.subHeader}>{props.text}</Text>
    </View>
  );
};

export default SubHeader;