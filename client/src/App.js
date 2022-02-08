import React, { useState } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import "./App.css";

function App() {
    const [name, setName] = useState("")
    const [questions, setQuestions] = useState();
    const [score, setScore] = useState(0);
    const [number, setNumber]=useState();

    const fetchQuestions = async (amount,  category, difficulty) => {

        try {
        let url = (`https://opentdb.com/api.php?
        amount=${amount}&
        category=${category}&
        difficulty=${difficulty}&type=multiple`)    
        let { data } = await axios.get(url)  
        
        setQuestions(data.results)
        setNumber(amount)
        
        } catch(error){
            throw error
        }
    } 

    return (
        <div 
            className="app" 
            style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/mountain-range.jpg)' }}>

            <Header />

                <Routes>
                    <Route path='/' element={<Home 
                        name={name} 
                        setName={setName} 
                        fetchQuestions={fetchQuestions} />}/>

                    <Route path='/quiz' element={<Quiz 
                        name={name} 

                        questions = {questions} 
                        score = {score} setScore={setScore} 
                        number={number}/>} />

                    <Route path='/result' element={<Result 
                        name={name} 
                        score={score}/>} />
                     
                    <Route path="*" element={<p>nothing here mate</p>}/>
     
                </Routes>

            <Footer />

            <Outlet />

        </div>
    )
}

export default App;