import React from "react";
import "./Home.css";
import UNO_Reverse_Card from "../assets/reverse_card.png";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="home">
        <img src={UNO_Reverse_Card} className="uno-reverse-card"></img>
        <ul className="buttons">
          <li className="button">
            <a href="#">
              <span className="join-server">Join Server</span>
            </a>
          </li>
          <li className="button">
            <a href="#">
              <span className="create-server">Create Server</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
