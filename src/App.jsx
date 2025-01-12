import React from "react";
import Topbar from "./Components/Topbar";
import Navbar from "./Components/Navbar";
import HomeScreenCarousal from "./Components/HomeScreenCarousal";

const App = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <HomeScreenCarousal />
    </div>
  );
};

export default App;
