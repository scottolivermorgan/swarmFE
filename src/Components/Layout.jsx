import React from "react";
import Footer from './Footer/Footer';
import {Outlet} from "react-router-dom";
import './App.css';

const Layout = () => {
    return (
        <div className="App">
        <header className="App-header">
          <Outlet />
        </header>
        <footer>
          <Footer />
        </footer>
        </div>
    );
  };
  
  export default Layout;