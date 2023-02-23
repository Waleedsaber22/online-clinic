import React from "react";

function SearchBar({ placeholder }) {
  return (
    <div>
      <input
        className="text-black outline-none pl-1"
        type="text"
        placeholder={placeholder}
      ></input>
    </div>
  );
}

export default SearchBar;
