import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Button, Card, CardContent, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { makeStyles } from '@mui/styles';

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

  return <div className={classes.root}>
      
      <Button variant="contained" onClick={goHome}>Home</Button>
      <Paper className={classes.paperRoot}>
        <Typography variant="h3" gutterBottom={true} align="center">
            Leaderboard
        </Typography>
      </Paper>
      
      <Paper elevation={3} style={{padding:20, color:"black"}} className={classes.paperRoot}>
            {userScore.map((val, key) => {
            return <div key={key}> 
            <Typography variant="h4">Username: {val.name}</Typography> 
            <Typography variant="h6">Score: {val.score}/{val.amount}</Typography>
            <Typography variant="h6"> Difficulty: {val.difficulty}</Typography>
            <Typography variant="h6">Category: {categoryNames(val.category)}</Typography>
            </div>
        })} 
      </Paper>
      
       
        
  </div>;
};

export default Leaderboard;