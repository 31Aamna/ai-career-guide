import React from 'react';

const RoadmapForm = ({ currentPos, setCurrentPos, targetGoal, setTargetGoal, onBuild }) => {
  return (
    <div className="roadmap-input-card">
      <div className="input-grid">
        
        {/* 1. Current Position (Now Editable) */}
        <div className="input-field-group">
          <label className="input-label">🎯 Current Position</label>
          <div className="input-wrapper">
            <input 
              type="text" 
              value={currentPos} 
              onChange={(e) => setCurrentPos(e.target.value)}
              placeholder="e.g. Junior Developer" 
            />
          </div>
        </div>

        {/* 2. Target Goal */}
        <div className="input-field-group">
          <label className="input-label">✨ Target Career Goal</label>
          <div className="input-wrapper">
            <input 
              type="text" 
              value={targetGoal} 
              onChange={(e) => setTargetGoal(e.target.value)} 
              placeholder="e.g. Senior Backend Engineer"
            />
          </div>
        </div>
      </div>

      <div className="flex-between">
        <button className="btn-build" onClick={onBuild}>
          ⚡ Build Growth Path
        </button>
        <span className="tip-text">
          Tip: Add your resume in the <strong>Resume Analyzer</strong> for a more accurate gap analysis.
        </span>
      </div>
    </div>
  );
};

export default RoadmapForm;