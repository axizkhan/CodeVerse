import React from "react";
import { motion } from "framer-motion";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const TutorialCard = ({ name, description, trend, logo, onClick }) => {
  console.log(name);
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.02, translateY: -5 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="card glass group cursor-pointer p-8 transition-all hover:border-primary/40 hover:shadow-lg">
      <div className="flex items-center mb-6">
        <div className="p-3 rounded-card-sm bg-surface-elevated border border-border group-hover:border-primary transition-colors mr-4">
          <img
            src={`${backendUrl}${logo}`}
            alt={`${name} icon`}
            className="w-10 h-10 object-contain"
          />
        </div>
        <h2 className="text-2xl font-bold text-text-primary group-hover:text-primary transition-colors">
          {name}
        </h2>
      </div>

      <p className="text-base text-text-secondary mb-8 leading-relaxed line-clamp-3">
        {description}
      </p>

      <div className="space-y-3">
        <div className="text-xs uppercase tracking-widest font-bold text-text-muted flex justify-between items-center">
          <span>Popularity Trend</span>
          <span className="text-primary">{trend}%</span>
        </div>

        {/* Progress Bar using Theme Tokens */}
        <div className="w-full bg-border-light dark:bg-border rounded-full h-1.5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${trend}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
          />
        </div>
      </div>

      {/* Subtle indicator of interactivity */}
      <div className="mt-6 flex items-center text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        VIEW TUTORIAL
        <svg
          className="ml-1 w-3 h-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default TutorialCard;
