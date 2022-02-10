import React from 'react';
import { useNavigate } from 'react-router';
import { Button, Container, CssBaseline, Paper, FormControl, Box, Grid, TableContainer,Table,TableRow,TableCell,TableBody,TableHead } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Axios from 'axios';
import he from 'he';
import Image from './winners.png';

const Result = ({inputFields,  category, difficulty, amount, setInputFields, questions}) => {
    const navigate = useNavigate();
    const max = inputFields.reduce((prev, current) => (prev.points > current.points) ? prev : current)

    var numPlayer = inputFields.length;
    const handlePost = (e) => {
        e.preventDefault();
        Axios.post("https://quiz-serrver.herokuapp.com/insert", {name: max.username, score: max.points, category: category, amount: amount, difficulty: difficulty});
        alert('Your score has been posted!')
    }

    const goHome = () => {
        navigate('/')
        setInputFields([{username: '',points: 0}])
    }

    const goLeaderboard = () => {
        navigate('/leaderboard')
    }
    const renderRows = (questions) =>{
    return questions.map(r =><TableRow><TableCell style={{fontFamily: 'Sucrose Bold Two', color: '#8458B3'}}>{he.decode(r.question)}</TableCell><TableCell style={{fontFamily: 'Sucrose Bold Two', color: '#8458B3'}}>{he.decode(r.correct_answer)}</TableCell></TableRow>)
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
                Score:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{inputFields[i].points}/{amount}</div>
             )
        }
        return displayResultName
    }

    return <>
    <Box 
        style={{ backgroundImage: `url(${Image})`,
            backgroundRepeat:'no-repeat', width: '100%', margin: 'auto' }} 
        sx={{ width: 800, height: 1000}}
    > 
        <CssBaseline />
        <Container sx={{  margin: 'auto' }}>

            <Paper className={classes.paperRoot}
                component="form" variant="outlined"
                sx={{ p: '10px 10px', display: 'flex', alignItems: 'center' }}
            >
                <div>
                    <div><h2>Your Result</h2></div>
                    <div>{resultName()}</div>
                    
                    <div>Category:
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{categoryNames(category)}</div>
                    <div>Difficulty:
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{difficulty}</div>
                </div>

                <TableContainer sx={{ margin: 'auto' } }>
                <Table sx={{ maxWidth: 10000, margin: 'auto'}} aria-label="simple table"   >
                    <TableHead>
                        <TableRow>
                            <TableCell style={{fontFamily: 'Sucrose Bold Two', color: '#8458B3'}} align= "left">Question</TableCell>
                            <TableCell style={{fontFamily: 'Sucrose Bold Two', color: '#8458B3'}} align= "left">Answer</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody  >
                        
                        {renderRows(questions)}

                      
                    </TableBody>
                </Table>
            </TableContainer>

          
        
            </Paper>

            
            <Grid sx={{ maxWidth: 450, margin: 'auto' }}
            display="flex" justifyContent="space-between">

                <FormControl  margin='normal'>
                    <Button variant='contained' color='secondary' 
                    style={{fontSize: 14, height: 40 }}
                    onClick={goHome}>Home</Button>
                </FormControl>

                <FormControl  margin='normal'>
                    <Button variant='contained' color='secondary' 
                    style={{fontSize: 14, height: 40 }}
                    onClick={goLeaderboard}> CURRENT LEADERS</Button>
                </FormControl>

                <FormControl  margin='normal'>
                    <Button variant='contained' color='secondary' 
                    style={{fontSize: 14, height: 40 }}
                    onClick={handlePost}>Save High Score</Button>
                </FormControl>

            </Grid>

        </Container>
       
    </Box> 
    </>
};

export default Result; 