import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MemoCard from "./components/MemoCard";

type Props = {};

const AppContainer = (props: Props) => {
  const memoData = [...Array(10).keys()];

  return (
    <View style={styles.container}>
      <Text>AppContainer</Text>
      <View style={styles.cardsContainer}>
        {memoData.map((memo) => (
          <MemoCard key={memo} />
        ))}
      </View>
    </View>
  );
};

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    padding: 16,
    width: "100%",
  },
  cardsContainer: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
