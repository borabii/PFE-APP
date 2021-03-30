import React,{ useState } from "react";
import "./SignUp.css";
import avatar from "../image/signIn-avatar.png";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
function SignUp() {
  const [radioValue, setRadioValue] = useState('1');
 console.log(radioValue)
  const radios = [
    { name: 'Homme', value: '1' },
    { name: 'Femme', value: '2' },
  ];
  return (
    <div className="form-container">
      <div className="form-content-left">
        <img className="form-img" src={avatar} />
      </div>
     
      <div className="form-content-right">
           <h1>INSCRIVIZ VOUS</h1>
          <form className="form">
             
             <div className="form-inputs">
                <input 
                 type="text" 
                 className="form-input"
                  placeholder="  Nom" />
                <input 
                 type="text" 
                 className="form-input"
                  placeholder="  Prénom" />
                   <input 
                 type="Date" 
                 className="form-input "
                  />
                <input 
                 type="email"
                 className="form-input"
                   name="email" placeholder=" Tapez votre email"/>
               
               <div className="gender">
               <ButtonGroup  className=" btn-radio " toggle>
                      {radios.map((radio, idx) => (
                        <ToggleButton
                          key={idx}
                          type="radio"
                          name="radio"
                          value={radio.value}
                          checked={radioValue === radio.value}
                          onChange={(e) => setRadioValue(e.currentTarget.value)}
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
                  placeholder=" Tapez votre mots de passe"/> 
                <input  
                type="password"
              className="form-input"
                name="password2" 
                placeholder=" Confirmez votre mots de passe" />
               
                <button className="form-input-btn" type="submit"> Inscription </button>
              </div>
          </form>
      </div>
    </div>
  );
}

export default SignUp;
