import React, {useState} from 'react';
import { Select, MenuItem, InputLabel, FormControl, Button, Container, TextField } from '@mui/material';
import {useNavigate} from 'react-router-dom';

const Home = ({name, setName, fetchQuestions}) => {
 const [amount, setAmount] = useState("");
 const [difficulty, setDifficulty] = useState("");
 const [category, setCategory] = useState("");
 
const navigate = useNavigate();

  const handleSubmit = () => {
   
    fetchQuestions(amount,category,difficulty);
    navigate('/quiz');
    console.log("Hello");
  };

  const handleAmount = (e) => setAmount(e.target.value);
  const handleDifficulty = (e) => setDifficulty(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);

 return <div className="FormApp" style={{ width: '100%' }} >
            <Container style={{ width:200, margin: 'auto' }}>
            <FormControl  className="form" margin='normal' >
                
                <InputLabel id="name-label"></InputLabel>

                <TextField label = "Name" variant = 'outlined' onChange={(e =>setName(e.target.value))} />
                

                <FormControl margin='normal'>
                <InputLabel id="amount-label">Amount</InputLabel>
                    <Select labelId="amount-label"
                            id = "amount" 
                            
                            value={amount}
                            label="Amount" 
                            onChange={handleAmount}
                            
                    >           
                        <MenuItem value="10">10</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                    </Select>     
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
                <FormControl  margin='normal'>
                <Button onClick={handleSubmit} variant="contained" value="Start Quiz" >Start Quiz</Button>

                </FormControl>
              
            </FormControl>
            </Container>
     
        </div>
        
};





export default Home;
