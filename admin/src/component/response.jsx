import React, { useState } from "react";
import './css/response.css';

const ResponsePage = () => {
  const [acceptingResponses, setAcceptingResponses] = useState(true);

  // Dummy data for 13 rows
  const rows = Array.from({ length: 13 }, (_, index) => ({
    timestamp: '',
    name: '',
    gamil: '',
    role: '',
    college: ''
  }));

  // Toggle the accepting responses
  const handleToggle = () => {
    setAcceptingResponses(!acceptingResponses);
  };

  return (
    <div className="response-container">
      <div className="header">
        <h2>0 Responses</h2>
        <div className="controls">
          <button className="download-btn">Download .CSV File</button>
          <label className="switch">
            <input
              type="checkbox"
              checked={acceptingResponses}
              onChange={handleToggle}
            />
            <span className="slider round"></span>
          </label>
          <span className="toggle-label">
            {acceptingResponses ? "Accepting Responses" : "Not Accepting Responses"}
          </span>
        </div>
      </div>

      <table className="response-table">
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Name</th>
            <th>Gamil</th>
            <th>Role</th>
            <th>College</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.timestamp}</td>
              <td>{row.name}</td>
              <td>{row.gamil}</td>
              <td>{row.role}</td>
              <td>{row.college}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponsePage;
