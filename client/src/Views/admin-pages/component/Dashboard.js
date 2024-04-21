import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouteMatch, NavLink } from "react-router-dom";

function Dashboard() {
  const { url } = useRouteMatch();
  const [data, setData] = useState({});
  //run when compoenet is mounted to get dashbord data from db and set the state(data)
  //with response data
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/Admin/dashboard")
      .then((response) => setData(response.data));
  }, []);
  return (
    <div className="dashboard">
      <div className="container-fluid   px-0 ">
        <div className="card-deck">
          <NavLink className="dashboard-navLink" to={`${url}/userAbonné`}>
            <div className="col col-md-4 col-lg-4  ">
              <div className=" my-card">
                <div className="card-body">
                  <h5 className="card-title mycard-title">
                    Nombre total Abonné
                  </h5>
                  <p className="card-text">{data.nbrAbonné}</p>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink className="dashboard-navLink" to={`${url}/userAnnonceur`}>
            <div className="col  col-md-4 col-lg-4 ">
              <div className=" my-card">
                <div className="card-body">
                  <h5 className="card-title mycard-title">
                    Nombre total Annonceur
                  </h5>
                  <p className="card-text">{data.nbrAnnonceur}</p>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink className="dashboard-navLink" to={`${url}/pubEvent`}>
            <div className="col  col-md-4 col-lg-4 ">
              <div className=" my-card">
                <div className="card-body">
                  <h5 className="card-title mycard-title">
                    Nombre total évenement
                  </h5>
                  <p className="card-text">{data.nbrEvent}</p>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink className="dashboard-navLink" to={`${url}/pubAnnonce`}>
            <div className="col  col-md-4 col-lg-4 ">
              <div className=" my-card">
                <div className="card-body">
                  <h5 className="card-title mycard-title">
                    Nombre total annonce
                  </h5>
                  <p className="card-text">{data.nbrAnnonce}</p>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink className="dashboard-navLink" to={`${url}/pubActivity`}>
            <div className="col col-md-4 col-lg-4 ">
              <div className="my-card">
                <div className="card-body">
                  <h5 className="card-title mycard-title">
                    Nombre total activité
                  </h5>
                  <p className="card-text">{data.nbrActivity}</p>
                </div>
              </div>
            </div>
          </NavLink>

          {localStorage.getItem("role") === "Super Admin" && (
            <NavLink className="dashboard-navLink" to={`${url}/adminManagment`}>
              <div className="col  col-md-4 col-lg-4 ">
                <div className=" my-card">
                  <div className="card-body">
                    <h5 className="card-title mycard-title">
                      Nombre total admin
                    </h5>
                    <p className="card-text" style={{ marginTop: 45 }}>
                      {data.nbrAdmin}
                    </p>
                  </div>
                </div>
              </div>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
