import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { useSnackbar } from "notistack";

function SignalPopUp(props) {
  const [showAutreDropdown, setShowAutreDropdown] = useState(false);
  const [reclamation, setReclamation] = useState({
    cause: "",
  });

  const handelChange = (event) => {
    setReclamation({
      ...reclamation,
      [event.target.name]: event.target.value,
    });
  };
  const { enqueueSnackbar } = useSnackbar();

  const reportUser = (event) => {
    event.preventDefault();
    axios
      .post(
        `http://localhost:8000/api/Reclamation/reportUser/${props.userId}`,
        reclamation
      )
      .then((response) =>
        enqueueSnackbar(response.data.msg, { variant: "success" })
      );
    setReclamation({
      cause: "",
    });
    props.onHide();
  };
  useEffect(() => {
    return () => {
      setReclamation({
        cause: "",
      });
      setShowAutreDropdown(false);
    };
  }, [props.show]);
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
          Signaler un abonné
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="SignalPopUp-container">
          <h4>Pourquoi signalez-vous ce compte ? </h4>

          <form className="signal-option-form" onSubmit={reportUser}>
            <div className="signal-option">
              <div className="signalValue">
                <p>Faux profile</p>

                <input
                  type="radio"
                  onChange={handelChange}
                  value="Faux profile ."
                  name="cause"
                  onClick={() =>
                    setShowAutreDropdown(showAutreDropdown ? false : false)
                  }
                />
              </div>

              <div className="signalValue">
                <p>Faux nom</p>

                <input
                  type="radio"
                  onChange={handelChange}
                  value=" Faux nom ."
                  name="cause"
                  onClick={() =>
                    setShowAutreDropdown(showAutreDropdown ? false : false)
                  }
                />
              </div>
              <div className="signalValue">
                <p>Harcélement autre utilisateur</p>
                <input
                  type="radio"
                  onChange={handelChange}
                  value="harcélement autre utilisateur"
                  name="cause"
                  onClick={() =>
                    setShowAutreDropdown(showAutreDropdown ? false : false)
                  }
                />
              </div>
              <div className="signalValue">
                <p>Usurpation d'identité</p>
                <input
                  type="radio"
                  onChange={handelChange}
                  value="usurpation d'identité."
                  name="cause"
                  onClick={() =>
                    setShowAutreDropdown(showAutreDropdown ? false : false)
                  }
                />
              </div>
              <div className="signalValue">
                <p>Publication de contenus inappropriés</p>
                <input
                  type="radio"
                  onChange={handelChange}
                  value="Publication de contenus inappropriés."
                  name="cause"
                  onClick={() =>
                    setShowAutreDropdown(showAutreDropdown ? false : false)
                  }
                />
              </div>
              <div className="signalValue">
                <p
                  onClick={() =>
                    setShowAutreDropdown(
                      (showAutreDropdown) => !showAutreDropdown
                    )
                  }
                  id="autreBtn"
                >
                  {" "}
                  Autre...
                </p>
              </div>
            </div>
            <textarea
              style={{ display: showAutreDropdown ? "block" : "none" }}
              placeholder="écrivez vos raisons..."
              onChange={handelChange}
              name="cause"
            />
            <button className="btn-signal" type="submit">
              {" "}
              signaler
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default SignalPopUp;
