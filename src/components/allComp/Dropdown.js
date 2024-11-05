import React, { useState } from "react";
// import "./Dropdown.css";

const Dropdown = ({ languages, type, setViewContest }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(type);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [flag, setFlag] = useState(0);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDrop = () => {
    setFlag(flag + 1);
    if (flag) {
      setViewContest && setViewContest(2);
    }
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div onClick={toggleDropdown} className="dropdown-header">
        <span>{selectedLanguage || "Play Quiz In"}</span>
        <span className="dropdown-arrow">&#9662;</span>
      </div>
      {isDropdownOpen && (
        <ul className="dropdown-list">
          {languages.map((language) => (
            <li
              key={language}
              onClick={() => selectLanguage(language)}
              className="dropdown-item"
              onClick={handleDrop}
            >
              <input
                type="radio"
                id={language}
                name="language"
                value={language}
                checked={selectedLanguage === language}
                onChange={() => {
                  selectLanguage(language);
                  setFlag(flag + 1);
                }}
              />
              <label htmlFor={language}>{language}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
