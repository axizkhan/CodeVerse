import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const languages = [
  {
    name: "Python",
    neon: "from-yellow-400 to-blue-400",
    path: "/tutorials/python",
  },
  { name: "C", neon: "from-yellow-300 to-yellow-500", path: "/tutorials/c" },
  { name: "C++", neon: "from-white to-blue-500", path: "/tutorials/Cpp" },
  { name: "Java", neon: "from-orange-400 to-red-500", path: "/tutorials/java" },
  {
    name: "HTML",
    neon: "from-orange-400 to-yellow-300",
    path: "/tutorials/html",
  },
  { name: "CSS", neon: "from-blue-400 to-cyan-300", path: "/tutorials/css" },
];

const features = [
  {
    title: "Interactive Playgrounds",
    desc: "Code directly in your browser with our built-in IDE. No setup required.",
    icon: "💻",
  },
  {
    title: "Real-world Projects",
    desc: "Build portfolio-ready applications that get you hired at top tech firms.",
    icon: "🚀",
  },
  {
    title: "Community Support",
    desc: "Join thousands of learners in our Discord to collaborate and share.",
    icon: "👥",
  },
  {
    title: "Verified Certificates",
    desc: "Get industry-recognized proof of your skills upon completion.",
    icon: "📜",
  },
];

const Home = () => {
  const AboutPage = () => {
    // Animation variant for sections
    const fadeInVariant = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };
  };

  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-background px-4 pt-32 text-text-primary transition-colors duration-300">
      {/* Neon/Ambient Background Blobs */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[60vh] w-full -translate-x-1/2 opacity-20 blur-[120px] z-0 bg-gradient-to-b from-primary to-transparent" />

      {/* Hero Section */}
      <div className="z-10 animate-fadeIn text-center  h-[60vh] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center h-full justify-center">
          <h1 className="text-6xl font-extrabold tracking-tight md:text-8xl drop-shadow-[0_0_20px_rgba(var(--primary),0.4)]">
            <span className="text-primary">Code</span>
            <span className="text-text-primary">Verse</span>
          </h1>

          <p className="mt-8 text-2xl font-medium text-text-secondary md:text-3xl">
            Learn to Code in Minutes
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
            Access in-depth tutorials on various programming languages. Start
            learning today and enhance your coding skills with modern design.
          </p>

          {/* Get Started Button */}
          <button
            onClick={() => navigate("/tutorials")}
            className="group relative mt-12 overflow-hidden rounded-full bg-primary px-10 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-primary-hover hover:shadow-primary/25">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>
        </div>
      </div>

      {/* {features section} */}

      <section className="relative z-10 flex h-screen w-full snap-start flex-col items-center justify-center px-4">
        <div className="mx-auto max-w-6xl w-full">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-4xl font-bold">Platform Features</h2>
            <p className="text-text-secondary mt-2">
              Tools designed to accelerate your growth.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="group flex items-start p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
                <div className="text-4xl mr-6">{f.icon}</div>
                <div>
                  <h4 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                    {f.title}
                  </h4>
                  <p className="text-text-secondary mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <div className="z-10 mt-10 w-full max-w-4xl animate-fadeIn [animation-delay:200ms] h-[50vh]">
        <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-text-primary">
          Popular <span className="text-secondary">Languages</span>
        </h2>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {languages.map((lang, i) => (
            <button
              key={i}
              onClick={() => navigate(lang.path)}
              className="group glass flex flex-col items-center justify-center rounded-card-lg border border-border p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-lg">
              <span className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors">
                {lang.name}
              </span>
              <div className="mt-2 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-12" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
