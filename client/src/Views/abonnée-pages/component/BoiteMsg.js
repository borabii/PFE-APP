import React, { useEffect, useState, useRef, useContext } from "react";
import { format } from "timeago.js";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import AuthContext from "../../../Context/auth/authContext";
import { io } from "socket.io-client";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import Conversation from "../component/Conversation";
import SentimentSatisfiedRoundedIcon from "@material-ui/icons/SentimentSatisfiedRounded";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import AnnonceurConversation from "./AnnonceurConversation";
import AbonnéConversation from "../AbonnéConversation";
import UserContext from "../../../Context/user/userContext";
function BoiteMsg() {
  const authContext = useContext(AuthContext);
  const { user, isAuthenticated } = authContext;
  // const userContext = useContext(UserContext);
  // const { currentChat, loading } = userContext;

  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [currentChat, setCurrentChat] = useState(null);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [reciver, setReciver] = useState(null);
  const [organizedPubShow, setOrganizedPubShow] = useState(true);
  const [participatedPubShow, setParticipatedPubShow] = useState(false);
  const [annonceurData, setAnnonceurData] = useState({});
  const socket = useRef();
  const scrollRef = useRef();
  const leftBtnHandler = async () => {
    try {
      await axios
        .get(`http://localhost:8000/api/users/getAnnonceurProfileData`)
        .then((res) => setAnnonceurData(res.data));
      setOrganizedPubShow(false);
      setParticipatedPubShow(true);
    } catch (err) {}

    // getConversations("60ae8c0e1f23df2dc03a10e6")
  };
  const rigthBtnHandler = () => {
    setParticipatedPubShow(false);
    setOrganizedPubShow(true);
    // getConversations(user._id);
  };
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
  //
  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      console.log(users);
    });
  }, [user]);

  //getConversation message
  useEffect(() => {
    const getMessages = async () => {
      const reciverId =
        currentChat !== null &&
        currentChat?.members.filter((item) => item !== user._id);
      try {
        const res = await axios
          .get(`http://localhost:8000/api/Messages/getMsg/${currentChat?._id}`)
          .then(
            axios
              .get(`http://localhost:8000/api/users/getUserData/${reciverId}`)
              .then((res) => setReciver(res.data))
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
      getConversations();
    } catch (err) {
      console.log(err);
    }
  };
  const getConversations = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/Conversations/getUserConversation"
      );
      setConversations(res.data);
      setCurrentChat(res.data[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
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
              src={`http://localhost:8000/${user.imageProfile}`}
              alt=""
            />
            <h2>{user.firstName + " " + user.lastName}</h2>
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
                  src={`http://localhost:8000/${
                    reciver?.imageProfile || reciver?.imageCouverture
                  }`}
                  alt=""
                />
                <p>{reciver?.firstName || reciver?.nomAnnonceur}</p>
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
