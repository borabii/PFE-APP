import React, { useState, useContext, useEffect } from "react";
import "./SignUp.css";
import avatar from "../image/signIn-avatar.png";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import AuthContext from "../../Context/auth/authContext";
import history from "../../utilis/history";

function SignUp() {
  const authContext = useContext(AuthContext);
  //app level state
  const { isAuthenticated, signUp, userRole } = authContext;
  //this state is used for handling radio value
  const [gendre, setGendre] = useState("Homme");
  const radios = [
    { name: "Homme", value: "Homme" },
    { name: "Femme", value: "Femme" },
  ];
  //component level state for handling user inputed values
  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  });
  const {
    firstName,
    lastName,
    dateOfBirth,
    email,
    password,
    ConfirmPassword,
  } = userForm;
  // setUser state based on user's input
  const handelChange = (event) => {
    setUserForm({
      ...userForm,
      [event.target.name]: event.target.value,
    });
    console.log(userForm);
  };
  useEffect(() => {
    if (isAuthenticated) {
      history.push("AbonnéHomePage");
    }
  }, [isAuthenticated, userRole]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    // setErrorsMsg(signInFormValidation(userForm));
    signUp({
      firstName,
      lastName,
      dateOfBirth,
      gendre,
      email,
      password,
    });
  };
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
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-inputs">
              <input
                type="text"
                className="form-input"
                placeholder="  Nom"
                required
                name="firstName"
                value={userForm.firstName}
                onChange={handelChange}
              />
              <input
                type="text"
                className="form-input"
                placeholder="  Prénom"
                required
                name="lastName"
                value={userForm.lastName}
                onChange={handelChange}
              />
              <input
                type="Date"
                className="form-input "
                name="dateOfBirth"
                value={userForm.dateOfBirth}
                onChange={handelChange}
                required
              />
              <input
                type="email"
                className="form-input"
                name="email"
                placeholder=" Tapez votre email"
                required
                value={userForm.email}
                onChange={handelChange}
              />
              <div className="gender">
                <ButtonGroup className=" btn-radio " toggle>
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      type="radio"
                      name="radio"
                      value={radio.value}
                      checked={gendre === radio.value}
                      onChange={(e) => setGendre(e.currentTarget.value)}
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
                name="password"
                value={userForm.password}
                onChange={handelChange}
              />
              <input
                type="password"
                className="form-input"
                placeholder=" Confirmez votre mots de passe"
                required
                name="ConfirmPassword"
                value={userForm.ConfirmPassword}
                onChange={handelChange}
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
