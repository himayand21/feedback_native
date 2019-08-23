import { createStackNavigator } from "react-navigation";

import { Home, Profile } from '../Screens';

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: () => ({
                gesturesEnabled: false,
                header: null
            })
        },
        Profile: {
            screen: Profile,
            navigationOptions: () => ({
                gesturesEnabled: false,
                header: null
            })
        }
    }
)

export default HomeStack;