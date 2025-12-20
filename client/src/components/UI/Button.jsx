import React from 'react';

const Button = ({ children, variant = 'primary', onClick, fullWidth }) => {
  const styles = {
    padding: '12px 24px',
    borderRadius: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    width: fullWidth ? '100%' : 'auto',
    background: variant === 'primary' ? 'var(--primary)' : variant === 'white' ? 'white' : 'transparent',
    color: variant === 'primary' ? 'white' : 'var(--text-main)',
    // Only define border once here:
    border: variant === 'outline' ? '1px solid #E0E5F2' : 'none'
  };
  return <button style={styles} onClick={onClick}>{children}</button>;
};
export default Button;