import React, { useState, useContext } from 'react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

// Reusable Component for the "Get Started" rows
const ActionRow = ({ icon, color, bgColor, title, desc, tag, tagColor, onClick }) => (
  <div 
    onClick={onClick}
    style={{
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '20px', 
      background: 'white', 
      borderRadius: '16px', 
      marginBottom: '16px', 
      cursor: 'pointer',
      border: '1px solid #F4F7FE',
      transition: '0.2s',
      boxShadow: '0 4px 10px rgba(112, 144, 176, 0.08)'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
  >
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <div style={{
        width: '50px', height: '50px', 
        borderRadius: '12px', 
        background: bgColor, 
        color: color, 
        display: 'flex', alignItems: 'center', justifyContent: 'center', 
        fontSize: '24px'
      }}>
        {icon}
      </div>
      <div>
        <h4 style={{ fontSize: '16px', color: 'var(--text-main)', marginBottom: '4px' }}>{title}</h4>
        <p style={{ fontSize: '13px', color: 'var(--text-light)', marginBottom: '6px' }}>{desc}</p>
        {tag && (
          <span style={{
            fontSize: '10px', 
            fontWeight: '700', 
            color: tagColor, 
            background: `${tagColor}20`, // 20% opacity of the color
            padding: '4px 8px', 
            borderRadius: '6px'
          }}>
            {tag}
          </span>
        )}
      </div>
    </div>
    <span style={{ color: 'var(--text-light)', fontSize: '20px' }}>›</span>
  </div>
);

// Reusable Component for the Right Sidebar Stepper
const StepItem = ({ num, title, desc, active }) => (
  <div style={{ display: 'flex', gap: '15px', position: 'relative', paddingBottom: '30px' }}>
    {/* Vertical Line */}
    <div style={{
      position: 'absolute', left: '15px', top: '35px', bottom: '-5px', width: '2px', 
      background: '#F4F7FE', zIndex: 0 
    }}></div>
    
    <div style={{
      width: '32px', height: '32px', flexShrink: 0,
      borderRadius: '50%', 
      background: active ? 'var(--primary)' : '#F4F7FE', 
      color: active ? 'white' : 'var(--text-light)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', 
      fontWeight: 'bold', fontSize: '14px', zIndex: 1
    }}>
      {num}
    </div>
    <div>
      <h5 style={{ fontSize: '14px', color: active ? 'var(--text-main)' : 'var(--text-light)', marginBottom: '4px' }}>{title}</h5>
      <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>{desc}</p>
    </div>
  </div>
);

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Local state for First Time User View
  const [showWelcome, setShowWelcome] = useState(true);

  // --- VIEW 1: NEW USER DASHBOARD (Matches Screenshot) ---
  if (showWelcome) {
    return (
      <div>
        {/* Purple Hero Section (Kept from previous design as it fits well above) */}
        {/* You can remove this block if you only want the white section */}
        <div style={{
          background: 'linear-gradient(135deg, #868CFF 0%, #4318FF 100%)',
          borderRadius: '20px',
          padding: '30px',
          color: 'white',
          marginBottom: '30px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          minHeight: '160px',
          padding: '40px 30px'

        }}>
          <div style={{background: 'rgba(255,255,255,0.2)', padding:'10px', borderRadius:'12px', fontSize:'24px'}}>🚀</div>
          <div>
            <h2 style={{fontSize: '35px', margin: 0}}>Welcome to CareerAI!</h2>
            <p style={{color:'rgba(255,255,255,0.8)', fontSize:'20px'}}>Let's accelerate your career journey with AI-powered insights.</p>
          </div>
        </div>

        <div className="grid-2" style={{ gridTemplateColumns: '2fr 1fr', alignItems: 'start' }}>
          
          {/* LEFT COLUMN: GET STARTED & TIPS */}
          <div className="flex-col">
            <h3 className="mb-20">Get Started</h3>
            
            <ActionRow 
              icon="📤" 
              bgColor="#FCE7F3" // Light Pink
              color="#D61F69"   // Pink
              title="Upload Your Resume"
              desc="Get instant ATS score and personalized recommendations"
              tag="Step 1"
              tagColor="#D61F69"
              onClick={() => navigate('/resume')}
            />

            <ActionRow 
              icon="💲" 
              bgColor="#DEF7EC" // Light Green
              color="#0E9F6E"   // Green
              title="Explore Salary Insights"
              desc="Discover market rates and set your target salary"
              tag="Popular"
              tagColor="#0E9F6E"
              onClick={() => navigate('/salary')}
            />

            <ActionRow 
              icon="🗺️" 
              bgColor="#E3F2FD" // Light Blue
              color="#3F83F8"   // Blue
              title="Build Your Roadmap"
              desc="Create a personalized learning and career path"
              tag="Step 2"
              tagColor="#3F83F8"
              onClick={() => navigate('/roadmap')}
            />

            <div style={{ marginTop: '30px' }}>
              <h3 className="mb-20" style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                <span style={{ fontSize:'18px' }}>💡</span> Quick Tips
              </h3>
              <div style={{ background: '#F0F9FF', padding: '25px', borderRadius: '16px', borderLeft: '4px solid #3F83F8' }}>
                <ul style={{ paddingLeft: '20px', margin: 0, color: '#1E429F', fontSize: '14px', lineHeight: '1.8' }}>
                  <li>Upload your resume first to get personalized insights</li>
                  <li>Set clear career goals to get relevant roadmap suggestions</li>
                  <li>Check salary insights to understand your market value</li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: PROGRESS STEPPER */}
          <Card style={{ height: '100%' }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <div style={{ 
                width: '60px', height: '60px', background: '#F3E8FF', color: '#7E3AF2', 
                borderRadius: '50%', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' 
              }}>
                🎓
              </div>
              <h3>New to CareerAI?</h3>
              <p style={{ fontSize: '12px', marginTop: '5px' }}>Follow these steps to get the most out of your experience</p>
            </div>

            <div style={{ padding: '0 10px' }}>
              {/* Stepper Logic: Visual Only for First Time View */}
              <StepItem num="1" title="Upload Resume" desc="Get ATS score & feedback" active={true} />
              <StepItem num="2" title="Set Career Goals" desc="Define target role & salary" active={false} />
              <StepItem num="3" title="Follow Roadmap" desc="Learn skills & track progress" active={false} />
              <StepItem num="4" title="Practice Interviews" desc="Prepare with AI coaching" active={false} />
            </div>
            
            <Button fullWidth variant="outline" style={{marginTop: '20px'}} onClick={() => setShowWelcome(false)}>
              Skip Onboarding
            </Button>
          </Card>

        </div>
      </div>
    );
  }

  // --- VIEW 2: STANDARD DASHBOARD (Returning User - No Changes Here) ---
  return (
    <div>
      {/* ... (Keep existing Standard Dashboard code) ... */}
      <div className="mb-30">
        <h1>Hello, Alex! 👋</h1>
        <p>Let's advance your career today</p>
      </div>

      <div className="grid-4 mb-30">
        <Card style={{display:'flex', alignItems:'center', gap:'15px'}}>
           <div style={{width:'50px', height:'50px', borderRadius:'12px', background:'#4318FF', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px', color:'white'}}>📊</div>
           <div><p style={{fontSize:'12px', color:'var(--text-light)'}}>ATS Score</p><h3>87%</h3></div>
        </Card>
        <Card style={{display:'flex', alignItems:'center', gap:'15px'}}>
           <div style={{width:'50px', height:'50px', borderRadius:'12px', background:'#05CD99', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px', color:'white'}}>💰</div>
           <div><p style={{fontSize:'12px', color:'var(--text-light)'}}>Target Salary</p><h3>$98K</h3></div>
        </Card>
        <Card style={{display:'flex', alignItems:'center', gap:'15px'}}>
           <div style={{width:'50px', height:'50px', borderRadius:'12px', background:'#FFB547', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px', color:'white'}}>🚧</div>
           <div><p style={{fontSize:'12px', color:'var(--text-light)'}}>Progress</p><h3>38%</h3></div>
        </Card>
        <Card style={{display:'flex', alignItems:'center', gap:'15px'}}>
           <div style={{width:'50px', height:'50px', borderRadius:'12px', background:'#7551FF', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px', color:'white'}}>🏆</div>
           <div><p style={{fontSize:'12px', color:'var(--text-light)'}}>Achievements</p><h3>12</h3></div>
        </Card>
      </div>

      <div className="grid-2">
        <div className="flex-col gap-20">
          <h3>Quick Actions</h3>
          {[
            {icon:'📄', title:'Resume Analyzer', sub:'Optimize for ATS systems', color:'#4318FF', link:'/resume'},
            {icon:'🗺️', title:'Career Roadmap', sub:'Personalized learning path', color:'#FFB547', link:'/roadmap'},
            {icon:'💰', title:'Salary Insights', sub:'Check market rates', color:'#05CD99', link:'/salary'},
          ].map((item, i) => (
            <Card key={i} onClick={() => navigate(item.link)} style={{display:'flex', alignItems:'center', justifyContent:'space-between', cursor:'pointer'}}>
              <div className="flex-row gap-20">
                <div style={{width:'50px', height:'50px', borderRadius:'15px', background:item.color, color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px'}}>{item.icon}</div>
                <div><h4>{item.title}</h4><p style={{fontSize:'12px'}}>{item.sub}</p></div>
              </div>
              <span style={{color:'var(--text-light)'}}>➜</span>
            </Card>
          ))}
        </div>
        
        <div className="flex-col gap-20">
          <h3>Recent Activity</h3>
          <Card>
            <div className="flex-row gap-10 mb-20">
              <div style={{width:'10px', height:'10px', borderRadius:'50%', background:'var(--green)'}}></div>
              <div><h5 style={{margin:0}}>Resume Analysis</h5><span style={{fontSize:'10px', color:'var(--text-light)'}}>2 hours ago</span></div>
            </div>
            <div className="flex-row gap-10">
              <div style={{width:'10px', height:'10px', borderRadius:'50%', background:'var(--primary)'}}></div>
              <div><h5 style={{margin:0}}>New Skill Added</h5><span style={{fontSize:'10px', color:'var(--text-light)'}}>1 day ago</span></div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;