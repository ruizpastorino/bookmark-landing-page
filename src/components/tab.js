import React from "react";

const tab = ({ title, onSelect, active }) => {
  return (
    <div
      tabIndex={0}
      className={`tab flex-1 touchable text-center ${active ? "tab-active" : ""}`}
      onClick={onSelect}
    >
      <p className="small-title">{title}</p>
    </div>
  );
};

export default tab;
