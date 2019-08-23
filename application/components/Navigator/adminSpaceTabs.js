import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from "react-navigation";
import { RequestBox, InterviewerBox } from "../AdminSpace";
import { TopBar } from "../CommonElements";
import React from "react";

const AdminSpaceTabs = createMaterialTopTabNavigator(
  {
    Requests: {
      screen: RequestBox
    },
    Interviewers: {
      screen: InterviewerBox
    }
  },
  {
    tabBarPosition: "top",
    tabBarOptions: {
      tabStyle: {
        alignContent: "flex-start",
        height: 50
      },
      indicatorStyle: {
        height: 2,
        backgroundColor: "white"
      },
      style: {
        backgroundColor: "steelblue"
      }
    },
    animationEnabled: true
  }
);

const AdminSpaceWrapper = createStackNavigator({
  adminSpaceTabs: {
    screen: AdminSpaceTabs,
    navigationOptions: ({ navigation }) => ({
      headerStyle: { borderBottomWidth: 0, elevation: 0 },
      header: (
        <TopBar
          name={"Admin Space"}
          iconName="menu"
          action={() => navigation.openDrawer()}
        />
      )
    })
  }
});

export default AdminSpaceWrapper;
