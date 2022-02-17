import React, { useState } from "react";

const Question = ({ title }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="question touchable" onClick={() => setActive(!active)}>
      <div className="row">
        <a className="dark-text">
          {title}
        </a>
        {active ? <i className="fa-solid fa-chevron-up  soft-red-text"/> : <i className="fa-solid fa-chevron-down soft-blue-text"/>}
      </div>
      <p className={!active ? "hidden" : undefined}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus iusto consequuntur
        ipsum nulla autem, alias saepe vel perferendis accusamus totam illo incidunt? Unde debitis
        earum repellat fugit fugiat non quis.
      </p>
    </div>
  );
};

export default Question;
