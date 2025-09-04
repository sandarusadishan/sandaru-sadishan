// src/hooks/useTypewriter.js
import { useEffect, useState } from "react";

export const useTypewriter = (words, speed = 70, pause = 1200) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];

    if (!deleting && subIndex === word.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(() => setSubIndex((v) => v + (deleting ? -1 : 1)), deleting ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [deleting, subIndex, index, words, speed, pause]);

  return words[index % words.length].slice(0, subIndex);
};