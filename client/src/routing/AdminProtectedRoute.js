import React from "react";
import { Route, Redirect } from "react-router-dom";

//private route in react
const AdminProtectedRoute = ({ component: Component, ...rest }) => {
  // props
  const role = localStorage.getItem("role");
  const tokenExist = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={(props) =>
        (tokenExist && role === "Admin") || role === "Super Admin" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default AdminProtectedRoute;
