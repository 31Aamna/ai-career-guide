import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Button from '../components/UI/Button';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, register } = useContext(UserContext);

  // State
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate Network Delay
    setTimeout(() => {
      if (isRegistering) {
        // --- REGISTER LOGIC ---
        if (formData.password !== formData.confirmPassword) {
          setError("Passwords do not match");
          setLoading(false);
          return;
        }
        if (formData.password.length < 6) {
          setError("Password must be at least 6 characters");
          setLoading(false);
          return;
        }
        register(formData.name, formData.email, formData.password);
        navigate('/'); // Go to Welcome Dashboard
      } else {
        // --- LOGIN LOGIC ---
        const result = login(formData.email, formData.password);
        if (result.success) {
          navigate('/');
        } else {
          setError(result.message);
        }
      }
      setLoading(false);
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
          <h1 className="welcome-title">
            {isRegistering ? 'Create an account' : 'Welcome back'}
          </h1>
          <p className="welcome-sub">
            {isRegistering ? 'Start your journey today.' : 'Please enter your details.'}
          </p>

          <form onSubmit={handleSubmit}>
            
            {isRegistering && (
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" name="name" placeholder="Alex Johnson" 
                  value={formData.name} onChange={handleChange} required 
                />
              </div>
            )}

            <div className="form-group">
              <label>Email address</label>
              <input 
                type="email" name="email" placeholder="Enter your email" 
                value={formData.email} onChange={handleChange} required 
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" name="password" placeholder="••••••••" 
                value={formData.password} onChange={handleChange} required 
              />
            </div>

            {isRegistering && (
              <div className="form-group">
                <label>Confirm Password</label>
                <input 
                  type="password" name="confirmPassword" placeholder="••••••••" 
                  value={formData.confirmPassword} onChange={handleChange} required 
                />
              </div>
            )}

            {!isRegistering && (
              <div className="form-actions">
                <label className="checkbox-container">
                  <input type="checkbox" />
                  <span>Remember for 30 days</span>
                </label>
                <span className="forgot-pass">Forgot password?</span>
              </div>
            )}

            {error && <div className="error-msg">{error}</div>}

            <Button fullWidth style={{height: '48px', fontSize: '16px', marginTop: '20px', background: '#4318FF'}}>
              {loading ? 'Processing...' : (isRegistering ? 'Sign Up' : 'Sign In')}
            </Button>

            <button type="button" className="google-btn" onClick={() => alert("Google Login (Mock)")}>
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="G" width="20" />
              {isRegistering ? 'Sign up with Google' : 'Sign in with Google'}
            </button>

          </form>

          <p className="signup-link">
            {isRegistering ? "Already have an account? " : "Don't have an account? "}
            <span onClick={() => { setIsRegistering(!isRegistering); setError(''); }}>
              {isRegistering ? 'Sign in' : 'Sign up'}
            </span>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: ILLUSTRATION */}
      <div className="login-right">
        {/* Abstract 3D Illustration */}
        <img 
          src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png" 
          alt="Login Illustration" 
          className="bg-image"
        />
      </div>

    </div>
  );
};

export default LoginPage;