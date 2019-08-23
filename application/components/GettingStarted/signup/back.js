import React from "react";
import { View } from "react-native";
import { Icon } from "native-base";

const Back = props => {
  return (
    <View style={{ width: "100%" }}>
      <Icon
        style={{ width: "10%", color: "steelblue", position: "absolute", top: 10, left: props.left || 0 }}
        name="arrow-back"
        type="Ionicons"
        onPress={props.action}
      />
    </View>
  );
};

export default Back;
