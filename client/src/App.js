import React, { useState, useContext } from 'react';
//import { Switch, Route } from 'react-router-dom';
import QuizStart from './components/QuizStart';
import Questions from './components/Questions';
import { QuizContext } from './Helpers/Contexts';

function App() {
    const [ gameState, setGameState ] = useState("menu")

    return (
        <div id="app">
            <h1>Lap 3 quiz app</h1>
            <QuizContext.Provider value={{ gameState, setGameState }}>
                {gameState === "menu" && <QuizStart />}
                {gameState === "quiz" && <Questions />}
                {/* {gameState === "end" && <End />} */}
            </QuizContext.Provider>
        </div>
    )
}

export default App;