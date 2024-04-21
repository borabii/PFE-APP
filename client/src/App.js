import "./App.css";
import AdminHomePage from "./Views/admin-pages/AdminHomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Views/home-page/LandingPage";
import { Router, Route, Switch } from "react-router-dom";
import AbonnéHomePage from "./Views/abonnée-pages/AbonnéHomePage";
import AuthState from "./Context/auth/AuthState";
import PubState from "./Context/Publication/PubState";
import UserState from "./Context/user/UserState";
import NotifState from "./Context/notification/notifState";
import { SnackbarProvider } from "notistack";
import history from "../src/utilis/history";
import PrivateRoute from "../src/routing/PrivateRoute";
import ProtectedRoute from "./routing/ProtectedRoute";
import AdminProtectedRoute from "../src/routing/AdminProtectedRoute";
import setAuthToken from "./utilis/setAuthToken";
import BlockedUser from "./Views/error-page/BlockedUser";
import NotFound from "./Views/error-page/NotFound";
if (localStorage.getItem("token")) {
  setAuthToken(localStorage.getItem("token")); //  axios.defaults.headers.common['x-auth-token'] = token;
}
function App() {
  return (
    <SnackbarProvider maxSnack={3} preventDuplicate>
      <AuthState>
        <UserState>
          <PubState>
            <NotifState>
              {" "}
              <div className="app">
                <Router history={history}>
                  <Switch>
                    <PrivateRoute exact path="/" component={LandingPage} />
                    <AdminProtectedRoute
                      path="/AdminHomePage"
                      component={AdminHomePage}
                    />
                    <ProtectedRoute
                      path="/AbonnéHomePage"
                      component={AbonnéHomePage}
                    />
                    <Route path="/blockedUser" component={BlockedUser} />
                    <Route path="*" component={NotFound} />
                  </Switch>
                </Router>
              </div>
            </NotifState>
          </PubState>
        </UserState>
      </AuthState>
    </SnackbarProvider>
  );
}

export default App;
