import React from "react";
import { View, Text } from "react-native";
import styles from "../../../styles";
import { Icon } from "../../CommonElements";
import { Left, Right } from "native-base";

const Interview = props => {
    return (
        <View style={{ ...styles.smallTag, borderBottomWidth: 0, paddingBottom: 10 }}>
            <Left>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="user-tie" size="small"/>
                    <Text style={{ justifyContent: 'center', marginLeft: 5 }}>{props.interviewer}</Text>
                </View>
            </Left>
            <Right>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="calendar" size="small"/>
                    <Text style={{ justifyContent: 'center', marginLeft: 5 }}>{props.interviewDate}</Text>
                </View>
            </Right>
        </View>
    );
};

export default Interview;