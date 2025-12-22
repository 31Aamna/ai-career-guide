import React, { useState } from 'react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { salaryBaseData } from '../data/interviewData';

const SalaryInsightsPage = () => {
  const [role, setRole] = useState("Frontend Developer");
  const [exp, setExp] = useState(2);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const data = salaryBaseData[role];
    const estimated = data.base + (exp * data.multiplier);
    setResult(estimated);
  };

  return (
    <div>
      <div className="mb-30">
        <h1>Salary Insights</h1>
        <p>Based on market data</p>
      </div>
      <div className="grid-2">
        <div className="flex-col gap-20">
          <Card>
            <h3 className="mb-20">Calculate Market Value</h3>
            <div className="flex-col gap-20">
              <div>
                <label style={{fontSize:'12px', fontWeight:'bold', display:'block', marginBottom:'5px'}}>Job Role</label>
                <select value={role} onChange={(e) => setRole(e.target.value)} style={{width:'100%', padding:'10px', borderRadius:'10px', border:'1px solid #E0E5F2'}}>
                  {Object.keys(salaryBaseData).map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label style={{fontSize:'12px', fontWeight:'bold', display:'block', marginBottom:'5px'}}>Experience: {exp} Years</label>
                <input type="range" min="0" max="10" value={exp} onChange={(e)=>setExp(Number(e.target.value))} style={{width:'100%'}} />
              </div>
              <Button fullWidth onClick={calculate}>Estimate Salary</Button>
            </div>
          </Card>

          {result && (
            <Card style={{background:'linear-gradient(135deg, #fff 0%, #F6F8FD 100%)', border:'1px solid var(--primary)'}}>
              <p style={{fontSize:'12px', fontWeight:'600', textTransform:'uppercase'}}>Estimated Annual Salary</p>
              <h1 style={{fontSize:'42px', margin:'10px 0'}}>${result.toLocaleString()}<span style={{fontSize:'16px', color:'var(--text-light)'}}>/yr</span></h1>
              <div className="flex-between" style={{fontSize:'13px', color:'var(--text-light)'}}>
                 <span>Monthly: ${Math.floor(result/12).toLocaleString()}</span>
                 <span style={{color:'var(--green)', fontWeight:'bold'}}>High Confidence</span>
              </div>
            </Card>
          )}
        </div>
        
        {/* Tips Section from Screenshot */}
        <div className="flex-col gap-20">
          <Card>
            <h3 className="mb-20">How to achieve this?</h3>
            <div className="flex-row gap-15 mb-20">
              <div style={{width:'40px', height:'40px', background:'#EFF6FF', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center'}}>🚀</div>
              <div><h5 style={{fontSize:'14px'}}>Skill Upgrades</h5><p style={{fontSize:'12px', color:'var(--text-light)'}}>Learn TypeScript & Next.js.</p></div>
            </div>
            <div className="flex-row gap-15">
              <div style={{width:'40px', height:'40px', background:'#F3E8FF', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center'}}>💼</div>
              <div><h5 style={{fontSize:'14px'}}>Negotiation</h5><p style={{fontSize:'12px', color:'var(--text-light)'}}>Don't share current salary.</p></div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default SalaryInsightsPage;