import React from 'react';
import Card from '../UI/Card';

const SalaryCard = () => (
  <Card style={{background:'linear-gradient(135deg, #fff 0%, #F6F8FD 100%)', border:'1px solid var(--primary)'}}>
    <div className="flex-between">
      <div>
        <p style={{fontSize:'12px', fontWeight:'600', textTransform:'uppercase'}}>Your Expected Salary</p>
        <h1 style={{fontSize:'42px', margin:'10px 0'}}>$120,000<span style={{fontSize:'16px', color:'var(--text-light)'}}>/yr</span></h1>
      </div>
      <div style={{background:'#FFF7E8', padding:'10px 20px', borderRadius:'30px', display:'flex', alignItems:'center', gap:'10px', border:'1px solid #FFB547'}}>
        <span>👑</span>
        <div><h4 style={{margin:0, color:'#B7791F'}}>Top 15%</h4><span style={{fontSize:'9px', color:'#B7791F'}}>HIGH EARNER</span></div>
      </div>
    </div>
    <div className="flex-row gap-10 mt-20" style={{color:'var(--green)', fontWeight:'600', fontSize:'13px', paddingTop:'20px', borderTop:'1px solid #E0E5F2'}}>
      <span>✅</span> Above Market Average
    </div>
  </Card>
);
export default SalaryCard;