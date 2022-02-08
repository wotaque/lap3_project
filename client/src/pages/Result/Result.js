import React from 'react';
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
import Axios from 'axios';

const Result = ({name,score}) => {
    const navigate = useNavigate();

    const handlePost = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/insert", {name: name, score: score});
        alert('Your score has been posted!')
    }

    return <div>Result
        <div>
            Name:{name} <br />
                Final Score : {score}

            <Button onClick={navigate('/')}>Home</Button>
            <Button onClick={handlePost}>Post Score</Button>
        </div>

    </div>;
};

export default Result;
