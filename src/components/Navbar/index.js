import React from "react";
import { Link } from "react-router-dom";

// import "./main.css";

function Navbar(){
    return(
        <div className="nav-container">
            <div className="logo"></div>
            <span className="nav-button-container">
            <span className="nav-button"><Link to="/">Home</Link></span>
            <span className="nav-button">Game</span>
            <span className="nav-button">About</span>
            <span className="nav-button">Login</span>
            </span>
        </div>
    )
}

export default Navbar;