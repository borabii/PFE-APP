import React from "react";
import { Route, Redirect } from "react-router-dom";

//private route in react
const ProtectedRoute = ({ component: Component, ...rest }) => {
  // props
  const tokenExist = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={(props) =>
        tokenExist ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default ProtectedRoute;
