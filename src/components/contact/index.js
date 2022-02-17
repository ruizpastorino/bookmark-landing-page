import React, { useState } from "react";
import errorIcon from "../../assets/images/icon-error.svg";

const Contact = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");

  const checkEmail = () => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    setError(!regex.test(email));
  };

  return (
    <div className="center-all contact-container">
      <div className="center-all contact-wrapper">
        <p>35.000+ ALREADY JOINED</p>
        <h2 className="medium-title margin-vertical">Stay up-to-date with what we're doing</h2>
        <div className="row w-100">
          <div className="input-container">
            <div tabIndex={1} className={`input-wrapper ${error ? "input-wrapper-error" : ""}`}>
              <input
                value={email}
                className="w-100 h-100 flex-1"
                placeholder="Enter your email adress"
                type="text"
                onChange={({ target }) => setEmail(target.value)}
                onBlur={checkEmail}
                onFocus={()=>setError(false)}
              />
              <img className={!error ? "hidden" : undefined} src={errorIcon} alt="error-icon" />
            </div>
            <div className={`input-error ${!error ? "hidden" : ""}`}>
              <p>Ups make sure it's an email</p>
            </div>
          </div>
          <button className="soft-red-button">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
