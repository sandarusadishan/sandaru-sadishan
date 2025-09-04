/* eslint-disable no-unused-vars */
// src/components/SkillCard.jsx
import React, { useState } from 'react';
import { motion } from "framer-motion";

export const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative h-40"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flip-card-inner">
        {/* Front of the card */}
        <motion.div
          className="flip-card-front glass rounded-2xl p-5 flex flex-col items-center justify-center border-slate-200 dark:border-white/10"
          animate={{ rotateY: isHovered ? -180 : 0, opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src={skill.logo} alt={skill.name} className="w-12 h-12" />
          <span className="mt-3 font-medium text-slate-900 dark:text-white">{skill.name}</span>
        </motion.div>

        {/* Back of the card */}
        <motion.div
          className="flip-card-back glass rounded-2xl p-5 flex flex-col items-center justify-center border-slate-200 dark:border-white/10"
          animate={{ rotateY: isHovered ? 0 : 180, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-bold text-4xl bg-gradient-to-r from-indigo-500 to-sky-400 text-transparent bg-clip-text">
            {skill.level}%
          </span>
          <p className="mt-2 text-sm text-slate-600 dark:text-white/70 text-center">{skill.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};