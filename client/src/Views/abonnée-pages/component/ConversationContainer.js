import React from "react";
import SearchIcon from "@material-ui/icons/Search";

function ConversationContainer() {
  return (
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
        {/*  */}
        <div className="conv_container">
          <div className="conversation">
            <div className="conv-detail">
              <div className="sender-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY40QtcjUzBkMDu9Mv0wQp0w26nhhVaUbasw&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="msg-detail">
                <b> sarra </b>
                <p>Oui, je commence tous les matins...</p>
              </div>
            </div>
            <div className="msg-time">
              <p>11:50</p>
            </div>
          </div>
          <div className="conversation">
            <div className="conv-detail">
              <div className="sender-img">
                <img
                  src="https://scontent.ftun10-1.fna.fbcdn.net/v/t1.6435-1/p200x200/64557171_2238015256279661_4703883143612989440_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=7206a8&_nc_ohc=sjnjINgPIu0AX-BxEhI&_nc_ht=scontent.ftun10-1.fna&tp=6&oh=8b48f1eb74a3f17b0f13ba0217b899b7&oe=60D8CA3B"
                  alt=""
                />
              </div>
              <div className="msg-detail">
                <b> rabii ben ouirane</b>
                <p>Et vous êtes à Paris ...</p>
              </div>
            </div>
            <div className="msg-time">
              <p>10:14</p>
            </div>
          </div>
          <div className="conversation">
            <div className="conv-detail">
              <div className="sender-img">
                <img
                  src="https://www.superprof.fr/blog/wp-content/uploads/2018/08/sport-fitness-fille.jpg"
                  alt=""
                />
              </div>
              <div className="msg-detail">
                <b> nour </b>
                <p>vous: Merci</p>
              </div>
            </div>
            <div className="msg-time">
              <p>21:34</p>
            </div>
          </div>
          <div className="conversation">
            <div className="conv-detail">
              <div className="sender-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW-UZ7R9_oQjCh_WG5E9ldbCj6Kx-qnjGAIw&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="msg-detail">
                <b> sami </b>
                <p>vous: Merci</p>
              </div>
            </div>
            <div className="msg-time">
              <p>20:27</p>
            </div>
          </div>
          <div className="conversation">
            <div className="conv-detail">
              <div className="sender-img">
                <img
                  src="https://scontent.ftun10-1.fna.fbcdn.net/v/t1.6435-1/p200x200/64557171_2238015256279661_4703883143612989440_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=7206a8&_nc_ohc=sjnjINgPIu0AX-BxEhI&_nc_ht=scontent.ftun10-1.fna&tp=6&oh=8b48f1eb74a3f17b0f13ba0217b899b7&oe=60D8CA3B"
                  alt=""
                />
              </div>
              <div className="msg-detail">
                <b> rabii ben ouirane</b>
                <p>Et vous êtes à Paris ...</p>
              </div>
            </div>
            <div className="msg-time">
              <p>10:14</p>
            </div>
          </div>
          <div className="conversation">
            <div className="conv-detail">
              <div className="sender-img">
                <img
                  src="https://scontent.ftun10-1.fna.fbcdn.net/v/t1.6435-1/p200x200/64557171_2238015256279661_4703883143612989440_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=7206a8&_nc_ohc=sjnjINgPIu0AX-BxEhI&_nc_ht=scontent.ftun10-1.fna&tp=6&oh=8b48f1eb74a3f17b0f13ba0217b899b7&oe=60D8CA3B"
                  alt=""
                />
              </div>
              <div className="msg-detail">
                <b> rabii ben ouirane</b>
                <p>Et vous êtes à Paris ...</p>
              </div>
            </div>
            <div className="msg-time">
              <p>10:14</p>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default ConversationContainer;
