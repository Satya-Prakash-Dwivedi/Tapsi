import React from 'react';

const Footer = () => {
  const shareInvitation = () => {
    const shareData = {
      title: 'Tapsi & Nikhil | Wedding Invitation',
      text: 'We are getting married! Join us for the celebration of Tapsi & Nikhil. #NikhilTapsi',
      url: window.location.href
    };

    if (navigator.share) {
      navigator.share(shareData)
        .catch((error) => console.log('Error sharing:', error));
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(`${shareData.text} \n\nCheck out our invite here: ${shareData.url}`)
        .then(() => alert('Invitation link copied to clipboard!'))
        .catch((err) => console.error('Could not copy text: ', err));
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="serif">Tapsi & Nikhil</p>
          <p className="hashtag">#NikhilTapsi</p>
          
          <button className="share-btn" onClick={shareInvitation}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="share-icon">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
            </svg>
            Share Invitation
          </button>

          <div className="footer-divider"></div>
          <p className="copyright">© 2026 Crafted with love for the couple.</p>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .footer {
          padding: 80px 0;
          background-color: var(--bg-cream);
          text-align: center;
          border-top: 0.5px solid rgba(197, 160, 89, 0.2);
        }
        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.2rem;
        }
        .footer-content .serif {
          font-size: 2rem;
          color: var(--gold-primary);
        }
        .footer-content .hashtag {
          font-size: 0.8rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }
        .share-btn {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          background: white;
          border: 1px solid var(--gold-primary);
          color: var(--gold-primary);
          padding: 0.8rem 1.8rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .share-btn:hover {
          background: var(--gold-primary);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(197, 160, 89, 0.2);
        }
        .share-icon {
          width: 18px;
          height: 18px;
        }
        .footer-divider {
          width: 40px;
          height: 1px;
          background: var(--gold-primary);
          opacity: 0.3;
          margin: 1.5rem 0;
        }
        .copyright {
          font-size: 0.8rem;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          opacity: 0.8;
        }
      `}} />
    </footer>
  );
};

export default Footer;
