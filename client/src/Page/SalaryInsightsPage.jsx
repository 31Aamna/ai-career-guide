import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext'; // 1. Import Context
import MarketRangeCard from '../components/SalaryInsights/MarketRangeCard';
import SalaryCard from '../components/SalaryInsights/SalaryCard';
import ActionableInsights from '../components/SalaryInsights/ActionableInsights';
import '../components/SalaryInsights/SalaryInsights.css';

const SalaryInsightsPage = () => {
  // 2. Get User Data from Context
  const { user } = useContext(UserContext);

  // Mock Data State
  const [data] = useState({
    role: "Frontend Developer",
    min: 60000,
    max: 150000,
    avg: 95000,
    expected: 120000,
  });

  // Helper to get first name (e.g., "Alex" from "Alex Johnson")
  const firstName = user?.name ? user.name.split(' ')[0] : 'User';

  return (
    <div>
      {/* Header */}
      <div className=" flex-between mb-30">
        {/* <div>
          <h1>Hey {firstName}, <span className="text-light">here is your salary overview.</span></h1>
          <p className="subtitle">Based on your resume analysis as <strong>{data.role}</strong></p>
        </div> */}

        <div className="roadmap-header " style={{marginBottom: 0}}>
          <h1>Hey {firstName}, <span style={{color:'var(--primary)'}}>here is your salary overview.</span></h1>
          <p>Based on your resume analysis as <strong>{data.role}</strong></p>
        </div>
        
        <div className="resume-source-card">
          <div className="source-icon">📄</div>
          <div>
            <h4 style={{margin:0, fontSize:'14px', color:'var(--text-main)'}}>Resume-based Analysis</h4>
            <span style={{fontSize:'12px', color:'var(--text-light)'}}>Last analyzed: Today</span>
          </div>
          <button className="arrow-btn">›</button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="salary-grid">
        
        {/* Left Column */}
        <div className="left-column">
          <MarketRangeCard 
            min={data.min} 
            max={data.max} 
            avg={data.avg} 
            current={data.expected} 
          />
          <SalaryCard salary={data.expected} />
        </div>

        {/* Right Column */}
        <div className="right-column">
          <ActionableInsights />
        </div>

      </div>
    </div>
  );
};

export default SalaryInsightsPage;