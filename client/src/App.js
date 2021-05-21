import "./App.css";
import AdminHomePage from "./Views/admin-pages/AdminHomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Views/home-page/LandingPage";
import { Router, Route, Switch } from "react-router-dom";
import AbonnéHomePage from "./Views/abonnée-pages/AbonnéHomePage";
import AuthState from "./Context/auth/AuthState";
import PubState from "./Context/Publication/PubState";
import UserState from "./Context/user/UserState";
import { SnackbarProvider } from "notistack";
import history from "../src/utilis/history";
import PrivateRoute from "../src/routing/PrivateRoute";
import setAuthToken from "./utilis/setAuthToken";
if (localStorage.getItem("token")) {
  setAuthToken(localStorage.getItem("token")); //  axios.defaults.headers.common['x-auth-token'] = token;
}
function App() {
  return (
    <SnackbarProvider maxSnack={3} preventDuplicate>
      <AuthState>
        <UserState>
          <PubState>
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
          </PubState>
        </UserState>
      </AuthState>
    </SnackbarProvider>
  );
}

export default App;
