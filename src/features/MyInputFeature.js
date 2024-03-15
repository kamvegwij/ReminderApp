import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { View, StyleSheet, Text } from "react-native";
import { RoundedButton } from "../components/RoundedButton";
import { MyList } from "./MyList";
import { spacing } from "../utils/sizes";
import { myColors } from "../utils/colors";

export const MyInputFeature = () => {
  const [text, setText] = useState("");
  const [item, setItem] = useState("none");

  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="What do you need a reminder for?"
            onChangeText={(val) => {
              setText(val);
            }}
            style={{}}
          />
        </View>
        <View style={styles.buttonContainer}>
          <RoundedButton title="+" size={40} onPress={() => setItem(text)} />
        </View>
      </View>
      <View style={styles.itemList}>
        <Text>{item}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    marginTop: spacing.xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: { flex: 1, marginLeft: spacing.lg },
  buttonContainer: { margin: spacing.lg },
  itemList: { alignItems: "center" },
});
