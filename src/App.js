import React from "react";
import Banner from "./components/banner/Banner";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Achievements from "./components/achievements/achievements";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Projects />
        <Resume />
        <Achievements/>
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
