import React, { useContext, useState, useRef, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import AuthContext from "../../../Context/auth/authContext";
import UserContext from "../../../Context/user/userContext";
import { useSnackbar } from "notistack";

function AbonnéInfo() {
  //component level state
  const [UserImage, setUserImage] = useState(null);
  const prevUserImage = useRef();
  const [updayteddescription, setUpdaytedDescription] = useState({
    updayteddescription: "",
  });

  //auth context
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  //user context
  const userContext = useContext(UserContext);
  const {
    updateProfileImage,
    responseMessage,
    ClearResponseMessage,
    updateDescription,
  } = userContext;
  //handel user image input
  const imageSelectHandler = (event) => {
    setUserImage(event.target.files[0]);
  };

  //  run when user upload new profile image
  useEffect(() => {
    const formData = new FormData();
    formData.append("imageProfile", UserImage);
    updateProfileImage(formData);
    return () => {
      window.location.reload();
    };
  }, [UserImage]);

  // handel user nex description value
  const handelChange = (event) => {
    setUpdaytedDescription({ updayteddescription: event.target.value });
  };
  //run when user change his discription and exist the textarea
  const changeDescription = () => {
    updateDescription(updayteddescription);
    // window.location.reload();
  };
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (responseMessage !== "aucune message") {
      enqueueSnackbar(
        responseMessage,

        { variant: "success" }
      );
    }
    return () => {
      ClearResponseMessage();
    };
  }, [responseMessage]);

  return (
    <div className="abonneInfo">
      <div className="imgProfil">
        <img src={`http://localhost:8000/${user.imageProfile}`} alt="" />
        <label for="file-upload" class="file-upload-btn">
          <EditIcon id="editImage-icon" />
        </label>
        <input
          type="file"
          id="file-upload"
          name="imageProfile"
          onChange={imageSelectHandler}
        />
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
          <textarea
            rows="4"
            defaultValue={user.description}
            name="description"
            onChange={handelChange}
            onBlur={changeDescription}
          />
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
      {/* <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        onClose={handleClose}
        message={responseMessage}
        autoHideDuration={6000}
      /> */}
    </div>
  );
}

export default AbonnéInfo;
