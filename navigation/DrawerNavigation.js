import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Platform } from "react-native";
import { useDispatch } from "react-redux";
import {
  DrawerItem,
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

import Colors from "../constants/Colors";
import OrdersScreen from "../screens/shop/OrdersScreen";
import ShopNavigator from "./ShopNavigator";
import UserNavigation from "./UserNavigation";
import HeaderMenuButton from "../components/UI/HeaderMenuButton";
import * as authActions from "../store/actions/auth";
import LogoutButton from "../components/UI/LogoutButton";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label={() => <LogoutButton />}
        onPress={() => {
          dispatch(authActions.logout());
        }}
      />
    </DrawerContentScrollView>
  );
}

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="ShopNavigator"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
        },
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
        },
        headerBackTitleStyle: {
          fontFamily: "open-sans",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
        headerLeft: () => <HeaderMenuButton />,
        drawerActiveTintColor: Colors.primary,
      }}
    >
      <Drawer.Screen
        name="ShopNavigator"
        component={ShopNavigator}
        options={{
          title: "Shop",
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={{
          title: "My Orders",
        }}
      />
      <Drawer.Screen
        name="UserNavigation"
        component={UserNavigation}
        options={{
          title: "My Products",
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
