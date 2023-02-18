import React from "react";

function SearchBar({ placeholder, data }) {
  return (
    <div className="text">
      <input
        className="text-black outline-none pl-1"
        type="text"
        placeholder={placeholder}
      ></input>
    </div>
  );
}

export default SearchBar;
