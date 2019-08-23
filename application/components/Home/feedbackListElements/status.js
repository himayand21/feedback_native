import React from "react";
import { View, Text } from "react-native";
import styles from "../../../styles";
import {Icon} from "../../CommonElements";

const Status = props => {
    return (
        <View style={{...styles.smallTag}}>
            <Icon
            name={props.status === 'Selected' ? "check" : props.status === 'Rejected' ? 'times' : 'pause'}
            size="small"
            />
            <Text style={{justifyContent: 'center', marginLeft: 5}}>{props.status}</Text>
        </View>
    );
};

export default Status;