import React from "react";
import BlockIcon from "@material-ui/icons/Block";
function BlockedUser() {
  return (
    <div id="blockedUser">
      <div
        className="requestAlreadySent-msg"
        id="blockedUser"
        style={{ border: "2px solid red" }}
      >
        <div
          className="requestAlreadySent-msgLeft"
          style={{ backgroundColor: "white", borderRight: "2px solid red" }}
        >
          <BlockIcon id="checkIcon" style={{ color: "red" }} />
        </div>
        <div className="requestAlreadySent-msgRigth">
          <h2>Votre compte est desactivé par l'administrateur du site</h2>
        </div>
      </div>
    </div>
  );
}

export default BlockedUser;
