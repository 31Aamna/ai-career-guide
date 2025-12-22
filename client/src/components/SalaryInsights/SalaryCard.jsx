import React, { useContext } from 'react';
import Card from '../UI/Card';
import { UserContext } from '../../context/UserContext';

const SalaryCard = ({ salary }) => {
  const { isDarkMode } = useContext(UserContext);

  return (
    <Card className="salary-page-card" style={{ 
      // Dynamic Background based on Theme
      background: isDarkMode 
        ? 'var(--bg-white)' 
        : 'linear-gradient(180deg, #FFFFFF 0%, #FDFDFD 100%)', 
      border: '1px solid var(--primary)' 
    }}>
      <div className="salary-value-row">
        <div>
          <p style={{fontSize: '13px', color: 'var(--text-light)', textTransform: 'uppercase', fontWeight: 700, letterSpacing:'0.5px'}}>
            Your Expected Salary
          </p>
          <h1 className="big-salary">
            ${salary.toLocaleString()}<span style={{fontSize: '20px', color: 'var(--text-light)', fontWeight: 500}}>/yr</span>
          </h1>
        </div>
        
        <div className="top-badge">
          <span style={{fontSize: '24px'}}>👑</span>
          <div className="badge-text">
            <h4>Top 15%</h4>
            <span>HIGH EARNER</span>
          </div>
        </div>
      </div>

      <div className="status-row">
        <span style={{fontSize:'18px'}}>✅</span> Above Market Average
      </div>
    </Card>
  );
};

export default SalaryCard;