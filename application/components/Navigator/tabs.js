import React from "react";
import { createMaterialTopTabNavigator, createStackNavigator } from "react-navigation";

import SignupWidgets from "./signUpWidgets";
import Login from "../GettingStarted/login";

const Tabs = createMaterialTopTabNavigator(
    {
        login: {
            screen: props => <Login {...props} />
        },
        signup: {
            screen: SignupWidgets
        }
    },
    {
        tabBarPosition: 'top',
        tabBarOptions: {
            tabStyle: {
                alignContent: 'flex-start',
                height: 50,
            },
            indicatorStyle: {
                height: 2,
                backgroundColor: 'white'
            },
            style: {
                backgroundColor: 'steelblue'
            }
        },
        animationEnabled: true
    }
);

const StackWrapper = createStackNavigator (
    {
        tabs: {
            screen: Tabs,
            navigationOptions: () => ({
                gesturesEnabled: false,
                title: 'feedback ',
                headerStyle: {backgroundColor: 'steelblue', borderBottomWidth: 0, elevation: 0, width: '100%'},
                headerTitleStyle: {color: 'white', fontWeight: "100", fontSize: 28, textAlign: 'center'}
            })
        }
    }
)

export default StackWrapper;