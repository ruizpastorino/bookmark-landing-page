import React from "react";
import NavigatorCard from "./navigator-card";
import chromeLogo from "../assets/images/logo-chrome.svg";
import firefoxLogo from "../assets/images/logo-firefox.svg";
import operaLogo from "../assets/images/logo-opera.svg";

const Download = () => {
  return (
    <div className="center-all margin-vertical">
      <h2 className="medium-title text-center">Download the extension</h2>
      <div className="stretch-container">
        <p className="margin-vertical text-center">
          We got more browsers in the pipeline. Please do let us know if you've got a
          favourite you'd like us to priorize
        </p>
      </div>
      <div className="row">
        <NavigatorCard image={chromeLogo} navigator="Chrome" version="62" />
        <NavigatorCard image={firefoxLogo} navigator="Firefox" version="55" />
        <NavigatorCard image={operaLogo} navigator="Opera" version="46" />
      </div>
    </div>
  );
};

export default Download;
