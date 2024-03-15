import * as React from "react";
import { View } from "react-native";
import { Checkbox } from "react-native-paper";

export const MyCheckBox = ({
  itemName = "none",
  status = "indeterminate",
  handlePress,
}) => {
  return (
    <View style={{ width: 250 }}>
      <Checkbox.Item
        label={itemName}
        status={status}
        color="yellow"
        uncheckedColor="black"
        onPress={handlePress}
      />
    </View>
  );
};
