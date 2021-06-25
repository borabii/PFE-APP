import React from "react";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import SentimentSatisfiedRoundedIcon from "@material-ui/icons/SentimentSatisfiedRounded";

function MessagesContainer() {
  return (
    <div className="conversation-detail">
      <div className="convTop">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY40QtcjUzBkMDu9Mv0wQp0w26nhhVaUbasw&usqp=CAU"
          alt=""
        />
        <p>Sarra</p>
      </div>
      <div className="convMidle">
        <div className="send">
          <p>Vous êtes sportif professionnel depuis combien de temps ?</p>
        </div>
        <div className="reciv">
          <p>
            Je fais du tennis depuis l’âge de trois ans donc depuis quinze ans
            maintenant… et je suis professionnel depuis 2013.
          </p>
        </div>
        <div className="send">
          <p>Ça ne fait pas longtemps donc. </p>
        </div>
        <div className="send">
          <p>
            {" "}
            Et depuis que vous êtes professionnel, est-ce que votre vie a changé
            ?{" "}
          </p>
        </div>
        <div className="reciv">
          <p>Non, pas tellement.</p>
        </div>
        <div className="send">
          <p>Parlez-moi de vos journées :</p>
        </div>
        <div className="reciv">
          <p>
            Oui, je commence tous les matins par un petit jogging de 45 minutes.
            Puis, je m’entraîne pendant trois heures. Je déjeune avec mon
            entraîneur.
          </p>
        </div>
      </div>

      <div className="convBottom">
        <form className="form-msg">
          <input type="text" placeholder="Ecrire votre message ..." />
          <SentimentSatisfiedRoundedIcon className="msg-icon" />
          <SendRoundedIcon className="msg-icon" />
        </form>
      </div>
    </div>
  );
}

export default MessagesContainer;
