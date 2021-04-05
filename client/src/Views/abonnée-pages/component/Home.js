import React, { useState, useEffect } from "react";
import Catégorie from "./Catégorie";
import TodayPub from "./TodayPub";
import AddIcon from "@material-ui/icons/Add";
import ComingPub from "./ComingPub";

// used for hide addActivity-btn-small when scrolling in small device screnn
const useHideOnScrolled = () => {
  const [hidden, setHidden] = useState(false);

  const handleScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    setHidden(top !== 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return hidden;
};
function Home() {
  const hidden = useHideOnScrolled();

  return (
    <div className="home">
      <button className="addActivity-btn">
        <p id="addAct-text">Publier Activité</p>
      </button>
      <button
        className="addActivity-btn-small"
        style={{ display: !hidden ? "block" : "none" }}
      >
        <AddIcon id="addAct-icon" />
      </button>
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
