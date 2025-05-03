import React from 'react';

const Spinner = () => {
  const spinnerStyle = {
    color: 'rgb(109, 179, 63)', // Match your app's green accent color
  };
  
  return (
    <div className="d-flex justify-content-center align-items-center vh-50 mt-5">
      <div className="spinner-border" style={spinnerStyle} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;