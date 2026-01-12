import React from 'react';

const FeatureCards = () => {
  const features = [
    {
      icon: "✅",
      title: "ATS Optimization",
      desc: "Ensure your resume is readable by automated systems.",
      bg: "var(--green-bg)", 
      color: "var(--green)"
    },
    {
      icon: "📊", 
      title: "Skill Analysis",
      desc: "Identify missing skills and gap analysis.",
      bg: "var(--primary-light)",
      color: "var(--primary)"
    },
    {
      icon: "⚡", 
      title: "AI Suggestions",
      desc: "Get personalized recommendations for improvement.",
      bg: "#F3E8FF", // Light Purple
      color: "#7551FF"
    }
  ];

  return (
    <div className="features-grid">
      {features.map((f, index) => (
        <div key={index} className="feature-card-item">
          <div className="feature-icon-box" style={{ background: f.bg, color: f.color }}>
            {f.icon}
          </div>
          <h3 className="feature-title">{f.title}</h3>
          <p className="feature-desc">{f.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;