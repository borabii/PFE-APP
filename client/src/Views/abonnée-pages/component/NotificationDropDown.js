import React, { useContext, Fragment } from "react";
import NotifContext from "../../../Context/notification/notifContext";
import moment from "moment";
import history from "../../../utilis/history";

function NotificationDropDown(props) {
  const notifContext = useContext(NotifContext);
  const { notification, clearNotification } = notifContext;
  const handelClick = (e, item) => {
    history.push(`/AbonnéHomePage/AbonnéProfile/${item}`);
    props.onHide();
  };
  return (
    <div
      className="Notification-list"
      ref={props.myRef}
      style={{
        display: props.show ? "block" : "none",
      }}
    >
      <p
        style={{
          display:
            notification !== null && notification.length > 0 ? "block" : "none",
        }}
        onClick={() => clearNotification()}
      >
        Effacer les notification
      </p>

      {notification !== null && notification.length > 0 ? (
        notification.map((item, index) => {
          return notification[index].typeNotif === "userNotification" ? (
            <div
              className="notif"
              key={index}
              onClick={(e) => handelClick(e, item.sender._id)}
            >
              <div className="notif-left">
                {notification.typeNotif}
                <div className="notif-img">
                  <img
                    src={`http://localhost:8000/${item.sender.imageProfile}`}
                    alt=""
                  />
                </div>
                <div className="notif-detail">
                  <b> {item.sender.firstName + " " + item.sender.lastName}</b>
                  <p>{item.content}</p>
                </div>
              </div>
              <div className="notif-time">
                {" "}
                <p>{moment(item.createdAt).format("hh:mma")}</p>
              </div>
            </div>
          ) : (
            <div
              className="notif"
              key={index}
              onClick={(e) => (
                history.push(`/AbonnéHomePage/EscpacePub`), props.onHide()
              )}
            >
              <div className="notif-left">
                <div className="notif-imgAdmin">
                  <img src="/adminIcon.png" alt="" />
                </div>
                <div className="notif-detail">
                  <b> Administration</b>
                  <p>{item.content}</p>
                </div>
              </div>
              <div className="notif-time">
                {" "}
                <p>{moment(item.createdAt).format("hh:mm")}</p>
              </div>
            </div>
          );
        })
      ) : (
        <h1 style={{ fontSize: "25px", textAlign: "center" }}>
          aucune notification
        </h1>
      )}
    </div>
  );
}

export default NotificationDropDown;
