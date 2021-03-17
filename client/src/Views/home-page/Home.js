import React from "react";
import Header from "../components/Header";
import WelcomImage from "./components/WelcomImage";
import TopThreeUser from "./components/TopThreeUser";
import TopUserPerSport from "./components/TopUserPerSport";
import AboutUS from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home__container">
        <WelcomImage />
        <TopThreeUser />
        <TopUserPerSport />
        <AboutUS />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
