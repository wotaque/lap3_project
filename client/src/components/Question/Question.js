import React, {useState} from 'react';
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
    number,
    numPlayer,
    curPlay,
    setCurPlay,
    inputFields,
    
}) => {
    const [selected, setSelected] = useState("")
   


    

    
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
        
        if (i===correct) {
           
        
            inputFields[curPlay].points = inputFields[curPlay].points + 1
            
         } 
       
    }
    console.log(inputFields[curPlay].points )
    
         
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
            disabled={!selected}
            >
                Next
            </Button>
        </Grid>

     
   
   </Container>
    </div>;
};

export default Question;