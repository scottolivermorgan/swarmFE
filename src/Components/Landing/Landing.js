import React from 'react';
import logo from '../../images/logo.png';
import "./Landing.css";
//import Button from 'react-bootstrap/Button';
//import { Link } from 'react-router-dom';

console.log(logo)
function Landing() {
    return(
        <div>
            <center className="logo-box">
            <img src = {logo} className="App-logo" alt="logo"></img>
            </center>
        </div>
    )
}
export default Landing;