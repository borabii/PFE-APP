import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function EditInfoPopUp(props) {
  //component level state
  const [annonceurEditInfo, setAnnonceurEditInfo] = useState({
    nomAnnonceur: "",
    numTelAnnonceur: "",
    description: "",
    adresse: "",
  });
  const {
    nomAnnonceur,
    numTelAnnonceur,
    description,
    adresse,
  } = annonceurEditInfo;
  //handel user Input and set state
  const handelChange = (event) => {
    setAnnonceurEditInfo({
      ...annonceurEditInfo,
      [event.target.name]: event.target.value,
    });
    console.log(annonceurEditInfo);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    //clear form after submit
    setAnnonceurEditInfo({
      nomAnnonceur: "",
      numTelAnnonceur: "",
      description: "",
      adresse: "",
    });
  };
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
              value={annonceurEditInfo.nomAnnonceur}
              onChange={handelChange}
            />
          </div>
          <div id="info-tel">
            <label>Num téléphone</label>
            <input
              type="text"
              id="annonceur-infoInput"
              name="numTelAnnonceur"
              value={annonceurEditInfo.numTelAnnonceur}
              onChange={handelChange}
            />
          </div>
          <div id="info-adresse">
            <label>Adresse</label>
            <input
              type="text"
              id="annonceur-infoInput"
              name="adresse"
              value={annonceurEditInfo.adresse}
              onChange={handelChange}
            />
          </div>

          <div id="info-desription">
            <label>Desription</label>
            <textarea
              rows="4"
              cols="30"
              name="description"
              value={annonceurEditInfo.description}
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
