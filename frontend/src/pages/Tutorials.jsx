import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TutorialCard from "../components/TutorialCard/TutorialCard.jsx";
import LanguageContext from "../LanguageContext.jsx";

const Tutorials = () => {
  const { languages, loading } = useContext(LanguageContext);
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-background py-20 px-4 transition-colors duration-300">
      {/* The dynamic background blobs from your theme */}
      <div className="neon-blobs pointer-events-none absolute top-0 left-0 h-[70vh] w-full opacity-20 z-0" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary">
            Expert <span className="text-primary">Tutorials</span>
          </h1>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            Master the most in-demand technologies with our structured coding
            paths.
          </p>
        </div>

        <div className="relative z-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 col-span-full animate-pulse">
              <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-primary font-medium text-lg">
                Loading tutorials...
              </p>
            </div>
          ) : languages.length === 0 ? (
            <div className="glass card rounded-card-lg p-12 text-center col-span-full max-w-md mx-auto">
              <p className="text-text-muted text-lg">
                No tutorials available at the moment.
              </p>
            </div>
          ) : (
            languages.map((lang) => (
              <TutorialCard
                key={lang._id}
                name={lang.name}
                description={lang.description}
                trend={lang.trend}
                logo={lang.logo || "/default-logo.png"}
                onClick={() =>
                  navigate(`/tutorials/${lang.name.toLowerCase()}`)
                }
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
