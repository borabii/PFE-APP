import "./App.css";
import AdminHomePage from "./Views/admin-pages/AdminHomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Views/home-page/Home";
import DetailaAnoncePopUp from "./Views/admin-pages/component/DetailaAnoncePopUp";
import DetailaEventPopUp from "./Views/admin-pages/component/DetailEventPopUp";
import DetailAbonnePopUp from "./Views/admin-pages/component/DetailAbonnePopUp";
import DetailAnnonceurPopUp from "./Views/admin-pages/component/DetailAnnonceurPopUp";
import SignUp from "./Views/home-page/SignUp";
import SignIn from "./Views/home-page/SignIn";
import ProfileAbonne from "./Views/abonne-page/component/ProfileAbonne";
import AbonneInfo from "./Views/abonne-page/component/AbonneInfo";
import AbonneNote from "./Views/abonne-page/component/AbonneNote";
import SearchParametre from "./Views/abonne-page/component/SearchParametre";
import AbonneIntert from "./Views/abonne-page/component/AbonneIntert";
import PubDetailPopUp from "./Views/abonne-page/component/PubDetailPopUp";
import NotifDropDown from "./Views/abonne-page/component/NotifDropDown";
function App() {
  return (
    <div className="app">
      <NotifDropDown />
      {/* <PubDetailPopUp /> */}
      {/* <AbonneIntert /> */}
      {/* <SearchParametre />    */}
      {/* <AbonneNote /> */}
      {/* <AbonneInfo /> */}
      {/* <ProfileAbonne/> */}
      {/* <SignIn /> */}
      {/* <SignUp /> */}
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
