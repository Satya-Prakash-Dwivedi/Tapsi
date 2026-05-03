import React from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo serif">T & N</div>
        <div className="nav-links">
          <a href="#hero">Home</a>
          <a href="#family">Family</a>
          <a href="#timeline">Events</a>
          <a href="#venue">Venue</a>
        </div>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === 'light' ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          )}
        </button>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          display: flex;
          align-items: center;
          background: rgba(249, 248, 243, 0.8);
          backdrop-filter: blur(10px);
          z-index: 1000;
          border-bottom: 1px solid var(--border-gold);
          transition: background 0.5s var(--transition-smooth);
        }
        [data-theme='dark'] .navbar {
          background: rgba(26, 26, 26, 0.8);
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .logo {
          font-size: 1.5rem;
          color: var(--gold-primary);
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-links a {
          text-decoration: none;
          color: var(--text-dark);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: color 0.3s ease;
        }
        .nav-links a:hover {
          color: var(--gold-primary);
        }
        .theme-toggle {
          color: var(--text-dark);
          padding: 8px;
          border-radius: 50%;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}} />
    </nav>
  );
};

export default Navbar;
