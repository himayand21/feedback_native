import React from "react";
import { View, Text } from "react-native";
import styles from "../../../styles";
import {Icon} from "../../CommonElements";

const Experience = props => {
    return (
        <View style={{...styles.smallTag}}>
            <Icon name="book-reader" size="small"/>
            <Text style={{justifyContent: 'center', marginLeft: 5}}>{props.year} years {props.month > 0 ? props.month + ' months' : null}</Text>
        </View>
    );
};

export default Experience;