// Tabs.js
import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="tabs">
      <ul className="tab-list">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
 
    </div>
  );
};

export default Tabs;
