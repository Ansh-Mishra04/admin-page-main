import React from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import worldCountries from './Data/world-countries.json'; // Download the file as discussed earlier
import './css/ActiveUserCard.css'; // For custom styling

const ActiveUsersCard = ({ activeUsers, increasePercentage }) => {
  // Sample data for active users
  const geoChartData = [
    { id: 'USA', value: 200 }, // Sample data
    { id: 'IND', value: 1000 },
    { id: 'GBR', value: 100 },
    // Add more country data as needed
  ];

  return (
    <div className="active-users-card">
      <div className="card-header">
        <h4>Active users</h4>
      </div>
      <div className="card-body">
        <h3>{activeUsers.toLocaleString()}</h3>
        <p className="percentage">
          <span className="increase">▲ {increasePercentage}%</span> Increase the last month
        </p>
        <div className="world-map">
          <ResponsiveChoropleth
            data={geoChartData}
            features={worldCountries.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            domain={[0, 1000]}
            unknownColor="#f0f0f0"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={60}
            projectionTranslation={[0.49, 0.6]}
            projectionRotation={[0, 0, 0]}
            enableGraticule={false}
            borderWidth={1.0}
            borderColor="#666"
          />
        </div>
        <div className="legend">
          <span className="dot active"></span> Active User
          <span className="dot inactive"></span> Inactive User
        </div>
      </div>
    </div>
  );
};

export default ActiveUsersCard;
