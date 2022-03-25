import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import Colors from "../constants/Colors";
import HeaderButton from "../components/UI/HeaderButton";
import CartScreen from "../screens/shop/CartScreen";
import HeaderMenuButton from "../components/UI/HeaderMenuButton";


const Stack = createStackNavigator();

const ShopNavigator = ({ route }) => {
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
          name="ProductsOverviewScreen"
          component={ProductsOverviewScreen}
          options={{
            headerRight: () => <HeaderButton />,
            headerLeft: () => <HeaderMenuButton />,
            title: "Shop App",
          }}
        />
        <Stack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
          options={({ route }) => ({
            headerTitle: route.params.productTitle,
            headerBackTitleVisible: false,
          })}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{ title: "Cart" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default ShopNavigator;
