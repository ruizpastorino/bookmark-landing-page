import React from "react";
import image from "../assets/images/illustration-hero.svg";

const Banner = () => {
  return (
    <div className="row cover">
      <div className="center-all flex-1 h-100">
        <h2 className="title">A simple Bookmark manager</h2>
      </div>
      <div className="flex-1">
        <img className="w-100" src={image} alt="" />
      </div>
    </div>
  );
};

export default Banner;
