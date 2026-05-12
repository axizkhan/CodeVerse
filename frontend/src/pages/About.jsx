import React from "react";
import "./About.css";

const developers = [
  {
    name: "Aziz Bohra",
    role: "Full Stack Developer",
    description:
      "Aziz is a dynamic full stack developer who thrives on solving complex challenges with smart solutions. Whether it’s building intuitive frontend designs or architecting robust server-side logic, Aziz brings clarity, speed, and innovation to the table. His enthusiasm and dedication are the backbone of every successful build.",
    img: "/aziz.jpeg", // Place this in public
  },
];

export default function About() {
  return (
    <div className="relative min-h-screen bg-background text-text-primary transition-colors duration-300">
      <div className="neon-blobs pointer-events-none absolute inset-0 z-0 opacity-20" />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-32 pb-16 text-center animate-fadeIn">
        <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
          <span className="text-primary">Master</span>
          <span className="text-text-primary"> The Verse</span>
        </h1>
        <p className="mt-4 max-w-2xl px-4 text-xl font-medium text-text-secondary md:text-2xl">
          We’re on a mission to provide affordable, high-quality tech education.
          From your first line of code to mastering cloud architecture.
        </p>
        <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-secondary mx-auto" />
      </div>

      {/* Core Platform Values - Added Section */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-xl border border-border bg-card/50">
            <h3 className="text-primary font-bold text-lg">
              Diverse Tech Stack
            </h3>
            <p className="text-sm text-text-secondary mt-2">
              Access 50+ languages and frameworks updated weekly.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card/50">
            <h3 className="text-primary font-bold text-lg">
              Pro Subscriptions
            </h3>
            <p className="text-sm text-text-secondary mt-2">
              Unlock certificates and project-based learning files.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card/50">
            <h3 className="text-primary font-bold text-lg">Expert Mentors</h3>
            <p className="text-sm text-text-secondary mt-2">
              Learn from developers who actually build for a living.
            </p>
          </div>
        </div>
      </div>

      {/* Developer Cards Section */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-24">
        <h2 className="text-3xl font-bold mb-10  text-center md:text-left">
          The Instructors
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {developers.map((dev, idx) => (
            <div
              key={idx}
              className="card glass group flex flex-col items-center p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 md:flex-row md:items-start md:space-x-8">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 rounded-card-lg bg-gradient-to-tr from-primary to-secondary opacity-0 blur transition duration-500 group-hover:opacity-40" />
                <img
                  src={dev.img}
                  alt={dev.name}
                  className="relative h-32 w-32 rounded-card-lg border-2 border-border object-cover shadow-lg grayscale transition duration-500 group-hover:grayscale-0"
                />
              </div>

              <div className="mt-6 text-center md:mt-0 md:text-left">
                <h2 className="text-2xl font-bold tracking-tight text-text-primary group-hover:text-primary transition-colors">
                  {dev.name}
                </h2>
                <p className="text-md font-semibold tracking-wide text-secondary uppercase">
                  {dev.role}
                </p>
                <p className="mt-4 leading-relaxed text-text-secondary">
                  {dev.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
