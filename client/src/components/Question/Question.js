import React, {useState, useEffect} from 'react';
import { Button, Container, CssBaseline, Grid } from '@mui/material';

import { useNavigate } from 'react-router';
import he from 'he';

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const Question = ({
    curQues,
    setCurQues,
    questions,
    choices,
    correct,
    score,
    setScore,
    number,
    numPlayer,
    curPlay,
    setCurPlay,
    inputFields,
    setInputFields
}) => {
    const [selected, setSelected] = useState(false)
    //const [error, setError] = useState(false)


    

    
    console.log(inputFields)

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
        
        if (i=== correct) {
            // let score=inputFields[curPlay].points
            setScore(1) ;
            inputFields[curPlay].points += score
            console.log(inputFields[curPlay].points )
            // setInputFields(inputFields[curPlay].points = score)
        //    setScore(0) 
           console.log(score)
        } 
       
    }
     console.log(score)
    
    // useEffect(() =>{
    //     setInputFields([{
          
    //         score: score}])
    //         // setInputFields(inputFields[0].score + 1)
    // },[score, setInputFields])
       
         
    let navigate = useNavigate();

    const handleNextPlayer= () =>{
        if(curPlay >= numPlayer - 1){
            handleNextQuestion();
            setCurPlay(0)
        }else{
             setCurPlay(curPlay => curPlay + 1)
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

   
        <h1>Question # {curQues + 1}</h1>

        <div>
            <h2>{he.decode(questions[curQues].question)}</h2>
        </div>

        <div>
            {choices && choices.map(i =>(
              <Grid ><Button variant= '' onClick={() => handleCheck(i)}
                    className={`singleOption ${selected && handleSelect(i)}`}
                    key={i}
                    disabled={selected}
              >{he.decode(i)}</Button></Grid>
            ))}
        </div>

        
        <Grid container justifyContent="flex-end">
 
            <Button variant='contained' color='secondary' 
            endIcon={<DoubleArrowIcon style={{fill: "white"}} />}
            style={{fontSize: 20, height: 40 }}
            onClick={handleNextPlayer} 
            >
                Next
            </Button>
        </Grid>

     
   
   </Container>
    </div>;
};

export default Question;