import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { View, StyleSheet, Text } from "react-native";
import { RoundedButton } from "../components/RoundedButton";
import { MyList } from "./MyList";
import { spacing } from "../utils/sizes";
import { myColors } from "../utils/colors";

export const MyInputFeature = () => {
  const [text, setText] = useState("");
  const [notes, setNotes] = useState(["Work", "Upskilling"]);

  const CaptureNote = () => {
    this.textInput.clear();
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            ref={(input) => {
              this.textInput = input;
            }}
            placeholder="Type in a note"
            onChangeText={setText}
            style={{}}
          />
        </View>
        <View style={styles.buttonContainer}>
          <RoundedButton title="+" size={40} onPress={CaptureNote} />
        </View>
      </View>
      <View style={styles.itemListContainer}>
        <MyList notes={notes} />
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
  itemListContainer: { flex: 0.5 },
});
