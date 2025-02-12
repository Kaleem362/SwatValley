import React, { useContext, useState } from "react";
import { store } from "../assets/Store/Context";
import { Link } from "react-router-dom"; // Updated import for React Router v6
import BookingModal from "./BookingModal";
import ForeignerPackages from "./ForeignersTours";
import SwatTours from "./SwatTours";
import { Helmet } from "react-helmet-async";

const TourPackages = () => {
  const { toursPackage } = useContext(store);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleBookNow = (e, pkg) => {
    e.preventDefault();
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handleConfirmBooking = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Swat Valley Travels - Tour Packages</title>
        <meta
          name="description"
          content="Explore a variety of tour packages offered by Swat Valley Travels to experience the beauty of Swat Valley and its surroundings."
        />
        <link rel="canonical" href="https://theswattours.com/tourpackages" />
        <meta
          property="og:title"
          content="Swat Valley Travels - Tour Packages"
        />
        <meta
          property="og:description"
          content="Discover exclusive tour packages to explore Swat Valley's stunning landscapes and cultural heritage."
        />
        <meta property="og:image" content={toursPackage[0]?.Image || ""} />
        <meta
          property="og:url"
          content="https://theswattours.com/tourpackages"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* JSON-LD Structured Data for Tour Packages */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              ${toursPackage
                .map(
                  (pkg, index) => `
                {
                  "@type": "ListItem",
                  "position": ${index + 1},
                  "url": "https://theswattours.com/tourdetails/tour/${pkg.id}",
                  "name": "${pkg.packageName}",
                  "description": "${
                    pkg.description ||
                    "Enjoy an exclusive and luxurious experience with this package!"
                  }",
                  "image": "${pkg.Image}"
                }
              `
                )
                .join(",")}
            ]
          }
        `}
      </script>

      {/* Main Content */}
      <div className="container p-6 mx-auto">
        <h1 className="w-full mb-4 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
          Tour Packages
        </h1>

        {/* Tour Packages Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {toursPackage.map((pkg) => (
            <div
              key={pkg.id}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img
                src={pkg.Image || "default-placeholder.jpg"}
                alt={pkg.packageName || "Tour Package"}
                loading="lazy"
                className="object-cover w-full h-64 transition-transform duration-300 transform group-hover:scale-110"
              />

              <div className="absolute inset-0 z-10 w-full h-64 transition-all duration-300 bg-black opacity-40 group-hover:opacity-60 group-hover:scale-110" />
              <div className="absolute inset-0 z-20 flex items-center justify-center w-full h-64 group">
                <button
                  onClick={(e) => handleBookNow(e, pkg)}
                  className="px-6 py-3 font-semibold transition-all duration-300 transform bg-white rounded-full shadow-lg text-slate-800 hover:bg-slate-100"
                  aria-label={`Book now for ${pkg.packageName}`}
                >
                  Book Now
                </button>
              </div>
              <div className="p-4 bg-white">
                <h2 className="text-xl font-bold">{pkg.packageName}</h2>
                <p className="mb-3 text-sm text-gray-600">
                  {pkg.description ||
                    "Enjoy an exclusive and luxurious experience with this package!"}
                </p>
                <Link
                  to={`/tourdetails/tour/${pkg.id}`}
                  className="inline-block px-4 py-2 mt-4 text-white transition-all rounded-md duration-400 from-black to-slate-700 bg-gradient-to-r hover:bg-gradient-to-l hover:from-black hover:to-slate-700 font-Manrope"
                >
                  Tour Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Modal */}
        <BookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirmBooking}
          tourDetails={{
            packageName: selectedPackage?.packageName,
            destination: selectedPackage?.destinations?.join(" - "),
            duration: selectedPackage?.duration,
            price: selectedPackage?.packagePrices,
            accommodation: selectedPackage?.accommodation?.type,
            transportation:
              selectedPackage?.transportation?.options?.join(", "),
          }}
        />

        {/* Additional Sections */}
        <SwatTours />
        <ForeignerPackages />
      </div>
    </>
  );
};

export default TourPackages;
