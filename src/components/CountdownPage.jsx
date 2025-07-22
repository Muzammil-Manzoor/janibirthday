import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DateTime } from 'luxon';
import '../styles/CountdownPage.css';

const heartIcons = ['💖', '💘', '💓', '💗', '❤️'];

function CountdownPage() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({});
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    const birthday = DateTime.fromObject(
      { year: 2025, month: 7, day: 23, hour: 0, minute: 0 },
      { zone: 'America/New_York' }
    ).toUTC();

    const interval = setInterval(() => {
      const now = DateTime.utc();
      const diff = birthday.diff(now, ['days', 'hours', 'minutes', 'seconds']).toObject();
      if (birthday <= now) {
        clearInterval(interval);
        setShowFinal(true);
        setTimeout(() => navigate('/memories'), 6000);
      } else {
        setTimeLeft(diff);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="countdown-container">
      <div className="heart-particles">
        {Array.from({ length: 30 }).map((_, index) => (
          <div
            key={index}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            {heartIcons[Math.floor(Math.random() * heartIcons.length)]}
          </div>
        ))}
      </div>

      {!showFinal ? (
        <div className="countdown-overlay">
          <h1 className="headline">
         <span className="highlight">The Stars Are Waiting Just Like Me, For Your Special Day. 🌙💫</span>
          </h1>
          <div className="countdown-box">
            <div className="time-segment">
              <span className="number">{Math.floor(timeLeft.days || 0)}</span>
              <span className="label">Days</span>
            </div>
            <div className="time-segment">
              <span className="number">{Math.floor(timeLeft.hours || 0)}</span>
              <span className="label">Hours</span>
            </div>
            <div className="time-segment">
              <span className="number">{Math.floor(timeLeft.minutes || 0)}</span>
              <span className="label">Minutes</span>
            </div>
            <div className="time-segment">
              <span className="number">{Math.floor(timeLeft.seconds || 0)}</span>
              <span className="label">Seconds</span>
            </div>
          </div>
          <p className="bottom-text">Every second is filled with love for you 💌</p>
        </div>
      ) : (
        <div className="final-message">
          <h1>🎉 Happy Birthday Jani! 🎂</h1>
          <p>You are loved more than words can say. Let’s celebrate your special day with joy and smiles! 💖</p>
          <div className="confetti"></div>
        </div>
      )}

      <audio autoPlay loop src="/music/love.mp3" />
    </div>
  );
}

export default CountdownPage;