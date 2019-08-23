import React from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { Icon as NativeIcon } from "native-base";
import { connect } from "react-redux";
import { DrawerItems } from "react-navigation";

const SideDrawer = props => {
    if (!props.admin) {
        const items = [...props.items];
        items.splice(2, 2);
        props = { ...props, items };
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
            <NativeIcon type="FontAwesome" name="commenting" style={{ fontSize: 80, color: "steelblue" }}/>
                <Text style={{ color: 'steelblue', fontSize: 22, fontWeight: '100', marginTop: 20 }}>{'feedback '}</Text>
            </View>
            <ScrollView>
                <DrawerItems {...props} />
            </ScrollView>
        </SafeAreaView>
    )
}

function mapStatetoProps(state) {
    return {
        admin: state.userData.admin
    };
}

export default connect(
    mapStatetoProps,
    {}
)(SideDrawer);