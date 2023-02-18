import React from "react";
import {Outlet} from "react-router-dom";
import './App.css';

const Layout = () => {
    return (
        <div className="App">
        <header className="App-header">  
          <Outlet />
        </header>
        </div>
    );
  };
  
  export default Layout;