import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleNavigateToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Thanks For The Visit, Have A Great Day</h1>
      <br />
      <br />
      <button onClick={handleNavigateToDashboard} style={{padding:10, color:'orange', fontSize:'2rem'}}>Go to Dashboard</button>
    </div>
  );
};

export default Logout;