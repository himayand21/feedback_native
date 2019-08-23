import React from "react";
import { Icon } from "native-base";
import { createDrawerNavigator } from "react-navigation";

import { Form, Settings } from '../Screens';
import SideDrawer from "./sideDrawer";
import HomeStack from "./homeStack";
import AdminSpaceWrapper from "./adminSpaceTabs";
import Tabs from "./tabs";

const customDrawerComponents = (props) => {
    return (
        <SideDrawer {...props} />
    )
}

const Drawer = createDrawerNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: () => ({
                drawerLabel: "Home ",
                drawerIcon: ({ tintColor }) => (
                    <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
                )
            })
        },
        Form: {
            screen: Form,
            navigationOptions: () => ({
                drawerLabel: "Form ",
                drawerIcon: ({ tintColor }) => (
                    <Icon type="FontAwesome" name="wpforms" style={{ fontSize: 24, color: tintColor }} />
                )
            })
        },
        AdminSpace: {
            screen: AdminSpaceWrapper,
            navigationOptions: () => ({
                drawerLabel: "Admin Space ",
                drawerIcon: ({ tintColor }) => (
                    <Icon type="FontAwesome" name="key" style={{ fontSize: 24, color: tintColor }} />
                )
            })
        },
        Settings: {
            screen: Settings,
            navigationOptions: () => ({
                drawerLabel: "Settings ",
                drawerIcon: ({ tintColor }) => (
                    <Icon type="FontAwesome" name="gears" style={{ fontSize: 24, color: tintColor }} />
                )
            })
        },
        LogOut: {
            screen: Tabs,
            navigationOptions: () => ({
                drawerLabel: "Log Out ",
                drawerIcon: ({ tintColor }) => (
                    <Icon type="Ionicons" name="log-out" style={{ fontSize: 24, color: tintColor }} />
                )
            })
        },
    }, {
        contentComponent: customDrawerComponents,
        contentOptions: {
            activeTintColor: 'white',
            activeBackgroundColor: 'steelblue',
            inactiveTintColor: 'steelblue',
            inactiveBackgroundColor: 'white',
            labelStyle: {
                fontSize: 16,
                fontWeight: '100'
            }
        },
    }
)

export default Drawer;