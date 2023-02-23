import React from "react";
import Footer from './Footer/Footer';
//import logo from '../images/logo.png'; 
import {Outlet} from "react-router-dom";
import './App.css';
//import "../fonts/ITCAvantGardeStdBk.otf";

const Layout = () => {
    return (
        <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <Outlet />
        </header>
        <footer>
          <Footer />
        </footer>
        </div>
    );
  };
  
  export default Layout;