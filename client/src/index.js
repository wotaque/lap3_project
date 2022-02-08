import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';
//import './styles/index.css';
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <App />
   </BrowserRouter>,
    document.getElementById("root")
);



