import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { myColors } from "../utils/colors";
import { myFontSizes, spacing } from "../utils/sizes";

export const MyList = ({ notes }) => {
  if (!notes || !notes.length)
    return <Text style={styles.title}> No notes for this session </Text>;
  const renderItem = ({ item }) => <Text style={styles.text}>- {item}</Text>;
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: myColors.white,
          fontSize: myFontSizes.xl,
          marginBottom: spacing.sm,
        }}
      >
        Current Notes Taken
      </Text>
      <FlatList data={notes} renderItem={renderItem}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 25,
    justifyContent: "center",
    backgroundColor: myColors.lightblue,
  },
  text: {
    color: myColors.white,
    fontSize: myFontSizes.lg,
  },
});
