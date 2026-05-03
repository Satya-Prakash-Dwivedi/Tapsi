import React from 'react';

const Quotes = () => {
  return (
    <section id="quotes" className="quotes-section">
      <div className="container">
        <div className="quote-container">
          <svg className="quote-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2h2c0 2.25-1 3.5-3 4l1 3zm11 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2h2c0 2.25-1 3.5-3 4l1 3z"></path>
          </svg>
          <h2 className="serif quote-text">
            "Once in a while, right in the middle of an ordinary life, love gives us a fairy tale."
          </h2>
          <div className="quote-divider"></div>
          <p className="quote-author serif">Tapsi & Nikhil</p>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .quotes-section {
          background-color: var(--bg-cream);
          text-align: center;
          padding: 150px 0;
        }
        .quote-container {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }
        .quote-icon {
          color: var(--gold-primary);
          opacity: 0.5;
        }
        .quote-text {
          font-size: 2.5rem;
          line-height: 1.4;
          font-style: italic;
          color: var(--text-dark);
        }
        .quote-divider {
          width: 60px;
          height: 1px;
          background: var(--gold-primary);
        }
        .quote-author {
          font-size: 1.2rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold-primary);
        }
        @media (max-width: 768px) {
          .quote-text {
            font-size: 1.8rem;
          }
          .quotes-section {
            padding: 100px 0;
          }
        }
      `}} />
    </section>
  );
};

export default Quotes;
