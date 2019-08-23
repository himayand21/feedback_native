import React from "react";
import { View, Text, Platform } from "react-native";

import { Header, Icon } from "native-base";
import styles from "../../styles";

const TopBar = props => {
  return (
    <Header style={{ backgroundColor: "steelblue", borderBottomWidth: 0, height: Platform.OS === 'ios' ? 60 : 85, elevation: 0 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          paddingHorizontal: 10,
          paddingTop: Platform.OS === 'ios' ? 10 : 35
        }}
      >
        <Icon
          style={{ color: "white" }}
          name={props.iconName}
          onPress={props.action}
        />
        <View>
          <Text style={styles.userName}>{`${props.name} `}</Text>
        </View>
      </View>
    </Header>
  );
};

export default TopBar;
