// MemoriesPage.jsx
import React, { useState, useEffect,useRef } from 'react';
import { Fireworks } from 'fireworks-js'

import gallery1 from '../images/img1.jpeg';
import gallery2 from '../images/img2.jpeg';
import gallery3 from '../images/img3.jpeg';
import gallery4 from '../images/img4.jpeg';

import gallery5 from '../images/j1.jpeg';
import gallery6 from '../images/img5.jpeg';
import gallery7 from '../images/img8.jpeg';
import gallery8 from '../images/img7.jpeg';


import '../styles/MemoryPage.css';
import music from '../music/hearty2.mp4';
import placeholder from '../images/t1.jpeg';
import Confetti from 'react-confetti';

const memoryData = [
    {
        title: 'Our Childhood Walks 📚👣',
        description: 'We were just kids, walking with books in our hands, reading and laughing together. I still remember the happiness I felt having you beside me back then.',
      },
      {
        title: 'Grandma’s Room Memories 🧸🏠',
        description: 'We used to play in your grandmother’s room those silly games, our laughter, and the innocence still lives in my heart.',
      },
      {
        title: 'You Called Me Handsome 💫',
        description: 'Once, you looked at me and said, "You’re looking handsome today." We were just kids… but it meant the world to me.',
      },
      {
        title: 'When You Were Hurt, I Was Hurting Too 💔',
        description: 'You were in Islamabad and had a head injury… we were just kids, but I still remember how worried and sad I was. I came with my father to see you. I didn’t understand everything then, but I knew one thing I cared for you deeply, even back then.',
      },
      {
        title: 'That Shy Window Moment 🪟💓',
        description: 'You came with your mom… I was too shy, too nervous to say hello. But I saw you standing there, smiling from my window. My heart still remembers that moment.',
      },
      {
        title: 'That Holiday Visit 🎁🏠',
        description: 'You came with your parents during the holidays and stayed at your home. Your mom gave me food, and I gave it to you. You were on the second floor in your room... you said “thank you” and even that meant so much to me.',
      },
      {
        title: 'That Holiday Gift 🎁🕊️',
        description: 'You came again on a holiday this time with your papa. We got a little time to talk, and you gave us perfume as a gift. Maybe you don’t even remember… maybe your father told you to do it… maybe you didn’t love me then. But I did and I loved that gift more than anything.',
      },
      
      {
        title: 'That Thing You Said... 💭💔',
        description: 'You once told me you slapped me when we were kids… I don’t remember it, but it stayed with me. It hurt, not because of what happened, but because I’ve never wanted to hurt you ever. I love you too much.',
      },
      {
        title: 'Your First Message to Me 💌📱',
        description: 'After COVID, your parents came for the holidays… and then I saw it your first message on my phone. You simply said, “Please care for her.” I was so happy… I smiled, saved your number, and my heart held that moment forever.',
      },
      {
        title: 'Your Father’s Call That Meant Everything ☎️💖',
        description: 'I was in Islamabad when your father called me… he asked if I could pick you from the coaster stop and drop you at your friend’s house. Later, I picked you from Faisalabad too. That trust, that moment it meant so much to me. I’ll never forget it.',
      },
      {
        title: 'Raindrops, Roads, and Unspoken Feelings 🌧️🫂',
        description: 'I took a day off from work to pick you… I changed currency for you, and I remember the rain — I loved that part. But when I dropped you at your friend’s house, I felt so uncomfortable. I didn’t know them, but I couldn’t say anything to you. I was young… maybe scared you’d get upset. But my silence was full of love.',
      },      
      
    {
        title: 'Sunset Roads, You, and Everything I Needed🚗🌅',
        description: 'I picked you from Faisalabad and we drove to Islamabad… just us, the silent roads, the golden sunset. I kept looking at you when you weren’t noticing. My heart was so full. We talked about little things for 4 hours, and I wished that drive would never end.',
      },
      {
        title: 'The Gift That Touched My Heart 🎁💞',
        description: 'When we reached home from Islamabad, you gave me a dress a gift you bought just for me. I loved it. I was so happy. You may never know how much it meant to me… but in that small gift, I felt deeply loved.',
      },
      {
        title: 'When You Were Studying 📚💗',
        description: 'You were sitting on the sofa, studying hard for your exams. I saw you many times beautiful, focused, so cute. You didn’t know I was looking at you… but I was. And every time I did, my heart smiled. I loved those quiet moments more than you’ll ever know.',
      },
      {
        title: 'The Night I Let You Go 💔✈️',
        description: 'It was the night you left for New York… I picked you from the coaster stop, and we spent a few quiet hours at home in Islamabad. Then, at 2 a.m., I dropped you at the airport. Before leaving, you said, “Agar koi ghalti hui ho to maaf karna.” You didn’t know how deeply those words cut me… When I came back home, I felt empty. I missed you more than words can ever explain.',
      },
      {
        title: 'Those Random Messages… Weren’t Random at All 💬🫶',
        description: 'I always wanted to talk to you. So sometimes, I sent you random messages not because I had something to say, but because I just wanted you to talk to me. Even a single reply made my day.',
      },
      {
        title: 'The Moment That Broke Me 💔🫀',
        description: 'I still remember the day I finally said, “I love you.” It came from the deepest part of me. But instead of love, I heard you trying to convince me that it was wrong. That moment shattered something inside me… but even then, my heart chose you.',
      },
      {
        title: 'From Silence to Us 🌙❤️',
        description: 'After everything… the heartbreak, the distance, the wait… you started talking to me again. Slowly, our conversations came back to life. And now, we’re with each other. After all that pain, I still feel like I’m living in a dream — a beautiful one that I never want to end.',
      },
      {
        title: 'Hours Feel Like Seconds When It’s You ⏳💗',
        description: 'Now we talk through calls, messages, and long conversations. 8, 9 hours go by like nothing. I swear, it always feels like just a few seconds. That’s what love feels like. That’s what you feel like.',
      },
    {
      title: 'You = Home 🏡',
      description: 'Wherever you are, that’s where I want to be. You are my comfort, my peace.',
    },
  ];
  
  const reasons =  [
    "You always listen to me, even when I don’t know how to speak.",
    "Your smile makes even my worst days feel better.",
    "You understand me in ways no one else ever could.",
    "You bring peace to my chaos.",
    "You make me feel safe and loved without saying a word.",
    "Every little thing you do becomes my favorite memory.",
    "With you, everything feels like magic.",
    "You are honest and pure in your heart.",
    "You dress with modesty and dignity, always wearing your scarf.",
    "You never give anyone unnecessary chances you protect your values.",
    "You help others without expecting anything in return.",
    "Your faith makes you strong and beautiful in ways the world can’t understand.",
    "You carry the qualities of a true Muslim woman and I respect that deeply.",
    "You always remind me to stay close to Allah and never forget my prayers.",
    "Your kindness and gentle heart make me feel lucky every single day.",
    "You have a beautiful modesty that shines through everything you do.",
    "You treat people with respect and always speak with such grace.",
    "You stand by me through every situation, making me feel supported and never alone.",
    "Your patience teaches me to be a better person.",
    "You bring peace and comfort to my life like no one else can.",
    "You always choose honesty, no matter how small the matter is.",
    "Your love for family and the way you care for others melts my heart.",
    "You have the most beautiful balance of love, respect, and understanding.",
    "You always guide me towards good and help me stay away from what’s wrong.",
  ];

  
  const learnings = [
    "How to control my anger 💢",
    "How to stay focused even when I'm sad 🎯",
    "How to express emotions with love 💬",
    "How to solve problems calmly 🔍",
    "How to believe in myself 🧠",
    "How to be emotionally strong 🛡️",
    "How to be patient and kind ⏳",
    "How to find light in darkness 🌟"
  ];
 
  const promisesData = [
    {
      title: 'Support for Your Dreams 🌟',
      description: 'I promise to support you in your career, your dreams, and your social work like Futures of Kashmir.',
    },
    {
      title: 'Family Comes First 🏡',
      description: 'I promise to stand by your family — your parents, your siblings — and help you in every phase of life, wherever and whenever you need me.',
    },
    {
      title: 'Protecting What Matters 🧕🕊️',
      description: 'I promise to always protect your scarf and your soul.',
    },
    {
      title: 'Medical School Journey 🩺📚',
      description: 'I promise to support you in your medical studies — through every exam, every tired day, and every late night of hard work.',
    },
    {
      title: 'Together in Every Little Thing 🍲🏠',
      description: 'I promise to help you with cooking, chores, and everything that builds a happy and peaceful home together.',
    },
    {
      title: 'Unshakable Worth 💫',
      description: 'I promise to remind you of your worth when the world forgets.',
    },
    {
      title: 'Always Here to Listen 👂💗',
      description: 'I promise to listen — even to the words you can’t say.',
    },
    {
      title: 'Keeping Your Peace Safe 🧘‍♀️✨',
      description: 'I promise to protect your peace, even in chaos.',
    },
    {
      title: 'Side by Side, Always 🤝',
      description: 'I promise to walk beside you, not ahead or behind — as your equal, your support, your partner.',
    },
    {
      title: 'Home in You 🏠',
      description: 'I promise to be your safe place, your home in a noisy world.',
    },
    {
      title: 'Always Honest 🤍',
      description: 'I promise to choose honesty, even when it’s hard.',
    },
    {
      title: 'Prayers for You 🤲',
      description: 'I promise to pray for you, with you, and because of you.',
    },
    {
      title: 'Never Letting You Be Alone 💪',
      description: 'I promise to never let you feel alone in your battles.',
    },
    {
      title: 'Celebrate and Share 🏆❤️',
      description: 'I promise to celebrate your wins and carry your pain like it’s my own.',
    },
    {
      title: 'Grow in Faith Together 🕌',
      description: 'I promise to grow in faith with you and help you get closer to Allah.',
    },
    {
      title: 'A Love with Dignity 💖',
      description: 'I promise to love you not just in words but in actions — with dignity and truth.',
    },
  ];
  


  
  const MemoryPage = () => {

        const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    
    const toggleMusic = () => {
      const audio = audioRef.current;
      if (!audio) return;
    
      if (audio.paused) {
        audio.volume = 0.6;
        audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    };
    const [loading, setLoading] = useState(true);
    const [showConfetti, setShowConfetti] = useState(true);
    const fireworksRef = useRef(null);
  
    useEffect(() => {
      const timeout = setTimeout(() => setLoading(false), 4000);
      const confettiTimeout = setTimeout(() => setShowConfetti(false), 6000);
      return () => {
        clearTimeout(timeout);
        clearTimeout(confettiTimeout);
      };
    }, []);
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  
    useEffect(() => {
      if (fireworksRef.current) {
        const fireworks = new Fireworks(fireworksRef.current, {
          hue: { min: 0, max: 360 },
          delay: { min: 15, max: 30 },
          rocketsPoint: 50,
          speed: 2,
          acceleration: 1.05,
          friction: 0.97,
          gravity: 1.5,
          particles: 50,
          trace: 3,
          explosion: 5,
        });
        fireworks.start();
        setTimeout(() => fireworks.stop(), 6000);
      }
    }, []);
  
    if (loading) {
      return (
        <div className="loading-screen">
          <div className="candle-flame">🕯️</div>
          <h1 className="loading-text">Lighting the birthday surprise...</h1>
          <div className="cake-emoji">🎂</div>
        </div>
      );
    }
    const galleryImages = [
      { src: gallery1, caption: 'Charming Smile 💖' },
      { src: gallery2, caption: 'Beautiful Eyes ✨' },
      { src: gallery3, caption: 'That Glow 🌟' },
      { src: gallery4, caption: 'Soft & Sweet 💫' },
      { src: gallery5, caption: 'Innocent Look 💕' },
      { src: gallery6, caption: 'My Favorite Click 💘' },
      { src: gallery8, caption: 'That Spark 💡' },
    ];
    
    return (
      
      <div className="memories-container">
        <audio ref={audioRef} loop>
          <source src={music} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <div className="falling-balloons">
  {Array.from({ length: 25 }).map((_, i) => (
    <span
      key={i}
      className={Math.random() > 0.5 ? 'balloon' : ''}
      style={{
        left: `${Math.random() * 100}vw`,
        animationDuration: `${8 + Math.random() * 5}s`,
        animationDelay: `${Math.random() * 10}s`,
        top: `${-Math.random() * 100}px`,
      }}
    >
      {Math.random() > 0.5 ? '🎈' : 'Happy Birthday Jani 🎉'}
    </span>
  ))}
</div>
<div className="floating-balloons-wrapper">
  {Array.from({ length: 15 }).map((_, i) => (
    <div
      className="balloon-floating"
      key={i}
      style={{
        left: `${Math.random() * 100}vw`,
        animationDelay: `${Math.random() * 15}s`,
      }}
    />
  ))}
</div>
        <div ref={fireworksRef} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 10 }} />
        {showConfetti && <Confetti />} 
  
  
        <div className="hero-content">
          <h1>🎂 Happy Birthday Jani 🎂</h1>
          <p className="sub-text">Here’s a journey through our sweetest memories 💖</p>
          <img src={placeholder} alt="Romantic" className="hero-img" />
          <div className="heart-line">💘 💓 💖 💝 💗 💞 💕</div>
        </div>
        <button className="music-toggle-btn" onClick={toggleMusic}>
  {isPlaying ? '⏸️ Pause Music' : '🎵 Play Music'}
</button>
  
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
      
        <div className="memory-section">
          <h2 className="section-title">💍 My Promises to You 💍</h2>
          <div className="memory-grid">
            {promisesData.map((item, index) => (
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


        <div className="learnings-section">
          <h2>🧠 Things I’ve Learned From You</h2>
          <div className="learnings-grid">
            {learnings.map((item, index) => (
              <div className="learning-card" key={index}>{item}</div>
            ))}
          </div>
        </div>
           <div className="gallery-section">
      <h2 className="section-title">📸 Sweetest Clicks</h2>
      <div className="gallery-grid">
  {galleryImages.map((img, index) => (
    <div className="gallery-item hover-card" key={index}>
      <img src={img.src} alt={`Gallery ${index + 1}`} />
      <div className="caption-hover">{img.caption}</div>
    </div>
  ))}
</div>
    </div>

        <div className="letter-section">
          <h2 className="section-title">💌 Our Magical Poem ✨📖 💌</h2>
          <div className="letter-box">
            <p>My Jani,</p>
            <p>
            When we were small, with books in our hands,
We walked side by side through childhood lands.
In your grandma’s room, where laughter would bloom,
You smiled so bright, you lit up the room.

You once called me handsome, I still feel that glow,
Even then, there was something I hoped you'd know.
You fell, you cried I ran
To see you, protect you, whatever it takes.

The glass was broken, your heart was too,
I gave you my shoes and silently knew:
You left your scarf I brought it to you,
Not just for modesty, but love that’s true.

We talked for hours, your voice like peace,
My heart found quiet, my thoughts found ease.
You said “forgive me” that night at the gate,
And I drove home with love tangled in fate.

I watched from windows, afraid to say hi,
But your presence always lit up the sky.
That perfume you gave, I still hold near,
Even when I doubted, you felt so clear.

You left for New York, I stayed behind,
But your memories danced inside my mind.
I sent those messages, hoping you'd see,
That even my silence was calling for “we.”

And then, you came back not just in view,
But into my world, into something new.
Now we talk for hours, it feels like minutes,
Because you’re my home, and my heart lives in it.
            </p>
            <p>I love you endlessly.</p>
            <p>Yours Always</p>
          </div>
        </div>
  
        <div className="letter-section">
          <h2 className="section-title">💌 A Letter to You</h2>
          <div className="letter-box">
          <div className="dua-box">
        <p>
        "If I could give you one thing, it would be the ability to see yourself through my eyes…"

        </p>
      </div>   
          </div>
        </div>

        <div className="letter-section">
          <h2 className="section-title">💍 Our Future Together</h2>
          <div className="letter-box">
          <div className="dua-box">
        <p>
        "One day, Insha’Allah, I imagine us… walking through life, hand in hand. Raising a home filled with love, peace, and prayers…"

        </p>
      </div>   
          </div>
        </div>

        <div className="letter-section">
          <h2 className="section-title">🕊️ Our Story in Ayahs</h2>
          <div className="letter-box">
          <div className="dua-box">
        <p>
        "And He placed between you affection and mercy." (Surah Ar-Rum 30:21)
         "They are garments for you and you are garments for them." (Surah Al-Baqarah 2:187)
        </p><p> "And We created you in pairs." (78:8)

        </p>
      </div>   
          </div>
        </div>

        <div className="letter-section">
          <h2 className="section-title">🧕🏻 You, Through My Eyes</h2>
          <div className="letter-box">
          <div className="dua-box">
        <p>
        "“You’re not just beautiful. You’re calmness, softness, strength, and sincerity wrapped in modesty.
        I see someone who changes my heart, even in silence.

        </p>
      </div>   
          </div>
        </div>
        <div className="letter-section">
          <h2 className="section-title">✍️💘 Shayari Tere Naam </h2>
          <div className="letter-box">
          <div className="dua-box">
        <p>
        Tumhara sukoon meri duaon mein hai,
Tumhari haya meri chahat mein hai.

Maine tumhein lafzon mein nahi,
Sajdon mein manga hai.

Tum parde mein ho, duaon mein ho,
Tum meri zindagi ki sabse khoobsurat niyyat ho.

Agar mohabbat ibaadat ban jaye,
To woh tum jaisi hoti hai.

Tum mili to laga jaise Allah ne koi dua qubool kar li ho,
Tumhein paa kar maine khud ko mukammal paya.

        </p>
      </div>   
          </div>
        </div>
        <div className="letter-section">
          <h2 className="section-title">🌧️ From My Heart: I’m Sorry</h2>
          <div className="letter-box">
          <div className="dua-box">
        <p>
        Maybe I didn’t always choose the right words when we talked...
Maybe I didn’t understand your silence when I should have.
Maybe my stubbornness, my overthinking, or my actions hurt you more than I ever meant to.

I know I texted you too many times…
I tried again and again even from different numbers just to hear from you.
You blocked me, but I still couldn’t stop trying… because losing you felt unbearable.
It wasn’t to annoy you it was just my heart refusing to let go of someone I love so deeply.

From my heart, I never wanted to hurt you.
On your special day, I don’t just want to bring you smiles and surprises...
I also want to say I’m truly sorry.

For every word that caused pain,
For every moment that felt too heavy,
And for not being the man you deserved in every moment…

You’re in my prayers, always.
And in every single one, I ask for just one thing:
Please never be upset with me again.

Thank you for being a part of my life.
Thank you for staying, even when I wasn’t perfect.
I love you, Jani. Happy Birthday, meri jaan.
        </p>
      </div>   
          </div>
        </div>
        <div className="letter-section">
          <h2 className="section-title">🌙 A Du‘a for You</h2>
          <div className="letter-box">
          <div className="dua-box">
        <p>
          Ya Allah, protect her in every step she takes.  
          <br />
          Fill her life with peace, love, and barakah.  
          <br />
          Guard her modesty, her heart, and her faith.  
          <br />
          Strengthen her imaan and keep her close to You.  
          <br />
          Make her among the women of Jannah, full of light and dignity.  
          <br />
          Reward her for her kindness and patience.  
          <br />
          Let her never feel alone not in this dunya, and not in akhirah.  
          <br />
          And if it is written in Your qadr...  
          <br />
          ...then bring her and me together in a way that pleases You.  
          <br />
          Ameen. 🤲
        </p>
      </div>   
          </div>
        </div>

        <div className="letter-section">
          <h2 className="section-title">🌹 Thank You for Reading This</h2>
          <div className="letter-box">
          <div className="dua-box">
          <section className="closing-message">
      <p>
        If you've reached this far... thank you not just for reading,  
        but for being the reason this entire website exists.
      </p>
      <p>
        Every memory, every promise, every poem was written from the deepest part of my heart only for you.
      </p>
      <p>
        I'm not perfect, but I love you in the most honest, respectful, and sincere way I can.
      </p>
      <p>
        Thank you for being my peace, my strength, my softness, and my heart.
      </p>
      <p className="love-end"> With all my love, always 💖</p>
    </section>
      </div>   
          </div>
        </div>

     
  
     

      </div>
      
    );
  };
  
  export default MemoryPage;