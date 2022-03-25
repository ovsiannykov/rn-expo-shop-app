import React from "react";
import { TouchableOpacity, StyleSheet, Platform } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../constants/Colors";

const HeaderAddButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.cartButton}
      onPress={() => navigation.navigate("CreateProductScreen")}
    >
      <FontAwesome
        name="plus"
        size={26}
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

export default HeaderAddButton;
