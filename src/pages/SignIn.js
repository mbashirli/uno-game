import { React } from "react";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="sign-in-container">
      <div className="sign-in-text">
        <h1>Sign In</h1>
      </div>
      <div className="sign-in-input">
        <ul className="sign-in-input-ul">
          <li>
            <input placeholder="username"></input>
          </li>
          <li>
            <input placeholder="password" type="password"></input>
          </li>
          <ul className="remember-me-ul">
            <input type="checkbox" className="remember-me"></input>
            <span>Remember Me</span>
          </ul>
          <button className="sign-in-button">Sign In</button>
        </ul>
      </div>
    </div>
  );
};

export default SignIn;
