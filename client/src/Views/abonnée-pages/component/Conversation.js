import React, { useEffect, useState } from "react";
import axios from "axios";
function Conversation(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = props.conversation.members.find(
      (m) => m !== props.currentUser
    );

    const getUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/users/Admin/getDemandeur/${friendId}`
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
                  user !== null
                    ? `http://localhost:8000/${user.imageProfile}`
                    : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommunity.atlassian.com%2Ft5%2FJira-Software-questions%2FIncorrect-URL-for-avatar-images-after-base-URL-changed%2Fqaq-p%2F705907&psig=AOvVaw0vAcSohhUhW7yz_a6yReaC&ust=1621046886814000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjzx7yUyPACFQAAAAAdAAAAABAD"
                }
                alt=""
              />
            </div>
            <div className="msg-detail">
              <b> {user.firstName + " " + user.lastName}</b>
              <span>Et vous êtes à Paris ...</span>
            </div>
          </div>
        )}
        <div className="msg-time">{/* <p>{item.createdAt}</p> */}</div>
      </div>
    </div>
  );
}

export default Conversation;
