import React from "react";
import { Route, Routes } from "react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
import { toursPackage } from "./data/toursData";
import winterfestival from "./assets/PackagesImages/swattour.jpg";

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
                  <Helmet>
                    <title>
                      Swat Tour Packages 2025 | Book Now at theswattours.com
                    </title>
                    <meta
                      name="description"
                      content="Discover Swat tours, Swat tour packages, and family tours to explore Swat Valley. Book now for affordable rates and unforgettable memories!"
                    />
                  </Helmet>
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
                  <Helmet>
                    <title>the swat tours |About us</title>
                    <meta
                      name="description"
                      content="the swat tours is one of the best tour services provider in swat valley and offers a various range of tour packages in swat valley for couple and families"
                    />

                   <link rel="canonical" href="https://theswattours.com/about" />
                  </Helmet>
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
                  {/* SEO Meta Tags */}
                  <Helmet>
                    <title>Tour Packages -book now at theswattours.com</title>
                    <meta
                      name="description"
                      content="tour packages of swat valley for the local swat citizens, couples from all over the world, families and international travellers"
                    />
                    <link
                      rel="canonical"
                      href="https://www.theswattours.com/tourpackages"
                    />
                    <meta
                      property="og:title"
                      content="Swat Valley Travels - Tour Packages"
                    />
                    <meta
                      property="og:description"
                      content="Discover exclusive tour packages to explore Swat Valley's stunning landscapes and cultural heritage."
                    />
                    <meta
                      property="og:image"
                      content={toursPackage[0]?.Image || ""}
                    />
                    <meta
                      property="og:url"
                      content="https://theswattours.com/tourpackages"
                    />
                    <meta name="twitter:card" content="summary_large_image" />
                  </Helmet>
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
                  <Helmet>
                    <title>Tour services</title>
                    <meta
                      name="description"
                      content="Swat Tours offers a variety of services including pick & drop, rent a car, hotel accommodation, tourist information, tour guides, event planning, tour packages, and guest services"
                    />
                    <link
                      rel="canonical"
                      href="https://theswattours.com/ourservices"
                    />
                  </Helmet>
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
                  <Helmet>
                    <title>Swat Tours - Events & Activities</title>
                    <meta
                      name="description"
                      content="Explore Swat Tours' exciting events and activities, including festivals, outdoor adventures, and cultural experiences."
                    />
                    <link
                      rel="canonical"
                      href="https://www.theswattours.com/eventsactivities"
                    />
                    <meta
                      property="og:title"
                      content="Swat Tours - Events & Activities"
                    />
                    <meta
                      property="og:description"
                      content="Discover Swat Tours' events and activities, offering unforgettable experiences in Swat Valley."
                    />
                    <meta property="og:image" content={winterfestival} />
                    <meta
                      property="og:url"
                      content="https://theswattours.com/eventsactivities"
                    />
                    <meta
                      name="twitter:image"
                      content="https://theswattours.com/images/winterfestival.jpg"
                    />
                  </Helmet>
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
                  <Helmet>
                    <title>Swat Tours - Photos Gallery</title>
                    <meta
                      name="description"
                      content="Gallery provides some of the best photos of Swat Valley, showcasing its scenic beauty, lush green valleys, snow-capped mountains, crystal-clear rivers, and serene lakes."
                    />
                    <link
                      rel="canonical"
                      href="https://www.theswattours.com/gallery"
                    />
                  </Helmet>
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
                  <Helmet>
                    <title>Swat Tours - contact us</title>
                    <meta
                      name="description"
                      content="Contact Swat Tours for customizing a tour according to your budget, or for any service request including pick & drop, rent a car, hotel accommodation, tourist information, tour guides, event planning, tour packages, and guest services"
                    />
                    <link
                      rel="canonical"
                      href="https://theswattours.com/contact"
                    />
                  </Helmet>
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
                  <Helmet>
                    <title>Swat Tours - Tour Detail Page</title>
                    <meta
                      name="description"
                      content="tour details page of the tour packages website"
                    />
                    <link
                      rel="canonical"
                      href="https://theswattours.com/tourdetails/tour/:id"
                    />
                  </Helmet>
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
