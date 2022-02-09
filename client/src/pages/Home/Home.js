import React, {useState} from 'react';
import { Select, MenuItem, InputLabel, FormControl, Button, Container, TextField, CssBaseline, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {useNavigate} from 'react-router-dom';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const Home = ({setName, setPlayers, fetchQuestions, players}) => {
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

 return <div id="home" className={classes.root}>
   
    <CssBaseline />
    <Container sx={{ maxWidth: 500 }} style={{ width: 400, margin: 'auto' }}>

    <Paper className={classes.paperRoot}
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >

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
   
    

        <FormControl  className="form" margin='normal' sx={{ maxWidth: 500 }} style={{ width: 400, margin: 'auto' }}  >

             <FormControl margin='normal' color="secondary">
                <InputLabel id="player-label">Number of Players</InputLabel>
                
                <Select labelid="players-label"
                        id = "players" 
                        type = "number"
                        label = "players" 
                        onChange={(e =>setPlayers(e.target.value))}
                        >

                    <MenuItem value="0">1</MenuItem>
                    <MenuItem value="1">2</MenuItem>
                    <MenuItem value="2">3</MenuItem>
                    <MenuItem value="3">4</MenuItem>                    
                </Select>    
            </FormControl>

            <FormControl margin='normal'  >
                <TextField labelid="amount-label"
                        
                            id = "amount" 
                            color="secondary"
                            value={amount}
                            label="Number of Questions" 
                            onChange={handleAmount}/>
            </FormControl>
            
            <FormControl margin='normal' color="secondary">
                <InputLabel id="difficulty-label">Difficulty</InputLabel>
                
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
                </FormControl >
            <FormControl margin='normal' color="secondary">
                <InputLabel id="category-label">Category</InputLabel>
                
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

            <Button variant="contained" onClick={handleScores}>Leaderboard</Button>
            
            <FormControl  margin='normal'>
                <Button color="secondary" variant="contained" onClick={handleSubmit} value="Start Quiz" >Start Quiz</Button>
            </FormControl>
              
        </FormControl>
      
    </Paper>
   
    </Container>
    
     
    </div>
};


export default Home;