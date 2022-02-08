import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Question from '../../components/Question/Question';

import "./Quiz.css";


const Quiz = ({score,questions,setScore,number,players}) => {

    const [choices, setChoices] = useState()
    const [curQues , setCurQues] = useState(0)
    const [curPlay, setCurPlay] = useState(1)

     
  useEffect(()=>{
    //console.log(questions)
    setChoices(questions && handleShuffle([questions[curQues]?.correct_answer, ...questions[curQues]?.incorrect_answers,])
                                          );
  },[questions,curQues]); 
  
  // useEffect(()=>{
  //   setCurPlay(curPlay) 
  // },[curPlay, setCurPlay])

  //console.log(choices)
  //shuffle answers
  const handleShuffle = (options) => {
    return options.sort(()=> Math.random() -0.5 );
  }
  return <div>
      {
          questions ?(<div>
          <div>
              {/* <h1>Score : {score}/{number}</h1> */}
              <h1>Player:{curPlay}</h1>
          </div>

          <Question 
            curQues={curQues}
            setCurQues={setCurQues}
            questions={questions}
            choices={choices}
            correct={questions[curQues]?.correct_answer}
            score={score}
            setScore={setScore}
            number={number}
            players={players}
            curPlay={curPlay}
            setCurPlay={setCurPlay}
          
          />

            </div>
          ):(<CircularProgress />)

          
      }
     </div>;
};

export default Quiz;
