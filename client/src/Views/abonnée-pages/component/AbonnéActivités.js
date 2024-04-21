import React, { useState, useContext, useEffect } from "react";
import UserPubOrganized from "./UserPubOrganized";
import UserPubParticipated from "./UserPubParticipated";
import PubContext from "../../../Context/Publication/pubContext";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { useSnackbar } from "notistack";

function AbonnéActivités() {
  const { url, path } = useRouteMatch();

  const [organizedPubShow, setOrganizedPubShow] = useState(true);
  const [participatedPubShow, setParticipatedPubShow] = useState(false);

  const leftBtnHandler = () => {
    setOrganizedPubShow(false);
    setParticipatedPubShow(true);
  };
  const rigthBtnHandler = () => {
    setParticipatedPubShow(false);
    setOrganizedPubShow(true);
  };
  //app level state
  const pubContext = useContext(PubContext);
  const { pubResponseMsg, ClearPubResponseMsg } = pubContext;

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (pubResponseMsg !== "aucune message") {
      enqueueSnackbar(pubResponseMsg, { variant: "success" });
    }
    return () => {
      ClearPubResponseMsg();
    };
  }, [pubResponseMsg]);
  return (
    <div className="abonnéActivités">
      <div className="abonnéActivités-btnContainer">
        <div className="act-switchComponent">
          <button
            id="switch-btnleft"
            style={{
              backgroundColor: participatedPubShow ? "#3aceb9" : "transparent",
            }}
          >
            <Link
              to={`${url}/ActivitésParticiper`}
              onClick={leftBtnHandler}
              id="disableLinkStyle"
            >
              Participé
            </Link>
          </button>
          <button
            id="switch-btnrigth"
            style={{
              backgroundColor: organizedPubShow ? "#3aceb9" : "transparent",
            }}
          >
            <Link to={`${url}`} id="disableLinkStyle" onClick={rigthBtnHandler}>
              Organisé
            </Link>
          </button>
        </div>
      </div>

      <Switch>
        <Route exact path={`${path}`} component={UserPubOrganized} />
        <Route
          path={`${path}/ActivitésParticiper`}
          component={UserPubParticipated}
        />
      </Switch>
    </div>
  );
}

export default AbonnéActivités;
