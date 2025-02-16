import React from "react";
import { Route, Routes } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import Topbar from "./Components/Topbar";
import Navbar from "./Components/Navbar";
import HomeScreenCarousal from "./Components/HomeScreenCarousal";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import ErrorPage from "./Components/ErrorPage";
import Footer from "./Components/Footer";
import TourPackages from "./Components/TourPackages";
import TourDetails from "./Components/TourDetails";
import TourServices from "./Components/TourServices";
import EventsActivities from "./Components/EventsActivities";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import AboutUs from "./Components/About";
import WhatsAppButton from "./Components/WhatsappButton";

const App = () => {
  return (
    <HelmetProvider>
      <>
        <Analytics />
        <div className="font-Manrope">
          <WhatsAppButton />
          <Routes>
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
              path="/about"
              element={
                <>
                  <Topbar />
                  <Navbar />
                  <AboutUs />
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
              path="/ourservices"
              element={
                <>
                  <Topbar />
                  <Navbar />
                  <TourServices />
                  <Footer />
                </>
              }
            />
            <Route
              path="/eventsactivities"
              element={
                <>
                  <Topbar />
                  <Navbar />
                  <EventsActivities />
                  <Footer />
                </>
              }
            />
            <Route
              path="/gallery"
              element={
                <>
                  <Topbar />
                  <Navbar />
                  <Gallery />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Topbar />
                  <Navbar />
                  <Contact />
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
            {/* Catch-all route at the end */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </>
    </HelmetProvider>
  );
};

export default App;
