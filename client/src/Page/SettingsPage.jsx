import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { 
  User, Bell, HelpCircle, Shield, Camera, 
  Settings as SettingsIcon, ChevronDown, ChevronUp,
  FileText, TrendingUp, Map, Users, CreditCard,
  EyeOff, Lock, Database
} from 'lucide-react';

const SettingsPage = () => {
  // 1. Get Global State (User Data & Theme Logic)
  const { user, updateUserProfile, isDarkMode, toggleTheme } = useContext(UserContext);
  
  // 2. Local State for Tabs and Forms
  const [activeTab, setActiveTab] = useState('identity');
  const [formData, setFormData] = useState({
    name: user.name || '',
    email: user.email || '',
    bio: user.bio || ''
  });

  // Sync form data if user context updates
  useEffect(() => {
    setFormData({
      name: user.name || '',
      email: user.email || '',
      bio: user.bio || ''
    });
  }, [user]);

  // --- NOTIFICATIONS DATA ---
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Resume Analysis", desc: "Get notified when AI finishes reviewing your resume.", icon: <FileText size={18} color="white"/>, bg: "#4318FF", enabled: true },
    { id: 2, title: "Salary Insights", desc: "New market data and salary trends for your role.", icon: <TrendingUp size={18} color="white"/>, bg: "#7551FF", enabled: true },
    { id: 3, title: "Roadmap Updates", desc: "Alerts when new certifications or paths are suggested.", icon: <Map size={18} color="white"/>, bg: "#4318FF", enabled: true },
    { id: 4, title: "Interview Preparation", desc: "Reminders for scheduled mock sessions.", icon: <Users size={18} color="white"/>, bg: "#E0E5F2", iconColor: "#A3AED0", enabled: false },
    { id: 5, title: "Subscription & Payments", desc: "Manage billing alerts and plan change notifications.", icon: <CreditCard size={18} color="white"/>, bg: "#4318FF", enabled: true }
  ]);

  // --- SUPPORT DATA ---
  const [openFaq, setOpenFaq] = useState(0);
  const faqs = [
    { q: "How does the AI Resume Review work?", a: "The AI analyzes your resume against industry-standard keywords and best practices, providing a percentage score and actionable suggestions." },
    { q: "Are mock interviews recorded?", a: "No, mock interviews are processed in real-time for feedback generation and are not stored permanently." },
    { q: "Is my personal career data safe?", a: "Yes, we use AES-256 encryption for all data at rest and TLS for data in transit." }
  ];

  // --- HANDLERS ---
  const handleIdentityChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleIdentitySave = () => {
    updateUserProfile(formData);
    alert("Profile details updated successfully!");
  };

  const toggleNotification = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, enabled: !n.enabled } : n));
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // --- SUB-COMPONENTS ---

  const SidebarItem = ({ id, icon, label }) => {
    const isActive = activeTab === id;
    return (
      <div 
        onClick={() => setActiveTab(id)}
        style={{
          display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 20px',
          borderRadius: '12px', cursor: 'pointer', marginBottom: '8px',
          color: isActive ? 'var(--primary)' : 'var(--text-light)',
          background: isActive ? 'var(--purple-light)' : 'transparent',
          fontWeight: isActive ? '700' : '500', transition: '0.2s', position: 'relative'
        }}
      >
        {icon}
        <span>{label}</span>
        {isActive && (
          <div style={{ position: 'absolute', right: '15px', width: '6px', height: '6px', background: 'var(--primary)', borderRadius: '50%' }}></div>
        )}
      </div>
    );
  };

  const ToggleSwitch = ({ enabled, onToggle }) => (
    <div 
      onClick={onToggle}
      style={{
        width: '44px', height: '24px', 
        background: enabled ? 'var(--primary)' : 'var(--text-light)', 
        borderRadius: '20px', position: 'relative', cursor: 'pointer', transition: '0.3s'
      }}
    >
      <div style={{
        width: '18px', height: '18px', background: 'white', borderRadius: '50%',
        position: 'absolute', top: '3px', 
        left: enabled ? '23px' : '3px', 
        transition: '0.3s', boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
      }}></div>
    </div>
  );

  // --- MAIN RENDER ---
  return (
    <div style={{ display: 'flex', minHeight: '85vh', gap: '40px', paddingBottom: '40px' }}>
      
      {/* --- SIDEBAR --- */}
      <div style={{ width: '240px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
          <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', boxShadow: '0 4px 10px rgba(67, 24, 255, 0.4)' }}>
            <SettingsIcon size={22} />
          </div>
          <div>
            <h2 style={{ fontSize: '18px', margin: 0, color: 'var(--text-main)' }}>Settings</h2>
            <span style={{ fontSize: '10px', fontWeight: '700', color: 'var(--text-light)' }}>V4.2 PRO</span>
          </div>
        </div>

        <nav>
          <SidebarItem id="identity" label="Identity" icon={<User size={18} />} />
          <SidebarItem id="alerts" label="Alerts" icon={<Bell size={18} />} />
          <SidebarItem id="support" label="Support" icon={<HelpCircle size={18} />} />
          <SidebarItem id="security" label="Security" icon={<Shield size={18} />} />
        </nav>
      </div>

      {/* --- CONTENT AREA --- */}
      <div style={{ flex: 1, maxWidth: '850px' }}>
        
        {/* === TAB 1: IDENTITY === */}
        {activeTab === 'identity' && (
          <div className="animate-fade-in">
            <div style={{ marginBottom: '30px' }}>
              <h1 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '8px' }}>Profile</h1>
              <p style={{ color: 'var(--text-light)', fontSize: '14px' }}>Manage your public identity and account details.</p>
            </div>
            <div style={{ height: '1px', background: '#E0E5F2', marginBottom: '40px' }}></div>

            <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
              {/* Profile Pic */}
              <div style={{ position: 'relative' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#E0E5F2', border: '4px solid var(--white)', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', color: '#A3AED0' }}>
                  {user.avatar || 'A'}
                </div>
                <button style={{ position: 'absolute', bottom: '0', right: '0', width: '30px', height: '30px', borderRadius: '50%', background: 'white', border: '1px solid #E0E5F2', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-main)', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                  <Camera size={14} />
                </button>
              </div>

              {/* Form Fields */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={labelStyle}>DISPLAY NAME</label>
                  <input name="name" type="text" value={formData.name} onChange={handleIdentityChange} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>EMAIL ADDRESS</label>
                  <input name="email" type="email" value={formData.email} onChange={handleIdentityChange} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>BIO DESCRIPTION</label>
                  <textarea name="bio" rows="3" value={formData.bio} onChange={handleIdentityChange} style={{ ...inputStyle, resize: 'none', lineHeight: '1.6' }} />
                </div>
              </div>
            </div>

            {/* DARK MODE TOGGLE */}
            <div style={{ marginTop: '30px', background: 'var(--bg-white)', border: '1px solid #E0E5F2', padding: '15px 20px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: 'var(--card-shadow)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '36px', height: '36px', background: 'var(--purple-light)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                  <SettingsIcon size={18} />
                </div>
                <div>
                  <h4 style={{ margin: 0, color: 'var(--text-main)', fontSize: '13px' }}>Appearance</h4>
                  <p style={{ margin: 0, color: 'var(--text-light)', fontSize: '11px' }}>Toggle between Light and Dark mode</p>
                </div>
              </div>
              <ToggleSwitch enabled={isDarkMode} onToggle={toggleTheme} />
            </div>
            
            <div style={{textAlign:'right', marginTop:'20px'}}>
               <button onClick={handleIdentitySave} style={{padding: '10px 25px', background: 'var(--primary)', color:'white', border:'none', borderRadius:'10px', fontWeight:600, cursor:'pointer'}}>Save Changes</button>
            </div>
          </div>
        )}

        {/* === TAB 2: ALERTS === */}
        {activeTab === 'alerts' && (
          <div className="animate-fade-in">
            <div style={{ marginBottom: '30px' }}>
              <h1 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '8px' }}>Notifications</h1>
              <p style={{ color: 'var(--text-light)', fontSize: '14px' }}>Customize how we keep you updated.</p>
            </div>
            <div style={{ height: '1px', background: '#E0E5F2', marginBottom: '30px' }}></div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {notifications.map(notif => (
                <div key={notif.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', border: '1px solid #E0E5F2', borderRadius: '16px', background: 'var(--bg-white)', boxShadow: '0 2px 5px rgba(0,0,0,0.02)' }}>
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: notif.enabled ? notif.bg : '#E0E5F2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: notif.enabled ? 'white' : '#A3AED0' }}>
                      {notif.icon}
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', color: 'var(--text-main)' }}>{notif.title}</h4>
                      <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-light)' }}>{notif.desc}</p>
                    </div>
                  </div>
                  <ToggleSwitch enabled={notif.enabled} onToggle={() => toggleNotification(notif.id)} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* === TAB 3: SUPPORT === */}
        {activeTab === 'support' && (
          <div className="animate-fade-in">
            <div style={{ marginBottom: '30px' }}>
              <h1 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '8px' }}>Support</h1>
              <p style={{ color: 'var(--text-light)', fontSize: '14px' }}>Common questions and platform help.</p>
            </div>
            <div style={{ height: '1px', background: '#E0E5F2', marginBottom: '30px' }}></div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {faqs.map((item, index) => (
                <div key={index} style={{ border: '1px solid #E0E5F2', borderRadius: '16px', background: 'var(--bg-white)', overflow: 'hidden' }}>
                  <div 
                    onClick={() => toggleFaq(index)}
                    style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', background: openFaq === index ? 'var(--bg-page)' : 'var(--bg-white)' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <div style={{ width: '32px', height: '32px', background: openFaq === index ? 'var(--primary)' : 'var(--purple-light)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: openFaq === index ? 'white' : 'var(--primary)' }}>
                        <HelpCircle size={16} />
                      </div>
                      <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text-main)' }}>{item.q}</span>
                    </div>
                    {openFaq === index ? <ChevronUp size={18} color="#A3AED0" /> : <ChevronDown size={18} color="#A3AED0" />}
                  </div>
                  {openFaq === index && (
                    <div style={{ padding: '0 20px 20px 67px', fontSize: '13px', color: 'var(--text-light)', lineHeight: '1.6' }}>
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* === TAB 4: SECURITY === */}
        {activeTab === 'security' && (
          <div className="animate-fade-in">
            <div style={{ marginBottom: '30px' }}>
              <h1 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '8px' }}>Security</h1>
              <p style={{ color: 'var(--text-light)', fontSize: '14px' }}>Data privacy and account security.</p>
            </div>
            <div style={{ height: '1px', background: '#E0E5F2', marginBottom: '30px' }}></div>

            <div style={{ background: 'var(--bg-white)', borderRadius: '20px', padding: '30px', boxShadow: 'var(--card-shadow)' }}>
              <h3 style={{ fontSize: '16px', marginBottom: '10px', color: 'var(--text-main)' }}>Privacy Policy Summary</h3>
              <p style={{ fontSize: '12px', color: 'var(--text-light)', marginBottom: '30px' }}>Highlights of how we handle your data.</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                <SecurityCard icon={<EyeOff size={24} />} title="NO SELLING" desc="We never sell your data." />
                <SecurityCard icon={<Lock size={24} />} title="AES-256" desc="Encrypted at rest & transit." />
                <SecurityCard icon={<Database size={24} />} title="FULL CONTROL" desc="Delete data anytime." />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <SecurityListItem num="1" title="Data Collection" desc="We collect information you provide directly when creating an account." />
                <SecurityListItem num="2" title="Use of Information" desc="Used solely to train personalized AI models for your career guidance." />
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

// --- HELPER COMPONENTS FOR SECURITY TAB ---
const SecurityCard = ({ icon, title, desc }) => (
  <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #E0E5F2', borderRadius: '16px', background: 'var(--bg-page)' }}>
    <div style={{ width: '50px', height: '50px', background: 'var(--bg-white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', color: 'var(--primary)', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
      {icon}
    </div>
    <h4 style={{ fontSize: '12px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '5px' }}>{title}</h4>
    <p style={{ fontSize: '10px', color: 'var(--text-light)' }}>{desc}</p>
  </div>
);

const SecurityListItem = ({ num, title, desc }) => (
  <div style={{ display: 'flex', gap: '20px' }}>
    <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '14px', flexShrink: 0 }}>
      {num}
    </div>
    <div>
      <h4 style={{ fontSize: '14px', color: 'var(--text-main)', marginBottom: '5px' }}>{title}</h4>
      <p style={{ fontSize: '12px', color: 'var(--text-light)', lineHeight: '1.6' }}>{desc}</p>
    </div>
  </div>
);

// --- CSS Objects for Consistency ---
const labelStyle = {
  display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--text-light)',
  marginBottom: '8px', letterSpacing: '0.5px'
};

const inputStyle = {
  width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #E0E5F2',
  fontSize: '14px', color: 'var(--text-main)', background: 'var(--bg-white)', outline: 'none',
  fontFamily: 'Inter, sans-serif'
};

export default SettingsPage;