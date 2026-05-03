import React from 'react';

const Family = () => {
  return (
    <section id="family" className="family-section">
      <div className="container">
        <h2 className="section-title serif italic">The Raghuwanshi Family</h2>
        <div className="family-grid">
          <div className="family-column main-host">
            <h3 className="role-label">The Host</h3>
            <p className="name serif">Mr. Virendra & Mrs. Kiran Raghuwanshi</p>
            <p className="relation serif italic">Grandparents</p>
          </div>
          
          <div className="parents-grid">
            <div className="family-card">
              <h3 className="role-label">The Bride's Parents</h3>
              <p className="name serif">Late Mr. Dinesh & Mrs. Vimlesh Raghuwanshi</p>
            </div>
            <div className="family-card">
              <h3 className="role-label">The Groom's Parents</h3>
              <p className="name serif">Mr. Omprakash & Mrs. Neetu Raghuwanshi</p>
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .family-section {
          background-color: var(--bg-cream);
          text-align: center;
          padding: 120px 0;
        }
        .section-title {
          font-size: 3rem;
          margin-bottom: 5rem;
          color: var(--gold-primary);
          font-weight: 400;
        }
        .family-grid {
          display: flex;
          flex-direction: column;
          gap: 6rem;
        }
        .role-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: var(--gold-primary);
          margin-bottom: 1.5rem;
          font-weight: 600;
        }
        .name {
          font-size: 2.2rem;
          line-height: 1.2;
          color: var(--text-dark);
          margin-bottom: 0.5rem;
        }
        .relation {
          font-size: 1.1rem;
          color: var(--text-muted);
        }
        .parents-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        .family-card {
          padding: 2rem;
          transition: transform 0.3s ease;
        }
        .family-card:hover {
          transform: translateY(-5px);
        }
        .family-card .name {
          font-size: 1.6rem;
        }
        @media (max-width: 768px) {
          .parents-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .name {
            font-size: 1.8rem;
          }
          .family-card .name {
            font-size: 1.4rem;
          }
          .section-title {
            font-size: 2.5rem;
          }
        }
      `}} />
    </section>
  );
};

export default Family;
