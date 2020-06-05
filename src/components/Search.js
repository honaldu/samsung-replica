import React from "react";
import "./Search.scss";

const Search = () => {
  return (
    <div className="search-wrapper">
      <div className="search-container">
        <input type="text" className="search-input" placeholder="갤럭시 폴드" />
        <button type="button" className="search-button">
          <img
            src="https://img.icons8.com/material-outlined/48/000000/search.png"
            alt="search"
          />
        </button>
      </div>
    </div>
  );
};

export default Search;
