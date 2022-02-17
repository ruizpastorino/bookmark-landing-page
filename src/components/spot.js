import React from "react";

const Banner = ({
  image,
  title,
  content,
  buttons = [],
  align = "left",
  titleSize = "medium-title",
}) => {
  return (
    <div className={`fade-in row spot ${align === "right" ? "" : "row-reverse"}`}>
      <div className="spot-text-wrapper center-all">
        <div className="w-100">
          <h2 className={titleSize}>{title}</h2>
        </div>
        <p>{content}</p>
        <div className="row w-100">
          {buttons.map(({ variant, title, action }) => (
            <button className={variant} onClick={action}>
              {title}
            </button>
          ))}
        </div>
      </div>
      <div className="spot-image-wrapper">
        <img className="w-100" src={image} alt="" />
        <div className={`rounded-shape shape-${align}`} />
      </div>
    </div>
  );
};

export default Banner;
