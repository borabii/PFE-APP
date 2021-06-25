import React from "react";
import ConversationContainer from "./ConversationContainer";
import MessagesContainer from "./MessagesContainer";
function BoiteMsg() {
  return (
    <div className="BoiteMsg">
      <div className="BoiteMsg-right">
        <ConversationContainer />{" "}
      </div>
      <div className="BoiteMsg-left">
        <MessagesContainer />{" "}
      </div>
    </div>
  );
}

export default BoiteMsg;
