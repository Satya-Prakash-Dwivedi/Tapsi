import React, { useEffect, useState } from 'react';
import wisteriaImg from '../assets/wisteria.png';
import avatarsImg from '../assets/avatars.png';

const Hero = () => {
  const [processedAvatars, setProcessedAvatars] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = avatarsImg;
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      // Remove background and noise
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i+1];
        const b = data[i+2];
        
        // Calculate brightness/luminance
        const brightness = (r * 0.299 + g * 0.587 + b * 0.114);
        
        // Aggressively remove anything that isn't a dark line
        // If the pixel is light (above 200 brightness), make it transparent
        if (brightness > 200) {
          data[i + 3] = 0;
        }
      }
      
      ctx.putImageData(imageData, 0, 0);
      setProcessedAvatars(canvas.toDataURL());
    };
  }, []);

  const saveTheDate = () => {
    const event = {
      title: "Wedding: Tapsi & Nikhil",
      description: "Join us for the wedding of Tapsi & Nikhil. #NikhilTapsi",
      location: "Aamra Palace, Bhopal",
      startTime: "20260512T190000Z",
      endTime: "20260512T230000Z"
    };

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${event.startTime}
DTEND:${event.endTime}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Tapsi_Nikhil_Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg" style={{ backgroundImage: `url(${wisteriaImg})` }}></div>
      <div className="container hero-container">
        <div className="hero-left fade-in">
          <div className="hero-text-wrapper">
            <p className="hero-label gold">Join Us for the Wedding of</p>
            <h1 className="hero-title serif">Tapsi <br />& Nikhil</h1>
            <div className="hero-divider"></div>
            <p className="hero-date serif">May 12, 2026</p>
            <p className="hero-venue">Aamra Palace, Bhopal</p>
            <button className="btn-gold hero-btn" onClick={saveTheDate}>Save the Date</button>
          </div>
        </div>
        <div className="hero-right fade-in">
          <div className="hands-frame-premium">
            <img 
              src={processedAvatars || avatarsImg} 
              alt="Tapsi & Nikhil" 
              className="hands-artwork" 
            />
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background-color: var(--bg-cream);
          padding-top: 80px;
        }
        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.1;
          z-index: 0;
        }
        .hero-container {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4rem;
          width: 100%;
        }
        .hero-left {
          flex: 1;
          text-align: left;
        }
        .hero-right {
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }
        .hero-label {
          font-size: 0.9rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        .hero-title {
          font-size: 6.5rem;
          line-height: 1;
          color: var(--gold-primary);
          margin-bottom: 2.5rem;
          letter-spacing: -0.02em;
          font-weight: 400;
        }
        .hero-divider {
          width: 80px;
          height: 1px;
          background: var(--gold-primary);
          margin-bottom: 2.5rem;
          opacity: 0.6;
        }
        .hero-date {
          font-size: 2.8rem;
          color: var(--gold-primary);
          margin-bottom: 0.8rem;
          font-weight: 300;
        }
        .hero-venue {
          font-size: 1.2rem;
          color: var(--text-muted);
          margin-bottom: 3.5rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .hero-btn {
          background: transparent;
          border: 1px solid var(--gold-primary);
          color: var(--gold-primary);
          padding: 1.2rem 3rem;
          font-size: 0.9rem;
          letter-spacing: 0.2em;
          transition: all 0.4s var(--transition-smooth);
        }
        .hero-btn:hover {
          background: var(--gold-primary);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(197, 160, 89, 0.2);
        }
        .hands-frame-premium {
          width: 550px;
          height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 0.5px solid rgba(197, 160, 89, 0.3);
          border-radius: 100px;
          overflow: hidden;
          background: rgba(253, 252, 248, 0.6);
          backdrop-filter: blur(10px);
          box-shadow: 0 20px 50px rgba(197, 160, 89, 0.05);
        }
        [data-theme='dark'] .hands-frame-premium {
          background: rgba(30, 30, 30, 0.6);
          border-color: rgba(197, 160, 89, 0.2);
        }
        .hands-artwork {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 1rem;
          filter: sepia(0.8) saturate(1.5) brightness(0.8) drop-shadow(0 5px 15px rgba(197, 160, 89, 0.2));
          transition: all 0.5s ease;
        }
        [data-theme='dark'] .hands-artwork {
          filter: invert(1) sepia(1) saturate(1.2) brightness(1.2) drop-shadow(0 5px 15px rgba(197, 160, 89, 0.4));
        }
        @media (max-width: 1024px) {
          .hero-title { font-size: 4.5rem; }
          .hands-frame-premium { width: 400px; height: 500px; }
        }
        @media (max-width: 768px) {
          .hero-container {
            flex-direction: column-reverse;
            text-align: center;
            gap: 3rem;
          }
          .hero-left { text-align: center; }
          .hero-title { font-size: 3.5rem; }
          .hands-frame-premium { width: 100%; max-width: 400px; height: 500px; margin: 0 auto; }
          .hero-divider { margin: 0 auto 2rem; }
        }
      `}} />
    </section>
  );
};

export default Hero;
