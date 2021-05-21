// import React from "react";
// import LocationOnIcon from "@material-ui/icons/LocationOn";
// import Modal from "react-bootstrap/Modal";

// function DetailEventPopUp(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//       animation={true}
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Consulter Evenement
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <div className="detailEvent">
//           <div className="detailEvent__top">
//             <img
//               src="https://learnenglishteens.britishcouncil.org/sites/teens/files/styles/article/public/istock_000016994756small.jpg?itok=yczzK-18"
//               alt=""
//             />
//           </div>
//           <div className="detailEvent__midle">
//             <h4>INFORMATION PRINCIPALE</h4>
//             <div className="event__info">
//               <dl>
//                 <dt>Catégoris</dt>
//                 <dd>Yoga</dd>
//                 <dt>Tarif</dt>
//                 <dd>25dt</dd>
//                 <dt>Nombre de place</dt>
//                 <dd>20</dd>
//                 <dt>Description</dt>
//                 <dd>
//                   {" "}
//                   Le YOGA est une discipline originaire de l’Inde fondée sur un
//                   système qui permet de développer l’union et l’harmonie entre
//                   le corps, le mental et l’esprit.{" "}
//                 </dd>
//                 <dt>Addresse</dt>
//                 <dd>
//                   {" "}
//                   <LocationOnIcon id="icon-loc" />
//                   XXX
//                 </dd>
//               </dl>
//             </div>
//           </div>

//           <div className="detailEvent__bottom">
//             <h3>ORGANISER PAR</h3>
//             <div className="bottom__container">
//               <img
//                 src="https://e7.pngegg.com/pngimages/476/80/png-clipart-man-with-identification-card-illustration-personal-trainer-computer-icons-fitness-centre-physical-exercise-coach-sports-personal-physical-fitness-text.png"
//                 alt=""
//               />
//               <div className="event__info">
//                 <dl>
//                   <dd> Coach : YYY </dd>
//                   <dd>
//                     Adresse:
//                     <LocationOnIcon id="icon-loc" />
//                     Monplaisir
//                   </dd>
//                   <dd>Email: mailyy@gmail.com</dd>
//                 </dl>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Modal.Body>
//     </Modal>
//   );
// }

// export default DetailEventPopUp;
import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Modal from "react-bootstrap/Modal";

function DetailEventPopUp(props) {
  const {
    categorie,
    description,
    adresse,
    tarif,
    nbr_place,
    date_debut,
    date_fin,
  } = props.user;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Consulter Evenement
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="detailEvent">
          <div className="detailEvent__top">
            <img
              src="https://learnenglishteens.britishcouncil.org/sites/teens/files/styles/article/public/istock_000016994756small.jpg?itok=yczzK-18"
              alt=""
            />
          </div>
          <div className="consulterActivite__midle">
            <h4>INFORMATION PRINCIPALE</h4>
            <div className="activite__info">
              <dl>
                <dt>Catégoris</dt>
                <dd>{categorie}</dd>
                <dt>Tarif</dt>
                <dd>{tarif}</dd>
                <dt>Nombre de place</dt>
                <dd>{nbr_place}</dd>
                <dt>Description</dt>
                <dd>{description}</dd>
                <dt>Addresse</dt>

                <dd>
                  {" "}
                  <LocationOnIcon id="icon-loc" />
                  {adresse}
                </dd>
                <dt>Date debut</dt>
                <dd id="time"> {date_debut}</dd>
                <dt>Date fin</dt>
                <dd id="time">{date_fin}</dd>
              </dl>
            </div>
          </div>

          <div className="detailEvent__bottom">
            <h3>ORGANISER PAR</h3>
            <div className="bottom__container">
              <img
                src="https://e7.pngegg.com/pngimages/476/80/png-clipart-man-with-identification-card-illustration-personal-trainer-computer-icons-fitness-centre-physical-exercise-coach-sports-personal-physical-fitness-text.png"
                alt=""
              />
              <div className="event__info">
                <dl>
                  <dd> Coach : YYY </dd>
                  <dd>
                    Adresse:
                    <LocationOnIcon id="icon-loc" />
                    Monplaisir
                  </dd>
                  <dd>Email: mailyy@gmail.com</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default DetailEventPopUp;
