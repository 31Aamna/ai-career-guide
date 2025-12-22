import React from 'react';

const TimelineItem = ({ status, title, phase, desc }) => (
  <div className={`timeline-item ${status}`}>
    <div className="timeline-icon">
      {status === 'completed' && '✓'}
      {status === 'locked' && '🔒'}
      {/* Active uses CSS ::after for the dot */}
    </div>
    <div style={{width: '100%'}}>
      <div className="step-header">
        <h3>{title}</h3>
        <span className={`phase-tag ${status === 'active' ? 'active' : ''}`}>{phase}</span>
      </div>
      <p style={{fontSize: '13px', color: 'var(--text-light)', lineHeight: '1.6', marginTop: '5px'}}>
        {desc}
      </p>
    </div>
  </div>
);

const RoadmapTimeline = () => {
  return (
    <div className="learning-path-card">
      <div className="timeline">
        <TimelineItem 
          status="completed" 
          title="Frontend Mastery" 
          phase="Phase 1"
          desc="Deep dive into Advanced React patterns, State Management (Redux/Zustand), and Performance Optimization techniques."
        />
        <TimelineItem 
          status="active" 
          title="Backend Fundamentals" 
          phase="Phase 2 (Active)"
          desc="Understanding the Node.js runtime, building scalable APIs with Express, and mastering RESTful design principles."
        />
        <TimelineItem 
          status="locked" 
          title="Database Management" 
          phase="Phase 3"
          desc="Mastering SQL (PostgreSQL) vs NoSQL (MongoDB), Schema design for complex applications, and Database Indexing strategies."
        />
        <TimelineItem 
          status="locked" 
          title="System Design & Cloud" 
          phase="Phase 4"
          desc="Learning High-Level System Architecture, Microservices, Docker containerization, and AWS deployment basics."
        />
      </div>
    </div>
  );
};

export default RoadmapTimeline;