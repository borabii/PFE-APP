import React, { useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";

function AddAdminPopUp(props) {
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
    console.log(userForm);
  };
  //handel select selected option
  const handelCatégorieChange = (selectedOption) => {
    setUserForm({
      ...userForm,
      permission: selectedOption.label,
    });
  };
  //run when user click on submit button
  const handleSubmit = async (event) => {
    event.preventDefault();
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder=" Nom"
              onChange={handelChange}
              name="firstName"
              value={userForm.firstName}
            />
            <input
              type="text"
              placeholder=" Prénom"
              onChange={handelChange}
              name="lastName"
              value={userForm.lastName}
            />
            <input
              type="email"
              placeholder=" Email"
              onChange={handelChange}
              name="email"
              value={userForm.email}
            />
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
