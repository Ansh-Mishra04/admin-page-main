import React from 'react';

const RevenueCard = ({ title, amount, progress }) => {
  return (
    <div className="revenue-card">
      <h4>{title}</h4>
      <p className="revenue-amount">{amount}</p>
      <p className="revenue-progress">{progress}</p>
    </div>
  );
};

export default RevenueCard;
