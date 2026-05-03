import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="serif">Tapsi & Nikhil</p>
          <p className="hashtag">#NikhilTapsi</p>
          <div className="footer-divider"></div>
          <p className="copyright">© 2026 Crafted with love for the couple.</p>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .footer {
          padding: 60px 0;
          background-color: var(--bg-cream);
          text-align: center;
          border-top: 1px solid var(--border-gold);
        }
        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .footer-content .serif {
          font-size: 1.5rem;
          color: var(--gold-primary);
        }
        .footer-content .hashtag {
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        .footer-divider {
          width: 30px;
          height: 1px;
          background: var(--border-gold);
          margin: 1rem 0;
        }
        .copyright {
          font-size: 0.7rem;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }
      `}} />
    </footer>
  );
};

export default Footer;
