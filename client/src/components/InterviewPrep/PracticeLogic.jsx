import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

const PracticeLogic = ({ category, questions = [], onQuit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // Safety check to prevent "map" or "undefined" errors
  if (!questions || questions.length === 0) {
    return (
      <Card style={{ textAlign: 'center', padding: '40px' }}>
        <div style={{ fontSize: '40px', marginBottom: '20px' }}>🚧</div>
        <h3>Category "{category}" not found.</h3>
        <p style={{ color: 'var(--text-light)', marginBottom: '20px' }}>
          We are currently updating the logic bank for this section.
        </p>
        <Button onClick={onQuit}>Go Back</Button>
      </Card>
    );
  }

  const currentQ = questions[currentIndex];

  const handleCheck = () => {
    if (userInput.trim().length < 5) {
      alert("Please type out your logic or answer before checking.");
      return;
    }
    setIsSubmitted(true);
  };

  const handleNext = () => {
    setIsSubmitted(false);
    setShowHint(false);
    setUserInput('');
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onQuit(); // Trigger the return to the specific subdomain
    }
  };

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      {/* Header Info */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--primary)', letterSpacing: '1px' }}>
          {category.toUpperCase()}
        </span>
        <span style={{ fontSize: '14px', color: 'var(--text-light)' }}>
          Question {currentIndex + 1} of {questions.length}
        </span>
      </div>

      <Card style={{ padding: '35px', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
        {/* The Question */}
        <div style={{ marginBottom: '25px' }}>
          <h2 style={{ fontSize: '22px', lineHeight: '1.5', color: 'var(--text-main)' }}>
            {currentQ.q}
          </h2>
        </div>

        {/* Input & Hint Section */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#64748b' }}>YOUR LOGIC</label>
            {!isSubmitted && (
              <button 
                onClick={() => setShowHint(!showHint)}
                style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontSize: '12px', fontWeight: '600' }}
              >
                {showHint ? "Hide Hint" : "💡 Need a hint?"}
              </button>
            )}
          </div>

          {showHint && !isSubmitted && (
            <div style={{ padding: '12px', background: '#fff9db', borderRadius: '8px', borderLeft: '4px solid #fcc419', marginBottom: '12px', fontSize: '14px', color: '#856404', animation: 'fadeIn 0.3s ease' }}>
              <strong>Hint:</strong> {currentQ.hint}
            </div>
          )}

          <textarea
            disabled={isSubmitted}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your step-by-step logic here..."
            style={{
              width: '100%',
              minHeight: '120px',
              padding: '15px',
              borderRadius: '12px',
              border: isSubmitted ? '2px solid #e2e8f0' : '2px solid var(--primary)',
              fontSize: '16px',
              fontFamily: 'inherit',
              backgroundColor: isSubmitted ? '#f8fafc' : '#fff',
              outline: 'none'
            }}
          />
        </div>

        {!isSubmitted ? (
          <Button fullWidth onClick={handleCheck} style={{ height: '50px' }}>Check My Answer</Button>
        ) : (
          <div style={{ animation: 'fadeIn 0.5s ease' }}>
            {/* Split Result View */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '10px' }}>
              <div style={{ padding: '15px', borderRadius: '10px', background: '#f1f5f9' }}>
                <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#94a3b8' }}>YOUR ANSWER</span>
                <p style={{ marginTop: '5px', fontSize: '14px' }}>{userInput}</p>
              </div>
              <div style={{ padding: '15px', borderRadius: '10px', background: '#ecfdf5', borderLeft: '4px solid #10b981' }}>
                <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#059669' }}>CORRECT KEY</span>
                <p style={{ marginTop: '5px', fontSize: '15px', fontWeight: 'bold' }}>{currentQ.answer}</p>
              </div>
            </div>

            {/* Detailed Explanation */}
            <div style={{ marginTop: '20px', padding: '20px', background: '#eff6ff', borderRadius: '12px', marginBottom: '10px' }}>
              <span style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--primary)' }}>EXPERT EXPLANATION</span>
              <p style={{ marginTop: '8px', fontSize: '14px', lineHeight: '1.6', color: '#1e40af' }}>{currentQ.explanation}</p>
            </div>

            <Button fullWidth onClick={handleNext} style={{ marginTop: '25px', height: '50px', background: 'var(--text-main)' }}>
              {currentIndex === questions.length - 1 ? "Finish Session" : "Next Question →"}
            </Button>
          </div>
        )}
      </Card>

      <button onClick={onQuit} style={{ background: 'none', border: 'none', color: 'var(--text-light)', display: 'block', margin: '20px auto', cursor: 'pointer', textDecoration: 'underline' }}>
        Exit Practice
      </button>
    </div>
  );
};

export default PracticeLogic;