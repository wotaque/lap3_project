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
      
      {userScore.map((val, key) => {
          return <div key={key}> <h1>Username: {val.name}</h1> <h1>Score: {val.score}</h1> </div>
      })}  
        <Button variant="contained" onClick={goHome}>Home</Button>
  </div>;
};

export default Leaderboard;
