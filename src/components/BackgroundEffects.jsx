// src/components/BackgroundEffects.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export const BackgroundEffects = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <motion.div
      aria-hidden
      className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),transparent_60%)] blur-3xl"
      animate={{ scale: [1, 1.1, 1], x: [0, -15, 0], y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 12 }}
    />
    <motion.div
      aria-hidden
      className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35),transparent_60%)] blur-3xl"
      animate={{ scale: [1, 1.08, 1], x: [0, 10, 0], y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 14 }}
    />
  </div>
);