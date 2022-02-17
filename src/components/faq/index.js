import React, { useState } from "react";
import Question from "./question";

const FAQ = () => {
  return (
    <div className="center-all margin-vertical">
      <h2 className="medium-title text-center">Frequently Asked Question</h2>
      <div className="stretch-container">
        <p className="margin-vertical text-center">
          Here are some of our FAQs. if you have any other questions you'd lilke answered please
          feel free to email us.
        </p>
        <div className="w-100">
          <Question title="Whats is Bookmark" />
          <Question title="How can i request new browser" />
          <Question title="Is there a mobile app?" />
          <Question title="What about other Chrorium Browsers" />
        </div>
      </div>
      <button className="soft-blue-button margin-vertical">More info</button>
    </div>
  );
};

export default FAQ;
