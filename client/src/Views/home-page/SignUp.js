import React, { useState, useContext, useEffect } from "react";
import "./SignUp.css";
import avatar from "../image/signIn-avatar.png";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import AuthContext from "../../Context/auth/authContext";
import history from "../../utilis/history";
import signUpFormValidation from "../home-page/SignUpFormValidation";
function SignUp() {
  const authContext = useContext(AuthContext);
  //app level state
  const { isAuthenticated, signUp } = authContext;
  //this state is used for handling radio value
  const [gendre, setGendre] = useState("Homme");
  const radios = [
    { name: "Homme", value: "Homme" },
    { name: "Femme", value: "Femme" },
  ];
  //component level state for handling form message error
  const [errorsMsg, setErrorsMsg] = useState({});

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
    setErrorsMsg(signUpFormValidation(userForm));
  };
  console.log(userForm);
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorsMsg(signUpFormValidation(userForm));

    if (Object.keys(errorsMsg).length == 0) {
      signUp({
        firstName,
        lastName,
        dateOfBirth,
        gendre,
        email,
        password,
      });
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/AbonnéHomePage/Compte");
    }
  }, [isAuthenticated]);
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
                type="text"
                className="form-input"
                name="email"
                placeholder=" Tapez votre email"
                value={userForm.email}
                onChange={handelChange}
              />
              {errorsMsg.email && (
                <span className="emailError">{errorsMsg.email}</span>
              )}
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
                name="password"
                value={userForm.password}
                onChange={handelChange}
              />
              {errorsMsg.password && (
                <span className="emailError">{errorsMsg.password}</span>
              )}
              <input
                type="password"
                className="form-input"
                placeholder=" Confirmez votre mots de passe"
                name="ConfirmPassword"
                value={userForm.ConfirmPassword}
                onChange={handelChange}
              />
              {errorsMsg.ConfirmPassword && (
                <span className="emailError">{errorsMsg.ConfirmPassword}</span>
              )}
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
