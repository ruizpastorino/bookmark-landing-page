import React, { useState } from "react";
import logo from "../../assets/images/logo-bookmark.svg";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="row flex-1">
        <img src={logo} alt="bookmark logo" />
      </div>
      <div className="row mobile-hidden">
        <a className="nav-item">FEATURES</a>
        <a className="nav-item">PRICING</a>
        <a className="nav-item">CONTACT</a>
        <button className="soft-red-button">LOGIN</button>
      </div>
      <i className="desktop-hidden touchable fa-solid fa-bars" onClick={() => setOpenMenu(true)} />
      {openMenu && <MobileMenu close={() => setOpenMenu(false)} />}
    </div>
  );
};

export default Navbar;
