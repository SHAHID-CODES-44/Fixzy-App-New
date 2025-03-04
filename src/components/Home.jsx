import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faBatteryFull } from "@fortawesome/free-solid-svg-icons";
import { faTruckMonster } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
// MAIN CODE CONENT 
const Home = () => {
    return (
        <>
            <div className="container1">
                <nav id="navbar">
                    <FontAwesomeIcon icon={faScrewdriverWrench} size="2x" />
                    <h2>FIXZY</h2>
                    <input type="text" id="inp1" placeholder="Search for service..." />
                    <a href="https://www.google.co.in/"><p id="navtxt">Services</p></a>
                    <Link to="/Contact"><p id="navtxt">Contact</p></Link>
                    <Link to="#"><p id="navtxt">My Account</p></Link>
                    <Link to="#"><p id="navtxt">Cart</p></Link>
                </nav>
                <div className="part1">
                    <h1 id="t2">Quick Roadside Assistance</h1>
                    <p id="t1">Get help within minutes. Professional mechanics, instant parts delivery.</p>
                    <button id="btn1">Request Service Now</button>
                    <button id="ourproduct">Our Products</button>
                </div>
                <h1 id="t3">Service Category</h1>
                <div id="services">
                    <div id="card1">
                        <FontAwesomeIcon icon={faScrewdriverWrench} size="2x" color="blue" />
                        General Repair</div>
                    <div id="card1"><FontAwesomeIcon icon={faBatteryFull} size="2x" color="blue" />
                        Battery Service
                    </div>
                    <div id="card1">
                        <FontAwesomeIcon icon={faTruckMonster} size="2x" color="blue" />
                        Tire Change</div>
                    <div id="card1"><FontAwesomeIcon icon={faLock} size="2x" color="blue" />
                        Lockout Service
                    </div>
                    <div id="card1">
                        <FontAwesomeIcon icon={faTruckFast} size="2x" color="red" />
                        Emergency Service
                    </div>
                </div>
                <h1 id="t4">Featured Services</h1>
                <div id="services2">
                    <div id="card2">Basic Tune-Up
                        <p>150</p>
                        <button>Add to cart</button>
                    </div>
                    <div id="card2">Oil Change
                        <p>200</p>
                        <button>Add to cart
                        </button>
                    </div>
                    <div id="card2">Brake Inspection
                        <p>500</p>
                        <button>Add to cart
                        </button>
                    </div>
                    <div id="card2">Battery Replacement
                        <p>200</p>
                        <button>Add to cart
                        </button>
                    </div>
                </div>
                {/* footer part for addign a foter */}
                <footer id="footer">
                    <div className="logo2">
                        <ul>
                            <li><FontAwesomeIcon icon={faScrewdriverWrench} size="2x" id="font4" /></li>
                            <li><h2>FIXZY</h2></li>
                            <li><p>Your trusted roadside assistance partner.</p></li>
                        </ul>
                    </div>
                    <div className="links1">
                        <ul id="links">
                            <li><h2>-Quick Links</h2></li>
                            <li>Home</li>
                            <li>Services</li>
                            <li>Contact us</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div className="links2">
                        <ul id="links">
                            <li><h2>-Quick Links</h2></li>
                            <li>Home</li>
                            <li>Services</li>
                            <li>Contact us</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                </footer >
            </div >
        </>
    )
}
export default Home;