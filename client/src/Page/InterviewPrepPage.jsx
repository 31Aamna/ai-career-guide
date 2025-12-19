import React, { useState, useContext } from 'react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import InterviewTopics from '../components/InterviewPrep/InterviewTopics';
import TechnicalDomains from '../components/InterviewPrep/TechnicalDomains';
import QuizSection from '../components/InterviewPrep/QuizSection';
import CodingPractice from '../components/InterviewPrep/CodingPractice';
import { interviewQuestions } from '../data/interviewData';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const InterviewPrepPage = () => {
  const { isPremium } = useContext(UserContext);
  const navigate = useNavigate();

  const [view, setView] = useState('main'); 
  const [activeCategory, setActiveCategory] = useState(null);
  const [quizScore, setQuizScore] = useState(null);

  // --- LOCK SCREEN ---
  if (!isPremium) {
    return (
      <div style={{position:'relative', height:'85vh', overflow:'hidden'}}>
        <div style={{filter:'blur(6px)', opacity:0.6, pointerEvents:'none'}}>
           <div className="flex-between mb-30"><h1>Interview Prep Pro</h1></div>
           <InterviewTopics />
        </div>
        <div style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', zIndex:10}}>
          <div style={{background:'white', padding:'40px', borderRadius:'20px', textAlign:'center', boxShadow:'0 20px 50px rgba(0,0,0,0.1)'}}>
            <div style={{fontSize:'50px', marginBottom:'20px'}}>🔒</div>
            <h2 className="mb-20">Premium Feature</h2>
            <p className="mb-20" style={{color:'var(--text-light)'}}>Unlock comprehensive interview kits, <br/>coding challenges, and technical deep dives.</p>
            <Button onClick={() => navigate('/payment')}>View Plans to Unlock</Button>
          </div>
        </div>
      </div>
    );
  }

  // --- HANDLERS ---

  const startQuiz = (category) => {
    if (interviewQuestions[category]) {
      setActiveCategory(category);
      setQuizScore(null); // Reset score for new quiz
      setView('quiz');
    } else {
      alert("Questions coming soon for this category!");
    }
  };

  const handleCategorySelect = (category) => {
    if (category === 'Technical Questions') {
      setView('technical');
    } else if (category === 'Coding Questions') {
      setView('coding');
    } else {
      startQuiz(category);
    }
  };

  const handleFinishQuiz = () => {
    setQuizScore(null);
    // Determine where to go back based on category type
    // If it was a sub-domain (like 'Web Development'), go back to technical grid
    const isTechnicalSubDomain = ['Web Development', 'Backend Development', 'Databases', 'System Design', 'Cloud & DevOps', 'Testing', 'Programming Languages'].includes(activeCategory);
    
    if (isTechnicalSubDomain) {
      setView('technical');
    } else {
      setView('main');
    }
  };

  // --- VIEWS ---

  // 1. Result View
  if (quizScore !== null) {
    return (
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'80vh'}}>
        <Card style={{textAlign:'center', padding:'50px', minWidth:'350px'}}>
          <div style={{fontSize:'60px', marginBottom:'20px'}}>🏆</div>
          <h2 className="mb-10">Quiz Completed!</h2>
          <p style={{color:'var(--text-light)', marginBottom:'30px'}}>You scored</p>
          <div style={{fontSize:'48px', fontWeight:'800', color:'var(--primary)', marginBottom:'30px'}}>
            {quizScore} <span style={{fontSize:'18px', color:'var(--text-light)'}}>/ 5</span>
          </div>
          <Button fullWidth onClick={handleFinishQuiz}>Finish & Go Back</Button>
        </Card>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      {view === 'main' && (
        <div className="flex-between mb-30">
          <h1>Interview Prep Pro</h1>
          <span style={{background:'var(--green-bg)', color:'var(--green)', padding:'5px 10px', borderRadius:'10px', fontSize:'12px', fontWeight:'bold'}}>PREMIUM UNLOCKED</span>
        </div>
      )}

      {/* Main Categories */}
      {view === 'main' && (
        <InterviewTopics onSelect={handleCategorySelect} />
      )}

      {/* Technical Domains Grid */}
      {view === 'technical' && (
        <TechnicalDomains 
          onSelectDomain={startQuiz} 
          onBack={() => setView('main')} 
        />
      )}

      {/* Quiz Interface */}
      {view === 'quiz' && (
        <QuizSection 
          category={activeCategory}
          questions={interviewQuestions[activeCategory] || []}
          onQuit={handleFinishQuiz}
          onComplete={(score) => setQuizScore(score)}
        />
      )}

      {/* Coding Interface */}
      {view === 'coding' && (
        <>
          <Button variant="outline" onClick={() => setView('main')} style={{marginBottom:'20px'}}>← Back to Topics</Button>
          <CodingPractice />
        </>
      )}
    </div>
  );
};

export default InterviewPrepPage;