import React from "react";
import "./SignUp.css";
import avatar from "../image/signIn-avatar.png";
function SignUp() {
  return (
    <div className="signUp">
      <div className="signUp__container">
        <div className="signUp__left">
          <div className="signUp__leftContainer">
          <img src={avatar} alt="signIn-avatar" />
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
      

    </div>  
 );
}

export default SignUp;