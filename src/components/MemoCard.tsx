import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { memoItemProps } from "../types/types";

interface MemoCardProps {
  numberOfCardsInRow: number;
  numberOfCardsInColumn: number;
  onTouch?: () => void;
  item?: memoItemProps;
}

const MemoCard = ({
  numberOfCardsInRow,
  numberOfCardsInColumn,
  onTouch,
  item,
}: MemoCardProps) => {
  const cardWidth = Math.floor(100 / numberOfCardsInRow);
  // const cardHeight = 100 / numberOfCardsInColumn;

  const styles = StyleSheet.create({
    card: {
      // flex: 1,
      backgroundColor: "blue",
      alignItems: "center",
      justifyContent: "center",
      // paddingBottom: "50%",
      // flexBasis: "50%",
      width: `${cardWidth}%`,
      flex: 1,
      position: "relative",
      overflow: "hidden",

      // height: `${cardHeight}%`,
    },
    cardInner: {
      paddingBottom: "100%",
      backgroundColor: "beige",
      position: "relative",
      width: "100%",
    },
    cardContent: {
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      objectFit: "cover",
    },
  });

  return (
    <Pressable onPress={onTouch} style={styles.card} disabled>
      <div style={styles.cardInner}>
        <div style={styles.cardContent}>
          <img src={item.url} style={{ width: "100%", height: "100%" }} />
          {/* {item.title} */}
        </div>
      </div>
    </Pressable>
  );
};

export default MemoCard;
