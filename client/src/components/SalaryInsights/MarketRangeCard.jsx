import React from 'react';
import Card from '../UI/Card';

const MarketRangeCard = ({ min, max, avg, current }) => {
  // Hardcoded visual position for the demo
  const percent = 68; 

  return (
    <Card className="salary-page-card">
      <div className="card-header">
        <h3>Market Average Range</h3>
        <span className="info-icon">ℹ️</span>
      </div>

      <div className="range-labels">
        <div style={{textAlign: 'left'}}>
          <span className="label">Min</span>
          <span className="value">${(min/1000).toFixed(0)}k</span>
        </div>
        <div style={{textAlign: 'center'}}>
          <span className="label">Market Average</span>
          <span className="value highlight">${(avg/1000).toFixed(0)}k</span>
        </div>
        <div style={{textAlign: 'right'}}>
          <span className="label">Max</span>
          <span className="value">${(max/1000).toFixed(0)}k+</span>
        </div>
      </div>

      <div className="range-track-container">
        {/* The Gradient Bar */}
        <div className="range-bar" style={{
            width: '100%', 
            height: '100%', 
            borderRadius:'8px',
            background: 'linear-gradient(90deg, #E9E3FF 0%, #4318FF 50%, #E9E3FF 100%)',
            opacity: 0.8
        }}></div>
        
        {/* The Moving Marker */}
        <div className="user-marker" style={{ left: `${percent}%` }}>
          <div className="marker-tag">You</div>
          <div className="marker-line"></div>
        </div>
      </div>

      <div className="range-footer-text">
        Most developers with your experience earn between <strong style={{color:'var(--text-main)'}}>$85k – $105k</strong>.
      </div>
      <div className="data-source-tag">📊 Based on 12,000+ similar profiles</div>
    </Card>
  );
};

export default MarketRangeCard;