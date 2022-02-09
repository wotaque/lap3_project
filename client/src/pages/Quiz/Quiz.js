import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Question from '../../components/Question/Question';
import { makeStyles } from '@mui/styles';
import { Container, CssBaseline, Paper, Box } from '@mui/material';

import Image from './answer.png';

const Quiz = ({score,questions,setScore,number,inputFields, setInputFields}) => {

  const [choices, setChoices] = useState()
  const [curQues , setCurQues] = useState(0)
  const [curPlay, setCurPlay] = useState(0)

  var numPlayer = inputFields.length; 
  useEffect(()=>{
    setChoices(questions && 
      handleShuffle([questions[curQues]?.correct_answer, 
        ...questions[curQues]?.incorrect_answers,])
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

  const useStyles = makeStyles({
    paperRoot: {
      background: 'linear-gradient(45deg, #A0D2EB 30%, #D0BDF4 90%)',
      border: 0,
      borderRadius: 0,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
  });
  const classes = useStyles();

  const displayNames = (num) => {
    if (num === 0){
      return inputFields[0].username
    }
    if(num === 1){
      return inputFields[1].username
    }
    if(num === 2){
      return inputFields[2].username
    }
    if(num === 3){
      return inputFields[3].username
    }
  } 
  console.log(inputFields)


  return <div>
    <Box 
      style={{ backgroundImage: `url(${Image})`,
        backgroundRepeat:'no-repeat', width: '100%', margin: 'auto' }} 
      sx={{ width: 800, height: 700}}
    > 

    <CssBaseline />

    <Container sx={{ maxWidth: 500 }} style={{ width: 400, margin: 'auto' }}>

      <Paper className={classes.paperRoot}
      component="form" variant="outlined"
      sx={{ p: '20px 20px 10px 5px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        {questions ?(
          <div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Player:
              &nbsp;&nbsp;{displayNames(curPlay)}
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
              curPlay={curPlay}
              setCurPlay={setCurPlay}
              numPlayer={numPlayer}
              inputFields={inputFields}
              setInputFields={setInputFields}
            />
            
          </div> ):(<CircularProgress />)
            
        }    
        
      </Paper>
    </Container>
  </Box>
  </div> 

};
    
export default Quiz; 