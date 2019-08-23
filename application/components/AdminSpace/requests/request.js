import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon as NativeIcon } from "native-base";
import { Icon, SubHeader } from "../../CommonElements";
import styles from "../../../styles";

const Request = props => {
    const { request } = props;
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
                <SubHeader searchTag={true} text={request.name} /></View>
            <View style={{ flexDirection: "row", paddingVertical: 5 }}>
                <NativeIcon
                    type={"Ionicons"}
                    name={"mail"}
                    style={{ color: "lightslategray", fontSize: 23, width: 20, marginRight: 10, textAlign: 'center' }} />
                <Text style={{ justifyContent: 'center', paddingTop: 3 }}>{request.email}</Text>
            </View>
            <View style={{ flexDirection: "row", paddingVertical: 5 }}>
                <Icon name="exclamation-triangle" size="small" />
                <Text style={{ justifyContent: 'center' }}>{"Pending for your approval"}</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
                <TouchableOpacity
                    style={styles.acceptButton}
                    onPress={() => props.approve(request._id, props.teamId)}
                >
                    <Text style={{ color: "white" }}>{'Approve'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.declineButton}
                    onPress={() => props.decline(request._id, props.teamId)}
                >
                    <Text style={{ color: "grey" }}>{'Decline'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Request;