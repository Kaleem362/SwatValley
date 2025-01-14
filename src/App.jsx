import React from "react";
import Topbar from "./Components/Topbar";
import Navbar from "./Components/Navbar";
import HomeScreenCarousal from "./Components/HomeScreenCarousal";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import { Route, Routes } from "react-router";
import ErrorPage from "./Components/ErrorPage";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route
          path="/"
          element={
            <>
              <Topbar />
              <Navbar />
              <HomeScreenCarousal />
              <Hero />
              <Services />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
