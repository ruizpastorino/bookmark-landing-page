import React from "react";
import logo from "../assets/images/logo-bookmark.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="row flex-1">
        <img src={logo} alt="bookmark logo" />
      </div>
      <a className="nav-item">FEATURES</a>
      <a className="nav-item">PRICING</a>
      <a className="nav-item">CONTACT</a>
      <button className="soft-red-button">LOGIN</button>
    </div>
  );
};

export default Navbar;
