import React from "react";


const Navbar = () => {
  let isArrayFunction = (inputArray) => {
    if (Array.isArray(inputArray) && inputArray.length !== 0) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <div id="Navbar">
      <div className="usa-overlay"></div>
      <header className="usa-header usa-header--basic usa-header--megamenu padding-bottom-4 padding-top-6">
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <div className="usa-logo margin-0" id="basic-mega-logo">
              <em className="usa-logo__text">
                <div className="display-flex flex-row align-items-center">
                  
                  <strong><h3 className="display-inline-block padding-left-1">Symptom Checker</h3></strong>
                </div>
              </em>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
