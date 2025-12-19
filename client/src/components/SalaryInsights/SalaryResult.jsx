import React from 'react';
import Card from '../UI/Card';

const SalaryResult = () => (
  <Card>
    <div className="flex-between mb-20">
      <h3>Market Average Range</h3>
      <span style={{color:'var(--text-light)'}}>ℹ️</span>
    </div>
    <div className="flex-between mb-10" style={{fontSize:'13px'}}>
      <span>Min <b>$60k</b></span>
      <span style={{color:'var(--primary)'}}>Avg <b>$95k</b></span>
      <span>Max <b>$150k+</b></span>
    </div>
    <div style={{height:'30px', background:'#F4F7FE', borderRadius:'15px', position:'relative', marginBottom:'20px'}}>
      <div style={{position:'absolute', left:'20%', width:'50%', height:'100%', background:'rgba(67, 24, 255, 0.1)', borderLeft:'2px solid var(--primary)', borderRight:'2px solid var(--primary)'}}></div>
      <div style={{position:'absolute', left:'70%', top:'-5px', height:'40px', width:'4px', background:'var(--green)', borderRadius:'2px'}}>
        <div style={{position:'absolute', top:'-25px', left:'-10px', background:'var(--green)', color:'white', fontSize:'10px', padding:'2px 5px', borderRadius:'4px'}}>You</div>
      </div>
    </div>
    <p style={{textAlign:'center', background:'#FAFCFE', padding:'10px', fontSize:'12px', borderRadius:'10px'}}>Most developers with your experience earn between $85k - $105k.</p>
  </Card>
);
export default SalaryResult;