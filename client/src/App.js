import "./App.css";
import AdminHomePage from "./Views/admin-pages/AdminHomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Views/home-page/Home";
import DetailaAnoncePopUp from "./Views/admin-pages/component/DetailaAnoncePopUp";
import DetailaEventPopUp from "./Views/admin-pages/component/DetailEventPopUp";
import DetailAbonnePopUp from "./Views/admin-pages/component/DetailAbonnePopUp";
import DetailAnnonceurPopUp from "./Views/admin-pages/component/DetailAnnonceurPopUp";
import SignUp from "./Views/home-page/SignUp";
function App() {
  return (
    <div className="app">
      <SignUp />
      {/* <Home /> */}
      {/* <AdminHomePage /> */}
      {/* <DetailaEventPopUp/> */}
      {/* <DetailaAnoncePopUp /> */}
      {/* <DetailAbonnePopUp /> */}

    
     {/* <DetailAnnonceurPopUp /> */}
    </div>
  );
}

export default App;
