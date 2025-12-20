import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

const CodingPractice = () => (
  <Card style={{maxWidth:'800px', margin:'0 auto'}}>
    <div className="flex-between mb-20">
      <h2>Two Sum <span style={{fontSize:'12px', background:'var(--green-bg)', color:'var(--green)', padding:'4px 8px', borderRadius:'10px'}}>EASY</span></h2>
    </div>
    <p className="mb-20">Given an array of integers nums and an integer target, return indices of the two numbers.</p>
    <div className="flex-row gap-10 mb-20"><Button variant="outline">Hint</Button><Button variant="outline">Solution</Button></div>
    <div style={{background:'#1B254B', color:'#A3AED0', padding:'25px', borderRadius:'15px', fontFamily:'monospace', fontSize:'14px', lineHeight:'1.6'}}>
      <span style={{color:'var(--primary)'}}>function</span> twoSum(nums, target) {'{'}<br/>
      &nbsp;&nbsp;const map = new Map();<br/>
      &nbsp;&nbsp;// Logic here...<br/>
      {'}'}
    </div>
    <div className="flex-between mt-20" style={{marginTop:'30px'}}><Button variant="outline">Previous</Button><Button>Next ➜</Button></div>
  </Card>
);
export default CodingPractice;