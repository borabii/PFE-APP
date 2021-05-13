import React, { useEffect, useState } from "react";
import axios from "axios";
function Dashboard() {
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
          <div className="col col-lg-4  ">
            <div className=" my-card">
              <div className="card-body">
                <h5 className="card-title mycard-title">Nombre total Abonné</h5>
                <p className="card-text">{data.nbrAbonné}</p>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 ">
            <div className=" my-card">
              <div className="card-body">
                <h5 className="card-title mycard-title">
                  Nombre total Annonceur
                </h5>
                <p className="card-text">{data.nbrAnnonceur}</p>
              </div>
            </div>
          </div>
          {localStorage.getItem("role") === "Super Admin" && (
            <div className="col col-lg-4 ">
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
          )}

          <div className="col col-lg-4 ">
            <div className=" my-card">
              <div className="card-body">
                <h5 className="card-title mycard-title">
                  Nombre total évenement
                </h5>
                <p className="card-text">1000</p>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 ">
            <div className=" my-card">
              <div className="card-body">
                <h5 className="card-title mycard-title">
                  Nombre total annonce
                </h5>
                <p className="card-text">1000</p>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 ">
            <div className="my-card">
              <div className="card-body">
                <h5 className="card-title mycard-title">
                  Nombre total activité
                </h5>
                <p className="card-text">1000</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container-fluid px-0 w-100">
          <div className="row bottom-dash">
            <div className="col col-lg-12  ">
              4444dddddddddddddddddddddddddddddddddddddddddddddddddd
              4444dddddddddddddddddddddddddddddddddddddddddddddddddd
              4444dddddddddddddddddddddddddddddddddddddddddddddddddd
              4444dddddddddddddddddddddddddddddddddddddddddddddddddd
              4444dddddddddddddddddddddddddddddddddddddddddddddddddd
              4444dddddddddddddddddddddddddddddddddddddddddddddddddd
              4444dddddddddddddddddddddddddddddddddddddddddddddddddd
              4444dddddddddddddddddddddddddddddddddddddddddddddddddd
              4444dddddddddddddddddddddddddddddddddddddddddddddddddd
              4444dddddddddddddddddddddddddddddddddddddddddddddddddd
              4444dddddddddddddddddddddddddddddddddddddddddddddddddd
              4444dddddddddddddddddddddddddddddddddddddddddddddddddd
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Dashboard;
