import React from "react";
import "./FindFriends.css";
import SearchBar from "../components/SearchBar/SearchBar";
import UserData from "../UserData.json";

const FindFriends = () => {
  return (
    <div className="find-friends-wrapper">
      <div className="search-bar">
        <div className="search-bar-wrapper">
          <SearchBar placeholder="ex: lord-voldemort" data={UserData} />
        </div>
        <div className="find-friends-filler"></div>
      </div>
    </div>
  );
};

export default FindFriends;
