import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, register } = useContext(UserContext);
  
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear error on typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isLoginMode) {
      // LOGIN LOGIC
      const result = login(formData.email, formData.password);
      if (result.success) {
        navigate('/');
      } else {
        setError(result.message);
      }
    } else {
      // SIGNUP LOGIC
      if (!formData.name || !formData.email || !formData.password) {
        setError("All fields are required.");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters.");
        return;
      }
      
      register(formData.name, formData.email, formData.password);
      navigate('/');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: 'var(--bg-page)' }}>
      <Card style={{ width: '100%', maxWidth: '450px', padding: '40px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{ fontSize: '40px', marginBottom: '10px' }}>🧠</div>
          <h2 style={{ color: 'var(--text-main)' }}>
            {isLoginMode ? 'Welcome Back!' : 'Create Account'}
          </h2>
          <p style={{ color: 'var(--text-light)', fontSize: '14px' }}>
            {isLoginMode ? 'Enter your details to access your career hub.' : 'Start your AI-powered career journey.'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {!isLoginMode && (
            <div>
              <label style={{ fontSize: '12px', fontWeight: '600', display: 'block', marginBottom: '5px' }}>Full Name</label>
              <input 
                name="name" 
                type="text" 
                placeholder="ex. Alex Johnson"
                value={formData.name}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
          )}

          <div>
            <label style={{ fontSize: '12px', fontWeight: '600', display: 'block', marginBottom: '5px' }}>Email Address</label>
            <input 
              name="email" 
              type="email" 
              placeholder="ex. alex@example.com"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={{ fontSize: '12px', fontWeight: '600', display: 'block', marginBottom: '5px' }}>Password</label>
            <input 
              name="password" 
              type="password" 
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          {!isLoginMode && (
            <div>
              <label style={{ fontSize: '12px', fontWeight: '600', display: 'block', marginBottom: '5px' }}>Confirm Password</label>
              <input 
                name="confirmPassword" 
                type="password" 
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
          )}

          {error && <p style={{ color: 'var(--red)', fontSize: '12px', textAlign: 'center' }}>{error}</p>}

          <Button fullWidth>{isLoginMode ? 'Sign In' : 'Create Account'}</Button>
        </form>

        {/* Footer Toggle */}
        <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '13px', color: 'var(--text-light)' }}>
          {isLoginMode ? "Don't have an account? " : "Already have an account? "}
          <span 
            onClick={() => setIsLoginMode(!isLoginMode)} 
            style={{ color: 'var(--primary)', fontWeight: 'bold', cursor: 'pointer' }}
          >
            {isLoginMode ? 'Sign Up' : 'Log In'}
          </span>
        </div>

      </Card>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '12px 15px',
  borderRadius: '12px',
  border: '1px solid #E0E5F2',
  fontSize: '14px',
  outline: 'none',
  background: '#F9FAFB',
  boxSizing: 'border-box'
};

export default LoginPage;