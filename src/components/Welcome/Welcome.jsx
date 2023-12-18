import React, { useState } from "react";
import "./Welcome.css";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const [userData, setUserData] = useState({
    name: "",
    date: "",
  });

  const navigate = useNavigate();

  const formHandel = (e) => {
    e.preventDefault();
    navigate("/certificate", { state: userData }, { replace: true });
  };

  const usernameChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  console.log(userData);

  return (
    <div className="welcome__main">
      <div className="welcome__left__side">
        <h1>Welcome </h1>
        <h2>Certificated Generate</h2>
      </div>
      <div className="welcome__right__side">
        <p>Please fill there details</p>
        <form className="welcome__form">
          <div className="form__card">
            <span>Name</span>
            <input
              placeholder="fill the name"
              type="text"
              onChange={usernameChange}
              name="name"
              value={userData.name}
            />
          </div>
          <div className="form__card">
            <span>Date</span>
            <input
              placeholder="choose date"
              type="date"
              onChange={usernameChange}
              name="date"
              value={userData.date}
            />
          </div>
          <div>
            <button onClick={formHandel}>Go to Certificate</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Welcome;
