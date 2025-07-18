import React from 'react';
import './About.css';

const developers = [
  {
    name: 'Sarah Doe',
    role: 'Coding Wizard',
    description:
      "Sarah is a coding wizard whose spells somehow work... most of the time. When she's not busy debugging, she's performing interpretive dance to the sweet songs of compiler errors.",
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'John Smith',
    role: 'Code Master',
    description:
      'John is a master of writing code that no one understands, not even himself. In his spare time, he enjoys long walks on the beach and laughing at his own bugs.',
    img: 'https://randomuser.me/api/portraits/men/46.jpg',
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
  <p>Developers that built this website</p>
</div>


      <div className="dev-cards">
        {developers.map((dev, idx) => (
          <div className={`dev-card ${idx % 2 === 0 ? 'left-img' : 'right-img'}`} key={idx}>
            <img src={dev.img} alt={dev.name} className="dev-img" />
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
