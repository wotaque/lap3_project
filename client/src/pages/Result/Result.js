import React from 'react';
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';

const Result = ({name,score}) => {
    const navigate = useNavigate();
    
    const goHome = () => {
        navigate('/')
    }

  return <div>Result
      <div>
          Name:{name} 
          <div>
           Final Score : {score}
          </div>
          <Button onClick={goHome}>Home</Button>
      </div>

  </div>;
};

export default Result;


