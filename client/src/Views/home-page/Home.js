import React from "react";
import WelcomImage from "./components/WelcomImage";
import News from "./components/News";
import AboutUS from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import "./Home.css";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <WelcomImage />
        <News />
        <AboutUS />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
