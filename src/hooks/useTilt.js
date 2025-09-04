// src/hooks/useTilt.js
import { useEffect, useRef } from "react";

export const useTilt = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handle = (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `rotateY(${px * 10}deg) rotateX(${py * -10}deg)`;
    };
    const reset = () => (el.style.transform = "rotateY(0deg) rotateX(0deg)");
    el.addEventListener("mousemove", handle);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", handle);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);
  return ref;
};