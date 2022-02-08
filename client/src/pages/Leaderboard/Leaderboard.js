import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';

const Leaderboard = () => {
  const [ userScore, setUserScore ] = useState([]);  
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get('http://localhost:3001/leaderboard').then((response) => {
        setUserScore(response.data)
    })
  }, [])
  
  const goHome = () => {
    navigate('/')
}
  return <div>
      <h1>Leaderboard</h1>
      <Button variant="contained" onClick={goHome}>Home</Button>
      
      {userScore.map((val, key) => {
          return <div key={key}> 
          <h2>Username: {val.name}</h2> 
          <h2>Score: {val.score}/{val.amount}</h2>
          <h2>Difficulty: {val.difficulty}</h2>
          <h2>Category: {val.category}</h2>
           </div>
      })}  
        
  </div>;
};

export default Leaderboard;
