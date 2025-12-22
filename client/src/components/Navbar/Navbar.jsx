import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './Navbar.css';

const Navbar = () => {
  const { isPremium, togglePremium, user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="logo-icon">C</div>
        <h2 style={{color: '#fff', margin:0}}>Career<span style={{fontWeight:400}}>AI</span></h2>
      </div>
      
      {/* User Profile - Now Clickable for Settings */}
      <div className="user-profile">
        <div className="avatar">{user.avatar || 'A'}</div>
        <div style={{flex: 1}}>
          <h4 style={{color:'#fff', margin:0, fontSize:'14px'}}>{user.name || 'User'}</h4>
          <span style={{fontSize:'11px', opacity:0.7, display:'block'}}>{user.role || 'Member'}</span>
        </div>
        
        {/* Settings & Notification Icons (Mini) */}
        <div style={{display:'flex', gap:'5px'}}>
           <div onClick={() => navigate('/notifications')} style={{cursor:'pointer', fontSize:'14px', opacity:0.8}}>🔔</div>
           <div onClick={() => navigate('/settings')} style={{cursor:'pointer', fontSize:'14px', opacity:0.8}}>⚙️</div>
        </div>
      </div>

      <nav className="nav-links">
        <NavLink to="/" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <span>📊</span> Dashboard
        </NavLink>
        <NavLink to="/resume" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <span>📄</span> Resume Analyzer
        </NavLink>
        <NavLink to="/roadmap" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <span>🗺️</span> Career Roadmap
        </NavLink>
        <NavLink to="/salary" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <span>💰</span> Salary Insights
        </NavLink>
        <NavLink to="/interview" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <span>🎙️</span> Interview Prep 
          {isPremium && <span className="badge">PRO</span>}
        </NavLink>
      </nav>

      <div style={{marginTop:'auto'}}>
        {!isPremium ? (
          <div className="premium-card">
            <div style={{fontSize:'20px'}}>👑</div>
            <h4 style={{color:'white', margin:'10px 0'}}>Upgrade to Pro</h4>
            <p style={{fontSize:'12px', color:'rgba(255,255,255,0.7)', marginBottom:'15px'}}>Unlock full potential</p>
            <button className="upgrade-btn" onClick={togglePremium}>Upgrade Now</button>
          </div>
        ) : (
          <div style={{textAlign:'center', color:'white', opacity:0.8, fontSize:'12px', padding:'20px'}}>
            ✅ Premium Active
          </div>
        )}
      </div>
    </aside>
  );
};
export default Navbar;