import React, { useState } from 'react';
import UploadCard from '../components/ResumeAnalyzer/UploadCard';
import AnalysisResults from '../components/ResumeAnalyzer/AnalysisResults';
import FeatureCards from '../components/ResumeAnalyzer/FeatureCards'; // Import new component
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

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

  return (
    <div>
      <div className="flex-between mb-30">
        <div>
          <h1>Resume Analyzer</h1>
          <p>Get instant feedback on your resume.</p>
        </div>
        {analyzed && <Button onClick={() => setAnalyzed(false)}>Analyze Another File</Button>}
      </div>
      
      {loading ? (
        <Card style={{textAlign:'center', padding:50}}><h3>Analyzing your resume... ⚙️</h3></Card>
      ) : !analyzed ? (
        <>
          {/* 1. Compact Upload Area */}
          <UploadCard onAnalyze={handleAnalyze} /> 
          
          {/* 2. Feature Cards (Visible only before analysis) */}
          <FeatureCards />
        </>
      ) : (
        /* 3. Results (Replaces both Upload and Feature Cards) */
        <AnalysisResults />
      )}
    </div>
  );
};
export default ResumeAnalyzerPage;