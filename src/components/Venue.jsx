import React from 'react';
import venueArt from '../assets/venue_art.png';

const Venue = () => {
  const address = "Aamra Palace 511, DPS Square, Kolar Road, Bhopal, MP";
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="venue" className="venue-section">
      <div className="container">
        <div className="venue-header">
          <h2 className="section-title serif italic">The Grand Venue</h2>
          <p className="venue-subtitle">A celebration in the heart of Bhopal</p>
        </div>
        
        <div className="venue-card-premium">
          <div className="venue-art-frame">
            <img src={venueArt} alt="Venue Illustration" className="venue-art-img" />
          </div>
          
          <div className="venue-details-content">
            <div className="venue-info-header">
              <h3 className="venue-name serif">Aamra Palace</h3>
              <p className="address-text">Aamra Palace 511, DPS Square, Kolar Road, Bhopal, MP</p>
            </div>
            
            <div className="venue-description">
              <p className="serif italic venue-quote">
                "We have chosen this beautiful space to share our most precious moments with you. We can't wait to welcome you to our celebration."
              </p>
            </div>
            
            <div className="venue-cta">
              <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="btn-gold">
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .venue-section {
          background-color: var(--bg-cream);
          padding: 120px 0;
        }
        .venue-header {
          text-align: center;
          margin-bottom: 6rem;
        }
        .venue-subtitle {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.4em;
          color: var(--gold-primary);
          margin-top: 1.2rem;
          font-weight: 500;
        }
        .venue-card-premium {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 6rem;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
        }
        .venue-art-frame {
          position: relative;
          background: white;
          border: 1px solid var(--border-gold);
          border-radius: 20px;
          padding: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 15px 40px rgba(197, 160, 89, 0.08);
          overflow: hidden;
        }
        [data-theme='dark'] .venue-art-frame {
          background: #252525;
        }
        .venue-art-img {
          width: 100%;
          height: auto;
          filter: sepia(0.5) saturate(1.5) brightness(0.9);
          mix-blend-mode: multiply;
          transition: all 0.5s ease;
        }
        [data-theme='dark'] .venue-art-img {
          filter: invert(1) sepia(1) saturate(2) brightness(1.2);
          mix-blend-mode: screen;
        }
        .venue-details-content {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        .venue-name {
          font-size: 4rem;
          line-height: 1.1;
          color: var(--text-dark);
          margin-bottom: 1.5rem;
          font-weight: 400;
        }
        .address-text {
          font-size: 1rem;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          max-width: 350px;
          line-height: 1.8;
        }
        .venue-quote {
          font-size: 1.5rem;
          color: var(--gold-primary);
          line-height: 1.5;
          max-width: 500px;
          border-left: 1px solid var(--border-gold);
          padding-left: 2rem;
        }
        @media (max-width: 1024px) {
          .venue-card-premium {
            grid-template-columns: 1fr;
            gap: 5rem;
            text-align: center;
          }
          .venue-art-frame {
            max-width: 600px;
            margin: 0 auto;
          }
          .venue-quote {
            border-left: none;
            padding-left: 0;
            margin: 0 auto;
          }
          .address-text {
            margin: 0 auto;
          }
        }
        @media (max-width: 768px) {
          .venue-name {
            font-size: 2.8rem;
          }
        }
      `}} />
    </section>
  );
};

export default Venue;
