import React from "react";
import Topbar from "./Components/Topbar";
import Navbar from "./Components/Navbar";
import HomeScreenCarousal from "./Components/HomeScreenCarousal";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import { Route, Routes } from "react-router";
import ErrorPage from "./Components/ErrorPage";
import Footer from "./Components/Footer";
// import Packages from "./Components/Packages";
// import Tourservices from "./Components/Tourservices";
import Events from "./Components/Events";
import TourPackages from "./Components/TourPackages";
import TourDetails from "./Components/TourDetails";

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
        <Route
          path="/tourpackages"
          element={
            <>
              <Topbar />
              <Navbar />
              <TourPackages />
              <Footer />
            </>
          }
        />
        <Route
          path="/events"
          element={
            <>
              <Topbar />
              <Navbar />
              <Events />
              <Footer />
            </>
          }
        />
        <Route
          path="/tourdetails/tour/:id"
          element={
            <>
              <Topbar />
              <Navbar />
              <TourDetails />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
