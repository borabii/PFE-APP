import React from "react";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="signUp">
      <div className="signUp__container">
        <div className="signUp__left">
          <div className="signUp__leftContainer">
            <h1>Crééz votre compte</h1>
            <p>img</p>
            <p>Ca devrait prendre une minute</p>
          </div>
        </div>
        <div className="signUp__rigth">
          <form className="form__container">
            <h1>Inscrivez vous</h1>
            <div className="form__containerInput">
            <table >
            <tr>
              <td>Nom</td>
              <td><input type="text"/></td> 
            </tr>
            <tr>
                <td>Gendre</td>
                <td>
                    <input type="radio" name="gendre" value="Femme"/> <label for="female">Femme</label>
                    <input type="radio" name="gendre" value="Homme"/><label for="male">Homme</label>
                </td> 
            </tr>
              <tr>
                <td>Email</td>
                <td><input type="email"/></td> 
              </tr>
              <tr>
                <td>Mots de passe</td>
                <td><input type="password"/></td> 
              </tr>
              <tr>
                <td>Confirmer mots de passe</td>
                <td><input type="password"/></td> 
              </tr>
          </table>
            </div>
          <button type="submit">Connexion</button>
          </form>
        </div>
        
      
      </div>
      

    </div>  
 );
}

export default SignUp;