// Loading.js
import React from 'react';
import islandjuteimg from '../../assets/AJTraders.png';
import '../../styles/Loading.css'; // Import the CSS file

const Loading = ({ fadeOut }) => {
  return (
    <div className={`loading-container ${fadeOut ? 'fade-out' : ''}`}>
      <img src={islandjuteimg} alt="Island Jute" className="loading-logo" />
    </div>
  );
};

export default Loading;

