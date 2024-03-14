import React, { useState } from "react";
import { Appbar } from "react-native-paper";
import { View, StyleSheet, Platform } from "react-native";
import { myColors } from "../utils/colors";
import { MyInputFeature } from "../features/MyInputFeature";

export const TopBar = () => {
  const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";
  return (
    <>
      <View style={styles.container}>
        <Appbar.Header theme={{ colors: { primary: myColors.lightgreen } }}>
          <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
          <Appbar.Content title="Study Guide" />
          <Appbar.Action icon="label" onPress={() => {}} />
        </Appbar.Header>
      </View>
      <View>
        <MyInputFeature />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});
