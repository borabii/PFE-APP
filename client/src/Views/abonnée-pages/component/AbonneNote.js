import React, { useEffect, useContext, useState } from "react";
import AuthContext from "../../../Context/auth/authContext";
import Rating from "@material-ui/lab/Rating";
import axios from "axios";
function AbonneNote() {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const [rateUsers, setRateUsers] = useState([]);
  useEffect(() => {
    const getRate = async () => {
      try {
        await axios
          .get("http://localhost:8000/api/users/loadAbonneLastRate")
          .then((res) => setRateUsers(res.data.userAvis));
      } catch (err) {
        console.log(err);
      }
    };
    getRate();
  }, [user]);
  console.log(rateUsers);
  return (
    <div className="abonneNote">
      <div className="abonée-notes">
        <div className="abonne_avis ">
          <h4>Avis</h4>
          <p>
            <Rating
              name="size-large"
              defaultValue={
                user.userAvis
                  ? user?.userAvis.reduce(
                      (accum, item) => accum + item.avis,
                      0
                    ) / user?.userAvis.length
                  : 0
              }
              precision={0.5}
              readOnly
            />
          </p>
        </div>
        <div className=" score_globale ">
          <h4>Score</h4>
          <p>{user.userScore}</p>
        </div>
      </div>
      <div className="avis_detail">
        <h2>Avis reçus</h2>
        {rateUsers.length > 0 &&
          rateUsers.map((item, index) => {
            return (
              <div className="recived-note">
                <div className="recived-noteLeft">
                  <img
                    src={`http://localhost:8000/${user.imageProfile}`}
                    alt=""
                  />
                  <div className="recived-note-container">
                    <h4>{item?.user.firstName + " " + item?.user.lastName}</h4>
                    <div>
                      <Rating
                        name="size-large"
                        defaultValue={item.avis}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <h6 id="temp">11:30</h6>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default AbonneNote;
