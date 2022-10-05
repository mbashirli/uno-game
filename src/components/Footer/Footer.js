import React from "react";
import "./Footer.css";
import CatRollLogo from "../../assets/catroll_logo.png";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer">
        <div className="row">
          <div className="col">
            <h4>Information</h4>
            <li>About Us</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Advertise with us</li>
          </div>
          <div className="col">
            <h4>CatRoll Studios, Inc.</h4>
            <li>813-284-8424</li>
            <li>Tampa, Florida</li>
            <li>10811 McKinley Dr</li>
            <li>33612</li>
          </div>
          <div className="col">
            <h4>Work with us</h4>
            <li>Advertise with us</li>
            <li>Accessibility statement</li>
            <li>Careers</li>
            <li>Sell my info</li>
          </div>
        </div>
        <div className="Row">
          <p className="col-sm">
            &copy; {new Date().getFullYear()} CATROLL STUDIOS INC | ALL RIGHTS
            RESERVERD
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
