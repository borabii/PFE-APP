import "./App.css";
import AdminHomePage from "./Views/admin-pages/AdminHomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Views/home-page/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AbonnéHomePage from "./Views/abonnée-pages/AbonnéHomePage";

function App() {
  return (
    <div className="app">
      {/* <Router>
        <Switch>
          <Route path="/admin">
            <AdminHomePage />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router> */}
      <AbonnéHomePage />
    </div>
  );
}

export default App;
