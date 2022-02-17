import React from "react";
import logo from "../../assets/images/logo-bookmark-full-white.svg";

const MobileMenu = ({ close }) => {
  return (
    <div className="mobile-menu desktop-hidden fade-in">
      <div className="mobile-navigation">
        <div className="row">
          <img src={logo} alt="bookmark logo" />
          <i className="fa-solid fa-times touchable" onClick={close} />
        </div>
        <a className="nav-item">FEATURES</a>
        <a className="nav-item">PRICING</a>
        <a className="nav-item">CONTACT</a>
        <button>LOGIN</button>
      </div>
      <div className="row mobile-media">
        <a>
          <i className="fa-brands fa-facebook" />
        </a>
        <a>
          <i className="fa-brands fa-twitter" />
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
