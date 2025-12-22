import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Mock User Database
  const mockUser = {
    email: 'alex@career.ai',
    password: 'password123',
    name: 'Alex Johnson',
    role: 'Frontend Developer',
    avatar: 'A'
  };

  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  
  // Logic: First time user vs Returning user
  // We simulate this: If they log in with the specific "demo" account, they are returning.
  // Any other valid login is treated as "First Time".
  const [isNewUser, setIsNewUser] = useState(true);

  useEffect(() => {
    // Check if session exists (Basic persistence)
    const storedAuth = localStorage.getItem('careerai_auth');
    if (storedAuth) {
      setUser(JSON.parse(storedAuth));
      setIsAuthenticated(true);
      
      // Check visited status
      const visited = localStorage.getItem('careerai_visited');
      setIsNewUser(!visited); 
    }
  }, []);

  const login = (email, password) => {
    // 1. Validation Logic
    if (email === mockUser.email && password === mockUser.password) {
      // Success: Returning User Scenario
      const userData = { ...mockUser };
      setUser(userData);
      setIsAuthenticated(true);
      setIsNewUser(false); // They have an account, so show standard dash
      localStorage.setItem('careerai_auth', JSON.stringify(userData));
      return { success: true };
    } 
    
    // 2. Allow a "New User" test case
    if (email.includes('@') && password.length >= 6) {
      // Success: New User Scenario
      const newUser = { name: 'New User', email, role: 'Aspiring Dev', avatar: 'N' };
      setUser(newUser);
      setIsAuthenticated(true);
      setIsNewUser(true); // Show Welcome Dash
      localStorage.setItem('careerai_auth', JSON.stringify(newUser));
      return { success: true };
    }

    return { success: false, message: "Invalid credentials. Try alex@career.ai / password123" };
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('careerai_auth');
  };

  const togglePremium = () => setIsPremium(prev => !prev);
  const activatePremium = () => setIsPremium(true);
  
  const completeOnboarding = () => {
    setIsNewUser(false);
    localStorage.setItem('careerai_visited', 'true');
  };

  const updateUserProfile = (data) => setUser(prev => ({ ...prev, ...data }));

  return (
    <UserContext.Provider value={{ 
      user, isAuthenticated, isPremium, isNewUser, 
      login, logout, togglePremium, activatePremium, completeOnboarding, updateUserProfile 
    }}>
      {children}
    </UserContext.Provider>
  );
};