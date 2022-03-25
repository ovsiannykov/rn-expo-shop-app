import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Colors from "../constants/Colors";
import AuthScreen from "../screens/user/AuthScreen";
import StartupScreen from "../screens/StartupScreen";

const Stack = createStackNavigator();

const AuthNavigation = ({ route }) => {
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="StartupScreen">
      <Stack.Group
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primary : "white",
          },
          headerTitleStyle: {
            fontFamily: "open-sans-bold",
          },
          headerBackTitleStyle: {
            fontFamily: "open-sans",
          },
          headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
        }}
      >
        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StartupScreen"
          component={StartupScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default AuthNavigation;
