import React, { useState, useContext, useEffect, useRef } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { 
  User, HelpCircle, Shield, Camera, 
  Settings as SettingsIcon, ChevronDown, ChevronUp,
  LogOut, Lock, Globe, Database, Sun, Moon, CheckCircle2
} from 'lucide-react';

const SettingsPage = () => {
  const { user, updateUserProfile, isDarkMode, toggleTheme, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  
  const [activeTab, setActiveTab] = useState('identity');
  const [openFaq, setOpenFaq] = useState(0);
  const [isAgreed, setIsAgreed] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: user?.bio || '',
    avatar: user?.avatar || null
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    document.body.style.background = isDarkMode 
      ? "linear-gradient(180deg, #1A123D 0%, #0B0921 100%)" 
      : "linear-gradient(180deg, #7F6AFF 0%, #5E3BFF 100%)";
    document.body.style.backgroundAttachment = "fixed";
  }, [isDarkMode]);

  const theme = {
    card: isDarkMode ? 'rgba(17, 12, 51, 0.95)' : 'rgba(255, 255, 255, 1)',
    text: isDarkMode ? '#FFFFFF' : '#1A123D', // Dynamic text color for visibility
    textMuted: isDarkMode ? '#A3AED0' : '#5E3BFF',
    input: isDarkMode ? '#1B1545' : '#F4F7FE',
    border: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(94, 59, 255, 0.1)',
    navHover: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(94, 59, 255, 0.08)'
  };

  const faqData = [
    { q: "How does the AI analyze my resume?", a: "Our AI uses Advanced Natural Language Processing (NLP) to parse your resume and compare it against 50,000+ industry-specific job descriptions." },
    { q: "Is my personal data safe?", a: "Yes. We use AES-256 encryption at rest and TLS 1.3 for data in transit." },
    { q: "How often is the salary data updated?", a: "We refresh our salary database every 48 hours using live job market postings." },
    { q: "How do I export my Career Roadmap?", a: "Navigate to the Roadmap tab and click the 'Download PDF' icon." },
    { q: "Can the AI help me write a cover letter?", a: "Yes! There is a 'Generate Cover Letter' button in the Analyzer section." }
  ];

  // Updated SidebarItem with dynamic color for Light Mode visibility
  const SidebarItem = ({ id, icon, label, isDanger, onClick }) => (
    <div 
      onClick={onClick || (() => setActiveTab(id))}
      style={{
        display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 20px',
        borderRadius: '12px', cursor: 'pointer', marginBottom: '4px',
        color: isDanger ? '#FF4D4D' : (activeTab === id ? (isDarkMode ? '#FFFFFF' : '#5E3BFF') : theme.text), 
        background: activeTab === id ? theme.navHover : 'transparent',
        fontWeight: activeTab === id ? '700' : '500', transition: '0.2s',
        opacity: activeTab === id ? 1 : 0.6
      }}
    >
      {icon}
      <span style={{ fontSize: '15px' }}>{label}</span>
    </div>
  );

  return (
    <div style={{ display: 'flex', minHeight: '90vh', gap: '50px', padding: '40px' }}>
      
      {/* LOCAL NAV - Fixed text visibility for Light Mode */}
      <div style={{ width: '240px', flexShrink: 0 }}>
        <h2 style={{ color: isDarkMode ? 'white' : 'white', fontSize: '24px', fontWeight: '800', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <SettingsIcon /> Settings
        </h2>
        <nav>
          <SidebarItem id="identity" label="Profile" icon={<User size={18} />} />
          <SidebarItem id="faq" label="Help & FAQ" icon={<HelpCircle size={18} />} />
          <SidebarItem id="privacy" label="Data Privacy" icon={<Shield size={18} />} />
          <div style={{ margin: '20px 0', borderTop: '1px solid rgba(255,255,255,0.2)' }} />
          <SidebarItem id="theme" label={isDarkMode ? "Light Mode" : "Dark Mode"} icon={isDarkMode ? <Sun size={18} /> : <Moon size={18} />} onClick={toggleTheme} />
          <SidebarItem id="logout" label="Sign Out" icon={<LogOut size={18} />} isDanger onClick={() => {logout(); navigate('/');}} />
        </nav>
      </div>

      {/* MAIN CONTENT CARD */}
      <div style={{ flex: 1, maxWidth: '900px', background: theme.card, borderRadius: '35px', padding: '50px', border: `1px solid ${theme.border}`, boxShadow: '0 20px 50px rgba(0,0,0,0.1)', color: theme.text }}>
        
        {activeTab === 'identity' && (
          <div style={{ animation: 'fadeIn 0.3s' }}>
            <h1 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '8px' }}>Personal Identity</h1>
            <p style={{ color: theme.textMuted, marginBottom: '40px' }}>Manage how you appear to employers.</p>
            <div style={{ display: 'flex', gap: '40px' }}>
              <div onClick={() => fileInputRef.current.click()} style={{ position: 'relative', width: '130px', height: '130px', borderRadius: '40px', background: theme.input, cursor: 'pointer', overflow: 'hidden', border: `2px dashed ${theme.textMuted}` }}>
                {formData.avatar ? <img src={formData.avatar} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Camera size={30} /></div>}
                <input type="file" ref={fileInputRef} hidden onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => setFormData({...formData, avatar: reader.result});
                    reader.readAsDataURL(file);
                  }
                }} />
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input style={{...inputStyle, background: theme.input, color: theme.text, border: `1px solid ${theme.border}`}} placeholder="Full Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                <input style={{...inputStyle, background: theme.input, color: theme.text, border: `1px solid ${theme.border}`}} placeholder="Email Address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                <textarea style={{...inputStyle, background: theme.input, color: theme.text, border: `1px solid ${theme.border}`, resize: 'none'}} rows="4" placeholder="Professional Bio" value={formData.bio} onChange={e => setFormData({...formData, bio: e.target.value})} />
                <button style={btnStyle} onClick={() => {updateUserProfile(formData); alert('Saved!')}}>Save Profile</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'faq' && (
          <div style={{ animation: 'fadeIn 0.3s' }}>
            <h1 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '8px' }}>Frequently Asked</h1>
            <p style={{ color: theme.textMuted, marginBottom: '30px' }}>Quick answers about CareerAI.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {faqData.map((item, i) => (
                <div key={i} style={{ border: `1px solid ${theme.border}`, borderRadius: '20px', overflow: 'hidden' }}>
                  <div onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', background: openFaq === i ? theme.input : 'transparent' }}>
                    <span style={{ fontWeight: '700' }}>{item.q}</span>
                    {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                  {openFaq === i && <div style={{ padding: '0 20px 20px 20px', color: theme.textMuted, fontSize: '14px', lineHeight: '1.6' }}>{item.a}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'privacy' && (
          <div style={{ animation: 'fadeIn 0.3s' }}>
            <h1 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '8px' }}>Privacy & Terms</h1>
            <p style={{ color: theme.textMuted, marginBottom: '25px' }}>Last Updated: January 10, 2026</p>
            
            {/* Scrollbar Hidden here using className 'no-scrollbar' */}
            <div className="no-scrollbar" style={{ 
              height: '350px', 
              overflowY: 'auto', 
              border: `1px solid ${theme.border}`, 
              borderRadius: '20px', 
              padding: '25px', 
              background: theme.input, 
              marginBottom: '25px', 
              fontSize: '14px', 
              lineHeight: '1.8',
              msOverflowStyle: 'none',  /* IE and Edge */
              scrollbarWidth: 'none'    /* Firefox */
            }}>
              <h4 style={{ color: theme.text }}>1. Data Collection</h4>
              <p>We collect your professional data, including but not limited to, your uploaded resumes, LinkedIn profiles, and career goals. This information is processed by our CareerAI engine to provide personalized roadmap suggestions.</p>
              
              <h4 style={{ color: theme.text }}>2. AI Training Transparency</h4>
              <p>In 2026, we follow strict 'Clear-Model' transparency. Your de-identified data (removing name/email) may be used to improve general algorithm accuracy.</p>
              
              <h4 style={{ color: theme.text }}>3. Security Standards</h4>
              <p>All user data is siloed in private cloud clusters. We employ 24/7 automated threat monitoring and biometric-access protocols for our engineering teams.</p>
              
              <h4 style={{ color: theme.text }}>4. User Rights</h4>
              <p>You have the absolute right to 'The Right to be Forgotten'. Clicking 'Delete Account' in your dashboard will trigger a permanently purged from our servers.</p>
              
              <p>By using CareerAI, you acknowledge that career decisions should always be reviewed by a human professional.</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', background: theme.input, padding: '20px', borderRadius: '20px', cursor: 'pointer' }} onClick={() => setIsAgreed(!isAgreed)}>
              <div style={{ width: '24px', height: '24px', borderRadius: '6px', border: `2px solid ${isAgreed ? '#5E3BFF' : theme.textMuted}`, background: isAgreed ? '#5E3BFF' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                {isAgreed && <CheckCircle2 size={16} />}
              </div>
              <span style={{ fontWeight: '600' }}>I agree to the Privacy Policy.</span>
            </div>

            <div style={{ textAlign: 'right', marginTop: '30px' }}>
              <button disabled={!isAgreed} style={{ ...btnStyle, opacity: isAgreed ? 1 : 0.5 }} onClick={() => alert('Terms Accepted!')}>Accept & Save</button>
            </div>
          </div>
        )}

      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
        /* Hides scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

const inputStyle = { padding: '16px 20px', borderRadius: '15px', outline: 'none', fontSize: '15px', fontWeight: '500', transition: '0.3s' };
const btnStyle = { padding: '15px 40px', background: '#5E3BFF', color: 'white', border: 'none', borderRadius: '18px', fontWeight: '800', cursor: 'pointer', fontSize: '15px', boxShadow: '0 10px 20px rgba(94, 59, 255, 0.2)' };

export default SettingsPage;