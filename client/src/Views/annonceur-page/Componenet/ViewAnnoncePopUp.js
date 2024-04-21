import React from "react";
import Modal from "react-bootstrap/Modal";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import moment from "moment";
import history from "../../../utilis/history";

function ViewAnnoncePopUp(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={true}
      scrollable={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Détail Annonce
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {false !== null && (
          <div className="detailAnnonce">
            <div className="detailAnnonce__top">
              <a
                href={`http://localhost:8000/${props.data.image_url}`}
                target="_blank"
              >
                <img
                  src={`http://localhost:8000/${props.data.image_url}`}
                  alt=""
                />
              </a>
            </div>
            <div className="detailAnnonce__midle">
              <h4>INFORMATION PRINCIPALE</h4>
              <div className="annonce__info">
                <dl>
                  <dt>Catégoris</dt>
                  <dd>{props.data.categorie}</dd>
                  <dt>Adresse</dt>
                  <dd>
                    <LocationOnIcon id="icon-loc" />
                    {/* {props.data.adresse}{" "} */}
                  </dd>
                  <dt>Duréé </dt>
                  <dd>
                    {" "}
                    {moment(props.data.date_DebutPub).format("YYYY-MM-DD")}
                    {moment(props.data.date_FinPub).isSame(
                      moment(props.data.date_DebutPub)
                    )
                      ? ""
                      : " jusqu'à " +
                        moment(props.data.date_FinPub).format("YYYY-MM-DD")}
                  </dd>

                  <dt>Description</dt>
                  <dd>{props.data.description}</dd>
                </dl>
              </div>
            </div>
            <div
              className="pubDetailPopUp__organizateur"
              style={{ width: "90%", cursor: "pointer" }}
              onClick={() => (
                history.push(
                  `/AbonnéHomePage/AnnonceurProfile/${props.data.user}`
                ),
                props.onHide()
              )}
            >
              <h3>ORGANISER PAR</h3>
              {props.user !== null && (
                <div className="organizateur__container">
                  <img
                    src={`http://localhost:8000/${props.user.imageCouverture}`}
                    alt=""
                  />
                  <div className="organizateur__info">
                    <dl>
                      <dd>{props.user.nomAnnonceur}</dd>
                      <dd>
                        <LocationOnIcon id="icon-loc" />
                        Monplaisir
                      </dd>
                      <dd>Email:{props.user.emailProAnnonceur} </dd>
                    </dl>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default ViewAnnoncePopUp;
