import React from 'react';
import Card from '../UI/Card';
import { technicalDomains } from '../../data/interviewData';

const TechnicalDomains = ({ onSelectDomain, onBack }) => {
  return (
    <div>
      <div style={{textAlign:'center', marginBottom:'40px'}}>
        <h2 style={{fontSize:'28px', color:'var(--text-main)'}}>Technical Domains</h2>
        <p style={{color:'var(--text-light)'}}>Select a specific technology stack to practice</p>
      </div>

      <div className="grid-4" style={{gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))'}}>
        {/* Back Button Card */}
        <Card onClick={onBack} style={{cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', minHeight:'150px'}}>
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:'24px', marginBottom:'10px'}}>⬅️</div>
            <h4 style={{color:'var(--text-main)'}}>Go Back</h4>
          </div>
        </Card>

        {technicalDomains.map((domain) => (
          <Card key={domain.id} onClick={() => onSelectDomain(domain.id)} style={{cursor:'pointer', minHeight:'150px', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
            <div>
              <div style={{width:'40px', height:'40px', background:'#EFF6FF', borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'20px', marginBottom:'15px'}}>{domain.icon}</div>
              <h4 style={{fontSize:'16px', marginBottom:'5px'}}>{domain.id}</h4>
              <p style={{fontSize:'12px', color:'var(--text-light)'}}>{domain.desc}</p>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'20px', fontSize:'12px', fontWeight:'600'}}>
              <span>Start Quiz</span>
              <span>➜</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default TechnicalDomains;