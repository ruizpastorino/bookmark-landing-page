import React from "react";
import logo from "../../assets/images/logo-bookmark-full-white.svg";

const MobileMenu = ({ close }) => {
  const menuRef = React.createRef();

  const handleClose = () => {
    if (close) {
      let className = menuRef.current.className;
      menuRef.current.className = className.replace("-in", "-out");
      setTimeout(() => close(), 290);
    }
  };

  return (
    <div ref={menuRef} className="mobile-menu desktop-hidden fade-in">
      <div className="mobile-navigation">
        <div className="row">
          <img src={logo} alt="bookmark logo" />
          <i className="fa-solid fa-times touchable" onClick={handleClose} />
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
