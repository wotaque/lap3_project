import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Question from '../../components/Question/Question';
import { Container, CssBaseline, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Link from '@mui/material/Link';
import SupportIcon from '@mui/icons-material/Support';
import Parent from './bgTheme'


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

  const useStyles = makeStyles({
    paperRoot: {
      background: 'linear-gradient(45deg, #A0D2EB 30%, #D0BDF4 90%)',
      border: 0,
      borderRadius: 3,
      marginBottom: 15, 
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      padding: '5px, 30px'
    },
  });

 const classes = useStyles();






  return <Parent className={classes.root}  >
     
    <CssBaseline />
    <Container sx={{ maxWidth: 500 }} style={{ width: 400, margin: 'auto' }}>

      <Paper className={classes.paperRoot}
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
      
  
      
        {questions ?(<div>
            <div>
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
            <Link href="https://www.wikipedia.org/"
            rel="noreferrer"
            target="_blank"
            id="tweet-quote">
            <SupportIcon 
            style={{fontSize: 40 }}
            />
          </Link>

          </div>
          ):(<CircularProgress />)

          
        }

        

      </Paper>
   
    </Container>
        
         
  </ Parent > 
};
    
export default Quiz; 