import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { myColors } from "../utils/colors";
import { myFontSizes, spacing } from "../utils/sizes";
import { MyCheckBox } from "../components/MyCheckBox";

export const MyList = ({ notes }) => {
  if (!notes || !notes.length)
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.listHeader}>Current Notes</Text>
          <Text style={{ color: myColors.maroon, marginTop: myFontSizes.sm }}>
            No notes for this session
          </Text>
        </View>
      </>
    );
  //const [status, setStatus] = useState("indeterminate");

  const renderItem = ({ item }) => (
    <MyCheckBox itemName={item} handlePress={() => console.log("ck")} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.listHeader}>Notes for session</Text>
      <FlatList data={notes} renderItem={renderItem}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 25,
    padding: spacing.sm,
    justifyContent: "center",
  },
  listHeader: {
    color: myColors.white,
    fontSize: myFontSizes.head,
    marginBottom: spacing.sm,
  },
  text: {
    color: myColors.white,
    fontSize: myFontSizes.listItems,
    marginLeft: spacing.sm,
    margin: spacing.itemSpace,
    backgroundColor: myColors.lightgreen,
    borderWidth: myFontSizes.itemBorder,
  },
});
