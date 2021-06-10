import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

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
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(
      `http://localhost:8000/api/Reclamation/addReclamation/${props.userId}`,
      reclamation
    );
    setReclamation({
      cause: "",
    });
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
        <div className="SignalPopUp">
          <div className="SignalPopUp-container">
            <h4>Pourquoi signalez-vous ce compte ? </h4>

            <form className="signal-option-form" onSubmit={handleSubmit}>
              <table className="signal-option">
                <tr>
                  <td>Faux profile</td>
                  <td>
                    <input
                      type="radio"
                      onChange={handelChange}
                      value="Faux profile ."
                      name="cause"
                      onClick={() =>
                        setShowAutreDropdown(showAutreDropdown ? false : false)
                      }
                    />
                  </td>
                </tr>

                <tr>
                  <td>Faux nom</td>
                  <td>
                    <input
                      type="radio"
                      onChange={handelChange}
                      value=" Faux nom ."
                      name="cause"
                      onClick={() =>
                        setShowAutreDropdown(showAutreDropdown ? false : false)
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Harcélement autre utilisateur</td>
                  <td>
                    <input
                      type="radio"
                      onChange={handelChange}
                      value="harcélement autre utilisateur"
                      name="cause"
                      onClick={() =>
                        setShowAutreDropdown(showAutreDropdown ? false : false)
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>usurpation d'identité</td>
                  <td>
                    <input
                      type="radio"
                      onChange={handelChange}
                      value="usurpation d'identité."
                      name="cause"
                      onClick={() =>
                        setShowAutreDropdown(showAutreDropdown ? false : false)
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Publication de contenus inappropriés</td>
                  <td>
                    <input
                      type="radio"
                      onChange={handelChange}
                      value="Publication de contenus inappropriés."
                      name="cause"
                      onClick={() =>
                        setShowAutreDropdown(showAutreDropdown ? false : false)
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    onClick={() =>
                      setShowAutreDropdown(
                        (showAutreDropdown) => !showAutreDropdown
                      )
                    }
                  >
                    {" "}
                    Autre...
                  </td>
                </tr>
              </table>
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
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default SignalPopUp;
