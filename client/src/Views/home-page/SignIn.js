import React, { useState, useContext, useEffect } from "react";
import "./SignIn.css";
import AuthContext from "../../Context/auth/authContext";
import avatar from "../image/signIn-avatar.png";
import signInFormValidation from "./signInFormValidation";
import history from "../../utilis/history";
function SignIn() {
  const authContext = useContext(AuthContext);
  //app level state
  const { isAuthenticated, login, userRole } = authContext;

  //component level state for handling user inputed values
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userForm;

  //state for handling error message for tayping error in from
  const [errorsMsg, setErrorsMsg] = useState({});

  useEffect(() => {
    if (isAuthenticated) {
      if (userRole === "Admin") {
        history.push("/AdminHomePage");
      } else {
        history.push("AbonnéHomePage");
      }
    }
  }, [isAuthenticated, userRole]);

  // setUser state based on user's input
  const handelChange = (event) => {
    setUserForm({
      ...userForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorsMsg(signInFormValidation(userForm));
    login({
      email,
      password,
    });
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
                value={userForm.email}
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
                value={userForm.password}
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
