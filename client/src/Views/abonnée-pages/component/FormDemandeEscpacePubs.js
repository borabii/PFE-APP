import React, { useState, useContext, useEffect } from "react";
import Select from "react-select";
import UserContext from "../../../Context/user/userContext";
import { useSnackbar } from "notistack";
function FormDemandeEscpacePubs() {
  //app level state
  const userContext = useContext(UserContext);
  //app level state
  const {
    sendDemandeAbonné,
    responseMessage,
    ClearResponseMessage,
    catégorieOption,
  } = userContext;
  //state for handling user input
  const [demandeAnnonceur, setDemandeAnnonceur] = useState({
    nomAnnonceur: "",
    adresseAnnonceur: "",
    numTelAnnonceur: "",
    emailProAnnonceur: "",
    catégorieAnnonceur: "",
    justificatifAnnonceur: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    //creat a new object formData from state(demandeAnnonceur) value
    const formData = new FormData();
    formData.append("nomAnnonceur", demandeAnnonceur.nomAnnonceur);
    formData.append("adresseAnnonceur", demandeAnnonceur.adresseAnnonceur);
    formData.append("numTelAnnonceur", demandeAnnonceur.numTelAnnonceur);
    formData.append("emailProAnnonceur", demandeAnnonceur.emailProAnnonceur);
    formData.append("catégorieAnnonceur", demandeAnnonceur.catégorieAnnonceur);

    formData.append(
      "justificatifAnnonceur",
      demandeAnnonceur.justificatifAnnonceur
    );
    //global method created in userState to send formDate to server
    sendDemandeAbonné(formData);
    //clear form after submit
    setDemandeAnnonceur({
      nomAnnonceur: "",
      adresseAnnonceur: "",
      numTelAnnonceur: "",
      emailProAnnonceur: "",
      catégorieAnnonceur: "",
      justificatifAnnonceur: "",
    });
  };
  // method used to handel inputs change in form
  const handelChange = (event) => {
    setDemandeAnnonceur({
      ...demandeAnnonceur,
      [event.target.name]: event.target.value,
    });
  };
  // method used to handel select change in form
  const handelCatégorieChange = (selectedOption) => {
    setDemandeAnnonceur({
      ...demandeAnnonceur,
      catégorieAnnonceur: selectedOption.label,
    });
  };
  // method used to handel inputs[type=file] change in form
  const imageSelectHandler = (event) => {
    setDemandeAnnonceur({
      ...demandeAnnonceur,
      justificatifAnnonceur: event.target.files[0],
    });
  };
  //used to display response message if exisit
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (responseMessage !== "aucune message") {
      enqueueSnackbar(responseMessage, { variant: "success" });
    }
    return () => {
      ClearResponseMessage();
    };
  }, [responseMessage]);

  return (
    <div className="FormDemandeEscpacePubs">
      <h1>Formulaire demande escpace publicitaire</h1>
      <form
        className="FormDemandeEscpacePubs-form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="demmande-formInput">
          <label>
            Nom<span>*</span>
          </label>
          <input
            type="text"
            name="nomAnnonceur"
            value={demandeAnnonceur.nomAnnonceur}
            onChange={handelChange}
            required
          />
        </div>
        <div className="demmande-formInput">
          <label>
            Adresse<span>*</span>
          </label>
          <input
            type="text"
            name="adresseAnnonceur"
            value={demandeAnnonceur.adresseAnnonceur}
            onChange={handelChange}
            required
          />
        </div>
        <div className="demmande-formInput">
          <label>
            Numéro téléphone<span>*</span>
          </label>
          <input
            type="tel"
            name="numTelAnnonceur"
            value={demandeAnnonceur.numTelAnnonceur}
            onChange={handelChange}
            required
          />
        </div>
        <div className="demmande-formInput">
          <label>Email professionelle</label>
          <input
            type="email"
            name="emailProAnnonceur"
            value={demandeAnnonceur.emailProAnnonceur}
            onChange={handelChange}
          />
        </div>
        <div className="demmande-formSelect">
          <label>
            Catégorie<span>*</span>
          </label>
          <Select
            className="basic-single"
            classNamePrefix="select"
            name="catégorieAnnonceur"
            options={catégorieOption}
            onChange={handelCatégorieChange}
          />
        </div>
        <div className="demmande-formInput">
          <label>
            Justificatif<span>*</span>
          </label>
          <input
            type="file"
            id="justificatif-input"
            name="justificatifAnnonceur"
            onChange={imageSelectHandler}
          />
        </div>
        <div className="demmande-formBtn">
          <button>Ennvoyer</button>
        </div>
      </form>
    </div>
  );
}

export default FormDemandeEscpacePubs;
