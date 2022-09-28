import React, { Component } from "react";
import "./Navbar.css";
import UNO_Png from "../../../src/assets/UNO_Logo.png";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="wrapper">
        <nav className="nav">
          <a href="/" className="uno-logo-link">
            <img src={UNO_Png} href="/" className="navbar-logo"></img>
          </a>
          <ul className="navbar-ul">
            <Link to="/Home">Home</Link>
            <Link to="/HowToPlay">How to Play?</Link>
            <Link to="/FindFriends">Find Friends!</Link>
            <Link to="/ContactUs">Contact Us</Link>
          </ul>
          <ul className="navbar-sign">
            <Link to="/SignIn">Sign In</Link>
            <Link to="/SignUp">Sign Up</Link>
          </ul>
        </nav>
      </div>
    );
  }
}

/* <img src={UNO_Png} href="/" className="navbar-logo"></img> */
