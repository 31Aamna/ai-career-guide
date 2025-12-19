import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserContext, UserProvider } from './context/UserContext';

import Navbar from './components/Navbar/Navbar';
import Dashboard from './Page/Dashboard';
import ResumeAnalyzerPage from './Page/ResumeAnalyzerPage';
import SalaryInsightsPage from './Page/SalaryInsightsPage';
import InterviewPrepPage from './Page/InterviewPrepPage';
import PaymentPage from './Page/PaymentPage';
import LoginPage from './Page/LoginPage';
import SettingsPage from './Page/SettingsPage';
import NotificationsPage from './Page/NotificationsPage';

import './styles/global.css';

// Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(UserContext);
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// Layout Wrapper (Navbar + Content)
const AppLayout = ({ children }) => (
  <div className="app-layout">
    <Navbar />
    <main className="main-content">
      {children}
    </main>
  </div>
);

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      
      {/* Protected Routes */}
      <Route path="/" element={<ProtectedRoute><AppLayout><Dashboard /></AppLayout></ProtectedRoute>} />
      <Route path="/resume" element={<ProtectedRoute><AppLayout><ResumeAnalyzerPage /></AppLayout></ProtectedRoute>} />
      <Route path="/salary" element={<ProtectedRoute><AppLayout><SalaryInsightsPage /></AppLayout></ProtectedRoute>} />
      <Route path="/interview" element={<ProtectedRoute><AppLayout><InterviewPrepPage /></AppLayout></ProtectedRoute>} />
      <Route path="/payment" element={<ProtectedRoute><AppLayout><PaymentPage /></AppLayout></ProtectedRoute>} />
      <Route path="/settings" element={<ProtectedRoute><AppLayout><SettingsPage /></AppLayout></ProtectedRoute>} />
      <Route path="/notifications" element={<ProtectedRoute><AppLayout><NotificationsPage /></AppLayout></ProtectedRoute>} />
      
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

function App() {
  return (
    <UserProvider>
      <Router>
        <AppRoutes />
      </Router>
    </UserProvider>
  );
}

export default App;