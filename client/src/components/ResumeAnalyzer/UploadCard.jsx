import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

const UploadCard = ({ onAnalyze }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) setFile(e.target.files[0]);
  };

  return (
    <Card style={{height:'250px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <div style={{
        width:'100%', height:'100%', 
        border: '2px dashed var(--text-light)', // Dynamic border color
        borderRadius:'20px', 
        display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', 
        background: 'var(--bg-page)' // Dynamic background
      }}>
        <div style={{fontSize:'40px', marginBottom:'15px'}}>☁️</div>
        
        <h3 style={{fontSize:'18px', marginBottom:'5px', color: 'var(--text-main)'}}>
          {file ? file.name : "Drag & Drop your resume"}
        </h3>
        <p className="mb-20" style={{color:'var(--text-light)', fontSize:'13px'}}>
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
    </Card>
  );
};

export default UploadCard;