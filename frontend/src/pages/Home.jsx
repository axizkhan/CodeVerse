import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const languages = [
  { name: 'Python', neon: 'from-yellow-400 to-blue-400', path: '/tutorials/python' },
  { name: 'C', neon: 'from-yellow-300 to-yellow-500', path: '/tutorials/c' },
  { name: 'C++', neon: 'from-white to-blue-500', path: '/tutorials/Cpp' },
  { name: 'Java', neon: 'from-orange-400 to-red-500', path: '/tutorials/java' },
  { name: 'HTML', neon: 'from-orange-400 to-yellow-300', path: '/tutorials/html' },
  { name: 'CSS', neon: 'from-blue-400 to-cyan-300', path: '/tutorials/css' },
];


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[140vh] bg-[#0D0D0D] text-white flex flex-col items-center justify-start pt-32 px-4 overflow-hidden">
      {/* Neon Particle Background */}
       <div className="neon-blobs pointer-events-none absolute top-0 left-0 w-full h-[60vh] z-0" />

      {/* Hero Section */}
      <div className="z-10 text-center mb-20">
        <h1 className="text-6xl md:text-7xl font-bold text-cyan-400 animate-fade-in drop-shadow-[0_0_25px_#00FFFF]">
          Code<span className="text-white">Verse</span>
        </h1>
        <p className="mt-6 text-2xl text-gray-300 animate-fade-in-slow">
          Learn to Code in Minutes
        </p>
        <p className="mt-3 max-w-xl mx-auto text-base text-gray-400 animate-fade-in-slow2">
          Access in-depth tutorials on various programming languages.
          Start learning today and enhance your coding skills.
        </p>

        {/* Get Started Button */}
        <button
          onClick={() => navigate('/tutorials')}
          className="mt-10 px-8 py-4 text-lg font-semibold rounded-full relative neon-button"
        >
          Get Started
        </button>
      </div>

      {/* Languages Section */}
      <div className="z-10 mt-10">
        <h2 className="text-3xl font-semibold text-cyan-400 mb-8 text-center">
          Popular Languages
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {languages.map((lang, i) => (
            <button
              key={i}
              onClick={() => navigate(lang.path)}
              className={`py-4 rounded-lg text-white text-md font-medium bg-[#1a1a1a] border border-[#333] hover:border-transparent transition duration-300
        hover:bg-gradient-to-r ${lang.neon} hover:scale-105 shadow-neon`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
