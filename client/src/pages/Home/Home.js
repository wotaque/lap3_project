import React, {useState} from 'react';
import { Select, MenuItem, InputLabel, FormControl, Button, Container, TextField } from '@mui/material';
import {useNavigate} from 'react-router-dom';

const Home = ({setName, setPlayers, fetchQuestions}) => {
 const [amount, setAmount] = useState("");
 const [difficulty, setDifficulty] = useState("");
 const [category, setCategory] = useState("");
 
const navigate = useNavigate();

  const handleSubmit = () => {
    fetchQuestions(amount,category,difficulty);
    navigate('/quiz');
  };

  const handleScores = () => {
    navigate('/leaderboard')
    console.log("Going to leaderboards")
  }

  const handleAmount = (e) => setAmount(e.target.value);
  const handleDifficulty = (e) => setDifficulty(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);

 return <div className="FormApp" style={{ width: '100%' }} >
    <Container style={{ width:200, margin: 'auto' }}>

        <FormControl  className="form" margin='normal' >

             <FormControl margin='normal'>
                <InputLabel id="player-label">Players</InputLabel>
                
                <Select labelId="players-label"
                        id = "players" 
                        type = "number"
                        label = "players" 
                        onChange={(e =>setPlayers(e.target.value))}>

                    <MenuItem value="0">1</MenuItem>
                    <MenuItem value="1">2</MenuItem>
                    <MenuItem value="2">3</MenuItem>
                    <MenuItem value="3">4</MenuItem>                    
                </Select>    
            </FormControl>
           
            <FormControl margin='normal'>
                <TextField label = "Name" variant = 'outlined' onChange={(e =>setName(e.target.value))} />
            </FormControl>

            <FormControl margin='normal'>
                <TextField labelId="amount-label"
                            id = "amount" 
                            
                            value={amount}
                            label="Amount" 
                            onChange={handleAmount}/>
            </FormControl>
            
            <FormControl margin='normal'>
                <InputLabel id="difficulty-label">Difficulty</InputLabel>
                
                <Select labelId="difficulty-label"
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
            <FormControl margin='normal'>
                <InputLabel id="category-label">Category</InputLabel>
                
                <Select labelId="category-label"
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

            <Button fullwidth variant="contained" onClick={handleScores}>Leaderboard</Button>
            
            <FormControl  margin='normal'>
                <Button onClick={handleSubmit} variant="contained" value="Start Quiz" >Start Quiz</Button>
            </FormControl>
              
        </FormControl>
    </Container>

     
        </div>
        
};





export default Home;
