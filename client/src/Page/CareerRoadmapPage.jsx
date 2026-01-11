import React, { useState } from 'react';
import RoadmapForm from '../components/CareerRoadmap/RoadmapForm';
import RoadmapTimeline from '../components/CareerRoadmap/RoadmapTimeline';
import '../components/CareerRoadmap/CareerRoadmap.css';

const CareerRoadmapPage = () => {
  const [isGenerated, setIsGenerated] = useState(false);
  const [currentPos, setCurrentPos] = useState('');
  const [targetGoal, setTargetGoal] = useState('Frontend Developer');

  const handleBuild = () => {
    if (targetGoal.trim() !== "") {
      setIsGenerated(true);
    } else {
      alert("Please enter a target goal!");
    }
  };

  return (
    <div className="roadmap-container">
      
      {/* 1. HEADER ROW */}
      <div className="flex-between mb-30">
        <div className="roadmap-header" style={{marginBottom: 0}}>
          <h1>Career Roadmap 🗺️</h1>
          <p>Your personalized path to becoming a <span className="role-highlight">{targetGoal}</span></p>
        </div>
        
        {/* Warning Badge */}
        <div className="no-context-badge">
          <span>⚠️</span> No Resume Context
        </div>
      </div>

      {/* 2. INPUT SECTION */}
      <RoadmapForm 
        currentPos={currentPos}
        setCurrentPos={setCurrentPos}
        targetGoal={targetGoal} 
        setTargetGoal={setTargetGoal} 
        onBuild={handleBuild}
      />

      {/* 3. GENERATED CONTENT */}
      {isGenerated && (
        <div style={{animation: 'fadeIn 0.5s ease-in'}}>
          
          {/* MAIN GRID: TIMELINE (Left) vs SIDEBAR (Right) */}
          <div className="roadmap-content-grid">
            
            {/* LEFT COLUMN: TIMELINE */}
            <div className="flex-col">
              <RoadmapTimeline />
            </div>

            {/* RIGHT COLUMN: IMPROVEMENTS & SUGGESTIONS */}
            <div className="flex-col">
              
              {/* Skill Gaps Card */}
              <div className="side-card">
                <h3>⚠️ Improvements Needed</h3>
                <span className="card-subtitle">Critical skills required to reach your target role</span>
                
                <div className="skill-list">
                  <div className="skill-row">
                    <div>
                      <h4>TypeScript</h4>
                      <span>Current: Beginner → Target: Advanced</span>
                    </div>
                    <span className="priority-badge high">HIGH PRIORITY</span>
                  </div>
                  <div className="skill-row">
                    <div>
                      <h4>Docker</h4>
                      <span>Current: None → Target: Intermediate</span>
                    </div>
                    <span className="priority-badge critical">CRITICAL</span>
                  </div>
                  <div className="skill-row" style={{border:'none'}}>
                    <div>
                      <h4>System Design</h4>
                      <span>Current: None → Target: Intermediate</span>
                    </div>
                    <span className="priority-badge critical">CRITICAL</span>
                  </div>
                </div>
              </div>

              {/* Suggestion Card */}
              <div className="side-card suggestion-card">
                <h3 style={{display:'flex', alignItems:'center', gap:'8px'}}>
                  🤖 Career Suggestion
                </h3>
                <p className="suggestion-content">
                  "Based on current job trends, mastering <strong>System Design</strong> will increase your interview success rate for Senior roles by nearly 40%."
                </p>
              </div>

            </div>
          </div>

          {/* BOTTOM SECTION: Recommended Learning (Full Width) */}
          <div className="rec-learning-card">
            <h3 style={{fontSize:'18px', marginBottom:'20px', display:'flex', alignItems:'center', gap:'10px', color: 'var(--text-main)'}}>
              📚 Recommended Learning
            </h3>
            
            <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
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
      )}

      <style>{`@keyframes fadeIn { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }`}</style>
    </div>
  );
};

export default CareerRoadmapPage;