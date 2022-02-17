import React from "react";

const tab = ({ title, onSelect, active }) => {
  return (
    <div
      tabIndex={0}
      className={`tab touchable text-center ${active ? "tab-active" : ""}`}
      onClick={onSelect}
    >
      <a className="small-title">{title}</a>
    </div>
  );
};

export default tab;
