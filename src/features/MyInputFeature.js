import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { RoundedButton } from "../components/RoundedButton";

export const MyInputFeature = ({ addReminder }) => {
  const [text, setText] = useState("");
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="What do you need a reminder for?"
            onChangeText={setText}
            style={{}}
          />
        </View>
        <View style={styles.buttonContainer}>
          <RoundedButton title="+" size={40} onPress={addReminder} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "top",
    alignItems: "center",
  },
  inputContainer: { flex: 1 },
  buttonContainer: {
    marginLeft: 5,
  },
});
