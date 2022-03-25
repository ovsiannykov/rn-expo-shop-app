import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

const LogoutButton = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <SimpleLineIcons name="logout" size={18} color="gray" />
      <Text style={styles.text}>Logout</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "gray",
    fontSize: 15,
    fontWeight: "500",
    marginLeft: 10,
  },
});

export default LogoutButton;
