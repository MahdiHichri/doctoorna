import React, { Component } from "react";
import "./Patient.css";

const Patient = ({ age, ageChange, male, female, gender }) => {
  // props > age, gender, male, female

  return (
    <React.Fragment>
      <div id="Home" className="tablet:grid-col padding-x-2">
        <form className="usa-form">
          <label className="usa-label" htmlFor="range-slider">
            What is your age?
            <h2>{age}</h2>
          </label>
          <input id="range-slider" className="usa-range outline-0" type="range" min="0" max="100" value={age} onChange={ageChange} />
        </form>
      </div>
      <div id="Home" className="tablet:grid-col padding-x-2">
        <p>What is your sex?</p>
        <form className="usa-form">
          <div className="usa-radio">
            <input className="usa-radio__input outline-0" id="stanton" type="radio" checked={male} onChange={gender} name="historical-figures-2" value="male" />
            <label className="usa-radio__label" htmlFor="stanton">
              Male
            </label>
          </div>
          <div className="usa-radio">
            <input className="usa-radio__input outline-0" id="anthony" type="radio" checked={female} onChange={gender} name="historical-figures-2" value="female" />
            <label className="usa-radio__label" htmlFor="anthony">
              Female
            </label>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Patient;
