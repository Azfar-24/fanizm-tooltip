// Tabs.js
import Tippy from "@tippyjs/react";
import React, { useState } from "react";

const Tabs = ({ tabs, setStep, step }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [flag, setFlag] = useState(0);

  return (
    <div className="tabs">
      <ul className="tab-list">
        {tabs.map((tab, i) => (
          <Tippy
            content="Yo! Check out all the game modes!"
            theme="custom"
            animation="fade"
            visible={step !== "end" && i < 2 && flag === i}
          >
            <li
              key={tab.id}
              className={`tab-item ${activeTab === tab.id ? "active" : ""} ${
                flag === i ? "highlighted" : ""
              }`}
              onClick={() => {
                setActiveTab("tab1");
                i < 2 && setFlag(i + 1);
                setStep(step + 1);
              }}
            >
              {tab.label}
            </li>
          </Tippy>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
