import React from "react";
import { createSwitchNavigator } from "react-navigation";

import { LoginLoad } from '../Screens';
import StackWrapper from "./tabs";
import Drawer from "./drawer";

const Screens = createSwitchNavigator(
    {
        Tabs: {
            screen: StackWrapper,
            navigationOptions: () => ({
                header: null,
            })
        },
        LoginLoad: {
            screen: props => <LoginLoad {...props} />,
            navigationOptions: () => ({
                gesturesEnabled: false,
                header: null
            })
        },
        Drawer: {
            screen: Drawer,
            navigationOptions: () => ({
                gesturesEnabled: false,
                header: null
            })
        },
    }, {
        initialRouteName: 'LoginLoad'
    }
);

export default Screens;