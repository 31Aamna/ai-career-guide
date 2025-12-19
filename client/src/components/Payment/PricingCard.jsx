import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

const PricingCard = ({ title, price, period, recommended }) => (
  <Card style={{position:'relative', border: recommended ? '2px solid var(--primary)' : '1px solid transparent', transform: recommended ? 'scale(1.05)' : 'none'}}>
    {recommended && <div style={{position:'absolute', top:'-12px', left:'50%', transform:'translateX(-50%)', background:'var(--primary)', color:'white', padding:'5px 15px', borderRadius:'20px', fontSize:'10px', fontWeight:'bold'}}>BEST VALUE</div>}
    <div style={{textAlign:'center', marginBottom:'20px'}}>
      <h4 style={{fontSize:'16px'}}>{title}</h4>
      <h1 style={{fontSize:'40px', margin:'10px 0'}}>${price}<span style={{fontSize:'14px', color:'var(--text-light)'}}>/{period}</span></h1>
    </div>
    <ul style={{listStyle:'none', padding:0, fontSize:'13px', lineHeight:'2.5', marginBottom:'30px'}}>
      <li>✅ Unlimited Scans</li>
      <li>✅ Detailed Roadmap</li>
      <li>✅ Interview Prep</li>
    </ul>
    <Button fullWidth variant={recommended ? 'primary' : 'outline'}>Choose Plan</Button>
  </Card>
);
export default PricingCard;