import React from 'react';
import Card from '../UI/Card';

const FeatureCards = () => {
  const features = [
    {
      icon: "✅", // Using Emoji to avoid installing Lucide/Icons for now
      title: "ATS Optimization",
      desc: "Ensure your resume is readable by automated systems.",
      bg: "#E6FAF5", // var(--green-bg)
      color: "var(--green)"
    },
    {
      icon: "📊", 
      title: "Skill Analysis",
      desc: "Identify missing skills and gap analysis.",
      bg: "#EFF6FF", // Blueish
      color: "var(--primary)"
    },
    {
      icon: "⚡", 
      title: "AI Suggestions",
      desc: "Get personalized recommendations for improvement.",
      bg: "#F3E8FF", // Purpleish
      color: "#7551FF"
    }
  ];

  return (
    <div className="grid-3" style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
      {features.map((f, index) => (
        <Card key={index} style={{ textAlign: 'center', padding: '25px 20px', display:'flex', flexDirection:'column', alignItems:'center' }}>
          <div style={{ 
            width: '50px', 
            height: '50px', 
            background: f.bg, 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: '15px',
            fontSize: '24px',
            color: f.color
          }}>
            {f.icon}
          </div>
          <h3 style={{ fontSize: '16px', marginBottom: '8px', color: 'var(--text-main)' }}>{f.title}</h3>
          <p style={{ fontSize: '13px', color: 'var(--text-light)', lineHeight: '1.5' }}>{f.desc}</p>
        </Card>
      ))}
    </div>
  );
};

export default FeatureCards;