import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Leaderboard = () => {
  const [ userScore, setUserScore ] = useState([]);  


  useEffect(() => {
    Axios.get('http://localhost:3001/leaderboard').then((response) => {
        setUserScore(response.data)
    })
  }, [])
  

  return <div>
      <h1>Leaderboard</h1>
      
      {userScore.map((val, key) => {
          return <div key={key}> <h1>Username: {val.name}</h1> <h1>Score: {val.score}</h1> </div>
      })}  

  </div>;
};

export default Leaderboard;
