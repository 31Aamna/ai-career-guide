import React from 'react';

const AnalysisResults = () => (
  <div className="animate-fade-in">
    {/* Main Score Card */}
    <div className="results-card">
      <div className="score-circle-container">
        <svg className="score-svg" viewBox="0 0 36 36">
          <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#eee" strokeWidth="3" />
          <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--orange)" strokeWidth="3" strokeDasharray="72, 100" />
        </svg>
        <span className="score-text">72%</span>
      </div>
      <div className="results-info">
        <h2>ATS Compatibility Score</h2>
        <p>Your resume is Good, but needs a few tweaks.</p>
      </div>
      <div className="grade-badge">B+</div>
    </div>

    {/* Details Grid */}
    <div className="analysis-details-grid">
      
      {/* Improvements Card */}
      <div className="detail-card">
        <div className="detail-header">
          <span className="icon-badge" style={{background:'var(--red-bg)', color:'var(--red)'}}>⚠️</span> 
          Critical Improvements
        </div>
        <ul className="analysis-list">
          <li><strong>Missing Keywords:</strong> Add "CI/CD", "Agile".</li>
          <li><strong>Quantify Impact:</strong> Add metrics to job descriptions (e.g. "Increased sales by 20%").</li>
        </ul>
      </div>

      {/* Formatting Card */}
      <div className="detail-card">
        <div className="detail-header">
          <span className="icon-badge" style={{background:'var(--green-bg)', color:'var(--green)'}}>✅</span> 
          Formatting Check
        </div>
        <ul className="analysis-list" style={{listStyle:'none', padding:0}}>
          <li><span style={{color:'var(--green)', marginRight:'8px'}}>✓</span> File type (.pdf) is readable</li>
          <li><span style={{color:'var(--green)', marginRight:'8px'}}>✓</span> Font size is consistent</li>
          <li><span style={{color:'var(--green)', marginRight:'8px'}}>✓</span> Section headers are clear</li>
        </ul>
      </div>
    </div>
  </div>
);

export default AnalysisResults;