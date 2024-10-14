import React, { useState } from "react";
import './css/response.css';

const ResponsePage = () => {
  const [acceptingResponses, setAcceptingResponses] = useState(true);

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
          <tr>
            <td colSpan="5" className="waiting">Waiting for responses...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResponsePage;
