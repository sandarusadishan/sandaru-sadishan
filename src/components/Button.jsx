// src/components/Button.jsx
import React, { useMemo } from "react";
import { motion } from "framer-motion";

export const Button = ({ children, asChild, variant = "solid", size = "md", className = "", ...props }) => {
  const classes = useMemo(() => {
    // Base styles for all buttons
    const base = "inline-flex items-center justify-center rounded-full transition focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden";

    // Styles for each variant
    const variants = {
      solid: "bg-white text-slate-900 hover:opacity-90",
      glass: "glass text-white hover:bg-white/10",
      ghost: "text-white/80 hover:text-white hover:bg-white/10",
      hero: "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg",
      icon: "glass",
      'hero-glow': 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg before:content-[""] before:absolute before:inset-0 before:bg-white/5 before:scale-x-[2] before:rotate-[20deg] before:transition-all before:duration-500 hover:before:rotate-[30deg] hover:before:scale-x-[-2] hover:before:bg-white/20',
    };

    // Styles for each size
    const sizes = { 
      sm: "px-4 py-2 text-sm", 
      md: "px-5 py-2.5", 
      lg: "px-7 py-3 text-lg", 
      xl: "px-8 py-4 text-lg" 
    };

    return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  }, [variant, size, className]);

  const Comp = asChild ? motion.a : motion.button;
  return (
    <Comp
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95, transition: { type: "spring", stiffness: 400, damping: 10 } }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {variant === 'hero' && (
        <motion.span
          className="absolute inset-0 rounded-full blur-xl bg-blue-500 opacity-0 group-hover:opacity-60 transition-opacity duration-300"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      )}
    </Comp>
  );
};