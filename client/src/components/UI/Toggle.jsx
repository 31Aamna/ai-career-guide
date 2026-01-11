import React from 'react';

const Toggle = ({ enabled, onToggle }) => {
  return (
    <div 
      onClick={onToggle}
      style={{
        width: '44px', 
        height: '24px', 
        // Use global variables so it adapts to the theme automatically
        background: enabled ? 'var(--primary)' : '#E0E5F2', 
        borderRadius: '20px', 
        position: 'relative', 
        cursor: 'pointer', 
        transition: 'background 0.3s ease',
        flexShrink: 0
      }}
    >
      <div style={{
        width: '18px', 
        height: '18px', 
        background: 'white', 
        borderRadius: '50%',
        position: 'absolute', 
        top: '3px', 
        // Slide logic
        left: enabled ? '23px' : '3px', 
        transition: 'left 0.3s ease', 
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
      }}></div>
    </div>
  );
};

export default Toggle;