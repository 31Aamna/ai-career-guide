import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

const QuizSection = ({ category, questions, onComplete, onQuit }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  
  // Store answers as { 0: "Option A", 1: "Option B" } to allow navigation
  const [userAnswers, setUserAnswers] = useState({});

  const currentQ = questions[currentIdx] || { q: "Loading...", options: [], answer: "" };
  const progress = ((currentIdx + 1) / questions.length) * 100;

  // Check if current specific question has been answered
  const isCurrentAnswered = userAnswers.hasOwnProperty(currentIdx);
  const currentSelectedOption = userAnswers[currentIdx];

  const handleOptionClick = (option) => {
    if (isCurrentAnswered) return; // Prevent changing answer
    
    setUserAnswers(prev => ({
      ...prev,
      [currentIdx]: option
    }));
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      // Calculate Final Score
      let finalScore = 0;
      questions.forEach((q, idx) => {
        if (userAnswers[idx] === q.answer) {
          finalScore++;
        }
      });
      onComplete(finalScore);
    }
  };

  const handlePrevious = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  return (
    <Card style={{maxWidth: '700px', margin: '0 auto', boxShadow:'0 10px 30px rgba(0,0,0,0.05)'}}>
      {/* Header */}
      <div className="flex-between mb-20">
        <span style={{fontWeight:'700', color:'var(--text-light)', textTransform:'uppercase', letterSpacing:'1px', fontSize:'12px'}}>
          {category}
        </span>
        <span style={{fontWeight:'600', color:'var(--text-light)', fontSize:'12px'}}>
          {currentIdx + 1}/{questions.length}
        </span>
      </div>

      {/* Progress Bar */}
      <div style={{width: '100%', height: '4px', background: '#F0F0F0', borderRadius: '10px', marginBottom: '30px', overflow: 'hidden'}}>
        <div style={{height: '100%', width: `${progress}%`, background: 'var(--green)', transition: '0.3s'}}></div>
      </div>

      {/* Question Text */}
      <h3 className="mb-30" style={{lineHeight:'1.6', fontSize:'18px'}}>
        {currentQ.q}
      </h3>

      {/* Options */}
      <div className="flex-col gap-10 mb-30">
        {currentQ.options.map((opt, idx) => {
          
          let bgColor = 'white';
          let borderColor = '#E0E5F2';
          let textColor = 'var(--text-main)';
          let icon = null;

          // Apply styling based on the answer state of THIS question
          if (isCurrentAnswered) {
            if (opt === currentQ.answer) {
              bgColor = '#E6FAF5'; // Green BG
              borderColor = 'var(--green)';
              textColor = '#007855';
              icon = '✓';
            } else if (opt === currentSelectedOption) {
              bgColor = '#FFEEEE'; // Red BG
              borderColor = 'var(--red)';
              textColor = 'var(--red)';
              icon = '✗';
            } else {
              // Dim other options
              textColor = 'var(--text-light)';
            }
          }

          return (
            <div 
              key={idx} 
              onClick={() => handleOptionClick(opt)}
              style={{
                padding: '16px',
                border: `2px solid ${borderColor}`,
                borderRadius: '12px',
                background: bgColor,
                color: textColor,
                cursor: isCurrentAnswered ? 'default' : 'pointer',
                fontWeight: '500',
                fontSize: '14px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: '0.2s'
              }}
            >
              {opt}
              {icon && <span>{icon}</span>}
            </div>
          );
        })}
      </div>

      {/* Explanation (Only shows if answered) */}
      {isCurrentAnswered && (
        <div style={{background: '#1B254B', color: 'white', padding: '20px', borderRadius: '12px', fontSize: '13px', lineHeight: '1.6', marginBottom: '20px', animation: 'fadeIn 0.3s'}}>
          <strong style={{display:'block', marginBottom:'5px', color:'var(--green)'}}>Explanation:</strong> 
          {currentQ.explanation}
        </div>
      )}

      {/* Navigation Footer */}
      <div className="flex-between" style={{marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #F4F7FE'}}>
        <div style={{display:'flex', gap:'10px'}}>
          <Button variant="outline" onClick={onQuit} style={{border:'none', color:'var(--text-light)', padding:'10px'}}>Quit</Button>
          
          <Button 
            variant="outline" 
            onClick={handlePrevious} 
            disabled={currentIdx === 0}
            style={{opacity: currentIdx === 0 ? 0.5 : 1, cursor: currentIdx === 0 ? 'not-allowed' : 'pointer'}}
          >
            ⬅ Prev
          </Button>
        </div>

        {isCurrentAnswered && (
          <Button onClick={handleNext} style={{background:'#4318FF', borderRadius:'30px', padding:'10px 30px'}}>
            {currentIdx === questions.length - 1 ? 'Finish' : 'Next ➜'}
          </Button>
        )}
      </div>
      <style>{`@keyframes fadeIn { from { opacity:0; transform:translateY(5px); } to { opacity:1; transform:translateY(0); } }`}</style>
    </Card>
  );
};

export default QuizSection;