import React, { useState, useEffect } from "react";
import Catégorie from "./Catégorie";
import TodayPub from "./TodayPub";
import AddIcon from "@material-ui/icons/Add";
import ComingPub from "./ComingPub";
import AddActivityPopUp from "./AddActivityPopUp";

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
        <TodayPub />
      </div>
      <div className="homePageBody-Catégorie">
        <h2>Catégorie</h2>
        <Catégorie />
      </div>
      <div className="homePageBody-ComingPub">
        <h2>A Venir</h2>
        <ComingPub />
      </div>
    </div>
  );
}

export default Home;
