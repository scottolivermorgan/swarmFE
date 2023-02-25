import React from 'react';
//import Button from 'react-bootstrap/Button';
import logo from '../../images/logo.png';
import "./Landing.css";
//import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

console.log(logo)
function Landing() {
    return(
        <div>
            <center className="logo-box">
            <img src = {logo} className="App-logo" alt="logo"></img>
            <div>
                <br></br>
                <Link to='/about'> 
                    <button className = "main-btn">About</button>
                </Link>
                <Link to='/contact'> 
                    <button className="main-btn">Contact</button>
                </Link>
                <Link to='/blog'> 
                    <button className="main-btn">Blog</button>
                </Link>
                <Link to=''> 
                    <button className="main-btn">something</button>
                </Link>
            </div>

            </center>
        </div>
    )
}
export default Landing;