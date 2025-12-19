import React from 'react';
import Card from '../UI/Card';

const AnalysisResults = () => (
  <>
    <Card style={{display:'flex', alignItems:'center', gap:'30px', marginBottom:'20px'}}>
      <div style={{position:'relative', width:'100px', height:'100px'}}>
        <svg style={{transform:'rotate(-90deg)', width:'100%', height:'100%'}} viewBox="0 0 36 36">
          <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#eee" strokeWidth="3" />
          <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--orange)" strokeWidth="3" strokeDasharray="72, 100" />
        </svg>
        <span style={{position:'absolute', top:'35%', left:'30%', fontWeight:'bold', fontSize:'20px'}}>72%</span>
      </div>
      <div>
        <h2>ATS Compatibility Score</h2>
        <p>Your resume is Good, but needs a few tweaks.</p>
      </div>
      <div style={{marginLeft:'auto', fontSize:'50px', fontWeight:'800', color:'var(--orange)', opacity:0.2}}>B+</div>
    </Card>

    <div className="grid-2" style={{gridTemplateColumns:'1fr 1fr'}}>
      <Card>
        <h4 className="flex-row gap-10 mb-20"><span style={{background:'var(--red-bg)', color:'var(--red)', padding:'5px', borderRadius:'5px'}}>⚠️</span> Critical Improvements</h4>
        <ul style={{fontSize:'13px', lineHeight:'1.8', color:'var(--text-main)', paddingLeft:'20px'}}>
          <li>Missing Keywords: Add "CI/CD", "Agile".</li>
          <li>Quantify Impact: Add metrics to job descriptions.</li>
        </ul>
      </Card>
      <Card>
        <h4 className="flex-row gap-10 mb-20"><span style={{background:'var(--green-bg)', color:'var(--green)', padding:'5px', borderRadius:'5px'}}>✅</span> Formatting Check</h4>
        <ul style={{fontSize:'13px', lineHeight:'1.8', listStyle:'none', padding:0}}>
          <li><span style={{color:'var(--green)'}}>✓</span> File type is readable</li>
          <li><span style={{color:'var(--green)'}}>✓</span> Font size is consistent</li>
        </ul>
      </Card>
    </div>
  </>
);
export default AnalysisResults;