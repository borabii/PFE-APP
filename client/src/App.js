import "./App.css";
import AdminHomePage from "./Views/admin-pages/AdminHomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Views/home-page/Home";
function App() {
  return (
    <div className="app">
      <Home />
      {/* <AdminHomePage /> */}
    </div>
  );
}

export default App;
