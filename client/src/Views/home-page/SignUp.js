import React from "react";
import "./SignUp.css";
import avatar from "../image/signIn-avatar.png";

function SignUp() {
  return (
    <div className="form-container">
      <div className="form-content-left">
        <img className="form-img" src={avatar} />
      </div>
      <div className="form-content-right">
        <form className="form">
          <h1>INSCRIVIZ VOUS</h1>
          <div className="form-inputs">
            <input className="form-input" type="text" placeholder="Nom" />
            <input className="form-input" type="text" placeholder="Prénom" />
          </div>
          <div className="form-inputs">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-inputs">
            Homme
            <input type="radio" name="male" />
            Femme
            <input
              type="radio"
              name="female"
              placeholder="Enter your password"
            />
          </div>
          <div className="form-inputs">
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="form-inputs">
            <input
              className="form-input"
              type="password"
              name="password2"
              placeholder="Confirm your password"
            />
          </div>
          <button className="form-input-btn" type="submit">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
