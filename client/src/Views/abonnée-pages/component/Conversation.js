import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
function Conversation(props) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const friendId = props.conversation.members.find(
      (m) => m !== props.currentUser
    );

    const getUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/users/getUserData/${friendId}`
        );
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [props.currentUser, props.conversation]);
  return (
    <div className="conv_container">
      <div className="conversation">
        {user !== null && (
          <div className="conv-detail">
            <div className="sender-img">
              <img
                src={
                  user.imageProfile
                    ? `http://localhost:8000/${user.imageProfile}`
                    : `http://localhost:8000/${user.imageCouverture}`
                }
                alt=""
              />
            </div>
            <div className="msg-detail">
              <b>
                {" "}
                {user.firstName
                  ? user.firstName + " " + user.lastName
                  : user.nomAnnonceur}
              </b>
              <span>{props.conversation.lastMessage}</span>
            </div>
          </div>
        )}
        <div className="msg-time">
          <p>{moment(props.conversation.updatedAt).format("HH:mm")}</p>
        </div>
      </div>
    </div>
  );
}

export default Conversation;
