import React from "react";
import "./News.css";

import NewsActivity from "./NewsActivity";
import NewsAnnonce from "./NewsAnnonce";
import NewsEvent from "./NewsEvent";
import TopThreeUser from "./TopThreeUser";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewsHeader from "./NewsHeader";

function News() {
  return (
    <Router>
      <div className="news" id="news">
        <div className="container-fluid">
          <NewsHeader />
        </div>
        <div className="container-fluid my-carousel">
          <Switch>
            <Route exact path="/">
              <TopThreeUser />
            </Route>
            <Route path="/NewsAnnonce">
              <NewsAnnonce />
            </Route>
            <Route path="/NewsEvent">
              <NewsEvent />
            </Route>
            <Route path="/NewsActivity">
              <NewsActivity />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default News;
