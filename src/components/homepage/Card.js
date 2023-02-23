import React from "react";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <h3 className="header-text">Messaging</h3>
            <p className="p-text">
              A modern messaging experience letting patients know their care
              team is only a few clicks away, providing a good patient-physician
              communication experience.
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <h3 className="header-text">Scheduling</h3>
            <p className="p-text">
              The advanced collaborative tool for clinic doctors to arrange
              appointments, manage upcoming tasks and coordinate internally.
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <h3 className="header-text">Reviews</h3>
            <p className="p-text">
              Each patient has ability to give feedback or review their doctors
              according to their experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
