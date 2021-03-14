import "./App.css";
import Header from "./Views/components/Header";
import Home from "./Views/home-page/Home";
import SignIn from "./Views/home-page/SignIn";
import SignUp from "./Views/home-page/SignUp";
function App() {
  return (
    <div className="app">
      <Home />
      {/* <Header />
      <SignIn /> */}
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
