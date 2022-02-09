import { Container } from '@mui/material';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';

export const PlayerName = () => {

const [ inputFields, setInputField ] = useState([
    { firstName: '', lastName: '' },
])

const handleFirst = (e) => {
    setInputField(e.target.value);
}

  return (
      <Container>
          <form>
                { inputFields.map((inputField, index) => (
                    <div key={index}>
                        <TextField 
                            name="firstName"
                            label="First Name"
                            value={inputField.firstName}
                            />
                            
                        <TextField 
                            name="lastName"
                            label="Last Name"
                            value={inputField.lastName}/>  
                        <IconButton>
                            <RemoveIcon />  
                        </IconButton>
                        
                    </div>
                ))}
                
            </form>
      </Container>
  );
};
