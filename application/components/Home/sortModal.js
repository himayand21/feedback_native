import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "native-base";

import { SubHeader } from "../CommonElements";
import styles from "../../styles";
import modalTable from "./modalTable";

const SortModal = props => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%"
      }}
    >
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          justifyContent: "center",
          alignItems: "center",
          flex: 1
        }}
      >
        {Object.keys(modalTable).map((row, rowIndex) => (
          <View key={"row-" + rowIndex} style={{ flex: 1, width: "100%" }}>
            <SubHeader searchTag={true} text={modalTable[row].label} />
            <View style={{ width: "100%", flexDirection: "row" }}>
              {Object.keys(modalTable[row].data).map((column, columnIndex) => (
                <TouchableOpacity
                  key={"column-" + columnIndex}
                  style={styles.filterBox}
                  onPress={() => {
                    column === "interviewer_name" && props.admin === false ? null :
                      row === "filter" ?
                        props.toggleState(row, column) :
                        props.changeState(row, column);
                  }}
                >
                  <Icon
                    style={{
                      color: props[row] === column ? "steelblue" : "lightgray"
                    }}
                    name={column === "interviewer_name" && props.admin === false ? "user-times" : modalTable[row].data[column].icon}
                    type={modalTable[row].data[column].type}
                  />
                  <Text
                    style={{ marginTop: 10, fontWeight: "100", color: props[row] === column ? "steelblue" : "lightgray" }}
                  >
                    {`${modalTable[row].data[column].label} `}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
export default SortModal;
