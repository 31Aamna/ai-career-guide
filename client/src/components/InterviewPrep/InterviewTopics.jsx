import React from 'react';
import Card from '../UI/Card';

//Interview Prep Page

const topics = [
  { id: 'Behavioral', title: 'Behavioral Questions', desc: 'Master STAR method', color: '#FFF7E8', icon: '🗣️' },
  { id: 'Coding Questions', title: 'Coding Questions', desc: 'Real interview problems', color: '#E6FAF5', icon: '💻' },
  { id: 'DSA', title: 'DSA', desc: 'Data Structures & Algorithms', color: '#FFF7E8', icon: '🔢' },
  { id: 'Technical Questions', title: 'Technical Questions', desc: 'Web, Backend, Cloud & more', color: '#E9E3FF', icon: '🛠️' },
  { id: 'HR', title: 'HR Interview', desc: 'Common HR questions', color: '#E6FAF5', icon: '🤝' },
  // { id: 'Company', title: 'Company Specific', desc: 'FAANG and top companies', color: '#E9E3FF', icon: '🏢' },
];

const InterviewTopics = ({ onSelect }) => (
  <div className="grid-4" style={{gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))'}}>
    {topics.map((t) => (
      <Card key={t.id} onClick={() => onSelect(t.id)} style={{cursor:'pointer', transition:'0.2s'}}>
        <div style={{width:'50px', height:'50px', borderRadius:'12px', background:t.color, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px', marginBottom:'15px'}}>{t.icon}</div>
        <h3>{t.title}</h3>
        <p style={{fontSize:'12px', marginBottom:'20px', marginTop:'5px'}}>{t.desc}</p>
        <div className="flex-between" style={{fontSize:'12px', fontWeight:'600', color:'var(--text-light)'}}>
          <span>25 Questions</span>
          <span>➜</span>
        </div>
      </Card>
    ))}
  </div>
);
export default InterviewTopics;