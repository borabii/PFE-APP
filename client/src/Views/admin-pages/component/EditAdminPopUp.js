import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import axios from "axios";

function EditAdminPopUp(props) {
  //options to react select
  const options = [
    { value: "Gestion d'utilisateur", label: "Gestion d'utilisateur" },
    { value: "Gestion publication", label: "Gestion publication" },
    { value: "Gestion réclamation", label: "Gestion réclamation" },
    { value: "Gestion demande", label: "Gestion demande" },
    { value: "Gestion boite message", label: "Gestion boite message" },
  ];
  //store used inputed value in form
  const [userForm, setUserForm] = useState({
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
  const editAdmin = async (event) => {
    event.preventDefault();
    axios.put(
      `http://localhost:8000/api/users/Admin/editAdmin/${props.user._id}`,
      userForm
    );
    //clear form after submit
    setUserForm({
      password: "",
      permission: "",
    });
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
          Modifier admin
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="editAdminPopUP">
          <form onSubmit={editAdmin}>
            <Select
              defaultValue={options.filter(
                (option) => option.label === props.user.permission
              )}
              options={options}
              className="select"
              classNamePrefix="select"
              name="permission"
              onChange={handelCatégorieChange}
            />
            <input
              type="password"
              placeholder=" Mots de passe"
              onChange={handelChange}
              name="password"
              value={userForm.password}
            />
            <button className="btn" type="submit">
              Modifier
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default EditAdminPopUp;
