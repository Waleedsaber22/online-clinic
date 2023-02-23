import React from "react";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-card">
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <h3 className="header-text">
              For Better Healthcare & Healthier Life
            </h3>
            <p className="p-text">
              You Can book Your Appointment Now or chat with your Doctor for any
              questions or concerns
            </p>
          </div>
        </div>
      </div>

      <div className="bg-widgetBlue py-8 px-8 max-w-md mx-8 my-8 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 overflow-hidden">
        <div className="text-center flex flex-col align-middle justify-center">
          <h3 className="header-text">Book Appointment</h3>
          <div className="search-container">
            <div className="mx-4 my-2 flex flex-col align-middle">
              <p className="text-slate-200 font-medium">Select Specialty</p>
              <div>
                <Dropdown placeholder="Select Specialty" />
              </div>
            </div>

            <div className="name-container">
              <p className="text-slate-200 font-medium">Search by Name</p>
              <div>
                <SearchBar placeholder="Enter Physician's Name" />
              </div>
            </div>
          </div>
          <button className="hero-btn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
