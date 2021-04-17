import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function LandingPage() {
  // const [role, setRole] = useState("admffin");

  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/SignIn">
            <SignIn />{" "}
          </Route>
          {/* <Route
            path="/SignIn"
            render={() =>
              role === "admin" ? <SignIn /> : <Redirect to="/Signup" />
            }
          /> */}
          <Route path="/SignUp">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default LandingPage;
