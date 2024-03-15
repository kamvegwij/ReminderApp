import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { myColors } from "../utils/colors";

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}
    >
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) => ({
  radius: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: "center",
    justifyContent: "center",
    borderColor: myColors.lightgreen,
    borderWidth: 2,
  },
  text: { color: myColors.lightgreen, fontSize: size / 2 },
});
