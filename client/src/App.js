import "./App.css";
import AdminHomePage from "./Views/admin-pages/AdminHomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Views/home-page/LandingPage";
import { Router, Route, Switch } from "react-router-dom";
import AbonnéHomePage from "./Views/abonnée-pages/AbonnéHomePage";
import AuthState from "./Context/auth/AuthState";
import PubState from "./Context/Publication/PubState";
import UserState from "./Context/user/UserState";

import history from "../src/utilis/history";
import PrivateRoute from "../src/routing/PrivateRoute";
function App() {
  return (
    <AuthState>
      <PubState>
        <UserState>
          <div className="app">
            <Router history={history}>
              <Switch>
                <PrivateRoute exact path="/" component={LandingPage} />
                <Route path="/AdminHomePage">
                  <AdminHomePage />
                </Route>
                <Route path="/AbonnéHomePage">
                  <AbonnéHomePage />
                </Route>
              </Switch>
            </Router>
          </div>
        </UserState>
      </PubState>
    </AuthState>
  );
}

export default App;
