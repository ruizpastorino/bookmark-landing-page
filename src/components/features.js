import React, { useState } from "react";
import Spot from "./spot";
import { tab1, tab2, tab3 } from "./spots.data";
import Tab from "./tab";

const Features = () => {
  const [display, setDisplay] = useState(1);

  return (
    <div className="center-all">
      <h2 className="medium-title text-center">Features</h2>
      <div className="stretch-container">
        <p className="margin-vertical text-center">
          Our aim is to make it quick and easy for you to access your favourite websites.
          Your bookmarks sync between your devices so you can access them on the go
        </p>
        <div className="row w-100 margin-vertical">
          <Tab
            active={display === 1}
            title="Simple bookmarking"
            onSelect={() => setDisplay(1)}
          />
          <Tab
            active={display === 2}
            title="Speady searching"
            onSelect={() => setDisplay(2)}
          />
          <Tab
            active={display === 3}
            title="Easy sharing"
            onSelect={() => setDisplay(3)}
          />
        </div>
      </div>
      {display === 1 && <Spot {...tab1} />}
      {display === 2 && <Spot {...tab2} />}
      {display === 3 && <Spot {...tab3} />}
    </div>
  );
};

export default Features;
