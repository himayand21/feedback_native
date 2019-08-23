import React from "react";
import { BasicDetails, SecurityQuestions, SignUpPage, TeamDetails } from "../GettingStarted/signup";
import { createStackNavigator } from "react-navigation";

const SignupWidgets = createStackNavigator(
    {
        BasicDetails: {
            screen: props => <BasicDetails {...props} />,
            navigationOptions: () => ({
                gesturesEnabled: false,
                header: null
            })
        },
        SecurityQuestions: {
            screen: props => <SecurityQuestions {...props} />,
            navigationOptions: () => ({
                gesturesEnabled: false,
                header: null
            })
        },
        SignUpPage: {
            screen: props => <SignUpPage {...props} />,
            navigationOptions: () => ({
                gesturesEnabled: false,
                header: null
            })
        },
        TeamDetails: {
            screen: props => <TeamDetails {...props} />,
            navigationOptions: () => ({
                gesturesEnabled: false,
                header: null
            })
        }
    }, {
        animationEnabled: true,
        initialRouteName: 'BasicDetails'
    }
)
export default SignupWidgets;