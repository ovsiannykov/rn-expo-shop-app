import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigation from "./DrawerNavigation";
import AuthNavigation from "./AuthNavigation";

const AppNavigator = () => {
  const isAuth = useSelector((state) => state.auth.token);
  console.log(isAuth);

  if (isAuth) {
    return (
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    );
  }
};

export default AppNavigator;
