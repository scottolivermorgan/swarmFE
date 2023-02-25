import React from 'react';
import { Link } from 'react-router-dom';
import './NoPage.css'
import logo from '../../images/logo.png';

function NoPage() {
    return(
            <>
            <div className="logo-box-sm">
                <img src = {logo} className="App-logo-sm" alt="logo"></img>
            </div>
            <center className="blurb-box">
                <br></br>
            <div className = 'title'>
                <b>Looks like you've gone off grid!</b>
                </div>
            <br></br>
            <Link to='/'> 
                <button className = "main-btn">Home</button>
            </Link>
            </center>
            </>
    );
};

export default NoPage;