import { useState } from "react";

interface UseMemoryDataReturnProps {
  isGameFinished: boolean;
  revealedPairsIds: string[];
}

const useMemoryData = () => {
  const [isGameFinished, setIsGameFinished] = useState(false);

  const [data, setData] = useState<string[]>([]);

  const addData = (newData: string) => {
    setData([...data, newData]);
  };

  return { data, addData };
};
