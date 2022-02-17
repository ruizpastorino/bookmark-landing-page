import React from "react";
import logo from "../../assets/images/logo-bookmark-white.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="app-container">
        <div className="row">
          <div className="footer-navigation">
            <img src={logo} alt="bookmark logo" />
            <a className="nav-item">FEATURES</a>
            <a className="nav-item">PRICING</a>
            <a className="nav-item">CONTACT</a>
          </div>
          <div className="row">
            <a>
              <i className="fa-brands fa-facebook" />
            </a>
            <a>
              <i className="fa-brands fa-twitter" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
