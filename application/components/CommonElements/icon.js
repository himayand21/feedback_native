import React from "react";
import { Icon as NativeIcon } from "native-base";
import styles from "../../styles";

const Icon = props => {
  return <NativeIcon
    type={props.type || "FontAwesome5"}
    name={props.name}
    style={props.size === "small" ? { ...styles.smallIcon, color: props.color || "lightslategray" } : styles.icons} />
};

export default Icon;
