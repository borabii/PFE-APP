import React, { useContext, useState, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import AuthContext from "../../../Context/auth/authContext";
import UserContext from "../../../Context/user/userContext";

function AbonnéInfo() {
  //auth context
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  //user context
  const userContext = useContext(UserContext);
  const { updateProfileImage } = userContext;
  const [UserImage, setUserImage] = useState({ file: null });
  //handel user image input
  const imageSelectHandler = (event) => {
    setUserImage({
      file: URL.createObjectURL(event.target.files[0]),
    });
  };
  //run when user upload nex profile image
  useEffect(() => {
    updateProfileImage(UserImage, user._id);
  }, [UserImage]);
  return (
    <div className="abonneInfo">
      <div className="imgProfil">
        <img src={user.imageProfile} alt="" />
        <label for="file-upload" class="file-upload-btn">
          <EditIcon id="editImage-icon" />
        </label>
        <input type="file" id="file-upload" onChange={imageSelectHandler} />
      </div>
      <div className="info">
        <div className="info_General">
          <h3> Information Générale</h3>
          <ul>
            <li id="info-item">
              Nom:<span>{user.firstName}</span>{" "}
            </li>
            <li>
              Prenom:<span>{user.lastName}</span>
            </li>
          </ul>
        </div>

        <div className="description">
          <h3> Description</h3>
          <textarea rows="4" value={user.description} />
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
