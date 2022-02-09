import React from 'react';
import { useNavigate } from 'react-router';
import { Button, Container, TextField, CssBaseline, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
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
        if (category == 15){
            return "Video Games"
        }
        if(category == 9){
            return "General Knowledge"
        }
        if(category == 21){
            return "Sports"
        }
        if(category == 23){
            return "History"
        }
        if(category == 31){
            return "Anime and Manga"
        }
    }

    const useStyles = makeStyles({
        paperRoot: {
          background: 'linear-gradient(45deg, #A0D2EB 30%, #D0BDF4 90%)',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'white',
        
        },
      });
     const classes = useStyles();
     return <div className={classes.root} style={{ width: '100%' }} >
        
        <CssBaseline />
        <Container sx={{ maxWidth: 500 }} style={{ width: 400, margin: 'auto' }}>
    
        <Paper className={classes.paperRoot}
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
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
            
    </Paper>
   
   </Container>
   
    </div>;
};

export default Result; 