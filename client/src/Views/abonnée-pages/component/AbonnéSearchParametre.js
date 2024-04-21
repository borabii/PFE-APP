import React, { useState, useEffect, useContext } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import UserContext from "../../../Context/user/userContext";
import AuthContext from "../../../Context/auth/authContext";
import { useSnackbar } from "notistack";

function AbonnéSearchParametre() {
  //app level state
  //userContext
  const usercontext = useContext(UserContext);
  const { updateDistanceDeRecherhce, responseMessage, ClearResponseMessage } =
    usercontext;
  const authcontext = useContext(AuthContext);
  const { user, loadUser } = authcontext;
  //this state is used for handling the sider value that define the distance of searsh per km
  const [distance, setdistance] = useState(user.distanceDeRecherche / 1000);

  const handleChange = (value) => {
    setdistance(value);
  };

  const saveDistance = () => {
    updateDistanceDeRecherhce(distance);
    loadUser();
  };
  //used for displaying response msg
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (responseMessage !== "aucune message") {
      enqueueSnackbar(
        responseMessage,

        { variant: "success" }
      );
    }
    return () => {
      ClearResponseMessage();
    };
  }, [responseMessage]);
  return (
    <div className="searchParametre">
      <h2>Distance de recherche</h2>

      <div className="slider">
        <Slider min={1} max={100} value={distance} onChange={handleChange} />
        <div className="value">{distance} km</div>
      </div>
      <button className="btn-Distance" onClick={saveDistance}>
        Enregistrer
      </button>
    </div>
  );
}

export default AbonnéSearchParametre;
