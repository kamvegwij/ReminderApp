import { Text, SafeAreaView, View, StyleSheet, Platform } from "react-native";
import { spacing, myFontSizes } from "./src/utils/sizes";
import { myColors } from "./src/utils/colors";
import { MyInputFeature } from "./src/features/MyInputFeature";

//This app simply asks you to set a reminder
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <>
        <View style={styles.headerContainer}>
          <Text style={styles.text}>Pocket Assistant</Text>
        </View>
        <MyInputFeature />
      </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.lightblue,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerContainer: {
    alignItems: "center",
    marginTop: spacing.lg,
  },
  text: {
    fontSize: myFontSizes.xxl,
    fontWeight: "bold",
    color: myColors.white,
  },
});
