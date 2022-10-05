import Reacts, { useState } from "react";
import "./SearchBar.css";
import { Link } from "react-router-dom";

export default function SearchBar({ placeholder, data }) {
  let [filteredData, setFilteredData] = useState([]);
  let handleFilter = (event) => {
    let searchedWord = event.target.value;
    let outputData = data.filter((value) => {
      return value.username.toLowerCase().includes(searchedWord.toLowerCase());
    });
    if (searchedWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(outputData);
    }
  };

  return (
    <div className="search">
      <h1 className="search-text">Search usernames: </h1>
      <div className="search-inputs">
        <input type="text" placeholder={placeholder} onChange={handleFilter} />
        {filteredData.length != 0 && (
          <div className="data-result">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <div className="data-item">
                  <Link to="search-section">
                    <p>{value.username}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
