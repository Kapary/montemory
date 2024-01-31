import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppContainer from "./src/AppContainer";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
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
    width: "100%",
    height: "100%",
  },
});
