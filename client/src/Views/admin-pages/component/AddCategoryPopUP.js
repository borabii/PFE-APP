import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function AddCategoryPopUP(props) {
  const [categorie, setCategorie] = useState({
    imageCatégorie: "",
    typeCatégorie: "",
  });
  const handelChange = (event) => {
    setCategorie({
      ...categorie,
      [event.target.name]: event.target.value,
    });
  };

  const imageSelectHandler = (event) => {
    setCategorie({
      ...categorie,
      imageCatégorie: event.target.files[0],
    });
  };
  const addCategory = (event) => {
    event.preventDefault();
    //creat object (formData) from state(categorie) value
    const formData = new FormData();
    formData.append("imageCatégorie", categorie.imageCatégorie);
    formData.append("typeCatégorie", categorie.typeCatégorie);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios.post(
      "http://localhost:8000/api/Categorie/Admin/addCategorie",
      formData,
      config
    );
    //clear form after submit
    setCategorie({ imageCatégorie: "", typeCatégorie: "" });
    props.onHide();
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Ajouter Catégorie
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="addCategoryPopUP">
          {categorie.imageCatégorie && (
            <div className="img__holder">
              <img src={URL.createObjectURL(categorie.imageCatégorie)} alt="" />
            </div>
          )}

          <form onSubmit={addCategory}>
            <input
              type="file"
              id="justificatif-input"
              name="imageCatégorie"
              onChange={imageSelectHandler}
            />
            <input
              type="text"
              placeholder=" Nom Catégorie"
              name="typeCatégorie"
              value={categorie.typeCatégorie}
              onChange={handelChange}
            />
            <button className="btn" type="submit">
              Ajouter
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AddCategoryPopUP;
