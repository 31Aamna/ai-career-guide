import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const SettingsPage = () => {
  const { user, updateUserProfile, logout } = useContext(UserContext);
  const [formData, setFormData] = useState(user);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSaved(false);
  };

  const handleSave = () => {
    updateUserProfile(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div className="flex-between mb-30">
        <h1>Settings</h1>
      </div>

      <div className="grid-2">
        {/* Profile Card */}
        <div className="flex-col gap-20">
          <Card>
            <h3 className="mb-20">Profile Information</h3>
            <div className="flex-col gap-15">
              <div>
                <label style={labelStyle}>Full Name</label>
                <input name="name" value={formData.name} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Job Role</label>
                <input name="role" value={formData.role} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Bio</label>
                <textarea name="bio" rows="4" value={formData.bio} onChange={handleChange} style={{...inputStyle, resize:'none'}} />
              </div>
              
              <div className="flex-between">
                <Button onClick={handleSave}>{saved ? 'Saved! ✅' : 'Save Changes'}</Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Account Actions */}
        <div className="flex-col gap-20">
          <Card>
            <h3 className="mb-20">Account</h3>
            <div className="flex-row gap-15 mb-20">
              <div style={{ width: '50px', height: '50px', background: '#E0E5F2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '20px', color: 'var(--text-main)' }}>
                {user.avatar || 'A'}
              </div>
              <div>
                <h4 style={{ fontSize: '14px' }}>{user.email}</h4>
                <p style={{ fontSize: '11px' }}>Personal Account</p>
              </div>
            </div>
            <Button variant="outline" fullWidth onClick={logout}>Log Out</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

const labelStyle = { fontSize: '12px', fontWeight: '600', display: 'block', marginBottom: '5px', color: 'var(--text-main)' };
const inputStyle = { width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid #E0E5F2', fontSize: '14px', boxSizing: 'border-box' };

export default SettingsPage;