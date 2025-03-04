import React from "react";
import "./Location.css";

const Location = () => {
    return (
        <div className="containerLocation">
            <div className="navbar3">
                <h2>FIXZY</h2>
                <input type="text" id="inp5" placeholder="Search for service..." />
                <a href="https://www.google.co.in/"><p id="navtxt2">Home</p></a>
                <a href="https://www.google.co.in/"><p id="navtxt2">Contact</p></a>
                <a href="https://www.google.co.in/"><p id="navtxt2">My Account</p></a>
                <a href="https://www.google.co.in/"><p id="navtxt2">Cart</p></a>
            </div>
            <div className="middlepart2">
                <div className="sharelocation">
                    <h2>SHARE YOU LOCATION</h2>
                    <p>Let us know your location to serve you better</p>
                    <button id="locateme">Share Location</button>
                </div>
            </div>
        </div>
    )
}

export default Location;