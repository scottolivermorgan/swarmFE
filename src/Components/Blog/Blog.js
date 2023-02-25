import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './Blog.css'

function Blog() {
    return(
        <>
		<div className="logo-box-sm">
        <img src = {logo} className="App-logo-sm" alt="logo"></img>
        </div>
		<br></br>
		<center className="blurb-box">
		<div className="title"> <b>Blog</b></div>		
	    <div>
        Duis aute irure dolor in 
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
export default Blog;