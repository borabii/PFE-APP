import React, { useState, useContext, useEffect } from "react";
import Card from "react-bootstrap/Card";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { getMonthName, getDay } from "../../../utilis/date";
import UserContext from "../../../Context/user/userContext";
import EditIcon from "@material-ui/icons/Edit";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DeleteIcon from "@material-ui/icons/Delete";
function PubCard(props) {
  //app level state(user context)
  const userContext = useContext(UserContext);
  const { fullCatégorieData, getCatégorie } = userContext;
  const [catImage, setCatImage] = useState("");
  useEffect(() => {
    getCatégorie();
  }, []);
  useEffect(() => {
    if (fullCatégorieData !== null && props.act.categorie) {
      setCatImage(
        fullCatégorieData.filter((item) =>
          props.act.categorie.includes(item.typeCatégorie)
        )[0]
      );
    }

    return () => {
      setCatImage("");
    };
  }, [fullCatégorieData]);
  return (
    <Card className=" mb-3  pubCard pubCard-phone ">
      <div className="pubCard-image">
        <div className="pubCard-nbrParticipant">
          <p>{props.act.nbr_place} PLACES</p>{" "}
        </div>
        <div className="pubCard-horaire">
          <p>
            {props.act.heure_debutPub} - {props.act.heure_finPub}
          </p>
        </div>

        <img src={`http://localhost:8000/${catImage.imageCatégorie}`} alt="" />
      </div>
      <div className="pubCard-info">
        <div className="pubCardInfo-left">
          <div className="pubInfo-date" id="event-date">
            <h4>{getMonthName(props.act.date_DebutPub)}</h4>
            <p>{getDay(props.act.date_DebutPub)}</p>
          </div>
          <div className="pubInfo-add">
            <h4>{props.act.categorie}</h4>
            <span id="pub-add">
              <LocationOnIcon id="pubLoc-icon" />
              <p>{props.act.adresse}</p>
            </span>
          </div>
        </div>
        <div className="pubCardInfo-rigth">
          <EditIcon
            id="editEvent-icon"
            style={{ display: props.editPubOption ? "block" : "none" }}
            onClick={props.editOnClick}
          />
          <DeleteIcon
            id="deletEvent-icon"
            style={{ display: !props.editPubOption ? "block" : "none" }}
            onClick={props.deleteOnClick}
          />
          <MoreHorizIcon
            id="detailEvent-icon"
            onClick={props.detailOnClickIcon}
          />
        </div>
      </div>
    </Card>
  );
}

export default PubCard;
