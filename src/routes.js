import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./screens/Login";
import Home from "./screens/Home";

export default createAppContainer(
  createSwitchNavigator({
    Login,
    App: createStackNavigator(
      {
        Home
      },
      {
        defaultNavigationOptions: {
          headerStyle: {
            backgroundColor: "#be2223",
            height: 120,
            alignItems: "center"
          },
          headerTitle: false,
          headerTintColor: "#fff"
        }
      }
    )
  })
);
