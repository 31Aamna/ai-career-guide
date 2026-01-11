import React, { useState } from 'react';
import Button from '../UI/Button';

const UploadCard = ({ onAnalyze }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) setFile(e.target.files[0]);
  };

  return (
    <div className="upload-card-container">
      <div className="dashed-border-area">
        <div className="upload-icon">☁️</div>
        
        <h3 className="upload-title">
          {file ? file.name : "Drag & Drop your resume"}
        </h3>
        <p className="upload-subtitle">
          {file ? `Size: ${(file.size / 1024).toFixed(2)} KB` : "Supports PDF, DOC, DOCX"}
        </p>
        
        <input 
          type="file" 
          id="resumeUpload" 
          hidden 
          accept=".pdf,.doc,.docx" 
          onChange={handleFileChange} 
        />
        
        {!file ? (
          <Button onClick={() => document.getElementById('resumeUpload').click()}>Select File</Button>
        ) : (
          <Button onClick={() => onAnalyze(file)}>Analyze Resume</Button>
        )}
      </div>
    </div>
  );
};

export default UploadCard;