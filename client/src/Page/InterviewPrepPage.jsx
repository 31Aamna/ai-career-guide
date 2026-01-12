import React, { useState, useContext } from 'react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import InterviewTopics from '../components/InterviewPrep/InterviewTopics';
import TechnicalDomains from '../components/InterviewPrep/TechnicalDomains';
import BehavioralDomainsPage from '../components/InterviewPrep/BehavioralDomainsPage';
import HRDomainsPage from '../components/InterviewPrep/HRDomainsPage';
import DSADomain from '../components/InterviewPrep/DSADomain';
import PracticeLogic from '../components/InterviewPrep/PracticeLogic';
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

  const startPractice = (category) => {
    setActiveCategory(category);
    setView('practice'); 
  };

  const startQuiz = (category) => {
    if (interviewQuestions[category]) {
      setActiveCategory(category);
      setQuizScore(null); // Reset score for new quiz
      setView('quiz');
    } else {
      alert("Questions coming soon for this category!");
    }
  };


  const handleCategorySelect = (categoryId, category) => {
  if (categoryId === 'Technical Questions') {
    setView('technical');
  } else if (categoryId === 'Coding Questions') {
    setView('coding');
  } else if (category === 'Behavioral Questions') {
    setView('behavioral');
  } else if (category === 'HR Interview') {
    setView('hr');
  } else if (categoryId === 'DSA') {
    setView('dsa')
  }
  else {
    // This handles HR, DSA, etc.
    startQuiz(categoryId);
  }
};

  const handleFinishQuiz = () => {
    setQuizScore(null);
    // Determine where to go back based on category type
    // If it was a sub-domain (like 'Web Development'), go back to technical grid
    const isTechnicalSubDomain = ['Web Development','Mobile & Full-Stack', 'Backend Development', 'Databases', 'System Design', 'Cloud & DevOps', 'Testing', 'Programming Languages', 'AI & ML'].includes(activeCategory);
    const isDSASubDomain = ['Arrays & Storage', 'Stacks & Queues', 'Linked Lists', 'Searching & Sorting'].includes(activeCategory);

  //   if (isTechnicalSubDomain) {
  //   setView('technical');
  // } else if (activeCategory === 'Behavioral') {
  //   setView('behavioral'); // Go back to Behavioral sub-menu
  // } else if (activeCategory === 'HR') {
  //   setView('hr'); // Go back to HR sub-menu
  // } else {
  //   setView('main');
  // }

  if (isTechnicalSubDomain) {
    setView('technical');
  } else if (isDSASubDomain) {
    setView('dsa');
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
            {quizScore} <span style={{fontSize:'18px', color:'var(--text-light)'}}>/ 10</span>
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
        <div className="flex-between mb-30 roadmap-header" style={{textAlign: 'center', marginBottom: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px'}}>
          <h1>Interview <span style={{color:'var(--primary)'}}>Prep Pro</span></h1>
          <p>Master Technical Interviews With Curated Questions Across All Domains</p>
          {/* <span style={{background:'var(--green-bg)', color:'var(--green)', padding:'5px 10px', borderRadius:'10px', fontSize:'12px', fontWeight:'bold'}}>PREMIUM UNLOCKED</span> */}
        </div>
      )}

      {/* Main Categories */}
      {view === 'main' && (
        <InterviewTopics onSelect={handleCategorySelect} />
      )}

      {/* Technical Domains Grid */}
      {view === 'technical' && (
        <>
        <Button variant="outline" onClick={() => setView('main')} style={{marginBottom:'20px', fontSize:'30px'}}> ←  Back to Topics </Button>
        <TechnicalDomains 
          onSelectDomain={startQuiz} 
          onBack={() => setView('main')} 
        />
        </>
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

      {/* Behavioral Domains Grid */}
      {view === 'behavioral' && (
        <>
        <Button variant="outline" onClick={() => setView('main')} style={{marginBottom:'20px', fontSize:'30px'}}> ←  Back to Topics </Button>
        <BehavioralDomainsPage 
        onSelectDomain={startQuiz} 
        onBack={() => setView('main')} 
        />
        </>
      )}

      {/* HR Domains Grid */}
      {view === 'hr' && (
        <>
        <Button variant="outline" onClick={() => setView('main')} style={{marginBottom:'20px', fontSize:'30px'}}> ←  Back to Topics </Button>
        <HRDomainsPage 
        onSelectDomain={startQuiz} 
        onBack={() => setView('main')} 
        />
        </>
      )}

      {/* DSA Domains Grid */}
      {view === 'dsa' && (
        <>
        <Button variant="outline" onClick={() => setView('main')} style={{marginBottom:'20px', fontSize:'30px'}}> ←  Back to Topics </Button>
        <DSADomain 
        onSelectDomain={startPractice} 
        onBack={() => setView('main')} 
        />
        </>
      )}

      {/* DSA Practice Domains Grid */}
      {/* The New Fixed View */}
      {view === 'practice' && (
        <PracticeLogic 
          category={activeCategory}
          // The || [] here is another layer of defense against the "map" error
          questions={interviewQuestions[activeCategory] || []} 
          onQuit={() => setView('dsa')}
        />
      )}
      
    </div>
  );
};

export default InterviewPrepPage;