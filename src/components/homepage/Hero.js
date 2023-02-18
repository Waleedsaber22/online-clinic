import React from "react";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-card">
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-white text-lg font-semibold">
              For Better Healthcare & Healthier Life
            </p>
            <p className="card-p">
              You Can book Your Appointment Now or chat with your Doctor for any
              questions or concerns
            </p>
          </div>
        </div>
      </div>

      <div className="hero-card">
        <div className="text-center space-y-2 sm:text-left flex flex-col align-middle">
          <p className="text-lg text-white font-semibold text-center">
            Book Appointment
          </p>
          <div className="search-container">
            <div className="specialty-container">
              <p className="text-slate-200 font-medium">Select Specialty</p>
            </div>
            
            <div className="name-container">
              <p className="text-slate-200 font-medium">Search by Name</p>
            </div>
          </div>
          <button className="hero-btn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
