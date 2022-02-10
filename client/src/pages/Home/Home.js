import React, {useState} from 'react';
import { Select, Box, MenuItem, InputLabel, FormControl, Button, Container, TextField, CssBaseline, Paper, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {useNavigate} from 'react-router-dom';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import Image from './pending.png';


const Home = ({fetchQuestions, inputFields, setInputFields, score}) => {
    const [amount, setAmount] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [category, setCategory] = useState("");

    const navigate = useNavigate();

    const handleSubmit = () => {
        if(amount && difficulty && category){
            fetchQuestions(amount,category,difficulty);
            navigate('/quiz');
        } else {
            alert("Need to fill in all fields")
        }
    };

    const handleScores = () => {
        navigate('/leaderboard')
        console.log("Going to leaderboards")
    }

    const handleAmount = (e) => setAmount(e.target.value);
    const handleDifficulty = (e) => setDifficulty(e.target.value);
    const handleCategory = (e) => setCategory(e.target.value);
 

    const handleChangeInput = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputFields(values);
    }

    const handleAddFields = () => {
        setInputFields([...inputFields, { username: '', points: score}])
    }

    const handleRemoveInput = (id) => {
        const values = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }

    const useStyles = makeStyles({
        paperRoot: {
            background: 'linear-gradient(45deg, #A0D2EB 30%, #D0BDF4 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'rgba(0, 0, 0, .3)',
        },
    });
    const classes = useStyles();

 return <>
    <Box 
        style={{ backgroundImage: `url(${Image})`,
            backgroundRepeat:'no-repeat', width: '100%', margin: 'auto' }} 
        sx={{ width: 800, height: 800}}
        > 
   
        <CssBaseline />

        <Container sx={{ maxWidth: 500 }} style={{ width: 400, margin: 'auto' }}>

    <Paper className={classes.paperRoot}
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
    >


        <FormControl  className="form" margin='normal' style={{  margin: 'auto' }}  >
    
            { inputFields.map((inputField, index) => (
                <div key={index}>
                
                    <FormControl margin='normal' color="secondary" sx={{ minWidth: 1000 }} >
                        <Grid container spacing={0}>
                            <Grid item xs={4}>
                                <TextField 
                                    name="username"
                                    label="Type Username"
                                    value={inputField.username}
                                    onChange={event => handleChangeInput(index, event)}/>
                                    <AddIcon onClick={() => handleAddFields()}/>
                                    <RemoveIcon disabled={inputFields.length === 1} 
                                        onClick={() => handleRemoveInput(inputField.id)}/>
                            </Grid>
                        </Grid>
                    </FormControl>
                </div>
            ))}
            <FormControl margin='normal'  >
                <TextField labelid="amount-label"
                    id = "amount" 
                    color="secondary"
                    value={amount}
                    label="Type Number of Questions" 
                    onChange={handleAmount}/>
            </FormControl>
            <FormControl margin='normal' color="secondary">
                <InputLabel id="difficulty-label">Choose Level of Difficulty</InputLabel>
                <Select labelid="difficulty-label"
                        id = "difficulty" 
                        value={difficulty}
                        label="Difficulty" 
                        onChange={handleDifficulty}
                >           
                    <MenuItem value="easy">Easy</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="hard">Hard</MenuItem>                
                </Select>     
            </FormControl>

            <FormControl margin='normal' color="secondary">
                <InputLabel id="category-label"
                >Select a Category</InputLabel>
                
                <Select labelid="category-label"
                        id = "category" 
                        value={category}
                        label="Category" 
                        onChange={handleCategory}
                >           
                    <MenuItem value="9">General Knowledge</MenuItem>
                    <MenuItem value="21">Sports</MenuItem>
                    <MenuItem value="15">Video Games</MenuItem>
                    <MenuItem value="23">History</MenuItem>
                    <MenuItem value="31">Anime & Manga</MenuItem>
                </Select>   
            </FormControl>
            <FormControl  margin='normal'>
                <Button color="secondary" variant="contained" onClick={handleSubmit} value="Start Quiz" >Start Quiz</Button>
            </FormControl>
            <FormControl  margin='normal'>
                <Button variant="contained" onClick={handleScores}> CURRENT LEADERS</Button>
            </FormControl>
        </FormControl>
    </Paper>
    </Container>
    </Box>
    </>
};


export default Home;