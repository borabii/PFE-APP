import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import StarBorderIcon from "@material-ui/icons/StarBorder";
function AboSidMenu() {
  return (
    <div className=" navbar aboSideMenu">
      <div className="sideMenu-openIcon">
        {/* <MenuIcon  /> */}
        <span id="openIcon">&#9776;</span>
      </div>
      <div className="sideMenu-Items">
        <div className="sideMenu-icon">
          <AddCircleOutlineIcon />
        </div>
        <div className="sideMenu-icon">
          <ChatBubbleOutlineIcon />
        </div>
        <div className="sideMenu-icon">
          <StarBorderIcon />
        </div>
      </div>
    </div>
  );
}

export default AboSidMenu;
