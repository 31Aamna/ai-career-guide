import React, { useContext } from 'react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { 
  Settings, Bell, Rocket, GraduationCap, 
  ArrowRight, TrendingUp, DollarSign, Target, Award 
} from 'lucide-react';

// --- THEME-AWARE SUB-COMPONENTS ---

const StatCard = ({ icon, color, label, value, sub, subColor, theme }) => (
  <Card style={{ 
    display: 'flex', 
    alignItems: 'center', 
    padding: '25px',
    background: theme.card,
    border: `1px solid ${theme.border}`,
    backdropFilter: theme.isDarkMode ? 'blur(10px)' : 'none',
    boxShadow: theme.isDarkMode ? 'none' : '0px 18px 40px rgba(112, 144, 176, 0.12)'
  }}>
    <div style={{
      width: '56px', height: '56px', borderRadius: '50%', 
      background: theme.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', 
      fontSize: '24px', marginRight: '15px', flexShrink: 0
    }}>
      <span style={{ color: color }}>{icon}</span>
    </div>
    <div style={{ minWidth: 0 }}>
      <p style={{ fontSize: '13px', color: theme.textLight, marginBottom: '4px' }}>{label}</p>
      <h3 style={{ fontSize: '24px', color: theme.textMain, margin: 0, fontWeight: '800' }}>{value}</h3>
      {sub && <p style={{ fontSize: '11px', color: subColor, marginTop: '4px', fontWeight: 700 }}>{sub}</p>}
    </div>
  </Card>
);

const ActionRow = ({ title, sub, icon, bg, color, onClick, theme }) => (
  <div 
    onClick={onClick}
    style={{
      display: 'flex', alignItems: 'center', padding: '18px 22px', 
      background: theme.card, borderRadius: '20px', marginBottom: '15px', 
      cursor: 'pointer', transition: '0.3s', justifyContent: 'space-between', 
      border: `1px solid ${theme.border}`, backdropFilter: theme.isDarkMode ? 'blur(10px)' : 'none'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
  >
    <div style={{display:'flex', alignItems:'center', gap:'18px'}}>
      <div style={{
        width:'52px', height:'52px', borderRadius:'14px', background: bg, 
        display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px', color: color
      }}>
        {icon}
      </div>
      <div>
        <h4 style={{fontSize:'15px', color: theme.textMain, margin:'0 0 3px 0', fontWeight: '700'}}>{title}</h4>
        <p style={{fontSize: '12px', color: theme.textLight, margin:0}}>{sub}</p>
      </div>
    </div>
    <ArrowRight size={18} color={theme.textLight} />
  </div>
);

// --- MAIN DASHBOARD ---

const Dashboard = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isNewUser, markFeatureUsed, user, isDarkMode } = useContext(UserContext);
  
  // --- DYNAMIC THEME ENGINE ---
  const theme = {
    isDarkMode,
    bg: isDarkMode ? 'linear-gradient(135deg, #0B1437 0%, #111C44 100%)' : '#F4F7FE',
    card: isDarkMode ? 'rgba(17, 28, 68, 0.7)' : '#FFFFFF',
    border: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#E0E5F2',
    textMain: isDarkMode ? '#FFFFFF' : '#1B2559',
    textLight: isDarkMode ? '#A3AED0' : '#888888',
    iconBg: isDarkMode ? '#1B254B' : '#F4F7FE'
  };

  const showWelcome = !isAuthenticated || (isAuthenticated && isNewUser);

  const handleStartFeature = (path) => {
    if (isAuthenticated) {
      markFeatureUsed();
      navigate(path);
    } else {
      navigate('/login');
    }
  };

<<<<<<< Updated upstream
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
          <Card  className="new-to-careerai" style={{ height: '100%', minHeight: '550px', padding: '30px' }}>
            <div style={{ textAlign: 'center' }}>
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
=======
>>>>>>> Stashed changes
  return (
    <div style={{ 
      background: theme.bg, 
      backgroundAttachment: 'fixed',
      minHeight: '100vh', 
      padding: '30px', 
      transition: '0.4s ease',
      color: theme.textMain 
    }}>
      
      {/* 1. TOP HEADER */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '30px', color: theme.textMain, margin: '0 0 5px 0', fontWeight: '800' }}>
            Hello, {user?.name?.split(' ')[0] || 'User'}! 👋
          </h1>
          <p style={{ color: theme.textLight, fontSize: '15px', margin: 0 }}>Welcome to your daily career overview.</p>
        </div>
        
        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{ width: '45px', height: '45px', background: theme.card, border: `1px solid ${theme.border}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
             <Bell size={20} color={theme.textLight} />
          </div>
          <div style={{ width: '45px', height: '45px', background: theme.card, border: `1px solid ${theme.border}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={() => navigate('/settings')}>
             <Settings size={20} color={theme.textLight} />
          </div>
        </div>
      </div>

      {showWelcome ? (
        /* WELCOME / GUEST VIEW */
        <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
          <div style={{
            background: 'linear-gradient(135deg, #868CFF 0%, #4318FF 100%)',
            borderRadius: '24px', padding: '40px', color: 'white', marginBottom: '40px',
            display: 'flex', alignItems: 'center', gap: '25px', boxShadow: '0 10px 30px rgba(67, 24, 255, 0.3)'
          }}>
            <div style={{background: 'rgba(255,255,255,0.2)', padding:'12px', borderRadius:'14px'}}><Rocket size={32} /></div>
            <div>
              <h2 style={{fontSize: '28px', margin: 0, fontWeight: 800}}>Kickstart Your Career</h2>
              <p style={{marginTop:'5px', fontSize:'15px', opacity:0.9}}>Upload your resume to see your first AI ATS score.</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
            <div>
               <h3 style={{color: theme.textMain, fontSize: '18px', fontWeight: 700, marginBottom: '20px'}}>Quick Onboarding</h3>
               <ActionRow theme={theme} icon="📄" bg="#E0E7FF" color="#4318FF" title="Upload Resume" sub="Get instant ATS feedback" onClick={() => handleStartFeature('/resume')} />
               <ActionRow theme={theme} icon="💰" bg="#D1FAE5" color="#05CD99" title="Check Salary" sub="Compare market rates" onClick={() => handleStartFeature('/salary')} />
               <ActionRow theme={theme} icon="🗺️" bg="#FEF3C7" color="#FFB547" title="Build Roadmap" sub="Create your learning path" onClick={() => handleStartFeature('/roadmap')} />
            </div>
            <Card style={{ padding: '30px', background: theme.card, border: `1px solid ${theme.border}`, textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', background: theme.iconBg, color: '#4318FF', borderRadius: '50%', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><GraduationCap size={30} /></div>
                <h4 style={{color: theme.textMain, fontWeight: 800}}>Professional Guide</h4>
                <p style={{fontSize: '13px', color: theme.textLight, lineHeight: 1.5}}>Login to save your resume history and track milestones.</p>
                <div style={{marginTop: '25px'}}>
                   <Button variant="primary" fullWidth onClick={() => navigate('/login')}>Login Now</Button>
                </div>
            </Card>
          </div>
        </div>
      ) : (
        /* STANDARD LOGGED-IN VIEW */
        <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
            <StatCard theme={theme} icon={<TrendingUp size={22}/>} color="#4318FF" label="ATS Score" value="87%" sub="+5% improved" subColor="#05CD99" />
            <StatCard theme={theme} icon={<DollarSign size={22}/>} color="#05CD99" label="Target Salary" value="$98K" sub="High potential" subColor={theme.textLight} />
            <StatCard theme={theme} icon={<Target size={22}/>} color="#FFB547" label="Progress" value="38%" sub="Roadmap active" subColor={theme.textLight} />
            <StatCard theme={theme} icon={<Award size={22}/>} color="#868CFF" label="Skills" value="12" sub="Certified" subColor={theme.textLight} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <h3 style={{fontSize: '18px', color: theme.textMain, fontWeight: 800, marginBottom: '5px'}}>Core Features</h3>
              <ActionRow theme={theme} icon="📄" bg="#4318FF" color="white" title="Analyze Resume" sub="Scan for ATS compliance" onClick={() => handleStartFeature('/resume')} />
              <ActionRow theme={theme} icon="🗺️" bg="#FFB547" color="white" title="My Roadmap" sub="Continue learning: React.js" onClick={() => handleStartFeature('/roadmap')} />
              <ActionRow theme={theme} icon="💰" bg="#05CD99" color="white" title="Salary Trends" sub="New data for 2026 available" onClick={() => handleStartFeature('/salary')} />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <h3 style={{fontSize: '18px', color: theme.textMain, fontWeight: 800, marginBottom: '5px'}}>Recent History</h3>
              <Card style={{ padding: '25px', background: theme.card, border: `1px solid ${theme.border}` }}>
                 {[
                   { title: "Review Complete", desc: "ATS score increased", time: "2h ago", dot: "#05CD99" },
                   { title: "Skill Added", desc: "TypeScript to Roadmap", time: "1d ago", dot: "#4318FF" },
                   { title: "Alert", desc: "Salary trends updated", time: "3d ago", dot: "#868CFF" }
                 ].map((item, i) => (
                   <div key={i} style={{ display: 'flex', gap: '15px', marginBottom: i === 2 ? 0 : '22px', alignItems: 'flex-start' }}>
                     <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: item.dot, marginTop: '4px', flexShrink: 0 }}></div>
                     <div>
                       <h5 style={{ fontSize: '14px', margin: '0 0 2px 0', color: theme.textMain, fontWeight: '700' }}>{item.title}</h5>
                       <p style={{ fontSize: '12px', color: theme.textLight, margin: 0 }}>{item.desc}</p>
                       <span style={{ fontSize: '10px', color: theme.textLight, fontWeight: 600, marginTop: '3px', display: 'block' }}>{item.time}</span>
                     </div>
                   </div>
                 ))}
              </Card>
            </div>
          </div>
        </div>
      )}
      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </div>
  );
};

export default Dashboard;