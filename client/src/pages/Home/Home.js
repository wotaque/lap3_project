import React, {useState} from 'react';

import {useNavigate} from 'react-router-dom';

// import { Select, MenuItem, InputLabel, FormControl, Button, Container, TextField } from '@mui/material';

// import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import "./Home.css";


const Home = ({name, setName, fetchQuestions}) => {
    const [amount, setAmount] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [category, setCategory] = useState("");
    // const [error, setError] = useState(false);

 
    const navigate = useNavigate();

        const handleSubmit = () => {

            fetchQuestions(amount,category,difficulty);
            navigate('/quiz');
    
            // if (!category || !difficulty || !name || !amount) {
            //     setError(true);
            //     return;
            // } else {
            //     setError(false);
            //     fetchQuestions(amount, category, difficulty);
            //     navigate('/quiz');
            //     console.log("Hello");              
            // }
        };

    const handleAmount = (e) => setAmount(e.target.value);
    const handleDifficulty = (e) => setDifficulty(e.target.value);
    const handleCategory = (e) => setCategory(e.target.value);

    return <div className="form-container1" >

        {/*error && <ErrorMessage>Missed something... </ErrorMessage>*/}

        <form aria-label="form">

            <div className="username-section">
                <label htmlFor="name">Enter your Name</label>
                <input className="username-input" 
                    onChange={(e =>setName(e.target.value))}></input>
            </div>

            <br></br>

            <div className="category-section">
                <label htmlFor="category">Choose a Category:</label>
                <select
                    id="category"
                    name="category"
                    onChange={handleCategory}
                    value={category}
                    required
                >
                    <option value="9">General Knowledge</option>
                    <option value="21">Sports</option>
                    <option value="15">Video Games</option>
                    <option value="23">History</option>
                    <option value="31">Anime & Manga</option>                    </select>
            </div>


            <br></br>

            <div className="difficulty-section">
                <label htmlFor="difficulty">Level of Difficilty:</label>
                <select
                    onChange={handleDifficulty}
                    value={difficulty}
                    id="difficulty"
                    name="difficulty"
                    required
                >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>

            <br></br>
            <div className="difficulty-section">
                <label htmlFor="difficulty">Number of Questions:</label>
                <select
                onChange={handleAmount}
                    value={amount}
                    id="amount"
                    name="amount"
                    required
                >
                    <option value="easy">5</option>
                    <option value="medium">10</option>
                    <option value="hard">15</option>
                </select>
            </div>

            <br></br>

            <div className="createGame-btnForm">
                <button className="createGame-btn" onClick={handleSubmit}>Start Game</button>
            </div>
            
        </form>
    </div>
      
};





export default Home;
