import React from "react";

const Dropdown = ({ placeholder }) => {
  return (
    <div>
      <input
        className="text-black outline-none pl-1"
        type="text"
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default Dropdown;
