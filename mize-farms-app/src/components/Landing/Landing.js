import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing">
      <NavBar />
      <h1>Welcome to the Landing Page</h1>
      <img src="images/Mize-Farms-Logo.png" alt="Mize Farms" />
      {/* Add other content and components here */}
    </div>
  );
};

export default Landing;
