import React, { useState, useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
// TODO import questions from API 
import getQuiz from './QuizStart';

const Questions = () => {
    const { score, setScore, setGameState } = useContext(QuizContext)

    const [ currQuestion, setCurrQuestion ] = useState(0);
    const [ optionChosen, setOptionChosen ] = useState("");
    
    // TODO finish the functions
    const nextQuestion = () => {
        // if question answer == question option 
        // then setScore(score + 1)
        // else setCurrQuestion(currQuestion + 1)
    }

    const finishQuiz = () => {
        // if question answer == question option 
        // then setScore(score + 1)

        //setGameState("end")
    }
    getQuiz()
    // TODO Add API questions and options 
    return <div className="Quiz">
        <h1>Question 1: "What is Marina's favourite food?"</h1>
        <h1>{data.results[0].question}</h1>
        <div>
            <button onClick={() => setOptionChosen("A")}>Pizza</button>
            <button onClick={() => setOptionChosen("B")}>Spaghetti</button>
            <button onClick={() => setOptionChosen("C")}>Steak</button>
            <button onClick={() => setOptionChosen("D")}>Burgers</button>
        </div>
        {currQuestion == Questions.length - 1 ? (
            <button onClick={finishQuiz}>Finish</button>
        ) : (
            <button onClick={nextQuestion}>Next question</button>
        )}
        
    </div>;
};

export default Questions;
