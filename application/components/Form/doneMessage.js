import React from "react";
import { View, ActivityIndicator } from "react-native";
import Modal from "react-native-modalbox";
import { Icon, Button } from "../CommonElements";

import styles from "../../styles";

const DoneMessage = props => {
  return (
    <Modal
      style={styles.doneMessage}
      isOpen={props.message === "done" || props.message === "started"}
      position={"center"}
      onClosed={props.navigate}
    >
      <View style={{ justifyContent: "center" }}>
        {props.message === "started" ? (
          <View
            style={{
              padding: 20,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <ActivityIndicator size="large" color="steelblue" />
          </View>
        ) : props.message === "done" ? (
          <View
            style={{
              padding: 20,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon name="check-circle" />
            <Button
              disabled={false}
              buttonAction={props.navigate}
              name="Done"
            />
          </View>
        ) : null}
      </View>
    </Modal>
  );
};
export default DoneMessage;
