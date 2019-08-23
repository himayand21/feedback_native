import React from "react";
import { View, Text } from "react-native";
import styles from "../../../styles";
import Request from "./request";

const RequestList = props => {
  return (
    <View>
      {props.data.length ? (
        <View
          style={{
            ...styles.form,
            paddingVertical: 0,
            paddingHorizontal: 0,
            marginTop: 10
          }}
        >
          {props.data.map((request, index) => (
            <Request
              key={"request" + index}
              request={request}
              index={index}
              length={props.length}
              approve={props.approve}
              decline={props.decline}
              teamId={props.teamId}
            />
          ))}
        </View>
      ) : (
        <Text
          style={{
            color: "slategray",
            fontWeight: "100",
            fontSize: 22,
            paddingLeft: 30,
            paddingTop: 20
          }}
        >
          {'No Requests found.'}
        </Text>
      )}
    </View>
  );
};

export default RequestList;
