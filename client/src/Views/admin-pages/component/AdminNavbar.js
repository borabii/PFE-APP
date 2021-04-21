import React, { useContext } from "react";
// React Clock for real time display
import Clock from "react-live-clock";
import AuthContext from "../../../Context/auth/authContext";
import history from "../../../utilis/history";
function AdminNavbar() {
  const authContext = useContext(AuthContext);
  const { logout } = authContext;
  const onLogout = () => {
    logout();
    history.push("/");
  };
  return (
    <div className=" navbar adminHomePage__navbar">
      <div className=" nav__option">
        <h2>Welcome Admin</h2>
      </div>
      <div className="nav__option clock">
        {/* displaying system time for user ( set ticking to true for auto upadate each second) */}
        <Clock format={"HH:mm:ss"} ticking={true} />
      </div>
      <div className="nav__option">
        <button onClick={onLogout} className="logoutBtn">
          <p>déconnexion</p>
        </button>
      </div>
    </div>
  );
}

export default AdminNavbar;
