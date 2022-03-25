import React from "react";
import { ActivityIndicator } from "react-native";

import Colors from "../../constants/Colors";

const Loading = (props) => {
  return <ActivityIndicator size="small" color={Colors.primary} />;
};

export default Loading;
