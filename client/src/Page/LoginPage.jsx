import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Button from '../components/UI/Button';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const result = login(formData.email, formData.password);
      
      if (result.success) {
        navigate('/'); 
      } else {
        setError(result.message);
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div className="login-page">
      
      {/* LEFT SIDE: FORM */}
      <div className="login-left">
        <div className="brand-header">
          <span style={{fontSize: '28px'}}>🧠</span>
          <h3 style={{margin:0, color:'var(--text-main)'}}>CareerAI</h3>
        </div>

        <div className="form-wrapper">
          <h1 className="welcome-title">Welcome back</h1>
          <p className="welcome-sub">Please enter your details to sign in.</p>

          <form onSubmit={handleSubmit}>
            
            <div className="form-group">
              <label>Email address</label>
              <input 
                type="email" 
                name="email"
                placeholder="Enter your email" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                name="password"
                placeholder="••••••••" 
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-actions">
              <label className="checkbox-container">
                <input type="checkbox" />
                <span>Remember for 30 days</span>
              </label>
              <a href="#" className="forgot-pass">Forgot password?</a>
            </div>

            {error && <div className="error-msg">{error}</div>}

            <Button fullWidth style={{height: '48px', fontSize: '16px', marginTop: '20px'}}>
              {loading ? 'Signing in...' : 'Sign in'}
            </Button>

            <button type="button" className="google-btn">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="G" width="20" />
              Sign in with Google
            </button>

          </form>

          <p className="signup-link">
            Don't have an account? <span onClick={() => alert("Registration logic here")}>Sign up</span>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: IMAGE & GRADIENT */}
      <div className="login-right">
        <div className="image-overlay">
          <h2>Unlock your potential.</h2>
          <p>AI-driven insights to accelerate your career growth.</p>
        </div>
        
        {/* Updated Image: Abstract Network/AI Concept */}
        <img 
          src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2532&auto=format&fit=crop" 
          alt="AI Background" 
          className="bg-image"
        />
      </div>

    </div>
  );
};

export default LoginPage;