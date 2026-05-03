import React, { useEffect, useRef } from 'react';

const events = [
  { 
    title: "Mata Pujan", 
    date: "May 9", 
    time: "5:00 PM", 
    desc: "Commencing the sacred journey with divine blessings.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
  },
  { 
    title: "Mandap", 
    date: "May 11", 
    time: "5:00 PM", 
    desc: "The setting of the sacred altar for the eternal bond.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/></svg>
  },
  { 
    title: "Sangeet", 
    date: "May 11", 
    time: "7:30 PM Onwards", 
    desc: "A night of melody, dance, and celebration.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
  },
  { 
    title: "Haldi Ceremony", 
    date: "May 12", 
    time: "1:00 PM", 
    desc: "Anointed in gold, blessed with love.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-11.314l.707.707m11.314 11.314l.707-.707"/></svg>
  },
  { 
    title: "Reception", 
    date: "May 12", 
    time: "7:00 PM", 
    desc: "Grand celebration of our new beginning.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l-2 7h4l-2-7z"/><path d="M12 9v13"/><path d="M9 15l3 2 3-2"/><path d="M9 19l3 2 3-2"/></svg>
  },
];

const Timeline = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!lineRef.current) return;
      const section = document.querySelector('.timeline-section');
      const rect = section.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (rect.height + window.innerHeight)));
      lineRef.current.style.height = `${scrollProgress * 100}%`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        <h2 className="section-title serif italic">The Celebration</h2>
        <div className="timeline-outer">
          <div className="timeline-base-line">
            <div ref={lineRef} className="timeline-progress-line"></div>
          </div>
          
          <div className="timeline-items">
            {events.map((event, index) => (
              <div key={index} className={`timeline-card fade-in ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="card-content">
                  <div className="event-icon-wrapper">{event.icon}</div>
                  <div className="card-header">
                    <p className="card-date serif">{event.date}</p>
                    <p className="card-time">{event.time}</p>
                  </div>
                  <h3 className="serif">{event.title}</h3>
                  <p className="card-desc">{event.desc}</p>
                </div>
                <div className="timeline-node">
                  <div className="node-inner"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .timeline-section {
          background-color: var(--bg-cream);
          padding: 150px 0;
          overflow: hidden;
        }
        .timeline-outer {
          position: relative;
          max-width: 1000px;
          margin: 4rem auto 0;
          padding: 2rem 0;
        }
        .timeline-base-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(197, 160, 89, 0.1);
          transform: translateX(-50%);
        }
        .timeline-progress-line {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          background: var(--gold-primary);
          transition: height 0.1s linear;
        }
        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 6rem;
        }
        .timeline-card {
          position: relative;
          width: 50%;
          display: flex;
          opacity: 0;
          transition: all 1s var(--transition-smooth);
        }
        .timeline-card.left {
          align-self: flex-start;
          padding-right: 5rem;
          justify-content: flex-end;
          transform: translateX(-50px);
        }
        .timeline-card.right {
          align-self: flex-end;
          padding-left: 5rem;
          justify-content: flex-start;
          transform: translateX(50px);
        }
        .timeline-card.visible {
          opacity: 1;
          transform: translateX(0);
        }
        .card-content {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          border: 0.5px solid rgba(197, 160, 89, 0.2);
          box-shadow: 0 10px 30px rgba(197, 160, 89, 0.05);
          transition: transform 0.3s ease;
          position: relative;
        }
        .event-icon-wrapper {
          width: 45px;
          height: 45px;
          background: rgba(197, 160, 89, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold-primary);
          margin-bottom: 1.5rem;
        }
        [data-theme='dark'] .card-content {
          background: #1e1e1e;
        }
        [data-theme='dark'] .event-icon-wrapper {
          background: rgba(197, 160, 89, 0.15);
        }
        .card-content:hover {
          transform: translateY(-10px);
          border-color: var(--gold-primary);
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-gold);
        }
        .card-date {
          font-size: 1.4rem;
          color: var(--gold-primary);
        }
        .card-time {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .card-content h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }
        .card-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .timeline-node {
          position: absolute;
          top: 50%;
          width: 24px;
          height: 24px;
          background: var(--bg-cream);
          border: 2px solid var(--gold-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          transform: translateY(-50%);
        }
        .left .timeline-node {
          right: -12px;
        }
        .right .timeline-node {
          left: -12px;
        }
        .node-inner {
          width: 8px;
          height: 8px;
          background: var(--gold-primary);
          border-radius: 50%;
        }
        @media (max-width: 768px) {
          .timeline-base-line {
            left: 30px;
          }
          .timeline-card {
            width: 100%;
            padding-left: 70px !important;
            padding-right: 0 !important;
            justify-content: flex-start !important;
            transform: translateX(30px) !important;
          }
          .timeline-node {
            left: 18px !important;
          }
          .card-content {
            max-width: 100%;
          }
        }
      `}} />
    </section>
  );
};

export default Timeline;
