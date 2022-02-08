import React, {useState} from 'react';
import { Select, MenuItem, InputLabel, FormControl, Button, Container, TextField } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const Home = ({setName, setPlayers, fetchQuestions}) => {
 const [amount, setAmount] = useState("");
 const [difficulty, setDifficulty] = useState("");
 const [category, setCategory] = useState("");
 const [ inputFields, setInputFields ] = useState([
    { firstName: '', lastName: '' },
 ]);
 
 
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

  const handleChangeInput = (index, event) => {
      const values = [...inputFields];
      values[index][event.target.name] = event.target.value;
      setInputFields(values);
  }

  const handleAddFields = () => {
      setInputFields([...inputFields, { firstName: '', lastName: ''}])
  }

  const handleRemoveInput = (id) => {
      const values = [...inputFields];
      values.splice(values.findIndex(value => value.id === id), 1);
      setInputFields(values);
  }

 return (
    <Container style={{ width:200, margin: 'auto' }}>
        <Container>
          <form>
                { inputFields.map((inputField, index) => (
                    <div key={index}>
                        <TextField 
                            name="firstName"
                            label="First Name"
                            value={inputField.firstName}
                            onChange={event => handleChangeInput(index, event)}/>
                        <TextField 
                            name="lastName"
                            label="Last Name"
                            value={inputField.lastName}
                            onChange={event => handleChangeInput(index, event)}/>  
                        <RemoveIcon disabled={inputFields.length === 1} onClick={() => handleRemoveInput(inputField.id)}/>
                        <AddIcon onClick={() => handleAddFields()}/>
                    </div>
                ))}
                
            </form>
      </Container>



        <FormControl  className="form" margin='normal' >

             {/* <FormControl margin='normal'>
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
            </FormControl> */}

            {/* <FormControl margin='normal'>
                <TextField label = "Name" variant = 'outlined' onChange={(e =>setName(e.target.value))} />
                <Button>Add Name</Button>
            </FormControl> */}
            
            
            
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

     
  )
        
};





export default Home;
