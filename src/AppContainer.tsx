import React, { memo, useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import MemoCard from "./components/MemoCard";
import memoData from "./utils/memoData";

type Props = {};

const ORIENTATION_PORTRAIT = "PORTRAIT";
const ORIENTATION_LANDSCAPE = "LANDSCAPE";

const AppContainer = (props: Props) => {
  const { height } = Dimensions.get("window");

  const trimmedMemoData = memoData.slice(0, 12);
  const shuffledMemoData = [...trimmedMemoData, ...trimmedMemoData].sort(
    () => Math.random() - 0.5
  );

  // TODO - calculate it by the level
  // TODO - make items fit full screen?
  const columnsCount = 6;

  const [orientation, setOrientation] = useState(ORIENTATION_LANDSCAPE);

  const determineAndSetOrientation = () => {
    let width = Dimensions.get("window").width;
    let height = Dimensions.get("window").height;

    if (width < height) {
      setOrientation(ORIENTATION_PORTRAIT);
    } else {
      setOrientation(ORIENTATION_LANDSCAPE);
    }
  };

  useEffect(() => {
    determineAndSetOrientation();
    Dimensions.addEventListener("change", determineAndSetOrientation);
  }, []);

  return (
    <View
      style={styles.cardsContainer}
      // contentContainerStyle={{ flex: 1 }}
    >
      <FlatList
        key={orientation}
        contentContainerStyle={{
          flex: 1,
          // alignItems: "stretch",
          // height,
          justifyContent: "space-between",
          // rowGap: 16,
        }}
        style={{ flex: 1, rowGap: 16 }}
        numColumns={orientation === ORIENTATION_LANDSCAPE ? columnsCount : 4}
        data={shuffledMemoData}
        columnWrapperStyle={{ justifyContent: "space-between", gap: 16 }}
        renderItem={(memo) => (
          <MemoCard
            numberOfCardsInColumn={columnsCount}
            numberOfCardsInRow={shuffledMemoData.length / columnsCount}
            onTouch={() => console.log("touched")}
            item={memo.item}
          />
        )}
      />
    </View>
  );
};

export default AppContainer;

const styles = StyleSheet.create({
  // container: {
  //   display: "flex",
  //   flexGrow: 1,
  //   backgroundColor: "#fff",
  //   // alignItems: "center",
  //   // justifyContent: "center",
  //   padding: 16,
  //   width: "100%",
  //   height: "100%",
  // },
  cardsContainer: {
    // width: "100%",
    // display: "flex",
    // flexWrap: "wrap",
    // flexDirection: "column",
    // justifyContent: "space-between",
    // alignItems: "stretch",
    flex: 1,
    padding: 32,
  },
});
