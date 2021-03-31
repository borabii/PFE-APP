import React from "react";
import Header from "./components/Header";
import WelcomImage from "./components/WelcomImage";
import News from "./components/News";
import AboutUS from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import "./Home.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SmoothScroll from "smooth-scroll";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home__container">
        <WelcomImage />
        <News />
        <AboutUS />
        <ContactUs />
        <Footer />
      </div>
      {/* <SignIn /> */}
      {/* <SignUp /> */}
    </div>
  );
}

export default Home;
