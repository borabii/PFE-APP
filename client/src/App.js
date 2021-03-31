import "./App.css";
import AdminHomePage from "./Views/admin-pages/AdminHomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Views/home-page/Home";
import LandingPage from "./Views/home-page/LandingPage";
function App() {
  return (
    <div className="app">
      <LandingPage />
      {/* <Home /> */}
      {/* <AdminHomePage /> */}
    </div>
  );
}

export default App;
