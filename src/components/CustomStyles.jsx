import React from "react";

export const CustomStyles = () => (
  <style>{`
    :root {
      --primary-color: #4f46e5;
      --secondary-color: #818cf8;
      --glass-light: rgba(255, 255, 255, 0.1);
      --glass-border-light: rgba(255, 255, 255, 0.15);
      --glass-dark: rgba(0, 0, 0, 0.2);
      --glass-border-dark: rgba(255, 255, 255, 0.08);
    }
    
    .glass {
      background: var(--glass-light);
      border: 1px solid var(--glass-border-light);
      backdrop-filter: blur(16px) saturate(180%);
      transition: background 0.3s ease, border 0.3s ease;
    }

    .dark .glass {
      background: var(--glass-dark);
      border: 1px solid var(--glass-border-dark);
    }

    .bg-grid {
      background-image: radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px);
      background-size: 32px 32px;
      background-position: -1px -1px;
    }
    
    .dark .bg-grid {
      background-image: radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px);
    }

    /* New: Animated Gradient Background for Hero Section or entire page */
    .bg-animated-gradient {
      background: linear-gradient(-45deg, #1e3a8a, #4338ca, #34d399, #10b981);
      background-size: 400% 400%;
      animation: gradientShift 15s ease infinite;
    }
    
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    /* Keyframe animations for subtle floating effect */
    @keyframes floatSlow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-18px); }
    }
    .float-slow { 
      animation: floatSlow 10s ease-in-out infinite; 
    }

    /* Creative shadow for a more 3D, elevated look */
    .footer-shadow {
      box-shadow: 0 -8px 20px -6px rgba(0, 0, 0, 0.15), 0 -4px 8px -2px rgba(0, 0, 0, 0.1);
      transition: box-shadow 0.3s ease;
    }
    .dark .footer-shadow {
      box-shadow: 0 -8px 20px -6px rgba(0, 0, 0, 0.25), 0 -4px 8px -2px rgba(0, 0, 0, 0.2);
    }

    /* Modern 3D Flip Card Effect */
    .flip-card {
      perspective: 1000px;
    }
    .flip-card-inner {
      transform-style: preserve-3d;
      transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1.2);
    }
    .flip-card-front, .flip-card-back {
      backface-visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit; /* Inherits the border radius from the parent flip card */
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: all 0.5s ease-in-out;
    }
    .flip-card-back {
      transform: rotateY(180deg);
    }
    .group:hover .flip-card-inner {
      transform: rotateY(180deg);
    }
  `}</style>
);