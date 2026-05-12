import React from "react";
import { Twitter, Facebook, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-surface py-8 transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 md:flex-row">
        {/* Left: Copyright */}
        <div className="mb-4 text-sm text-text-secondary md:mb-0">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-text-primary">CodeVerse</span>.
          All rights reserved.
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center space-x-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors duration-200 hover:text-primary">
            <Twitter size={20} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors duration-200 hover:text-primary">
            <Facebook size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors duration-200 hover:text-primary">
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
