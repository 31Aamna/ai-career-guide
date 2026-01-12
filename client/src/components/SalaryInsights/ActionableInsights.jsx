import React from 'react';

const InsightItem = ({ icon, colorClass, title, sub, badge, desc }) => (
  <div className="insight-card">
    <div className="ic-header">
      <div className={`ic-icon ${colorClass}`}>{icon}</div>
      <div className="ic-content">
        <h4>{title}</h4>
        <p>{sub}</p>
      </div>
    </div>
    {badge && (
      <div className="ic-badge" style={{marginLeft: '66px', marginBottom:'10px'}}>
        {badge}
      </div>
    )}
    <div className="ic-desc">
      {desc}
    </div>
  </div>
);

const ActionableInsights = () => {
  return (
    <div>
      <div style={{marginBottom: '25px'}}>
        <h3 style={{margin: '0 0 8px 0', fontSize: '20px', color: 'var(--text-main)'}}>How to achieve this?</h3>
        <p style={{margin: 0, fontSize: '14px', color: 'var(--text-light)'}}>Actionable insights to reach your target.</p>
      </div>

      <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
        <InsightItem 
          icon="🚀" 
          colorClass="bg-red"
          title="Skill Upgrades"
          sub="Strong React & Next.js skills increased demand"
          badge="~4:6 Weeks"
          desc={<span>Learn <strong>TypeScript & Next.js</strong>. These are currently the highest-paying skills in the React ecosystem.</span>}
        />
        <InsightItem 
          icon="💼" 
          colorClass="bg-purple"
          title="Negotiation"
          sub={<span className="impact-tag" style={{background:'#FFF7E8', color:'#B7791F', padding:'2px 8px', borderRadius:'4px', fontSize:'11px'}}>🔥 Medium Impact</span>}
          desc="Don't share your current salary. Ask for the company's budget for the position first."
        />
        <InsightItem 
          icon="🌍" 
          colorClass="bg-green"
          title="Remote Opportunities"
          sub="Global Market Access"
          desc="Look for remote roles based in Tier-1 Cities (SF, NYC) to maximize compensation."
        />
        <InsightItem 
          icon="🔍" 
          colorClass="bg-orange"
          title="Resume Optimization"
          sub="Formatting & Keywords"
          desc="Highlight quantifiable achievements (e.g., 'Improved load time by 40%') rather than just duties."
        />
      </div>
    </div>
  );
};

export default ActionableInsights;