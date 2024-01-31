import { memoItemProps } from "../types/types";

const memoData: memoItemProps[] = Array.from({ length: 36 }, (_, i) => {
  //   const photoNumber = Math.floor(Math.random() * 100);
  const url = `https://picsum.photos/id/${i + 111}/300/300`;

  return {
    value: i + 1,
    title: `Memo ${i + 1}`,
    url,
  };
});

export default memoData;
