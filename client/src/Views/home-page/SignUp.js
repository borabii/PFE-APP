import React, { useState } from "react";
import "./SignUp.css";
import avatar from "../image/signIn-avatar.png";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
function SignUp() {
  //this state is used for handling radio value
  const [radioValue, setRadioValue] = useState("1");
  const radios = [
    { name: "Homme", value: "1" },
    { name: "Femme", value: "2" },
  ];
  return (
    <div className="signUp">
      <div className="signIn__container">
        <div className="signIn__left">
          <div className="signIn-img" id="signUp-img">
            <img src={avatar} alt="signIn-avatar" />
          </div>
        </div>
        <div className="signIn__rigth">
          <h1 id="signUp-title">INSCRIVIZ VOUS</h1>
          <form className="form">
            <div className="form-inputs">
              <input
                type="text"
                className="form-input"
                placeholder="  Nom"
                required
              />
              <input
                type="text"
                className="form-input"
                placeholder="  Prénom"
                required
              />
              <input type="Date" className="form-input " required />
              <input
                type="email"
                className="form-input"
                name="email"
                placeholder=" Tapez votre email"
                required
              />
              <div className="gender">
                <ButtonGroup className=" btn-radio " toggle>
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      type="radio"
                      name="radio"
                      value={radio.value}
                      checked={radioValue === radio.value}
                      onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </div>
              <input
                type="password"
                className="form-input"
                name="password"
                placeholder=" Tapez votre mots de passe"
                required
              />
              <input
                type="password"
                className="form-input"
                name="password2"
                placeholder=" Confirmez votre mots de passe"
                required
              />
              <button className="form-btn" type="submit">
                Inscription
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
