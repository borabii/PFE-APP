import React, { useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import addUserFormValidation from "../../../utilis/addUserFormValidation";

function AddAdminPopUp(props) {
  //state for handling error msg
  const [errorsMsg, setErrorsMsg] = useState({});
  // option for react select
  const options = [
    { value: "Gestion d'utilisateur", label: "Gestion d'utlisateur" },
    { value: "Gestion publication", label: "Gestion publication" },
    { value: "Gestion réclamation", label: "Gestion réclamation" },
    { value: "Gestion demande", label: "Gestion demande" },
    { value: "Gestion boite message", label: "Gestion boite message" },
  ];
  //state to store user inputed value in form
  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    password: "",
    permission: "",
  });

  // set userForm state based on user's input
  const handelChange = (event) => {
    setUserForm({
      ...userForm,
      [event.target.name]: event.target.value,
    });
    setErrorsMsg(addUserFormValidation(userForm));
  };
  //handel select selected option
  const handelCatégorieChange = (selectedOption) => {
    setUserForm({
      ...userForm,
      permission: selectedOption.label,
    });
  };
  //run when user click on submit button
  const addAdmin = async (event) => {
    event.preventDefault();
    if (Object.keys(errorsMsg).length <= 0) {
      axios.post("http://localhost:8000/api/users/Admin/addAdmin", userForm);
      //clear form after submit
      setUserForm({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        email: "",
        password: "",
        permission: "",
      });
      props.onHide();
    }
  };

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Ajouter admin{" "}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="addAdminPopUP">
          <form onSubmit={addAdmin}>
            <input
              type="text"
              placeholder=" Nom"
              onChange={handelChange}
              name="firstName"
              value={userForm.firstName}
            />
            {errorsMsg && <p>{errorsMsg.firstName}</p>}

            <input
              type="text"
              placeholder=" Prénom"
              onChange={handelChange}
              name="lastName"
              value={userForm.lastName}
            />
            {errorsMsg && <p>{errorsMsg.lastName}</p>}

            <input
              type="email"
              placeholder=" Email"
              onChange={handelChange}
              name="email"
              value={userForm.email}
            />
            {errorsMsg && <p>{errorsMsg.email}</p>}

            <input
              type="date"
              placeholder="Date de naissance "
              onChange={handelChange}
              name="dateOfBirth"
              value={userForm.dateOfBirth}
            />
            <input
              type=" number"
              placeholder=" Tel"
              onChange={handelChange}
              name="number"
              value={userForm.number}
            />
            {errorsMsg && <p>{errorsMsg.number}</p>}

            <Select
              options={options}
              className="select"
              classNamePrefix="select"
              onChange={handelCatégorieChange}
              name="permission"
            />
            <input
              type="password"
              placeholder=" Mots de passe"
              name="password"
              onChange={handelChange}
              value={userForm.password}
            />
            {errorsMsg && <p>{errorsMsg.password}</p>}

            <button className="btn" type="submit">
              Ajouter
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AddAdminPopUp;
