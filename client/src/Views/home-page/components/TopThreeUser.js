import React, { useState, useEffect } from "react";
import FlipCard from "./FlipCard";
import axios from "axios";

function TopThreeUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Publication/landingPage/news/topUser")
      .then((res) => setUsers(res.data));
    return () => {
      setUsers([]);
    };
  }, []);
  return (
    <div className="container-fluid" id="topThreeUser">
      <div className="container">
        <div className="row justify-content-center">
          {users.map((item, index) => {
            return <FlipCard user={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default TopThreeUser;
