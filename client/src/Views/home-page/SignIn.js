import React, { useState, useContext, useEffect } from "react";
import "./SignIn.css";
import AuthContext from "../../Context/auth/authContext";
import avatar from "../image/signIn-avatar.png";
import signInFormValidation from "./signInFormValidation";
import history from "../../utilis/history";
function SignIn() {
  const authContext = useContext(AuthContext);
  //app level state
  const { isAuthenticated, login, logout, invalidUserInformationMsg, user } =
    authContext;
  const userRole = localStorage.getItem("role");
  //component level state for handling user inputed values
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userForm;

  //state for handling error message for tayping error in from
  const [errorsMsg, setErrorsMsg] = useState({});
  //redirect user after signIn
  useEffect(() => {
    if (isAuthenticated && user.status === "active") {
      if (userRole === "Admin" || userRole === "Super Admin") {
        history.push("/AdminHomePage");
      } else {
        history.push("/AbonnéHomePage");
      }
    } else if (isAuthenticated && user.status === "desactivier") {
      history.push("/blockedUser");
      logout();
    }
  }, [isAuthenticated, userRole]);

  // setUser state based on user's input
  const handelChange = (event) => {
    setUserForm({
      ...userForm,
      [event.target.name]: event.target.value,
    });
    setErrorsMsg(signInFormValidation(userForm));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorsMsg(signInFormValidation(userForm));
    if (Object.keys(errorsMsg).length <= 0) {
      login({
        email,
        password,
      });
    }
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
            {invalidUserInformationMsg && (
              <div style={{ color: "red" }}>{invalidUserInformationMsg}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
