import React, { useState } from 'react';
import Field from './Field';
import Response from './Response';
import Preview from '../Help';
import './css/Tabs.css'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Field');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Field':
        return <Field />;
      case 'Response':
        return <Response />;
      case 'Preview':
        return <Preview />;
      default:
        return null;
    }
  };

  return (
    <div className="tabs-container">
      <h1 className="tabs-title">Internship</h1>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'Field' ? 'active' : ''}`}
          onClick={() => setActiveTab('Field')}
        >
          Field
        </button>
        <button
          className={`tab-button ${activeTab === 'Response' ? 'active' : ''}`}
          onClick={() => setActiveTab('Response')}
        >
          Response
        </button>
        <button
          className={`tab-button ${activeTab === 'Preview' ? 'active' : ''}`}
          onClick={() => setActiveTab('Preview')}
        >
          Preview
        </button>
      </div>
      <div className="tab-content">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Tabs;
