import React, { useState } from 'react';
import UploadCard from '../components/ResumeAnalyzer/UploadCard';
import AnalysisResults from '../components/ResumeAnalyzer/AnalysisResults';
import FeatureCards from '../components/ResumeAnalyzer/FeatureCards';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

// Import CSS
import '../components/ResumeAnalyzer/ResumeAnalyzer.css';

const ResumeAnalyzerPage = () => {
  const [analyzed, setAnalyzed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = (file) => {
    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      setAnalyzed(true);
    }, 2000);
  };

  const handleReset = () => {
    setAnalyzed(false);
    // You might want to clear the file in UploadCard via ref or key reset if needed
    // For now, this just resets the view
  };

  return (
    <div className="resume-container">
      {/* Header */}
      <div className="flex-between mb-30">
        <div className="resume-header" style={{margin:0}}>
          <h1 style={{fontSize: '28px', margin: '0 0 5px 0'}}>Resume Analyzer</h1>
          <p>Get instant feedback on your resume.</p>
        </div>
        {/* Optional Reset Button */}
        {analyzed && (
          <Button variant="outline" onClick={handleReset}>
            Reset / New Scan
          </Button>
        )}
      </div>
      
      {/* 1. Upload Section - ALWAYS VISIBLE */}
      <UploadCard onAnalyze={handleAnalyze} /> 
      
      {/* 2. Bottom Section - Swaps between Features and Results */}
      <div style={{ marginTop: '20px' }}>
        {loading ? (
          <Card style={{textAlign:'center', padding: 60}}>
            <h3 style={{color: 'var(--text-main)'}}>Analyzing your resume... ⚙️</h3>
          </Card>
        ) : !analyzed ? (
          /* State A: Show Features (Default) */
          <div className="animate-fade-in">
             <FeatureCards />
          </div>
        ) : (
          /* State B: Show Results (Replaces Features) */
          <div className="animate-fade-in">
             <AnalysisResults />
          </div>
        )}
      </div>

      <style>{`@keyframes fadeIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } } .animate-fade-in { animation: fadeIn 0.5s ease-in; }`}</style>
    </div>
  );
};

export default ResumeAnalyzerPage;