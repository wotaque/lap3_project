import React from 'react';
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
import Axios from 'axios';

const Result = ({name, score, category, difficulty, amount}) => {
    const navigate = useNavigate();


    const handlePost = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/insert", {name: name, score: score, category: category, amount: amount, difficulty: difficulty});
        alert('Your score has been posted!')
    }

    const goHome = () => {
        navigate('/')
    }

  return <div>
      <h2>Result</h2>
      <div>
          Name: {name} 
          <div>
           Final Score: {score}/{amount}
          </div>
          <div>
              Category: {category}
          </div>
          <div>
              Difficulty: {difficulty}
          </div>
          
          
          <Button onClick={goHome}>Home</Button>
          <Button onClick={handlePost}>Post Score</Button>
      </div>

    </div>;
};

export default Result;


