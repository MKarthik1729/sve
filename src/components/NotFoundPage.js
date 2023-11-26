import React from 'react';

const NotFoundPage = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f2f2f2',
  };

  const messageStyle = {
    textAlign: 'center',
    fontSize: '24px',
    color: '#333',
  };

  return (
    <div style={containerStyle}>
      <div>
        <h1 style={messageStyle}>404 - Page Not Found</h1>
        <p style={messageStyle}>The page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
