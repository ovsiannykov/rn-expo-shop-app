import React from "react";
import { TouchableOpacity, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../constants/Colors";

const HeaderButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.cartButton}
      onPress={() => navigation.navigate("CartScreen")}
    >
      <MaterialCommunityIcons
        name="cart"
        size={28}
        color={Platform.OS === "android" ? "white" : Colors.primary}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cartButton: {
    marginRight: 10,
  },
});

export default HeaderButton;
