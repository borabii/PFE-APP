import React, { useState, useEffect, useContext } from "react";
import Catégorie from "./Catégorie";
import TodayPub from "./TodayPub";
import AddIcon from "@material-ui/icons/Add";
import ComingPub from "./ComingPub";
import AddActivityPopUp from "./AddActivityPopUp";
import PubContext from "../../../Context/Publication/pubContext";
import AuthContext from "../../../Context/auth/authContext";
import { useSnackbar } from "notistack";
import NotifContext from "../../../Context/notification/notifContext";

import { getFullNowDate, getDate } from "../../../utilis/date";
import moment from "moment";
// used for hide addActivity-btn-small when scrolling in small device screnn
const useHideOnScrolled = () => {
  const [hidden, setHidden] = useState(false);
  const handleScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop; //calculate the y offcet window scroll
    setHidden(top > 40); //set the state hidden to true when top > 40
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll); //add an scroll event when the component is mounted
    return () => {
      window.removeEventListener("scroll", handleScroll); //remove scroll event when component is unmounted
    };
  }, []);

  return hidden;
};

function Home() {
  //component level state
  const [commingPubs, setCommingPubs] = useState([]);
  const [todayPubs, setTodayPubs] = useState([]);
  //pub context
  const pubContext = useContext(PubContext);
  const { pubResponseMsg, ClearPubResponseMsg, loadPubs, pubs } = pubContext;
  //auth Context
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  //notif context
  const notifContext = useContext(NotifContext);
  const { getNotif } = notifContext;
  useEffect(() => {
    if (user.distanceDeRecherche !== null) {
      navigator.geolocation.getCurrentPosition(function (position) {
        // loadPubs(
        //   [position.coords.latitude],
        //   [position.coords.longitude],
        //   user.distanceDeRecherche
        // );
        loadPubs(
          [35.52625493547043],
          [11.034331019983348],
          user.distanceDeRecherche
        );
      });
    }
    getNotif();
  }, [user]);
  console.log(moment().format("YYYY-MM-DD"));

  useEffect(() => {
    if (pubs) {
      setTodayPubs(
        pubs.filter(
          (item) =>
            moment(getDate(item.date_DebutPub)).isSame(
              moment().format("YYYY-MM-DD")
            ) && moment(item.date_DebutPub, "HH:mm") > moment.utc().local()
        )
      );
      setCommingPubs(
        pubs.filter((item) =>
          moment(getDate(item.date_DebutPub)).isAfter(
            moment().format("YYYY-MM-DD")
          )
        )
      );
    }
  }, [pubs]);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (pubResponseMsg !== "aucune message") {
      enqueueSnackbar(pubResponseMsg, { variant: "success" });
    }
    return () => {
      ClearPubResponseMsg();
    };
  }, [pubResponseMsg]);
  const hidden = useHideOnScrolled();
  //this state is used to show/hide add activity popUp and it is passed as
  //a props to AddActivityPopUp
  const [showAddActivityPopUp, SetShowAddActivityPopUp] = useState(false);
  return (
    <div className="home">
      <button
        className="addActivity-btn"
        onClick={() => SetShowAddActivityPopUp(true)}
      >
        <p id="addAct-text">Publier Activité</p>
      </button>
      <div id="addbtn-small">
        <button
          className="addActivity-btn-small"
          style={{ display: !hidden ? "block" : "none" }}
          onClick={() => SetShowAddActivityPopUp(true)}
        >
          <AddIcon id="addAct-icon" />
        </button>
        <AddActivityPopUp
          show={showAddActivityPopUp}
          onHide={() => SetShowAddActivityPopUp(false)}
        />
      </div>

      <div className="homePageBody-TodayPub">
        <h2>AUJOURD’HUI A PROXIMITÉ</h2>
        <TodayPub pubs={todayPubs !== null ? todayPubs : []} />
      </div>
      <div className="homePageBody-Catégorie">
        <h2>Catégorie</h2>
        <Catégorie />
      </div>
      <div className="homePageBody-ComingPub">
        <h2>A Venir</h2>
        <ComingPub pubs={commingPubs !== null ? commingPubs : []} />
      </div>
    </div>
  );
}

export default Home;
