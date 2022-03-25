import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";

import EditProductScreen from "../screens/user/EditProductScreen";
import Colors from "../constants/Colors";
import HeaderMenuButton from "../components/UI/HeaderMenuButton";
import UserProductScreen from "../screens/user/UserProductScreen";
import HeaderAddButton from "../components/UI/HeaderAddButton";
import CreateProductScreen from "../screens/user/CreateProductScreen";

const Stack = createStackNavigator();

const UserNavigation = () => {
  return (
    <Stack.Navigator>
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
          name="UserProductScreen"
          component={UserProductScreen}
          options={{
            headerLeft: () => <HeaderMenuButton />,
            title: "My Products",
            headerRight: () => <HeaderAddButton />,
          }}
        />
        <Stack.Screen
          name="EditProductScreen"
          component={EditProductScreen}
          options={{
            title: "Edit Product",
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="CreateProductScreen"
          component={CreateProductScreen}
          options={{
            title: "Create Product",
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default UserNavigation;
