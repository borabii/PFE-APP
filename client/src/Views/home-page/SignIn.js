import React, { useState } from "react";
import "./SignIn.css";
import avatar from "../image/signIn-avatar.png";
import signInFormValidation from "./signInFormValidation";
function SignIn() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errorsMsg, setErrorsMsg] = useState({});

  const handelChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorsMsg(signInFormValidation(values));
  };
  return (
    <div className="signIn">
      <div className="signIn__container">
        <div className="signIn__left">
          <h1>Bienvenu</h1>
          <div className="signIn-img">
            <img src={avatar} alt="signIn-avatar" />
            <h6>Trouver votre partenaire avec notre application</h6>
          </div>
        </div>
        <div className="signIn__rigth">
          <h1>Connexion</h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-inputs">
              <input
                type="text"
                className="form-input"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handelChange}
              />
              {errorsMsg.email && (
                <span className="emailError">{errorsMsg.email}</span>
              )}

              <input
                type="password"
                className="form-input"
                placeholder="Mots de passe"
                name="password"
                value={values.password}
                onChange={handelChange}
              />
              {errorsMsg.password && (
                <span className="emailError">{errorsMsg.password}</span>
              )}
              <button type="submit" className="form-btn">
                Connexion
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
