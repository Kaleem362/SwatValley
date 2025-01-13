import React from "react";
import Topbar from "./Components/Topbar";
import Navbar from "./Components/Navbar";
import HomeScreenCarousal from "./Components/HomeScreenCarousal";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <HomeScreenCarousal />
      <Hero />
    </div>
  );
};

export default App;
