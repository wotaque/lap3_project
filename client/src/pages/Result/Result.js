import React from 'react';
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
import Axios from 'axios';

const Result = ({name, score, category, difficulty, amount, setScore}) => {
    const navigate = useNavigate();


    const handlePost = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/insert", {name: name, score: score, category: category, amount: amount, difficulty: difficulty});
        alert('Your score has been posted!')
    }

    const goHome = () => {
        navigate('/')
        setScore(0)
    }

    const goLeaderboard = () => {
        navigate('/leaderboard')
    }

    const categoryNames = (category) => {
        if (category === 15){
            return "Video Games"
        }
        if(category === 9){
            return "General Knowledge"
        }
        if(category === 21){
            return "Sports"
        }
        if(category === 23){
            return "History"
        }
        if(category === 31){
            return "Anime and Manga"
        }
    }

  return <div>
      <h2>Result</h2>
      <div>
          Name: {name} 
          <div>
           Final Score: {score}/{amount}
          </div>
          <div>
              Category: {categoryNames(category)}
          </div>
          <div>
              Difficulty: {difficulty}
          </div>
          
          
          <Button onClick={goHome}>Home</Button>
          <Button onClick={handlePost}>Post Score</Button>
          <Button onClick={goLeaderboard}>Leaderboard</Button>
      </div>

    </div>;
};

export default Result;


