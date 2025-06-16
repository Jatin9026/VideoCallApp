import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the custom CSS

const Home = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleJoin() {
    if (input.trim()) {
      navigate(`/room/${input}`);
    }
  }

  return (
    <div className="home-container">
      <div className="card">
        <h1 className="title">Join a Video Room</h1>
        <input
          type="text"
          placeholder="Enter Room ID"
          value={input}
          onChange={handleChange}
          className="room-input"
        />
        <button onClick={handleJoin} className="join-button">
          Join Now
        </button>
    
      </div>
    </div>
  );
};

export default Home;