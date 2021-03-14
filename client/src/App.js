import "./App.css";
import Header from "./Views/components/Header";
import SignIn from "./Views/home-page/SignIn";
import SignUp from "./Views/home-page/SignUp";
function App() {
  return (
    <div className="app">
      <Header />
      <SignIn />
    </div>
  );
}

export default App;
