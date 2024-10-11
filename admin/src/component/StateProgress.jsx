import React, { useState } from "react";
import './css/StateProgress.css';

const StateProgress = () => {
  // State for tracking the selected option (States or Cities)
  const [selectedOption, setSelectedOption] = useState('States');

  // Dummy data for states and cities
  const stateData = [
    { name: "Madhya Pradesh", value: 75 },
    { name: "Uttar Pradesh", value: 50 },
    { name: "Goa", value: 85 },
    { name: "Maharashtra", value: 60 },
    { name: "Gujarat", value: 40 },
    { name: "Punjab", value: 90 },
  ];

  const cityData = [
    { name: "Mumbai", value: 70 },
    { name: "Delhi", value: 65 },
    { name: "Bangalore", value: 80 },
    { name: "Hyderabad", value: 55 },
    { name: "Chennai", value: 45 },
    { name: "Kolkata", value: 85 },
  ];

  // Handle change of dropdown
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Function to render the progress bars dynamically based on selected option
  const renderProgressBars = (data) => {
    return data.map((item, index) => (
      <div key={index} className="state-progress">
        <div className="state-name">
          <p>{item.name}</p>
          <p>{item.value}%</p>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${item.value}%` }}></div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      {/* Dropdown for selecting States or Cities */}
      <div className="dropdown">
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="States">States</option>
          <option value="Cities">Cities</option>
        </select>
      </div>

      {/* Conditionally render progress bars based on selected option */}
      <div className="progress-container">
        {selectedOption === 'States' ? renderProgressBars(stateData) : renderProgressBars(cityData)}
      </div>
    </div>
  );
};

export default StateProgress;
