import React, { useContext, useState } from 'react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { Settings, Bell } from 'lucide-react';

// --- SUB-COMPONENTS ---

const StatCard = ({ icon, color, label, value, sub, subColor, cornerIcon }) => (
  <Card style={{ display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', minWidth: 0, padding: '25px' }}>
    <div style={{
      width: '56px', height: '56px', borderRadius: '50%', 
      background: '#F4F7FE', display: 'flex', alignItems: 'center', justifyContent: 'center', 
      fontSize: '24px', marginRight: '15px', flexShrink: 0
    }}>
      <span style={{ color: color }}>{icon}</span>
    </div>
    <div style={{ minWidth: 0 }}>
      <p style={{ fontSize: '14px', color: 'var(--text-light)', marginBottom: '4px', whiteSpace: 'nowrap' }}>{label}</p>
      <h3 style={{ fontSize: '24px', color: 'var(--text-main)', margin: 0 }}>{value}</h3>
      {sub && <p style={{ fontSize: '12px', color: subColor, marginTop: '4px', fontWeight: 700 }}>{sub}</p>}
    </div>
    {cornerIcon && <div style={{position:'absolute', top:'15px', right:'15px', fontSize:'18px', opacity:0.3}}>{cornerIcon}</div>}
  </Card>
);

// Fixed ActionRow: Handles 'sub' or 'desc', and fixed border syntax
const ActionRow = ({ title, sub, desc, icon, bg, color, onClick }) => (
  <div 
    onClick={onClick}
    style={{
      display: 'flex', 
      alignItems: 'center', 
      padding: '20px', 
      background: 'var(--bg-white)', 
      borderRadius: '16px', 
      marginBottom: '15px', 
      cursor: 'pointer', 
      boxShadow: 'var(--card-shadow)', 
      transition: '0.2s',
      justifyContent: 'space-between', 
      border: '1px solid var(--border-color)'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
  >
    <div style={{display:'flex', alignItems:'center', gap:'20px'}}>
      <div style={{
        width:'60px', height:'60px', borderRadius:'15px', background: bg, 
        display:'flex', alignItems:'center', justifyContent:'center', 
        fontSize:'28px', color: color
      }}>
        {icon}
      </div>
      <div>
        <h4 style={{fontSize:'16px', color:'var(--text-main)', margin:'0 0 5px 0'}}>{title}</h4>
        <p style={{fontSize:'12px', color:'var(--text-light)', margin:0}}>{sub || desc}</p>
      </div>
    </div>
    <span style={{color:'var(--text-light)', fontSize:'24px'}}>➜</span>
  </div>
);

const StepItem = ({ num, title, desc, active }) => (
  <div style={{ display: 'flex', gap: '15px', position: 'relative', paddingBottom: '30px' }}>
    <div style={{
      position: 'absolute', left: '15px', top: '35px', bottom: '-5px', width: '2px', 
      background: 'var(--bg-page)', zIndex: 0 
    }}></div>
    <div style={{
      width: '32px', height: '32px', flexShrink: 0, borderRadius: '50%', 
      background: active ? 'var(--primary)' : 'var(--bg-page)', 
      color: active ? 'white' : 'var(--text-light)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', 
      fontWeight: 'bold', fontSize: '14px', zIndex: 1
    }}>
      {num}
    </div>
    <div>
      <h5 style={{ fontSize: '14px', color: active ? 'var(--text-main)' : 'var(--text-light)', marginBottom: '4px', margin: 0 }}>{title}</h5>
      <p style={{ fontSize: '12px', color: 'var(--text-light)', margin: 0 }}>{desc}</p>
    </div>
  </div>
);

// --- MAIN DASHBOARD ---

const Dashboard = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isNewUser, markFeatureUsed, user } = useContext(UserContext);
  
  const showWelcome = !isAuthenticated || (isAuthenticated && isNewUser);

  const handleStartFeature = (path) => {
    if (isAuthenticated) {
      markFeatureUsed();
      navigate(path);
    } else {
      navigate('/login');
    }
  };

  const handleSkip = () => {
    if (isAuthenticated) {
      markFeatureUsed();
    } else {
      navigate('/login');
    }
  };

  // --- VIEW 1: WELCOME DASHBOARD ---
  if (showWelcome) {
    return (
      <div>
        <div style={{
          background: 'linear-gradient(135deg, #868CFF 0%, #4318FF 100%)',
          borderRadius: '24px', padding: '40px 50px', color: 'white', marginBottom: '40px',
          display: 'flex', alignItems: 'center', gap: '30px', minHeight: '180px', 
          boxShadow: '0 10px 30px rgba(67, 24, 255, 0.3)'
        }}>
          <div style={{background: 'rgba(255,255,255,0.2)', padding:'15px', borderRadius:'16px', fontSize:'32px'}}>🚀</div>
          <div>
            <h2 style={{fontSize: '32px', margin: 0, color: 'white', fontWeight: 800}}>Welcome to CareerAI!</h2>
            <p style={{marginTop:'10px', fontSize:'16px', opacity:0.9, lineHeight: 1.5}}>Let's accelerate your career journey with AI-powered insights.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px', alignItems: 'start' }}>
          
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <h3 style={{color: 'var(--text-main)', fontSize: '20px'}}>Get Started</h3>
            
            <ActionRow 
              icon="📤" bg="#FCE7F3" color="#D61F69" 
              title="Upload Your Resume" desc="Get instant ATS score & feedback" 
              onClick={() => handleStartFeature('/resume')} 
            />
            <ActionRow 
              icon="💲" bg="#DEF7EC" color="#0E9F6E" 
              title="Explore Salary Insights" desc="Discover market rates & target salary" 
              onClick={() => handleStartFeature('/salary')} 
            />
            <ActionRow 
              icon="🗺️" bg="#E3F2FD" color="#3F83F8" 
              title="Build Your Roadmap" desc="Create a personalized learning path" 
              onClick={() => handleStartFeature('/roadmap')} 
            />

            <div style={{ marginTop: '20px' }}>
              <h3 style={{ display:'flex', alignItems:'center', gap:'10px', color: 'var(--text-main)', fontSize: '20px', marginBottom: '20px' }}>
                <span>💡</span> Quick Tips
              </h3>
              <div style={{ 
                background: 'var(--bg-white)', padding: '30px', borderRadius: '20px', 
                borderLeft: '5px solid var(--primary)', boxShadow: 'var(--card-shadow)' 
              }}>
                <ul style={{ paddingLeft: '20px', margin: 0, color: 'var(--text-main)', fontSize: '14px', lineHeight: '2' }}>
                  <li>Upload your resume first to get personalized insights</li>
                  <li>Set clear career goals to get relevant roadmap suggestions</li>
                  <li>Check salary insights to understand your market value</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <Card style={{ height: '100%', minHeight: '550px', padding: '30px' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <div style={{ width: '70px', height: '70px', background: 'var(--purple-light)', color: 'var(--primary)', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px' }}>🎓</div>
              <h3 style={{color: 'var(--text-main)', fontSize: '20px'}}>New to CareerAI?</h3>
              <p style={{ fontSize: '13px', marginTop: '8px', color: 'var(--text-light)' }}>Follow these steps to get the most out of your experience</p>
            </div>
            <div style={{ padding: '0 10px' }}>
              <StepItem num="1" title="Upload Resume" desc="Get ATS score & feedback" active={true} />
              <StepItem num="2" title="Set Career Goals" desc="Define target role & salary" active={false} />
              <StepItem num="3" title="Follow Roadmap" desc="Learn skills & track progress" active={false} />
              <StepItem num="4" title="Practice Interviews" desc="Prepare with AI coaching" active={false} />
            </div>
             <div style={{textAlign:'center', marginTop:'30px'}}>
               <Button variant="outline" fullWidth onClick={handleSkip}>
                 {isAuthenticated ? "Skip Onboarding" : "Log In to Continue"}
               </Button>
             </div>
          </Card>
        </div>
      </div>
    );
  }

  // --- VIEW 2: STANDARD DASHBOARD ---
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '32px', color: 'var(--text-main)', margin: '0 0 8px 0' }}>Hello, {user?.name?.split(' ')[0] || 'User'}! 👋</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '16px', margin: 0 }}>Here is your daily overview.</p>
        </div>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ width: '45px', height: '45px', background: 'var(--bg-white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--card-shadow)', cursor: 'pointer', position: 'relative' }}>
             <Bell size={22} color="#A3AED0" />
             <div style={{position:'absolute', top:0, right:0, width:'12px', height:'12px', background:'red', borderRadius:'50%', border:'2px solid white'}}></div>
          </div>
          <div style={{ width: '45px', height: '45px', background: 'var(--bg-white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--card-shadow)', cursor: 'pointer' }} onClick={() => navigate('/settings')}>
             <Settings size={22} color="#A3AED0" />
          </div>
        </div>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '25px', 
        marginBottom: '40px' 
      }}>
        <StatCard icon="📊" color="var(--primary)" label="ATS Score" value="87%" sub="+5% this week" subColor="var(--green)" cornerIcon="📈" />
        <StatCard icon="💰" color="var(--green)" label="Target Salary" value="$98K" sub="Market avg: $95K" subColor="var(--text-light)" cornerIcon="💵" />
        <StatCard icon="🚧" color="var(--orange)" label="Progress" value="38%" sub="Career roadmap" subColor="var(--text-light)" cornerIcon="🎯" />
        <StatCard icon="🏆" color="var(--purple)" label="Achievements" value="12" sub="Skills unlocked" subColor="var(--text-light)" cornerIcon="🎗️" />
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '2fr 1fr', 
        gap: '30px', 
        alignItems: 'start' 
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <h3 style={{fontSize: '20px', color: 'var(--text-main)', fontWeight: 700, margin: 0}}>Quick Actions</h3>
          <ActionRow icon="📄" bg="#4318FF" color="white" title="Resume Analyzer" desc="Optimize for ATS systems • Ready to scan" onClick={() => handleStartFeature('/resume')} />
          <ActionRow icon="🗺️" bg="#FFB547" color="white" title="Career Roadmap" desc="Personalized learning path • 38% complete" onClick={() => handleStartFeature('/roadmap')} />
          <ActionRow icon="💰" bg="#05CD99" color="white" title="Salary Insights" desc="Check market rates • View Report" onClick={() => handleStartFeature('/salary')} />
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <h3 style={{fontSize: '20px', color: 'var(--text-main)', fontWeight: 700, margin: 0}}>Recent Activity</h3>
          <Card style={{ padding: '30px', background: 'var(--bg-white)', height: '100%' }}>
             <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', alignItems: 'flex-start' }}>
               <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--green)', marginTop: '6px', flexShrink: 0 }}></div>
               <div>
                 <h5 style={{ fontSize: '15px', margin: '0 0 5px 0', color: 'var(--text-main)' }}>Resume analysis completed</h5>
                 <p style={{ fontSize: '13px', color: 'var(--text-light)', margin: 0 }}>Score improved by 5 points</p>
                 <span style={{ fontSize: '11px', color: 'var(--text-light)', fontWeight: 700, marginTop: '5px', display: 'block' }}>2 hours ago</span>
               </div>
            </div>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', alignItems: 'flex-start' }}>
               <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--primary)', marginTop: '6px', flexShrink: 0 }}></div>
               <div>
                 <h5 style={{ fontSize: '15px', margin: '0 0 5px 0', color: 'var(--text-main)' }}>New skill recommendation</h5>
                 <p style={{ fontSize: '13px', color: 'var(--text-light)', margin: 0 }}>TypeScript added to roadmap</p>
                 <span style={{ fontSize: '11px', color: 'var(--text-light)', fontWeight: 700, marginTop: '5px', display: 'block' }}>1 day ago</span>
               </div>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
               <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--purple)', marginTop: '6px', flexShrink: 0 }}></div>
               <div>
                 <h5 style={{ fontSize: '15px', margin: '0 0 5px 0', color: 'var(--text-main)' }}>Salary data updated</h5>
                 <p style={{ fontSize: '13px', color: 'var(--text-light)', margin: 0 }}>Market rates increased 3%</p>
                 <span style={{ fontSize: '11px', color: 'var(--text-light)', fontWeight: 700, marginTop: '5px', display: 'block' }}>3 days ago</span>
               </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;