import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { RoundedButton } from "../components/RoundedButton";
import { MyList } from "./MyList";
import { spacing } from "../utils/sizes";

export const MyInputFeature = () => {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="What do you need a reminder for?"
          onChangeText={(val) => {
            setText(val);
          }}
          style={{}}
        />
        <View style={styles.buttonContainer}>
          <RoundedButton
            title="+"
            size={40}
            onPress={() => console.log({ text })}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {},
  buttonContainer: {},
});
