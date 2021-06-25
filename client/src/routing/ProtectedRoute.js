import React from "react";
import { Route, Redirect } from "react-router-dom";

//private route in react
const ProtectedRoute = ({ component: Component, ...rest }) => {
  // props
  const tokenExist = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return (
    <Route
      {...rest}
      render={(props) =>
        tokenExist && role === "user" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default ProtectedRoute;
