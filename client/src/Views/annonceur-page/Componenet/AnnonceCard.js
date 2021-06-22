import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
function AnnonceCard(props) {
  return (
    <div className="annonceCard">
      <img
        id="annonce-img"
        src={`http://localhost:8000/${props.annonceData.image_url}`}
        alt=""
      />
      <div className="annonceCard-action">
        <EditIcon
          id="annonceCardAction-edit"
          onClick={props.editOnClick}
          style={{ display: props.editPubOption ? "block" : "none" }}
        />
        <MoreHorizIcon
          id="annonceCardAction-detail"
          onClick={props.detailOnClickIcon}
        />
      </div>
    </div>
  );
}

export default AnnonceCard;
