import React, { useState, useContext, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useSnackbar } from "notistack";
import UserContext from "../../../Context/user/userContext";
function EditInfoPopUp(props) {
  const { enqueueSnackbar } = useSnackbar();
  //component level state
  const [annonceurEditInfo, setAnnonceurEditInfo] = useState({
    nomAnnonceur: "",
    numTelAnnonceur: "",
    descriptionAnnonceur: "",
    adresseAnnonceur: "",
    emailProAnnonceur: "",
  });

  const userContext = useContext(UserContext);
  const {
    annonceur,
    updateAnnonceurInfo,
    responseMessage,
    ClearResponseMessage,
  } = userContext;
  //handel user Input and set state
  const handelChange = (event) => {
    setAnnonceurEditInfo({
      ...annonceurEditInfo,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    updateAnnonceurInfo(annonceurEditInfo, annonceur._id);
    //clear form after submit
  };
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
  }, [responseMessage, annonceur]);
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Mes Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form id="edit-InfoForm" onSubmit={handleSubmit}>
          <div id="info-Nom">
            <label>Nom</label>
            <input
              type="text"
              id="annonceur-infoInput"
              name="nomAnnonceur"
              defaultValue={props.data && props.data.nomAnnonceur}
              onChange={handelChange}
            />
          </div>
          <div id="info-Nom">
            <label>Email</label>
            <input
              type="text"
              id="annonceur-infoInput"
              name="emailProAnnonceur"
              defaultValue={props.data && props.data.emailProAnnonceur}
              onChange={handelChange}
            />
          </div>

          <div id="info-tel">
            <label>Num téléphone</label>
            <input
              type="text"
              id="annonceur-infoInput"
              name="numTelAnnonceur"
              defaultValue={props.data && props.data.numTelAnnonceur}
              onChange={handelChange}
            />
          </div>

          <div id="info-desription">
            <label>Description</label>
            <textarea
              rows="4"
              cols="30"
              name="descriptionAnnonceur"
              defaultValue={props.data && props.data.descriptionAnnonceur}
              onChange={handelChange}
            />
          </div>
          <div className="edit__action">
            <button id="edit__btn">Modifier</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default EditInfoPopUp;
