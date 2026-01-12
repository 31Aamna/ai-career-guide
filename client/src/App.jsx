import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserContext, UserProvider } from './context/UserContext';

// --- COMPONENTS ---
import Navbar from './components/Navbar/Navbar';

// --- PAGES ---
import Dashboard from './Page/Dashboard';
import ResumeAnalyzerPage from './Page/ResumeAnalyzerPage';
import SalaryInsightsPage from './Page/SalaryInsightsPage';
import InterviewPrepPage from './Page/InterviewPrepPage';
import PaymentPage from './Page/PaymentPage';
import SettingsPage from './Page/SettingsPage';
import LoginPage from './Page/LoginPage';
import CareerRoadmapPage from './Page/CareerRoadmapPage';

// --- STYLES ---
import './styles/global.css';

// --- HELPER COMPONENTS ---

// 1. Protected Route Wrapper
// Checks if user is logged in. If not, redirects to /login.
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(UserContext);
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// 2. App Layout Wrapper
// Renders the Sidebar (Navbar) and the Main Content Area.
// Used for pages that need the dashboard structure.
const AppLayout = ({ children }) => (
  <div className="app-layout">
    <Navbar />
    <main className="main-content">
      {children}
    </main>
  </div>
);

// --- MAIN ROUTES CONFIGURATION ---

function AppRoutes() {
  return (
    <Routes>
      {/* 1. PUBLIC: Login Page (Standalone, No Sidebar) */}
      <Route path="/login" element={<LoginPage />} />
      
      {/* 2. PUBLIC: Dashboard 
          - Wraps in AppLayout so it looks like the app.
          - Internal logic in Dashboard.jsx handles Guest vs User view.
      */}
      <Route path="/" element={
        <AppLayout>
          <Dashboard />
        </AppLayout>
      } />
      
      {/* 3. PROTECTED: Feature Pages 
          - Requires Authentication.
          - Redirects to Login if accessed directly by a guest.
      */}
      
      <Route path="/resume" element={
        <ProtectedRoute>
          <AppLayout>
            <ResumeAnalyzerPage />
          </AppLayout>
        </ProtectedRoute>
      } />

      <Route path="/roadmap" element={
        <ProtectedRoute>
          <AppLayout>
            <CareerRoadmapPage />
          </AppLayout>
        </ProtectedRoute>
      } />

      <Route path="/salary" element={
        <ProtectedRoute>
          <AppLayout>
            <SalaryInsightsPage />
          </AppLayout>
        </ProtectedRoute>
      } />

      <Route path="/interview" element={
        <ProtectedRoute>
          <AppLayout>
            <InterviewPrepPage />
          </AppLayout>
        </ProtectedRoute>
      } />

      <Route path="/payment" element={
        <ProtectedRoute>
          <AppLayout>
            <PaymentPage />
          </AppLayout>
        </ProtectedRoute>
      } />

      <Route path="/settings" element={
        <ProtectedRoute>
          <AppLayout>
            <SettingsPage />
          </AppLayout>
        </ProtectedRoute>
      } />
      
      {/* 4. FALLBACK: Redirect unknowns to Dashboard */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

// --- APP ENTRY POINT ---

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