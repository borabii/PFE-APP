import React, { useEffect, useState, useRef, useContext } from "react";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import SentimentSatisfiedRoundedIcon from "@material-ui/icons/SentimentSatisfiedRounded";
import { io } from "socket.io-client";
import AuthContext from "../../../Context/auth/authContext";
import axios from "axios";
function MessagesContainer() {
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

  //send message
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: "60d735656635946e703d63e7",
    };
    const currentChat = [
      "60bd497706e60b95cce4cc30",
      "6095c0c95c9ef964dcd024c3",
    ];
    const receiverId = currentChat.find((member) => member !== user._id);
    console.log(receiverId);
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
        {messages &&
          messages.map((m) => {
            return m !== null && m.sender === user._id ? (
              <div className="send">
                <p>{m !== null && m.text}</p>
              </div>
            ) : (
              <div className="reciv" ref={scrollRef}>
                <p>{m !== null && m.text}</p>
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
          <SendRoundedIcon className="msg-icon" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default MessagesContainer;
