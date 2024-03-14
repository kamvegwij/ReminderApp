import { Text, SafeAreaView, View, StyleSheet, Platform } from "react-native";
import { spacing, myFontSizes } from "./src/utils/sizes";
import { myColors } from "./src/utils/colors";
import { TopBar } from "./src/components/TopNavBar";

//This app simply asks you to set a reminder
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <>
        <TopBar />
      </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.darkgreen,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
