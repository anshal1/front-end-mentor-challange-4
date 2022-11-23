import React from "react";
import "./Dropdown.css";
const Dropdown = () => {
  return (
    <div className="main_dropdown">
      <div className="inputs">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" id="input" placeholder="Search for country.." />
      </div>
      <div className="dropdown">
        <div className="dropdown_btn">
          <button>
            Filter by Region{" "}
            <span>
              <i className="fa-solid fa-2x fa-caret-down"></i>
            </span>
          </button>
          <div className="dropdown_menu">
            <p className="continents">Africa</p>
            <p className="continents">America</p>
            <p className="continents">Asia</p>
            <p className="continents">Europe</p>
            <p className="continents">Oceania</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
