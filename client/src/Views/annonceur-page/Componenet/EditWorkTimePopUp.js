import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import UserContext from "../../../Context/user/userContext";

function EditWorktimePopUp(props) {
  const userContext = useContext(UserContext);
  const { annonceur } = userContext;
  const [time, settime] = useState([]);
  const handelTimeChange = (event) => {
    settime({ ...time, [event.target.name]: event.target.value });
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
          Mes Horaires
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="EditWorktimePopUp">
            <div className="workTimeOption">
              <h2>Dimanche</h2>
              <div className="TimeValue">
                <input type="time" />
                <input type="time" />
              </div>
            </div>
            {/* {annonceur.horaireAnnonceur.map((item, index) => {
              return (
                <div className="workTimeOption" key={index}>
                  <h2>{item.jour}</h2>
                  <div className="TimeValue">
                    <input
                      type="time"
                      name="heureDebut"
                      defaultValue={item.heureDebut}
                      onChange={handelTimeChange}
                    />
                    <input
                      type="time"
                      name="heureFin"
                      defaultValue={item.heureFin}
                      onChange={handelTimeChange}
                    />
                  </div>
                </div>
              );
            })} */}
            {/* <div className="workTimeOption">
              <h2>Lundi</h2>
              <div className="TimeValue">
                <input type="time" />
                <input type="time" />
              </div>
            </div>
            <div className="workTimeOption">
              <h2>Mardi</h2>
              <div className="TimeValue">
                <input type="time" />
                <input type="time" />
              </div>
            </div>
            <div className="workTimeOption">
              <h2>Mercredi</h2>
              <div className="TimeValue">
                <input type="time" />
                <input type="time" />
              </div>
            </div>
            <div className="workTimeOption">
              <h2>Jeudi</h2>
              <div className="TimeValue">
                <input type="time" />
                <input type="time" />
              </div>
            </div>
            <div className="workTimeOption">
              <h2>Vendredi</h2>
              <div className="TimeValue">
                <input type="time" />
                <input type="time" />
              </div>
            </div>
            <div className="workTimeOption">
              <h2>Samedi </h2>
              <div className="TimeValue">
                <input type="time" />
                <input type="time" />
              </div> */}
            {/* </div> */}
            <div className="edit__action">
              <button id="edit__btn">Modifier</button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default EditWorktimePopUp;
