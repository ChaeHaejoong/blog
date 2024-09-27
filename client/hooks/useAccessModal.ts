import { useEffect, useState } from "react";

export default function useAccessModal() {

  const [isModalOn, setIsModalOn] = useState<boolean>(false);
  const [keySequence, setKeySequence] = useState<string[]>([]);
  const secretKeyCombination = ["ArrowUp", "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowDown", " "];

  const handleKeyDown = (e: KeyboardEvent) => {
    if (secretKeyCombination.includes(e.key)) {
      setKeySequence(prev => {
        const updatedSequence = [...prev, e.key];

        if (updatedSequence.length > secretKeyCombination.length) {
          updatedSequence.shift();
        }

        if (updatedSequence.length === secretKeyCombination.length && 
            updatedSequence.every((value, index) => value === secretKeyCombination[index])) {
          setIsModalOn(true);
        }

        return updatedSequence;
      });
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, []);

  return { isModalOn, setIsModalOn };
}