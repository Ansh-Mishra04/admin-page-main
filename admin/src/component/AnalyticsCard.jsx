import React from 'react';

const AnalyticsCard = ({ title, stat, progress }) => {
  return (
    <div className="analytics-card">
      <h4>{title}</h4>
      <p className="analytics-stat">{stat}</p>
      <p className="analytics-progress">{progress}</p>
    </div>
  );
};

export default AnalyticsCard;
