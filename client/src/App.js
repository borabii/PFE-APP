import "./App.css";
import AdminHomePage from "./Views/admin-pages/AdminHomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Views/home-page/Home";
import DetailaAnoncePopUp from "./Views/admin-pages/component/DetailaAnoncePopUp";
function App() {
  return (
    <div className="app">
      {/* <Home /> */}
      {/* <AdminHomePage /> */}
    
      <DetailaAnoncePopUp />
    </div>
  );
}

export default App;
