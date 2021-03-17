import React from "react";
import "./SignUp.css";
import avatar from "../image/signIn-avatar.png";
<<<<<<< HEAD
function SignUp() {
  return (
    <div className="SignUp">
    <div className="SignUpdd__container">
      <div className="SignUp__left">
        <div className="SignUp__leftContainer">
          <h1>Bienvenu</h1>
          <img src={avatar} alt="SignUp-avatar" />
          <h6>Trouver votre partenaire avec notre application</h6>
        </div>
      </div>
      <div className="SignUp__rigth">
        <form className="signUpform__container">
          <h1>Connexion</h1>
          <div className="signUpform__containerInput">
            <input type="text" placeholder="Email"></input>
            <input type="text" placeholder="Mots de passe"></input>
            <input type="text"placeholder="Prénom"/> 
                    <input type="date"placeholder="date"/>
                       <h6>female/male</h6> 
                    <input type="email"placeholder="email"/>
                    <input type="password"placeholder="Mots de passe"/> 
                    <input type="password" placeholder="Confirmer votre mots de passe"/> 
            <button type="submit">Connexion</button>
          </div>

          <h6>Mots de passe oublié !</h6>
        </form>
      </div>
    </div>
  </div>
    /*<div className="signUp">
      <div className="signUp__container">
        <div className="signUp__left">
          <div className="signUp__leftContainer">
          <img src={avatar} alt="SignUp-avatar" />
            <h5>Crééz votre compte</h5>
            <p>Ca devrait prendre une minute</p>
           </div>
        </div>
        <div className="signUp__rigth">
        <form className="form__container">
            <h1>Inscrivez vous</h1>
            <div className="form__containerInput">
              <input type="text"placeholder="Nom"/> 
              
                    <input type="text"placeholder="Prénom"/> 
                    <input type="date"placeholder="date"/>
                       <h6>female/male</h6> 
                    <input type="email"placeholder="email"/>
                    <input type="password"placeholder="Mots de passe"/> 
                    <input type="password" placeholder="Confirmer votre mots de passe"/>   
                    
            </div>
            <button>Connexion</button>
            </form>
        </div>
        
    
      </div>
      

    </div>  */
 );
=======

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
>>>>>>> test
}

export default SignUp;
