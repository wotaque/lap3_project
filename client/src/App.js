import React, { useState } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';


import axios from 'axios';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';

function App() {
    const [name, setName] = useState("")
    const [questions, setQuestions] = useState();
    const [score, setScore] = useState(0);
    const [number, setNumber]=useState();
    const fetchQuestions = async (amount,  category, difficulty) => {
    
        try{
        let url = (`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`)    
        let { data } = await axios.get(url)  
    
   
        setQuestions(data.results)
        setNumber(amount)
        
        }catch(error){
            throw error
        }
    } 
    

    return (
        <div id="app">
            <h1>Quiz app</h1>
            <Routes>
                <Route path='/' element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions} />}/>
       
                <Route path='/quiz' element={<Quiz questions = {questions} score = {score} setScore={setScore} number={number}/>} />
                <Route path='/result' element={<Result name={name} score={score}/>} />

                <Route path="*" element={<p>nothing here mate</p>}/>
     
            </Routes>
            <Outlet />

            
        </div>
    )
}

export default App;