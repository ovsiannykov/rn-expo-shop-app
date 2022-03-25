import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Errorr = () => {
  const image = require("../../assets/image/oops.png");

  return (
    <View>
      <Image style={styles.image} source={image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginBottom: 40,
  },
});

export default Errorr;
