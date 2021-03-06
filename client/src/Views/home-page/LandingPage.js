import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function LandingPage() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route path="/SignIn">
            <SignIn />{" "}
          </Route>
          <Route path="/SignUp">
            <SignUp />{" "}
          </Route>
          <Route exact path="/">
            <Home />{" "}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default LandingPage;
