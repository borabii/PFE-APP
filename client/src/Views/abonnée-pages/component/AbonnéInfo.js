import React, { useContext } from "react";
import AuthContext from "../../../Context/auth/authContext";
function AbonnéInfo() {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  return (
    <div className="abonneInfo">
      <div className="imgProfil">
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwritestylesonline.com%2Fthree-statistics-that-will-make-you-rethink-your-professional-profile-picture%2F&psig=AOvVaw0ViuZZEnTxtPIns_txCJJT&ust=1617401845098000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjJuMqJ3u8CFQAAAAAdAAAAABAO"
          alt=""
        />
        <input type="file" className="btn_change" />
      </div>
      <div className="info">
        <div className="info_General">
          <h3> Information Générale</h3>
          <ul>
            <li>Nom: {user.firstName}</li>
            <li>Prenom:{user.lastName}</li>
          </ul>
        </div>

        <div className="description">
          <h3> Description</h3>
          <textarea rows="4">{user.description}</textarea>
        </div>
        <div className="gend">
          <h3>Gender</h3>
          <h4>{user.gendre}</h4>
        </div>

        <div className="mail">
          <h3>Email</h3>
          <h4>{user.email}</h4>
        </div>
      </div>
    </div>
  );
}

export default AbonnéInfo;
