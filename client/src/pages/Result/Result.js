import React from 'react';
import { useNavigate } from 'react-router';
import { Button, Container, CssBaseline, Paper, FormControl, Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Axios from 'axios';

import Image from './winners.png';

const Result = ({inputFields, score, category, difficulty, amount, setScore, setInputFields}) => {
    const navigate = useNavigate();

    var numPlayer = inputFields.length;
    const handlePost = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/insert", {name: inputFields[0].username, score: inputFields[0].points, category: category, amount: amount, difficulty: difficulty});
        alert('Your score has been posted!')
    }

    const goHome = () => {
        navigate('/')
        setInputFields([{username: '',score: 0}])
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
            borderRadius: 0,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        },
    });
    const classes = useStyles();

    const resultName = () => {
        let displayResultName = []
         for(let i = 0; i < numPlayer; i++){

             displayResultName.push(<div>
                Name:
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{inputFields[i].username} <br />
                Score:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>

             displayResultName.push(<div>Name: {inputFields[i].username} <br />
             Score: {inputFields[i].points}/{amount} </div>

            )
        }
        return displayResultName
    }
    console.log(resultName())

    
    return <>
    <Box 
        style={{ backgroundImage: `url(${Image})`,
            backgroundRepeat:'no-repeat', width: '100%', margin: 'auto' }} 
        sx={{ width: 800, height: 1000}}
    > 


        <CssBaseline />

        <Container sx={{ maxWidth: 500 }} style={{ width: 400, margin: 'auto' }}>


            <Paper className={classes.paperRoot}
                component="form" variant="outlined"
                sx={{ p: '10px 10px', display: 'flex', alignItems: 'center', width: 400 }}
            >

                <div>
                    <div><h2>Your Result</h2></div>
                    <div>{resultName()}</div>
                    <div>Final Score:
                    &nbsp;&nbsp;&nbsp;&nbsp;{score}/{amount}</div>
                    <div>Category:
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{categoryNames(category)}</div>
                    <div>Difficulty:
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{difficulty}</div>
                </div>
        
            </Paper>

            <Grid sx={{ maxWidth: 500 }} style={{ width: 400, margin: 'auto' }}
            display="flex" justifyContent="space-between">

                <FormControl  margin='normal'>
                    <Button variant='contained' 
                    style={{fontSize: 14, height: 40 }}
                    onClick={goHome}>Home</Button>
                </FormControl>

                <FormControl  margin='normal'>
                    <Button variant='contained' color='primary' 
                    style={{fontSize: 14, height: 40 }}
                    onClick={goLeaderboard}> CURRENT LEADERS</Button>
                </FormControl>

                <FormControl  margin='normal'>
                    <Button variant='contained' color='primary' 
                    style={{fontSize: 14, height: 40 }}
                    onClick={handlePost}>Save Score</Button>
                </FormControl>

            </Grid>

        </Container>

    </Box> 
    </>

};

export default Result; 