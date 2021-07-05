import React, { useEffect, useState, useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Conversation from "./component/Conversation";
import axios from "axios";
import UserContext from "../../Context/user/userContext";

function AbonnéConversation(props) {
  const [conversations, setConversations] = useState([]);
  const userContext = useContext(UserContext);
  const { setChat } = userContext;
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/Conversations/getUserConversation/${props?.user._id}`
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
  const selectedConversation = (e, item) => {
    setChat(item);
  };
  return (
    <div className="conversationContainer">
      <div className="conversationTop">
        <img
          className="user-img"
          src={`http://localhost:8000/${props?.user.imageProfile}`}
          alt=""
        />
        <h2>{props?.user.firstName + " " + props?.user.lastName}</h2>
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
            <div
              className="conv"
              onClick={(e) => selectedConversation(e, item)}
            >
              <Conversation conversation={item} currentUser={props?.user._id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AbonnéConversation;
