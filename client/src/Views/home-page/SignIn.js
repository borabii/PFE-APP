import React from "react";
import "./SignIn.css";
import avatar from "../image/signIn-avatar.png";
function SignIn() {
  return (
    <div className="signIn">
      <div className="signIn__container">
        <div className="signIn__left">
          <div className="signIn__leftContainer">
            <h1>Bienvenu</h1>
            <img src={avatar} alt="signIn-avatar" />
            <h6>Trouver votre partenaire avec notre application</h6>
          </div>
        </div>
        <div className="signIn__rigth">
          <form className="form__container">
            <h1>Connexion</h1>
            <div className="form__containerInput">
              <input type="text"></input>
              <input type="text"></input>
              <button type="submit">Connexion</button>
            </div>

            <h6>Mots de passe oublié !</h6>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
