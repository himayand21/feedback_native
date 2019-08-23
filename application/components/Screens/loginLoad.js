import React, { Component } from "react";
import { ActivityIndicator, View, Text, AsyncStorage } from "react-native";
import { Icon as NativeIcon } from "native-base";
import { connect } from "react-redux";

import { resetForm } from "../../actions/form";
import { submitAndVerify } from "../../actions/user";
import styles from "../../styles";

class LoginLoad extends Component {
    componentDidMount() {
        const { store } = this.props;
        this.login(store.name, store.email, store.password);
    }
    login = async (storeName, storeEmail, storePassword) => {
        const name = await AsyncStorage.getItem('name');
        const email = await AsyncStorage.getItem('email');
        const password = await AsyncStorage.getItem('password');
        if (name !== null && email !== null && password !== null) await this.props.submitAndVerify(name, email, password);
        else if (storeName && storeEmail && storePassword) await this.props.submitAndVerify(storeName, storeEmail, storePassword);
        else {
            await this.props.navigation.navigate('Tabs');
        }
    }
    _storeData = async (name, email, password) => {
        await AsyncStorage.setItem('name', name);
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('password', password);
    };
    componentDidUpdate() {
        const { store } = this.props;
        if (store.authorized === true) {
            this.props.navigation.navigate('Drawer');
            this._storeData(store.name, store.email, store.password);
        }
        else this.props.navigation.navigate('Tabs');
    }
    render() {
        return (
            <View style={styles.loader}>
                <View style={styles.loadingLogo}>
                    <NativeIcon type="FontAwesome" name="commenting" style={{ fontSize: 80, color: "white" }} />
                    <Text style={styles.loadingText}>{'feedback '}</Text>
                </View>
                <View style={styles.spinner}>
                    <ActivityIndicator size="large" color="#ffffff" />
                </View>
            </View>
        )
    }
}

function mapStatetoProps(state) {
    return {
        store: state.userData
    };
}
export default connect(
    mapStatetoProps,
    { resetForm, submitAndVerify }
)(LoginLoad);