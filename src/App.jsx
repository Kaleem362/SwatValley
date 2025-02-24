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
                    <title>About Us | TheSwatTours - Your Trusted Travel Partner</title>
                    <meta
                      name="description"
                      content="Explore Swat Valley with TheSwatTours, your trusted travel partner for unforgettable tours, honeymoon trips, and adventure experiences"
                    />
                     <meta name="keywords" content="TheSwatTours, Swat Valley tours, Swat travel agency, best tour operators in Swat, Swat tourism services, adventure tours Swat, honeymoon trips Swat, guided tours Swat, customized Swat tours" />

                   <link rel="canonical" href="https://www.theswattours.com/about" />
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
                    <title>
                     Swat Tour Packages 2025 | Family & Holidays | TheSwatTours</title>
                    <meta
                      name="description"
                      content="Discover the best Swat tour packages for 2025! Book family vacations, honeymoon getaways, or Holidays  tours with exclusive travel deals at the best prices"
                    />
                    <meta
                     name="keywords"
                      content="Swat tour packages 2025, Pakistan tour packages, honeymoon tour packages, adventure tours in Swat, family trip to Swat, private Swat tours, customized Swat Valley tours, best travel deals in Swat"
                     />

                    <link
                      rel="canonical"
                      href="https://www.theswattours.com/tourpackages"
                    />
                    <meta
                      property="og:title"
                      content="Swat Tour Packages 2025 | Family & Holidays | TheSwatTours"
                    />
                    <meta
                      property="og:description"
                      content="Discover the best Swat tour packages for 2025! Book family vacations, honeymoon getaways, or Holidays  tours with exclusive travel deals at the best prices."
                    />
                    <meta
                      property="og:image"
                      content={toursPackage[0]?.Image || ""}
                    />
                    <meta
                      property="og:url"
                      content="https://www.theswattours.com/tourpackages"
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
                    <title>Our Services | Tours, Car Rentals & Hotels | TheSwatTours</title>
                    <meta
                      name="description"
                      content="Explore premium travel services with TheSwatTours! From customized tour planning and car rentals to hotel bookings, we offer the best travel solutions in Swat"
                    />
                    <meta
                    name="keywords"
                   content="Swat travel services, Swat tour planning, car rentals in Swat, hotel booking in Swat, guided tours Swat Valley, Swat transport services, Swat tourism solutions, private tours Swat"
                   />

                    <link
                      rel="canonical"
                      href="https://www.theswattours.com/ourservices"
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
                    <title>Events & Activities in Swat | Adventure & Cultural  | TheSwatTours</title>
                    <meta
                      name="description"
                      content="Explore exciting events and activities in Swat Valley! From adventure sports to cultural festivals, TheSwatTours offers unforgettable experiences."
                    />
                    <meta
                     name="keywords"
                     content="Swat events, Swat activities, adventure sports Swat, cultural festivals Swat, trekking in Swat, paragliding Swat, Swat sightseeing tours, Swat tourism activities, hiking in Swat Valley, camping in Swat, white-water rafting Swat River, skiing in Malam Jabba, Swat Valley cultural events, Swat adventure tours, Swat Valley outdoor activities"
                    />

                    <link
                      rel="canonical"
                      href="https://www.theswattours.com/eventsactivities"
                    />
                    <meta
                      property="og:title"
                      content="Events & Activities in Swat | Adventure & Cultural  | TheSwatTours"
                    />
                    <meta
                      property="og:description"
                      content="Explore exciting events and activities in Swat Valley! From adventure sports to cultural festivals, TheSwatTours offers unforgettable experiences."
                    />
                    <meta property="og:image" content={winterfestival} />
                    <meta
                      property="og:url"
                      content="https://www.theswattours.com/eventsactivities"
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
                    <title>Swat Tours - Photo Gallery | Best Travel Memorie</title>
                    <meta
                      name="description"
                      content="See the best of Swat Valley! Browse our travel gallery to explore scenic landscapes, top attractions, and unforgettable tour experiences."
                    />
                    <meta name="keywords" content="Swat photo gallery, Swat Valley pictures, Swat travel photography, best places in Swat, Swat tourism images, scenic views of Swat, Swat Valley attractions, Swat travel memories, adventure photography in Swat, beautiful landscapes of Swat" />

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
                    <title>Contact Us | Plan Your Swat Tour Today | TheSwatTours</title>
                    <meta
                      name="description"
                      content="Get in touch with TheSwatTours for customized travel plans, car rentals, hotel bookings, tour guides, and event planning in Swat Valley."
                    />
                    <meta
                    name="keywords"
                    content="Contact Swat Tours, Swat travel inquiry, book Swat tour, rent a car Swat, Swat hotel booking, tour guide Swat, Swat tourism services, Swat pick and drop, Swat guest services, Swat event planning"
                    />

                    <link
                      rel="canonical"
                      href="https://www.theswattours.com/contact"
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
                    <title>Swat Tours - Tour Detail Page | Explore Custom Travel Packages</title>
                    <meta
                      name="description"
                      content="Find the perfect Swat tour for your next trip! Explore tour details, prices, and destinations, and book an unforgettable travel experience today."
                    />
                    <meta name="keywords" content="Swat tour details, Swat travel packages, Swat Valley tours, best tours in Swat, adventure tours in Swat, family trip to Swat, honeymoon tour Swat, private Swat tours, customized Swat tours, tour prices in Swat, Swat tourism deals" />
                      <link
                      rel="canonical"
                      href="https://www.theswattours.com/tourdetails/tour/:id"  />
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
