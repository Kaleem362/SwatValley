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
import Blog from "./Blog/Blog";
import BlogDetail from "./Blog/BlogDetail";
// import Blog from "./Blog/Blog";

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
                    {/* <link rel="canonical" href="https://theswattours.com/" /> */}
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
                    <title>
                      About Us | The Swat Tours – Your Trusted Travel Partner
                    </title>
                    <meta
                      name="description"
                      content="Learn about The Swat Tours, the top travel agency in Swat Valley. We provide affordable Swat tour packages, hotel booking & travel services.
"
                    />
                    <meta
                      name="keywords"
                      content="Swat Tour Operators, Swat Travel Agency, The Swat Tours, Best Travel Agency in Swat, Swat Valley Tours, Swat Tourism Company
"
                    />
                    <link
                      rel="canonical"
                      href="https://theswattours.com/about"
                    />
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
                      Best Swat Tour Packages 2025 | Family & Honeymoon Trips
                    </title>
                    <meta
                      name="description"
                      content="Explore Swat tour packages with hotel booking, transport, and guided tours. Book now for family, honeymoon, and group trips at affordable rates.
"
                    />
                    <meta
                      name="keywords"
                      content="Swat Tour Packages, Swat Family Tours, Swat Honeymoon Packages, Swat Group Tours, Swat Holiday Packages, Swat Valley Tours
"
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
                    <title>
                      Our Services | Swat Tours – Hotel Booking, Car Rental &
                      More
                    </title>
                    <meta
                      name="description"
                      content="Book hotel, car rental & guided tours with The Swat Tours. We offer top-notch travel services to make your Swat Valley trip comfortable & memorable.
"
                    />
                    <meta
                      name="keywords"
                      content="Swat Travel Services, Swat Car Rental, Swat Hotel Booking, Swat Tour Guide, Swat Transport Services, Swat Tours
"
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
                    <title>
                      Swat Events & Activities 2025 | Adventure & Cultural Tours
                    </title>
                    <meta
                      name="description"
                      content="Join adventure trips, hiking tours, and cultural events in Swat Valley. Book now with The Swat Tours for an unforgettable travel experience!
"
                    />
                    <meta
                      name="keywords"
                      content="Swat Adventure Tours, Swat Hiking Tours, Swat Cultural Tours, Swat Activities, Swat Snow Tours, Swat Festival Packages"
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
                    <title>
                      Contact Us | The Swat Tours – Book Your Swat Trip Now
                    </title>
                    <meta
                      name="description"
                      content="Contact The Swat Tours for booking inquiries, custom tour packages & travel assistance. Plan your Swat Valley trip today!
"
                    />
                    <meta
                      name="keywords"
                      content="Swat Travel Booking, Swat Tour Inquiry, Book Swat Trip, Contact Swat Tours, Swat Tour Packages Inquiry, Swat Valley Tours Booking
"
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

            <Route
              path="/blog"
              element={
                <>
                  <Topbar />
                  <Navbar />
                  <Blog />
                  <Footer />
                </>
              }
            />
            <Route
              path="/blogdetail"
              element={
                <>
                  <Topbar />
                  <Navbar />
                  <BlogDetail />
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
