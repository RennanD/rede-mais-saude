import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./screens/Login";
import Home from "./screens/Home";
import Profile from "./screens/Profile";

export default createAppContainer(
  createSwitchNavigator({
    Login,
    App: createStackNavigator(
      {
        Home,
        Profile
      },
      {
        defaultNavigationOptions: {
          headerStyle: {
            backgroundColor: "#be2223",
            height: 120
          },
          headerTitle: false,
          headerTintColor: "#fff"
        }
      }
    )
  })
);
