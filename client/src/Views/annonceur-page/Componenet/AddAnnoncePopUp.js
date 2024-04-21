import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import PubContext from "../../../Context/Publication/pubContext";
import UserContext from "../../../Context/user/userContext";
import { getNowDate } from "../../../utilis/date";
import Select from "react-select";

function AddAnnoncePopUp(props) {
  const pubContext = useContext(PubContext);
  const userContext = useContext(UserContext);
  const { addAnnonce } = pubContext;
  const { catégorieOption, annonceur } = userContext;

  // this state is use for handle participant counter value
  const [annonce, setAnnonce] = useState({
    imageAnnonce: "",
    description: "",
    categorie: "",
    date_DebutPub: getNowDate(),
    date_FinPub: getNowDate(),
  });

  //
  const handelCatégorieChange = (selectedOption) => {
    setAnnonce({
      ...annonce,
      categorie: selectedOption.label,
    });
  };
  //
  const handelChange = (event) => {
    setAnnonce({
      ...annonce,
      [event.target.name]: event.target.value,
    });
    console.log(annonce);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("description", annonce.description);
    formData.append("categorie", annonce.categorie);
    formData.append("date_DebutPub", annonce.date_DebutPub);
    formData.append("date_FinPub", annonce.date_FinPub);
    formData.append("imageAnnonce", annonce.imageAnnonce);
    addAnnonce(formData, annonceur._id);
    setAnnonce({
      imageAnnonce: "",
      description: "",
      categorie: "",
      date_DebutPub: "",
      date_FinPub: "",
    });
    props.onHide();
  };

  const imageSelectHandler = (event) => {
    setAnnonce({
      ...annonce,
      imageAnnonce: event.target.files[0],
    });
  };
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={true}
      scrollable={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Publier Annonce
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="addActivityPopUp">
          {annonce.imageAnnonce && (
            <div className="img__holder">
              <img src={URL.createObjectURL(annonce.imageAnnonce)} alt="" />
            </div>
          )}

          <form className="addAct-form " onSubmit={handleSubmit}>
            <div className="add-img">
              <h3> Ajouter une image</h3>

              <div className="demmande-formInput mb-0">
                <input
                  type="file"
                  id="justificatif-input"
                  name="imageAnnonce"
                  onChange={imageSelectHandler}
                  required
                />
              </div>
            </div>
            <div
              className="addAct-principalInfo mb-0"
              style={{ marginBottom: "0px" }}
            >
              <h3>information Principale</h3>

              <textarea
                rows="4"
                cols="50"
                placeholder="Description"
                name="description"
                value={annonce.description}
                onChange={handelChange}
                required
              />
              <div id="ActStart-date">
                <span>Date début</span>
                <input
                  type="date"
                  name="date_DebutPub"
                  value={annonce.date_DebutPub}
                  onChange={handelChange}
                  required
                />
              </div>
              <div id="ActEnd-date">
                <span>Date fin</span>

                <input
                  type="date"
                  name="date_FinPub"
                  value={annonce.date_FinPub}
                  onChange={handelChange}
                  required
                />
              </div>
            </div>

            <h3 style={{ marginTop: "0px", marginBottom: "0px" }}>Catégorie</h3>

            <div className="addAct-category ">
              <Select
                className="basic-single "
                classNamePrefix="select"
                name="categorie"
                options={catégorieOption}
                onChange={handelCatégorieChange}
              />
            </div>

            <button className="addAct-btn annonce-btn " type="submit">
              Publier
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AddAnnoncePopUp;
