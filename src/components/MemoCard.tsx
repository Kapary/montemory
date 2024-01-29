import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

const MemoCard = (props: Props) => {
  return <View style={styles.card}>MemoCard</View>;
};

export default MemoCard;

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    // flexBasis: "50%",
    width: 20,
  },
});
