import React, { useState, useContext, useEffect } from "react";
import Select from "react-select";
import UserContext from "../../../Context/user/userContext";
import { useSnackbar } from "notistack";
function FormDemandeEscpacePubs() {
  //app level state

  const userContext = useContext(UserContext);
  //app level state
  const {
    sendDemandeAnnonceur,
    responseMessage,
    ClearResponseMessage,
  } = userContext;
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  //component level state
  const [categorie, setCategorie] = useState("");
  const [open, setOpen] = useState(false);
  const handleInputChange = (inputValue) => {
    setCategorie(inputValue.value);
  };
  const [demandeAnnonceur, setDemandeAnnonceur] = useState({
    nomAnnonceur: "",
    adresseAnnonceur: "",
    numTelAnnonceur: "",
    emailProAnnonceur: "",
    // catégorieAnnonceur: "",
    justificatifAnnonceur: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("nomAnnonceur", demandeAnnonceur.nomAnnonceur);
    formData.append("adresseAnnonceur", demandeAnnonceur.adresseAnnonceur);
    formData.append("numTelAnnonceur", demandeAnnonceur.numTelAnnonceur);
    formData.append("emailProAnnonceur", demandeAnnonceur.emailProAnnonceur);
    formData.append(
      "justificatifAnnonceur",
      demandeAnnonceur.justificatifAnnonceur
    );
    sendDemandeAnnonceur(formData);
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

  const handelChange = (event) => {
    setDemandeAnnonceur({
      ...demandeAnnonceur,
      [event.target.name]: event.target.value,
    });
  };

  const imageSelectHandler = (event) => {
    setDemandeAnnonceur({
      ...demandeAnnonceur,
      justificatifAnnonceur: event.target.files[0],
    });
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
            name="actCategory"
            options={options}
            value={categorie}
            onChange={handleInputChange}
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
