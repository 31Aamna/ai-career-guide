import React, { useState } from 'react';
import '../styles/Roadmap.css';

const CareerRoadmapPage = () => {
  const [isGenerated, setIsGenerated] = useState(false);
  const [targetGoal, setTargetGoal] = useState('Frontend Developer');

  const handleBuildPath = () => {
    setIsGenerated(true);
  };

  return (
    <div className="roadmap-container">
      {/* 1. Page Header */}
      <div className="flex-between mb-30">
        <div className="roadmap-header" style={{ textAlign: 'left', marginBottom: 0 }}>
          <h1>Career Roadmap 🗺️</h1>
          <p>Your personalized path to becoming a <span className="role-highlight" style={{color:'var(--primary)'}}>Senior Full Stack Developer</span></p>
        </div>
        <div className="no-context-badge" style={{background: '#FFF8E6', color: '#D97706', padding: '8px 15px', borderRadius: '12px', fontSize: '13px', fontWeight: 'bold'}}>
          ⚠️ No Resume Context
        </div>
      </div>

      {/* 2. Input Section */}
      <div className="roadmap-input-card">
        <div className="input-grid">
          <div className="input-field-group">
            <div className="input-label">🎯 Current Position</div>
            <div className="input-wrapper">
              <input type="text" placeholder="none" />
            </div>
          </div>
          <div className="input-field-group">
            <div className="input-label">✨ Target Career Goal</div>
            <div className="input-wrapper">
              <input 
                type="text" 
                value={targetGoal} 
                onChange={(e) => setTargetGoal(e.target.value)} 
              />
            </div>
          </div>
        </div>
        <div className="flex-between">
          <button className="btn-build" onClick={handleBuildPath}>
            ⚡ Build Growth Path
          </button>
          <span className="tip-text" style={{fontSize:'12px', color:'var(--text-light)', fontStyle:'italic'}}>
            Tip: Add your resume in the <strong>Resume Analyzer</strong> for a more accurate gap analysis.
          </span>
        </div>
      </div>

      {/* 3. Generated Roadmap Content */}
      {isGenerated && (
        <div className="grid-2" style={{animation: 'fadeIn 0.5s ease-in'}}>
          
          {/* LEFT COLUMN: Learning Path + Recommended Learning */}
          <div className="flex-col">
            <div className="learning-path-card">
              <h2>Step-by-Step Learning Path</h2>
              
              <div className="timeline">
                <div className="timeline-item completed">
                  <div className="timeline-icon">✓</div>
                  <div className="step-header">
                    <h3>Frontend Mastery</h3>
                    <span className="phase-tag">Phase 1</span>
                  </div>
                  <p>Deep dive into Advanced React patterns, State Management (Redux/Zustand), and Performance Optimization techniques.</p>
                </div>

                <div className="timeline-item active">
                  <div className="timeline-icon"></div>
                  <div className="step-header">
                    <h3>Backend Fundamentals</h3>
                    <span className="phase-tag active">Phase 2 (Active)</span>
                  </div>
                  <p>Understanding the Node.js runtime, building scalable APIs with Express, and mastering RESTful design principles.</p>
                </div>

                <div className="timeline-item">
                  <div className="timeline-icon">🔒</div>
                  <div className="step-header">
                    <h3>Database Management</h3>
                    <span className="phase-tag">Phase 3</span>
                  </div>
                  <p>Mastering SQL (PostgreSQL) vs NoSQL (MongoDB), Schema design for complex applications, and Database Indexing strategies.</p>
                </div>

                <div className="timeline-item">
                  <div className="timeline-icon">🔒</div>
                  <div className="step-header">
                    <h3>System Design & Cloud</h3>
                    <span className="phase-tag">Phase 4</span>
                  </div>
                  <p>Learning High-Level System Architecture, Microservices, Docker containerization, and AWS deployment basics.</p>
                </div>
              </div>
            </div>

            {/* MOVED: Recommended Learning now under the path */}
            <div className="side-card" style={{marginTop: '25px'}}>
              <h3 style={{display:'flex', alignItems:'center', gap:'8px'}}>📚 Recommended Learning</h3>
              <div className="learning-grid-horizontal">
                <div className="learning-item">
                  <div className="learning-icon">📹</div>
                  <div className="learning-text">
                    <h4>Node.js: The Complete Guide</h4>
                    <p>Master the backend with this top-rated course.</p>
                  </div>
                </div>
                <div className="learning-item">
                  <div className="learning-icon">📖</div>
                  <div className="learning-text">
                    <h4>Designing Data-Intensive Apps</h4>
                    <p>The gold standard book for system design.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Improvements + Suggestions */}
          <div className="flex-col">
            <div className="side-card">
              <h3>⚠️ Improvements Needed</h3>
              <span className="card-subtitle">Critical skills required to reach your target role</span>
              
              <div className="skill-list">
                <div className="skill-row">
                  <div className="skill-info">
                    <h4>TypeScript</h4>
                    <span>Current: Beginner → Target: Advanced</span>
                  </div>
                  <span className="priority-badge high">HIGH PRIORITY</span>
                </div>
                <div className="skill-row">
                  <div className="skill-info">
                    <h4>Docker</h4>
                    <span>Current: None → Target: Intermediate</span>
                  </div>
                  <span className="priority-badge critical">CRITICAL PRIORITY</span>
                </div>
                <div className="skill-row" style={{marginBottom: 0}}>
                  <div className="skill-info">
                    <h4>System Design</h4>
                    <span>Current: None → Target: Intermediate</span>
                  </div>
                  <span className="priority-badge critical">CRITICAL PRIORITY</span>
                </div>
              </div>
            </div>

            <div className="side-card suggestion-card">
              <h3 style={{display:'flex', alignItems:'center', gap:'8px'}}>🤖 Career Suggestion</h3>
              <p className="suggestion-content">
                "Based on current job trends, mastering <strong>System Design</strong> will increase your interview success rate for Senior roles by nearly 40%."
              </p>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default CareerRoadmapPage;