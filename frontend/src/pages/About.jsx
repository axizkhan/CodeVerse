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
    <div className="about-page">
      <div className="neon-bg"></div>

      <div className="about-hero">
        <h1>
          <span className="text-cyan-400">Code</span>
          <span className="text-white">Verse</span>
        </h1>
        <p>Meet the minds behind this website</p>
      </div>

      <div className="dev-cards">
        {developers.map((dev, idx) => (
          <div
            className={`dev-card ${idx % 2 === 0 ? "left-img" : "right-img"}`}
            key={idx}>
            <img
              src={dev.img}
              alt={dev.name}
              className="dev-img"
            />
            <div className="dev-info">
              <h2 className="dev-name">{dev.name}</h2>
              <p className="dev-role">{dev.role}</p>
              <p className="dev-desc">{dev.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
