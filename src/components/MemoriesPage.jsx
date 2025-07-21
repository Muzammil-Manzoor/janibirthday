// MemoriesPage.jsx
import React from 'react';
import '../styles/MemoriesPage.css';
import music from '../music/hearty.mp3';
import placeholder from '../images/j1.jpeg';

const memoryData = [
  {
    title: 'When I First Saw You ✨',
    description: 'You were sitting on that sofa... I still remember your calmness, your eyes, your soul.',
  },
  {
    title: 'Our Road Trip 🚘',
    description: 'That Faisalabad drive, just us and the road. It was simple and beautiful.',
  },
  {
    title: 'That Hard Day 💔',
    description: 'When life was tough, you still smiled. I gave you my shoes so you’d feel safe. That moment lives with me.',
  },
  {
    title: 'Our Night Calls 🌙📞',
    description: 'From one topic to another, hours flew by. And I still miss you the second we hang up.',
  },
  {
    title: 'You = Home 🏡',
    description: 'Wherever you are, that’s where I want to be. You are my comfort, my peace.',
  },
  {
    title: 'You = Home 🏡',
    description: 'Wherever you are, that’s where I want to be. You are my comfort, my peace.',
  },{
    title: 'You = Home 🏡',
    description: 'Wherever you are, that’s where I want to be. You are my comfort, my peace.',
  },{
    title: 'You = Home 🏡',
    description: 'Wherever you are, that’s where I want to be. You are my comfort, my peace.',
  },
];

const reasons = [
  "You always listen to me, even when I don’t know how to speak.",
  "Your smile makes even my worst days feel better.",
  "You understand me in ways no one else ever could.",
  "You bring peace to my chaos.",
  "You make me feel safe and loved without saying a word.",
  "Every little thing you do becomes my favorite memory.",
  "You believe in me more than I believe in myself.",
  "With you, everything feels like magic.",
];

const MemoriesPage = () => {
  return (
    <div>

    
    <div className="memories-container">
      <audio autoPlay loop>
        <source src={music} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <div className="hero-content">
        <h1>🎂 Happy Birthday Jani 🎂</h1>
        <p className="sub-text">Here’s a journey through our sweetest memories 💖</p>
        <img src={placeholder} alt="Romantic" className="hero-img" />
        <div className="heart-line">💘 💓 💖 💝 💗 💞 💕</div>
      </div>

      <div className="memory-section">
        <h2 className="section-title">🌙 Our Magical Moments 🌙</h2>
        <div className="memory-grid">
          {memoryData.map((item, index) => (
            <div className="fancy-card" key={index}>
              <div className="fancy-card-inner">
                <div className="fancy-card-front">
                  <h3>{item.title}</h3>
                </div>
                <div className="fancy-card-back">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="reasons-section">
        <h2 className="section-title">💘 Why I Love You 💘</h2>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div className="heart-box" key={index}>
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default MemoriesPage;
