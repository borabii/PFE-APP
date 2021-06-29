import React, { useEffect, useState, useRef, useContext } from "react";
import { format } from "timeago.js";

import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import AuthContext from "../../../Context/auth/authContext";
import { io } from "socket.io-client";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import Conversation from "../component/Conversation";
import SentimentSatisfiedRoundedIcon from "@material-ui/icons/SentimentSatisfiedRounded";
function BoiteMsg() {
  const [currentChat, setCurrentChat] = useState(null);
  const authContext = useContext(AuthContext);
  const { user, isAuthenticated } = authContext;
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef();
  const scrollRef = useRef();
  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);
  //
  useEffect(() => {
    arrivalMessage &&
      //   currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);
  console.log(messages);
  //
  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      // console.log(users);
    });
  }, [user]);

  //getConversation message
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/Messages/getMsg/${currentChat?._id}`
        );
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);
  //send message
  const sendMessage = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };
    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId: receiverId,
      text: newMessage,
    });
    setNewMessage("");
    try {
      const res = await axios.post(
        "http://localhost:8000/api/Messages/NewMsg",
        message
      );
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/Conversations/getUserConversation"
        );
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, []);
  //used to scroll down when new message comming
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="BoiteMsg">
      <div className="BoiteMsg-right">
        <div className="conversationContainer">
          <div className="conversationTop">
            <img
              className="user-img"
              src="https://scontent.ftun10-1.fna.fbcdn.net/v/t1.6435-1/p160x160/48393248_833225713675825_7128205995372707840_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=7206a8&_nc_ohc=4Vy6up_Qz2YAX9qWi-3&_nc_ht=scontent.ftun10-1.fna&tp=6&oh=502ce154be7887c45c1c1737c5763562&oe=60D95B68"
              alt=""
            />
            <h2>wissal Messadi</h2>
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
                <div className="conv" onClick={(e) => setCurrentChat(item)}>
                  <Conversation conversation={item} currentUser={user._id} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="BoiteMsg-left">
        <div className="conversation-detail">
          {currentChat ? (
            <>
              <div className="convTop">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY40QtcjUzBkMDu9Mv0wQp0w26nhhVaUbasw&usqp=CAU"
                  alt=""
                />
                <p>Sarra</p>
              </div>

              <div className="convMidle">
                {messages &&
                  messages.map((m) => {
                    return m !== null && m.sender === user._id ? (
                      <div className="send">
                        <div className="msg-content">
                          <p>{m !== null && m.text}</p>
                          <h1>{format(m.createdAt)}</h1>
                        </div>
                      </div>
                    ) : (
                      <div className="reciv" ref={scrollRef}>
                        <div className="msg-content">
                          <p>{m !== null && m.text}</p>
                          <h1>{format(m.createdAt)}</h1>
                        </div>
                      </div>
                    );
                  })}
              </div>

              <div className="convBottom">
                <div className="form-msg">
                  <input
                    type="text"
                    placeholder="Ecrire votre message ..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  />
                  <SentimentSatisfiedRoundedIcon className="msg-icon" />
                  <SendRoundedIcon className="msg-icon" onClick={sendMessage} />
                </div>
              </div>
            </>
          ) : (
            <h1>open chat</h1>
          )}
        </div>{" "}
      </div>
    </div>
  );
}

export default BoiteMsg;
