import React from 'react';
import { Twitter, Facebook, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0D0D0D] text-gray-300 py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left: Copyright */}
        <div className="text-sm mb-2 md:mb-0">
          © 2025 <span className="text-white font-medium">CodeVerse</span>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-4 text-cyan-400">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <Twitter size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <Facebook size={20} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
