import React, {useState, useEffect} from 'react';
import { Button, Container, CssBaseline } from '@mui/material';

import { useNavigate } from 'react-router';
import he from 'he';

const Question = ({
    curQues,
    setCurQues,
    questions,
    choices,
    correct,
    score,
    setScore,
    number,
    players,
    curPlay,
    setCurPlay
}) => {
    const [selected, setSelected] = useState()
    //const [error, setError] = useState(false)


    const [score1, setScore1] = useState([curPlay,score])

    const handleSelect = (i) => {
        if(selected===i && selected===correct ){
            return 'select';
        }else if(selected===i && selected !==correct){
            return "wrong"
        }else if(i===correct){
            return 'select;'
        }
    }

    const handleCheck = (i) =>{
        setSelected(i);
        if (i=== correct) setScore(score + 1);
        console.log(score)
    }

    useEffect(() =>{
        setScore1([curPlay,score])
        console.log(score1)
    },[curPlay,score])

    let navigate = useNavigate();

    const handleNextPlayer= () =>{
        if(curPlay > players){
            handleNextQuestion();
            setCurPlay(1)
        }else{
             setCurPlay(curPlay+1)
             setCurQues(curQues)
             setSelected()
        } 
    }

    const handleNextQuestion = () => {
        if(curQues > number-2) {
            navigate('/result');
        }
        else if(selected){
            setCurQues(curQues + 1)
            setSelected()
        }
    }
   
    // const handleNextQuestion = () => {
       
    //     if(curQues > number-2) {
    //         navigate('/result');
    //     }
    //     else if(selected && (curPlay<players)){
            
    //         setCurQues(curQues)
    //         setSelected()
    //     }
    //     else if(selected && (curPlay===2)){
    //         console.log(players)
    //         setCurQues(curQues + 1)
    //         setSelected(false)
    //     }
    // }

   
     return <div  style={{ width: '100%' }} >
    
    <CssBaseline />
    <Container sx={{ maxWidth: 500 }} style={{ width: 400, margin: 'auto' }}>

   
        <h1>Question {curQues + 1}</h1>

        <div>
            <h2>{he.decode(questions[curQues].question)}</h2>
        </div>

        <div>
            {choices && choices.map(i =>(
              <Button variant= 'contained' onClick={() => handleCheck(i)}
                    className={`singleOption ${selected && handleSelect(i)}`}
                    key={i}
                    disabled={selected}
              >{he.decode(i)}</Button>  
            ))}
        </div>

        <div>
            
            <Button variant='contained' onClick={handleNextPlayer}>
                Next Player
            </Button>
        </div>

     
   
   </Container>
    </div>;
};

export default Question;