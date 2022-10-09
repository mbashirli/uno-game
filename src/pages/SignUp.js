import { React } from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="sign-up-wrapper">
      <div className="sign-up-text">
        <h1>Sign Up</h1>
      </div>
      <div className="sign-up-form">
        <ul className="sign-up-form-ul">
          <li>
            <input placeholder="Email" />
          </li>
          <li>
            <input placeholder="Confirm email" />
          </li>
          <li>
            <input placeholder="Password" type="password" />
          </li>
          <li>
            <input placeholder="What should we call you?" type="password" />
          </li>
        </ul>
        <div className="sign-up-checkbox">
          <input type="checkbox"></input>
          <span>Share my data with large corporations</span>
        </div>
        <div className="sign-up-button-wrapper">
          <p>
            By clicking on Sign Up, you agree to our Terms and Conditions of Use
          </p>
          <button className="sign-up-button">Sign Up</button>
        </div>
      </div>
      <div className="filler"></div>
    </div>
  );
};

export default SignUp;
