// // File: src/components/TutorialCard.jsx
// import React from 'react';
// import { motion } from 'framer-motion';

// const TutorialCard = ({ name, description, trend, icon, onClick }) => {
//     return (
//         <motion.div
//             onClick={onClick}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="cursor-pointer bg-[#121212]/60 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-cyan-500/20 hover:shadow-cyan-500/40 transition-all text-white"
//         >
//             <div className="flex items-center mb-6">
//                 <img
//                     src={`http://localhost:8080${icon}`}
//                     alt={`${name} icon`}
//                     className="w-12 h-12 mr-4 object-contain bg-transparent rounded"
//                     style={{ backgroundColor: 'transparent' }}
//                 />

//                 <h2 className="text-2xl font-bold text-cyan-400">{name}</h2>
//             </div>
//             <p className="text-base text-gray-300 mb-6">{description}</p>
//             <div className="text-sm text-gray-400 flex justify-between items-center">
//                 <span>Trends</span>
//                 <span>{trend}%</span>
//             </div>
//             <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
//                 <div
//                     className="bg-cyan-400 h-2 rounded-full"
//                     style={{ width: `${trend}%` }}
//                 ></div>
//             </div>
//         </motion.div>
//     );
// };

// export default TutorialCard;


import React from 'react';
import { motion } from 'framer-motion';
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const TutorialCard = ({ name, description, trend, logo, onClick }) => {
    // console.log(name);
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="cursor-pointer bg-[#121212]/60 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-cyan-500/20 hover:shadow-cyan-500/40 transition-all text-white"
    >
      <div className="flex items-center mb-6">
        <img
          src={`${backendUrl}${logo}`} // Updated path
          alt={`${name} icon`}
          className="w-12 h-12 mr-4 object-contain bg-transparent rounded"
          style={{ backgroundColor: 'transparent' }}
        />
        <h2 className="text-2xl font-bold text-cyan-400">{name}</h2>
      </div>
      <p className="text-base text-gray-300 mb-6">{description}</p>
      <div className="text-sm text-gray-400 flex justify-between items-center">
        <span>Trends</span>
        <span>{trend}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
        <div
          className="bg-cyan-400 h-2 rounded-full"
          style={{ width: `${trend}%` }}
        ></div>
      </div>
    </motion.div>
  );
};

export default TutorialCard;
