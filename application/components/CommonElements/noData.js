import React from "react";
import {View, Text} from "react-native";

const NoData = props => {
    return (
        <View style={{ flex: 1, marginBottom: 1000 }}>
            <Text
                style={{
                    color: "slategray",
                    fontWeight: "100",
                    fontSize: 22,
                    paddingLeft: 30,
                    paddingTop: 20
                }}
            >
                {props.text}
                    </Text>
        </View>
    )
}

export default NoData;