// import React from 'react';

// const Card = ({ children, className = '', style, onClick }) => (
//   <div onClick={onClick} className={className} style={{
//     background: 'var(--white)',
//     borderRadius: 'var(--border-radius)',
//     padding: '24px',
//     boxShadow: 'var(--card-shadow)',
//     transition: '0.2s',
//     ...style
//   }}>
//     {children}
//   </div>
// );
// export default Card;

import React from 'react';

const Card = ({ children, className = '', style, onClick }) => (
  <div
    onClick={onClick}
    className={`card ${className}`}
    style={style}
  >
    {children}
  </div>
);

export default Card;
