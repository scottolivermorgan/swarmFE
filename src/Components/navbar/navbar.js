import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const SideNav = (props) => {
    return (
        <>
        
            <center className="logo-box-sm">
            <br></br>
                <img src = {logo} className="App-logo-sm" alt="logo"></img>
            </center>
            <br></br>
            <center className="sidenav">
                <table>
                    <tr>
                        <center>
                        <Link to='/'> 
                            <button className = "nav-btn">Home</button>
                        </Link>
                        </center>
                    </tr>
                    <tr>
                        <center>
                        <Link to='/about'> 
                            <button className = "nav-btn">About</button>
                        </Link>
                        </center>
                    </tr>
                    <tr>
                        <center>
                        <Link to='/contact'> 
                            <button className="nav-btn">Contact</button>
                        </Link>
                        </center>
                    </tr>
                    <tr>
                        <center>
                    <Link to='/blog'> 
                        <button className="nav-btn">Blog</button>
                    </Link>
                    </center>
                    </tr>
                    <tr>
                        <center>
                    <Link to='/research'> 
                        <button className="nav-btn">Research</button>
                    </Link>
                    </center>
                    </tr>
                </table>
            </center>
        </>
    );
};
export default SideNav;