import React from "react";
import { View, Text } from "react-native";
import styles from "../../../styles";
import {Icon} from "../../CommonElements";

const Job = props => {
    return (
        <View style={styles.smallTag}>
            <Icon name="building" size="small"/>
            <Text style={{justifyContent: 'center', marginLeft: 5}}>{props.job}</Text>
        </View>
    );
};

export default Job;