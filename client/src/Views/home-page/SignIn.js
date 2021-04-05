import React from "react";
import "./SignIn.css";
import avatar from "../image/signIn-avatar.png";
function SignIn() {
  return (
    <div className="signIn">
      
        <div className="signIn__left">
         
            <h1>Bienvenu</h1>
            <img src={avatar} alt="signIn-avatar" />
            <h6>Trouver votre partenaire avec notre application</h6>
          
        </div>
        <div className="signIn__rigth">
        <h1>Connexion</h1>
          <form className="form">
          
            <div className="form-inputs">
              <input type="text" className="form-input" placeholder="Email"/>
              <input type="text" className="form-input" placeholder="Mots de passe"/>
              <button  className=" form-btn "  type="submit">Connexion</button>
            </div>

            
          </form>
        
        </div>
     
    </div>
  );
}

export default SignIn;
