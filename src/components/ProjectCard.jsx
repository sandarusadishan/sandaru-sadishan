/* eslint-disable no-unused-vars */
// src/components/ProjectCard.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Eye, X } from "lucide-react";
import { useTilt } from "../hooks/useTilt";
import { Button } from "./Button";

// Separate component for the full-screen image modal
const ImageModal = ({ src, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose} // Closes modal on background click
      >
        <motion.img
          src={src}
          alt="Full screen project preview"
          className="max-h-[90vh] max-w-[90vw] object-contain cursor-default"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking the image
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-red-400 transition-colors"
          aria-label="Close image preview"
        >
          <X size={32} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const ProjectCard = ({ project }) => {
  const ref = useTilt();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.div variants={fadeUp} className="group">
        <div ref={ref} className="[transform-style:preserve-3d] transition will-change-transform">
          <div className="glass rounded-2xl overflow-hidden border-slate-200 dark:border-white/10">
            {project.cover && (
              <div 
                className="relative overflow-hidden cursor-pointer"
                onClick={handleImageClick}
              >
                <img
                  src={project.cover}
                  alt={`${project.title} cover`}
                  className="h-40 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                
                {/* Animated Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/50 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Pop-up 'View' button with spring animation */}
                  <motion.div
                    className="px-6 py-3 bg-white/20 backdrop-blur-lg rounded-full text-white font-semibold flex items-center gap-2 border border-white/30"
                    initial={{ y: 20, opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Eye size={16} />
                    View Image
                  </motion.div>
                </motion.div>
              </div>
            )}
            
            <div className="p-5">
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-white/75">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags?.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full bg-slate-100/50 dark:bg-white/10 text-xs text-slate-800 dark:text-white/80 border border-slate-200 dark:border-white/10">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                {project.github && (
                  <Button variant="ghost" asChild>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github size={16} className="mr-1"/>Code
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button variant="ghost" asChild>
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <ExternalLink size={16} className="mr-1"/>Live
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Conditionally render the full-screen modal */}
      {isModalOpen && project.cover && (
        <ImageModal src={project.cover} onClose={closeModal} />
      )}
    </>
  );
};