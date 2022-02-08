import React, {useState} from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
const Question = ({
    curQues,
    setCurQues,
    questions,
    choices,
    correct,
    score,
    setScore,
    number,
}) => {
    const [selected, setSelected] = useState()
    //const [error, setError] = useState(false)

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
    }

    let navigate = useNavigate();

    const handleNext = () => {
        if(curQues > number-2) {
            navigate('/result');
        }
        else if(selected){
            setCurQues(curQues + 1)
            setSelected()
        }
    }

    return <div>
        <h1>Question {curQues + 1}</h1>

        <div>
            <h2>{questions[curQues].question}</h2>
        </div>

        <div>
            {choices && choices.map(i =>(
              <button onClick={() => handleCheck(i)}
                    className={`singleOption ${selected && handleSelect(i)}`}
                    key={i}
                    disabled={selected}
              >{i}</button>  
            ))}
        </div>

        <div>
            <Button onClick={handleNext}>
                Next Question
            </Button>
        </div>
    </div>;
};

export default Question;
