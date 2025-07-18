import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TutorialCard from '../components/TutorialCard/TutorialCard.jsx';
import LanguageContext from '../LanguageContext.jsx';
import './Home.css';

const Tutorials = () => {
  const { languages, loading } = useContext(LanguageContext);
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white py-12 overflow-hidden">
      {/* Neon Particle Background */}
      <div className="neon-blobs pointer-events-none absolute top-0 left-0 w-full h-[60vh] z-0" />
      <h1 className="text-4xl text-center text-cyan-400 font-bold mb-12">Tutorials</h1>

      <div className="relative z-10 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4">
        {loading ? (
          <p className="text-center text-cyan-400 text-lg col-span-full">Loading tutorials...</p>
        ) : languages.length === 0 ? (
          <p className="text-center text-gray-400 col-span-full">No tutorials available at the moment.</p>
        ) : (
          languages.map((lang) => (
            <TutorialCard
              key={lang._id}
              name={lang.name}
              description={lang.description}
              trend={lang.trend}
              logo={lang.logo || '/default-logo.png'} // Fallback image
              onClick={() => navigate(`/tutorials/${lang.name.toLowerCase()}`)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Tutorials;
