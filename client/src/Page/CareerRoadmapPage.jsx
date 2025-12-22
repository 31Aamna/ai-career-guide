import React, { useState } from 'react';
import RoadmapForm from '../components/CareerRoadmap/RoadmapForm';
import RoadmapTimeline from '../components/CareerRoadmap/RoadmapTimeline';
import '../components/CareerRoadmap/CareerRoadmap.css';

const CareerRoadmapPage = () => {
  const [isGenerated, setIsGenerated] = useState(false);
  
  // 1. Add state for Current Position
  const [currentPos, setCurrentPos] = useState('');
  const [targetGoal, setTargetGoal] = useState('');

  const handleBuild = () => {
    // Basic validation
    if (targetGoal.trim() !== "" && currentPos.trim() !== "") {
      setIsGenerated(true);
    } else {
      alert("Please enter both your Current Position and Target Goal!");
    }
  };

  return (
    <div className="roadmap-container">
      
      {/* HEADER ROW */}
      <div className="flex-between mb-30">
        <div className="roadmap-header" style={{marginBottom: 0}}>
          <h1>Career Roadmap 🗺️</h1>
          <p>Your personalized path to becoming a <span className="role-highlight">{targetGoal}</span></p>
        </div>
        
        <div className="no-context-badge">
          <span>⚠️</span> No Resume Context
        </div>
      </div>

      {/* INPUT SECTION */}
      <RoadmapForm 
        currentPos={currentPos}
        setCurrentPos={setCurrentPos} // Pass the setter
        targetGoal={targetGoal} 
        setTargetGoal={setTargetGoal} 
        onBuild={handleBuild}
      />

      {/* GENERATED CONTENT */}
      {isGenerated && (
        <div className="grid-2" style={{ gridTemplateColumns: '2fr 1fr', alignItems: 'start', animation: 'fadeIn 0.5s ease-in' }}>
          
          {/* LEFT COLUMN */}
          <div className="flex-col">
            <RoadmapTimeline />
            
            <div className="rec-learning-card">
              <h3 style={{fontSize:'18px', marginBottom:'20px', display:'flex', alignItems:'center', gap:'10px'}}>
                📚 Recommended Learning
              </h3>
              <div className="learning-item">
                <div className="learning-icon">📹</div>
                <div>
                  <h4 style={{fontSize:'14px', margin:0}}>Node.js: The Complete Guide</h4>
                  <p style={{fontSize:'12px', margin:0, color:'var(--text-light)'}}>Master the backend with this top-rated course.</p>
                </div>
              </div>
              <div className="learning-item">
                <div className="learning-icon">📖</div>
                <div>
                  <h4 style={{fontSize:'14px', margin:0}}>Designing Data-Intensive Apps</h4>
                  <p style={{fontSize:'12px', margin:0, color:'var(--text-light)'}}>The gold standard book for system design.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex-col">
            <div className="side-card">
              <h3 style={{fontSize:'16px'}}>⚠️ Improvements Needed</h3>
              <span className="card-subtitle">Critical skills required to reach your target role</span>
              
              <div className="skill-list">
                <div className="skill-row">
                  <div><h4 style={{fontSize:'14px', margin:0}}>TypeScript</h4><span style={{fontSize:'11px', color:'var(--text-light)'}}>Beginner → Advanced</span></div>
                  <span className="priority-badge high">HIGH PRIORITY</span>
                </div>
                <div className="skill-row">
                  <div><h4 style={{fontSize:'14px', margin:0}}>Docker</h4><span style={{fontSize:'11px', color:'var(--text-light)'}}>None → Intermediate</span></div>
                  <span className="priority-badge critical">CRITICAL</span>
                </div>
                <div className="skill-row" style={{border:'none'}}>
                  <div><h4 style={{fontSize:'14px', margin:0}}>System Design</h4><span style={{fontSize:'11px', color:'var(--text-light)'}}>None → Intermediate</span></div>
                  <span className="priority-badge critical">CRITICAL</span>
                </div>
              </div>
            </div>

            <div className="side-card suggestion-card">
              <h3 style={{display:'flex', alignItems:'center', gap:'8px', fontSize:'16px'}}>🤖 Career Suggestion</h3>
              <p style={{fontSize:'13px', fontStyle:'italic', lineHeight:'1.5', marginTop:'10px'}}>
                "Based on current job trends, mastering <strong>System Design</strong> will increase your interview success rate for Senior roles by nearly 40%."
              </p>
            </div>
          </div>

        </div>
      )}

      <style>{`@keyframes fadeIn { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }`}</style>
    </div>
  );
};

export default CareerRoadmapPage;