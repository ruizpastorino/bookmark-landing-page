import React from "react";
import dots from "../../assets/images/bg-dots.svg";

const NavigatorCard = ({ image, navigator, version }) => {
  return (
    <div className="card">
      <div style={{ padding: "10px" }} className="center-all flex-1">
        <div className="card-img">
          <img src={image} alt="" />
        </div>
        <h3 style={{ marginTop: "20px"  }} className="strong-text">
          Add to {navigator}
        </h3>
        <p style={{ fontSize: "12px", marginTop: "10px" }}>Minimun version {version}</p>
      </div>
      <img src={dots} alt="" className="w-100" />
      <div style={{ padding: "20px" }}>
        <button className="w-100 soft-blue-button">Add & insatall extension</button>
      </div>
    </div>
  );
};

export default NavigatorCard;
