import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppContainer from "./src/AppContainer";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start worsking on your app!</Text>
      <StatusBar style="auto" />
      <AppContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
