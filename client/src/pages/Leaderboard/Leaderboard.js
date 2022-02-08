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

   const categoryNames = (num) => {
       if (num == 15){
           return "Video Games"
       }
       if(num == 9){
           return "General Knowledge"
       }
       if(num == 21){
           return "Sports"
       }
       if(num == 23){
           return "History"
       }
       if(num == 31){
           return "Anime and Manga"
       }
   }

  return <div>
      <h1>Leaderboard</h1>
      <Button variant="contained" onClick={goHome}>Home</Button>
      

      {userScore.map((val, key) => {
          return <div key={key}> 
          <h2>Username: {val.name}</h2> 
          <h2>Score: {val.score}/{val.amount}</h2>
          <h2>Difficulty: {val.difficulty}</h2>
          <h2>Category: {categoryNames(val.category)}</h2>
           </div>
      })}  
        
  </div>;
};

export default Leaderboard;
