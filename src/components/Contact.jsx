import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

const ContactForm = () => {
    return (
      <div id="container">
        <h2 id="title">Contact Us</h2>
        <form id="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
  
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
  
          <label htmlFor="carno">Car Number:</label>
          <input type="text" id="carno" name="carno" required />
  
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" required />
  
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
  
          <button type="submit" id="submit-button">Send Message</button>
          <button id="callus1">Call Directly</button>
          <Link to="/"><button id="backbtn1">Home</button></Link>
        </form>
      </div>
    );
  };
  
  export default ContactForm;
  