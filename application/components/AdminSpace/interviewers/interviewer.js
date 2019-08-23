import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon as NativeIcon } from "native-base";
import { Icon, SubHeader } from "../../CommonElements";
import styles from "../../../styles";

const Interviewer = props => {
  const { interviewer } = props;
  return (
    <View
      style={{
        width: "100%",
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomWidth: props.index === props.length - 1 ? 0 : 0.5,
        borderBottomColor: "lightgrey"
      }}
    >
      <View style={{ paddingBottom: 10 }}>
        <SubHeader searchTag={true} text={interviewer.name} />
      </View>
      <View style={{ flexDirection: "row", paddingVertical: 5 }}>
        <NativeIcon
          type={"Ionicons"}
          name={"mail"}
          style={{
            color: "lightslategray",
            fontSize: 23,
            width: 20,
            marginRight: 10,
            textAlign: "center"
          }}
        />
        <Text style={{ justifyContent: "center", paddingTop: 3 }}>
          {interviewer.email}
        </Text>
      </View>
      <View style={{ flexDirection: "row", paddingVertical: 5 }}>
        <Icon
          name={interviewer.admin ? "key" : "lock"}
          size="small"
        />
        <Text style={{ justifyContent: "center", marginLeft: 5 }}>
          {interviewer.admin ? "Admin " : "Not an admin "}
        </Text>
      </View>
      {!interviewer.admin ? (
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity
            style={styles.acceptButton}
            onPress={() => props.upgrade(interviewer._id, props.teamId)}
          >
            <Text style={{ color: "white" }}>{'Upgrade '}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.declineButton}
            onPress={() => props.delete(interviewer._id, props.teamId)}
          >
            <Text style={{ color: "grey" }}>{'Remove '}</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default Interviewer;