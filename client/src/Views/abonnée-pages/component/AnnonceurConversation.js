import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Conversation from "../component/Conversation";
import axios from "axios";

function AnnonceurConversation(props) {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async (userId) => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/Conversations/getUserConversation/${userId}`
        );
        setConversations(res.data);
        // setCurrentChat(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
    return () => {
      setConversations([]);
    };
  }, []);

  return (
    <div className="conversationContainer">
      <div className="conversationTop">
        <img
          className="user-img"
          src={`http://localhost:8000/${props.user?.imageCouverture}`}
          alt=""
        />
        <h2>{props.user?.nomAnnonceur}</h2>

        <div className="recherche">
          <form id="form-2">
            <input
              className="form-control mr-sm-2 "
              type="search"
              placeholder="Search"
            />
            <div className="icon">
              <SearchIcon />
            </div>
          </form>
        </div>
      </div>
      <div className="conversationBottom">
        <h4>Derniers discussions</h4>

        {conversations.map((item, index) => {
          return (
            <div className="conv" onClick={(e) => props.setCurrentChat(item)}>
              <Conversation conversation={item} currentUser={props?.user._id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AnnonceurConversation;
