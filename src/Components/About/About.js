import React from 'react';
import logo from '../../images/logo.png';
import './About.css'
import { Link } from 'react-router-dom';

function About() {
    return(
        <>
		<div className="logo-box-sm">
        <img src = {logo} className="App-logo-sm" alt="logo"></img>
        </div>
		<br></br>
		<center className="blurb-box">
		<div className="title"> <b>About us</b></div>		
	    <div>
		A collective of scientists, engineers, tinkerers and artists,
		got together to try to accerlerate innovation. We iteratively ideate,
		drawing on over a centuary of combined experience and expertise to
		solve problems ranging from the difficult to the impossible.
		Research, development and rapid prototypingea commodo consequat. Duis aute irure dolor in 
		reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
		pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
		culpa qui officia deserunt mollit anim id est laborum.
		</div>
		<br></br>
		<Link to='/'> 
                    <button className = "main-btn">Home</button>
                </Link>
		</center>
        </>
    )
}
export default About;