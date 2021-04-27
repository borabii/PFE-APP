import React from "react";
import { Route, Redirect } from "react-router-dom";

// Synthax for creating private route in react
const PrivateRoute = ({ component: Component, ...rest }) => {
  // props
  const role = localStorage.getItem("role");
  const tokenExist = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={(props) =>
        tokenExist && role === "user" ? (
          <Redirect to="/AbonnéHomePage" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
