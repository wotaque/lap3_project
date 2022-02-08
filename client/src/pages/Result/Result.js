import React from 'react';
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';

const Result = ({name,score}) => {
    const navigate = useNavigate();
    
  return <div>Result
      <div>
          Name:{name} 
           Final Score : {score}

          <Button onClick={navigate('/')}></Button>
      </div>

  </div>;
};

export default Result;
