import React from "react";
import { TouchableOpacity, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../constants/Colors";

const HeaderMenuButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.cartButton}
      onPress={() => navigation.openDrawer()}
    >
      <Ionicons
        name="ios-menu"
        size={34}
        color={Platform.OS === "android" ? "white" : Colors.primary}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cartButton: {
    marginLeft: 10,
  },
});

export default HeaderMenuButton;
