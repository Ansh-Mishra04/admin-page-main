import React from 'react';

const UsersAnalytics = () => {
  const usersStats = [
    { label: 'Active Users', stat: '4,568', progress: '+22% from April' },
    { label: 'Page Visits', stat: '469k', progress: '+19% from April' },
    { label: 'Impressions', stat: '477k', progress: '+25% from June' },
    { label: 'Users Device', stat: '27,917', progress: '+18% from June' },
  ];

  return (
    <div className="users-analytics-container">
      {usersStats.map((userStat, index) => (
        <div className="user-analytics-card" key={index}>
          <h4>{userStat.label}</h4>
          <p>{userStat.stat}</p>
          <p>{userStat.progress}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersAnalytics;
