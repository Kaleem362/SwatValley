import React, { useContext, useState } from "react";
import { store } from "../assets/Store/Context";
import { Link } from "react-router";
import BookingModal from "./BookingModal";
import ForeignerPackages from "./ForeignersTours";
import SwatTours from "./SwatTours";

const TourPackages = () => {
  const { toursPackage } = useContext(store);

  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleBookNow = (e, pkg) => {
    e.preventDefault(); // Prevent Link navigation
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handleConfirmBooking = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container p-6 mx-auto">
      <h1 className="w-full mb-4 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
        Tour Packages
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {toursPackage.map((pkg) => (
          <div
            key={pkg.id}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            {/* Cover Image */}
            <img
              src={pkg.Image}
              alt={pkg.packageName}
              className="object-cover w-full h-64 transition-transform duration-300 transform group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 z-10 w-full h-64 transition-all duration-300 bg-black opacity-40 group-hover:opacity-60 group-hover:scale-110" />
            <div className="absolute inset-0 z-20 flex items-center justify-center w-full h-64 group">
              <button
                onClick={(e) => handleBookNow(e, pkg)}
                className="px-6 py-3 font-semibold transition-all duration-300 transform bg-white rounded-full shadow-lg text-slate-800 "
              >
                Book Now
              </button>
            </div>

            {/* Title and Description */}
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
        setIsModalOpen={setIsModalOpen}
        onConfirm={handleConfirmBooking}
        tourDetails={{
          packageName: selectedPackage?.packageName,
          destination: selectedPackage?.destinations?.join(" - "),
          duration: selectedPackage?.duration,
          price: selectedPackage?.packagePrices,
          accommodation: selectedPackage?.accommodation?.type,
          transportation: selectedPackage?.transportation?.options?.join(", "),
        }}
      />

      <SwatTours />
      <ForeignerPackages />
    </div>
  );
};

export default TourPackages;
