import React from "react";
import "./ContactUs.css";
import { Link } from "react";
const ContactUs = () => {
  let handleSubmit = () => {};
  return (
    <div className="contact-us-container">
      <div className="contact-us-wrapper">
        <div className="questions-text">
          <h1>Any questions? Contact us directly!</h1>
        </div>
        <div className="contact-box">
          <ul className="contact-field-ul">
            <li>
              <input className="input" placeholder="First Name" required />
            </li>
            <li>
              <input className="input" placeholder="Last Name" required />
            </li>
            <li>
              <input className="input" placeholder="Email Address" required />
            </li>
            <li>
              <input className="input" placeholder="Phone number" required />
            </li>
            <button className="contact-us-submit-button" onClick={handleSubmit}>
              Submit
            </button>
          </ul>
        </div>

        <div className="filler"></div>
      </div>
    </div>
  );
};

export default ContactUs;
