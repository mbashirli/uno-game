import React from "react";
import "./FindFriends.css";
import SearchBar from "../components/SearchBar/SearchBar";
import UserData from "../UserData.json";

const FindFriends = () => {
  return (
    <div className="wrapper">
      <div className="search-bar">
        <div className="search-bar-wrapper">
          <SearchBar placeholder="ex: lord-voldemort" data={UserData} />
        </div>
        <div className="filler"></div>
      </div>
    </div>
  );
};

export default FindFriends;
