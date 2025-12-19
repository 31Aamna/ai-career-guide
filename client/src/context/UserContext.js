import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // 1. User State (Default Mock Data)
  const [user, setUser] = useState({
    name: 'Alex Johnson',
    email: 'alex@example.com',
    role: 'Frontend Developer',
    bio: 'Passionate developer looking to master React and Node.js.',
    avatar: 'A'
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);

  // 2. Initialize from Local Storage
  useEffect(() => {
    // Check Auth
    const storedUser = localStorage.getItem('careerai_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }

    // Check Onboarding
    const hasVisited = localStorage.getItem('careerai_visited');
    if (hasVisited) {
      setIsNewUser(false);
    } else {
      setIsNewUser(true);
    }
  }, []);

  // 3. Auth Functions
  const login = (email, password) => {
    // Mock Validation
    if (email === 'demo@career.ai' && password === 'demo') {
      setIsAuthenticated(true);
      return { success: true };
    }
    // Allow the default user to login for demo purposes
    if (email === user.email) {
      setIsAuthenticated(true);
      return { success: true };
    }
    return { success: false, message: "Invalid credentials (Try: demo@career.ai / demo)" };
  };

  const register = (name, email, password) => {
    const newUser = { ...user, name, email };
    setUser(newUser);
    setIsAuthenticated(true);
    setIsNewUser(true); // Show welcome screen for new signups
    localStorage.setItem('careerai_user', JSON.stringify(newUser));
    localStorage.setItem('careerai_visited', 'false'); 
  };

  const logout = () => {
    setIsAuthenticated(false);
    // We don't clear localStorage user here to keep the demo data persistent
  };

  const updateUserProfile = (updatedData) => {
    const newUser = { ...user, ...updatedData };
    setUser(newUser);
    localStorage.setItem('careerai_user', JSON.stringify(newUser));
  };

  // 4. Feature Functions
  const togglePremium = () => setIsPremium(prev => !prev);
  
  // FIX: This function was missing in the previous step
  const activatePremium = () => setIsPremium(true);
  
  const completeOnboarding = () => {
    setIsNewUser(false);
    localStorage.setItem('careerai_visited', 'true');
  };

  return (
    <UserContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isPremium, 
      isNewUser, 
      login, 
      register, 
      logout,
      updateUserProfile,
      togglePremium, 
      activatePremium, // Exported here for PaymentPage
      completeOnboarding 
    }}>
      {children}
    </UserContext.Provider>
  );
};