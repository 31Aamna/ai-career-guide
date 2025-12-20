import React, { useContext } from 'react';
import PricingCard from '../components/Payment/PricingCard';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  // Now this will work because we added it to the Context above
  const { activatePremium } = useContext(UserContext); 
  const navigate = useNavigate();

  const handlePurchase = (plan) => {
    activatePremium(); // Sets isPremium = true
    alert(`Successfully upgraded to ${plan}! Premium features unlocked.`);
    navigate('/interview'); 
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      <span style={{ background: '#E9E3FF', color: 'var(--primary)', padding: '5px 15px', borderRadius: '20px', fontSize: '11px', fontWeight: '800' }}>UPGRADE TO PRO</span>
      <h1 style={{ fontSize: '36px', margin: '15px 0' }}>Invest in your Career 🚀</h1>
      <p style={{ color: 'var(--text-light)', marginBottom: '50px' }}>Unlock the full potential of CareerAI. Upgrade anytime.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto', alignItems: 'center' }}>
        <div onClick={() => handlePurchase('Starter')}><PricingCard plan="Starter" price="0" period="mo" /></div>
        <div onClick={() => handlePurchase('Pro Monthly')}><PricingCard plan="Pro Monthly" price="19" period="mo" /></div>
        <div onClick={() => handlePurchase('Pro Yearly')}><PricingCard plan="Pro Yearly" price="15" period="mo" recommended={true} /></div>
      </div>
    </div>
  );
};
export default PaymentPage;