import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // 1. User State
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [isNewUser, setIsNewUser] = useState(true); // Default to true

  // 2. Load from LocalStorage on Start
  useEffect(() => {
    const storedUser = localStorage.getItem('careerai_user');
    const onboarded = localStorage.getItem('careerai_onboarded');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
      // If they have onboarded before, they are NOT a new user
      setIsNewUser(onboarded !== 'true'); 
    }
  }, []);

  // 3. Login Action
  const login = (email, password) => {
    // Check against mock "Database" (LocalStorage)
    const dbUser = JSON.parse(localStorage.getItem('careerai_db_user'));
    
    // Check registered user OR hardcoded demo user
    if ((dbUser && dbUser.email === email && dbUser.password === password) || 
        (email === 'demo@test.com' && password === '123456')) {
      
      const userData = dbUser || { name: 'Demo User', email: 'demo@test.com', role: 'Dev' };
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem('careerai_user', JSON.stringify(userData));
      
      // Returning user? Check onboarding status
      const onboarded = localStorage.getItem('careerai_onboarded');
      setIsNewUser(onboarded !== 'true');
      
      return { success: true };
    }
    return { success: false, message: 'Invalid credentials' };
  };

  // 4. Register Action
  const register = (name, email, password) => {
    const newUser = { name, email, password, role: 'Aspiring Dev', avatar: 'N' };
    
    // Save to "Database" and "Session"
    localStorage.setItem('careerai_db_user', JSON.stringify(newUser));
    localStorage.setItem('careerai_user', JSON.stringify(newUser));
    
    setUser(newUser);
    setIsAuthenticated(true);
    
    // NEW REGISTRATION = NEW USER (Show Welcome Dashboard)
    setIsNewUser(true);
    localStorage.removeItem('careerai_onboarded');
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('careerai_user');
  };

  // Call this when they click a "Get Started" card
  const markFeatureUsed = () => {
    setIsNewUser(false);
    localStorage.setItem('careerai_onboarded', 'true');
  };

  const togglePremium = () => setIsPremium(p => !p);
  const activatePremium = () => setIsPremium(true);
  const updateUserProfile = (d) => setUser(prev => ({...prev, ...d}));

  // Dark Mode Logic (Optional if needed)
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const mode = !prev;
      if(mode) document.body.classList.add('dark-mode');
      else document.body.classList.remove('dark-mode');
      return mode;
    });
  };

  return (
    <UserContext.Provider value={{ 
      user, isAuthenticated, isPremium, isNewUser, isDarkMode,
      login, register, logout, markFeatureUsed, 
      togglePremium, activatePremium, updateUserProfile, toggleTheme
    }}>
      {children}
    </UserContext.Provider>
  );
};