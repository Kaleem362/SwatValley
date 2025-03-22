import React, { useContext, useState } from "react";
import { store } from "../assets/Store/Context";
import SwatToursModal from "./SwatToursModal";
import malamjabbadaytour from "./../assets/PackagesImages/malamjabbadaytour.jpg";
import kalamValleyTour from "./../assets/PackagesImages/kalamvalleytourenhanced.jpg";
import gabenJabbaTour from "./../assets/PackagesImages/gabinjabbadaytour.jpg";
import marghuzarTour from "./../assets/PackagesImages/murghuzardaytour.jpg";
import shanglaTopTour from "./../assets/PackagesImages/shangladaytour.jpg";

const SwatTours = () => {
  const { Swatdaytourpackage, modalState, setModalState } = useContext(store);
  const { swatTourPackages } = Swatdaytourpackage[0];
  const [selectedPackage, setSelectedPackage] = useState(null);
  const { newtourpackages } = useContext(store);
  const [activeTab, setActiveTab] = useState(0);

  // console.log(newtourpackages);

  const tourImages = {
    "Malam Jabba Day Tour": malamjabbadaytour,
    "Kalam Valley Day Tour": kalamValleyTour,
    "Gaben Jabba Day Tour": gabenJabbaTour,
    "Marghuzar and White Palace Tour": marghuzarTour,
    "Shangla Top and Yakhtingai Day Tour": shanglaTopTour,
  };

  const handleBookNow = (tour) => {
    setSelectedPackage(tour);
    setModalState(true);
  };

  // Your business WhatsApp number - replace with actual number
  const whatsappNumber = "923489857193"; // Replace with your number

  // Function to handle WhatsApp booking
  const handleWhatsAppBooking = (packageInfo) => {
    const category = newtourpackages[activeTab].category;
    const duration = packageInfo.duration;
    const price = packageInfo.price;
    const accommodation = newtourpackages[activeTab].accommodation;
    const groupSize = newtourpackages[activeTab].groupSize;

    // Prepare message text
    const message =
      `Hello! I would like to book a Tour:\n\n` +
      `*Package Type:* ${category}\n` +
      `*Duration:* ${duration}\n` +
      `*Price:* ${price} PKR\n` +
      `*Accommodation:* ${accommodation}\n` +
      `*Group Size:* ${groupSize}\n\n` +
      `Please confirm availability for this tour package.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <div className="py-10 mx-auto">
        <h3 className="w-full mb-4 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
          Swat Tour Packages
        </h3>
        <p className="my-4 text-lg text-start text-slate-800 font-Manrope">
          {swatTourPackages.introduction}
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {swatTourPackages.dayTours.map((tour, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg h-96 group"
            >
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${tourImages[tour.tourName]})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              </div>
              <div className="relative flex flex-col justify-end h-full p-6 text-white">
                <h3 className="mb-2 text-2xl font-bold">{tour.tourName}</h3>
                <p className="mb-4 text-gray-200">{tour.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold">{tour.price}</span>
                  <div className="flex gap-2">
                    <a
                      href={`https://wa.me/923489857193?text=I'm interested in the ${tour.tourName} of ${tour.description} with ${tour.price} package`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-600 rounded-full h-fit"
                    >
                      WhatsApp
                    </a>
                    <button
                      onClick={() => handleBookNow(tour)}
                      className="h-10 px-4 font-semibold bg-white rounded-full xs:px-6 w-fit px-auto text-slate-800 hover:scale-105 hover:bg-slate-800"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="w-full my-10 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
          Family customized & Private Tour Packages
        </h3>
        <div className="grid grid-cols-1 gap-6 py-2 mx-auto md:grid-cols-2">
          {Swatdaytourpackage.length > 1 &&
            Swatdaytourpackage[1]?.familytourpackages?.map(
              (category, index) => (
                <div
                  key={index}
                  className="p-6 bg-white border rounded-lg shadow-md"
                >
                  <h3 className="mb-3 text-2xl font-semibold text-gray-700">
                    {category.category}
                  </h3>
                  <p className="mb-3 text-gray-600">{category.accommodation}</p>
                  <ul>
                    {category.packages?.map((pkg, idx) => (
                      <li
                        key={idx}
                        className="flex justify-between py-2 border-b"
                      >
                        <div className="flex-col sm:flex-row ">
                          <span>{pkg.duration}</span>
                          <span className="font-semibold"> {pkg.price}PKR</span>
                        </div>
                        <div className="flex gap-2">
                          <a
                            href={`https://wa.me/923489857193?text=I'm interested in the ${category.category}, ${category.accommodation}, of ${pkg.price} with the duration ${pkg.duration} package`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-4 text-white bg-green-500 rounded-md h-fit"
                          >
                            WhatsApp
                          </a>
                          {/* <button
                            className="px-3 py-1 text-white bg-blue-600 rounded-md"
                            onClick={() => handleBookNow(pkg)}
                          >
                            Book Now
                          </button> */}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
        </div>

        {Swatdaytourpackage.length > 1 &&
          Swatdaytourpackage[1]?.destinations && (
            <div className="p-6 bg-white border rounded-lg shadow-md">
              <h3 className="my-4 text-2xl font-semibold text-gray-700">
                Destinations:
                <br />
                <p className="text-lg font-normal text-gray-600">
                  {Swatdaytourpackage[1].destinations.join(", ")}
                </p>
              </h3>

              <div>
                <h3 className="my-4 text-2xl font-semibold text-gray-700">
                  Transportation:
                </h3>
                {Swatdaytourpackage[1]?.transportation.map(
                  (transport, index) => (
                    <p
                      key={index}
                      className="text-lg font-normal text-gray-600"
                    >
                      {transport.vehicle
                        ? `${transport.vehicle} - ${transport.capacity}`
                        : transport.info}
                    </p>
                  )
                )}
              </div>

              <h3 className="my-4 mb-3 text-2xl font-semibold text-gray-700">
                Package Includes
              </h3>
              <ul>
                {Swatdaytourpackage[1]?.packageIncludes.map((item, index) => (
                  <li key={index} className="text-lg font-normal text-gray-600">
                    {item}
                  </li>
                ))}
              </ul>

              <div>
                <h3 className="my-4 text-2xl font-semibold text-gray-700">
                  Extra Charges:
                </h3>
                <ul className="pl-5 list-disc">
                  {Swatdaytourpackage[1]?.extraCharges.map((charge, index) => (
                    <li
                      key={index}
                      className="text-lg font-normal text-gray-600"
                    >
                      <span className="font-semibold">{charge.from}:</span> ₨{" "}
                      {charge.price}
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="my-4 text-2xl font-semibold text-gray-700">
                Contact us
              </h3>
              <div className="flex gap-2">
                <a
                  href={`https://wa.me/923489857193?text=I'm interested in the ${Swatdaytourpackage[1].destinations.join(
                    ", "
                  )} package`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 font-semibold text-white bg-green-500 rounded-md font-Manrope"
                >
                  WhatsApp
                </a>
                <a
                  href="tel:+923489857193"
                  className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-md"
                >
                  Call Now
                </a>
              </div>
            </div>
          )}
        <div className="min-h-screen px-4 py-12 bg-gradient-to-br from-slate-400 to-slate-400 sm:px-6 lg:px-8">
          <div className="w-full mx-auto">
            {/* Header with mountain silhouette */}
            <div className="relative mb-12">
              <div className="absolute inset-x-0 bottom-0">
                {/* <svg
                  viewBox="0 0 1440 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-20 text-white"
                >
                  <path
                    d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 45C840 60 960 90 1080 90C1200 90 1320 60 1380 45L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                    fill="currentColor"
                  />
                </svg> */}
              </div>
              <div className="relative text-center">
                <h1 className="mb-2 text-4xl font-bold text-gray-800 sm:text-5xl">
                  Swat Family & Private Tour Packages
                </h1>
                <p className="max-w-2xl mx-auto text-xl text-slate-800">
                  Discover the breathtaking beauty of Pakistan's Switzerland
                </p>
              </div>
            </div>

            {/* Tour categories tabs */}
            <div className="mb-8 overflow-x-auto">
              <div className="flex pb-2 space-x-2 min-w-max">
                {newtourpackages.map((tour, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`py-2 px-4 rounded-t-lg font-medium transition-colors duration-200 ${
                      activeTab === index
                        ? "bg-white text-green-700 shadow-md border-t border-l border-r border-gray-200"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {tour.category}
                  </button>
                ))}
              </div>
            </div>

            {/* Tour packages cards */}
            <div className="grid grid-cols-1 gap-6 h-fit md:grid-cols-2">
              {newtourpackages[activeTab].packages.map((pkg, index) => (
                <div
                  key={index}
                  className="overflow-hidden transition duration-300 transform bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative h-40 overflow-hidden bg-slate-600">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 opacity-90"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-6xl font-bold text-center text-white">
                        {pkg.duration}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-600">
                        {newtourpackages[activeTab].accommodation}
                      </span>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {newtourpackages[activeTab].groupSize}
                      </span>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Starting from</p>
                        <p className="text-2xl font-bold text-gray-800">
                          {pkg.price}
                        </p>
                      </div>
                      <button
                        onClick={() => handleWhatsAppBooking(pkg)}
                        className="flex items-center px-3 py-3 font-medium text-white transition-colors duration-200 bg-green-600 rounded xs:px-2 xs:py-2 hover:bg-green-700"
                      >
                        <svg
                          className="w-8 h-8 mr-2"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M17.6 6.32C16.12 4.82 14.12 4 12 4C7.72 4 4.23 7.5 4.23 11.78C4.23 13.38 4.68 14.94 5.5 16.29L4.14 20L7.93 18.68C9.25 19.42 10.63 19.8 12.02 19.8H12.03C16.31 19.8 19.78 16.3 19.78 12.02C19.78 9.88 18.98 7.9 17.6 6.32ZM12 18.28C10.78 18.28 9.58 17.92 8.56 17.26L8.28 17.09L5.94 17.87L6.73 15.61L6.54 15.31C5.81 14.24 5.42 12.94 5.42 11.78C5.42 8.25 8.35 5.32 12 5.32C13.78 5.32 15.44 6.02 16.7 7.28C17.96 8.54 18.6 10.2 18.6 12C18.6 15.53 15.55 18.28 12 18.28ZM15.83 13.36C15.64 13.27 14.56 12.73 14.38 12.68C14.21 12.63 14.08 12.6 13.94 12.79C13.81 12.98 13.37 13.47 13.26 13.61C13.15 13.74 13.04 13.76 12.85 13.67C12.66 13.58 11.94 13.35 11.1 12.59C10.44 11.99 10.01 11.26 9.9 11.06C9.78 10.87 9.88 10.76 9.98 10.66C10.07 10.57 10.18 10.43 10.28 10.32C10.38 10.21 10.41 10.13 10.45 10C10.5 9.87 10.47 9.76 10.43 9.67C10.4 9.58 9.96 8.49 9.81 8.1C9.66 7.73 9.51 7.77 9.39 7.77C9.28 7.76 9.15 7.76 9.01 7.76C8.88 7.76 8.67 7.8 8.5 7.99C8.32 8.18 7.74 8.72 7.74 9.81C7.74 10.9 8.51 11.95 8.61 12.08C8.71 12.21 9.94 14.12 11.85 14.96C13.77 15.8 13.77 15.53 14.12 15.5C14.47 15.46 15.37 14.97 15.52 14.52C15.67 14.06 15.67 13.67 15.64 13.61C15.6 13.54 15.47 13.51 15.28 13.42L15.83 13.36Z" />
                        </svg>
                        WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tour details */}
            <div className="p-6 mt-10 bg-white rounded-lg shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-gray-800">
                {newtourpackages[activeTab].category} Details
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-700">
                    Package Includes
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Accommodation: {newtourpackages[activeTab].accommodation}
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Transportation: Air-conditioned vehicle
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Group Size: {newtourpackages[activeTab].groupSize}
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-700">
                    Popular Attractions
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Kalam Valley
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Mahodand Lake
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Malam Jabba Ski Resort
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="p-8 mt-10 text-center rounded-lg shadow-md bg-gradient-to-r from-slate-500 to-slate-800">
              <h2 className="mb-4 text-2xl font-bold text-white">
                Ready for an Unforgettable Adventure?
              </h2>
              <p className="max-w-xl mx-auto mb-6 text-lg text-white">
                Book your Swat Valley tour today and experience the breathtaking
                beauty of Pakistan's northern paradise.
              </p>
              <button
                onClick={() => {
                  // Create a general inquiry message
                  const message =
                    "Hello! I'm interested in booking a Swat Valley tour package. Could you please share more information?";
                  window.open(
                    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      message
                    )}`,
                    "_blank"
                  );
                }}
                className="flex items-center px-8 py-3 mx-auto text-2xl font-bold text-green-700 transition-colors duration-200 bg-white rounded-lg shadow-lg hover:bg-green-50"
              >
                <svg
                  className="w-12 h-12 mr-2 "
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.6 6.32C16.12 4.82 14.12 4 12 4C7.72 4 4.23 7.5 4.23 11.78C4.23 13.38 4.68 14.94 5.5 16.29L4.14 20L7.93 18.68C9.25 19.42 10.63 19.8 12.02 19.8H12.03C16.31 19.8 19.78 16.3 19.78 12.02C19.78 9.88 18.98 7.9 17.6 6.32ZM12 18.28C10.78 18.28 9.58 17.92 8.56 17.26L8.28 17.09L5.94 17.87L6.73 15.61L6.54 15.31C5.81 14.24 5.42 12.94 5.42 11.78C5.42 8.25 8.35 5.32 12 5.32C13.78 5.32 15.44 6.02 16.7 7.28C17.96 8.54 18.6 10.2 18.6 12C18.6 15.53 15.55 18.28 12 18.28ZM15.83 13.36C15.64 13.27 14.56 12.73 14.38 12.68C14.21 12.63 14.08 12.6 13.94 12.79C13.81 12.98 13.37 13.47 13.26 13.61C13.15 13.74 13.04 13.76 12.85 13.67C12.66 13.58 11.94 13.35 11.1 12.59C10.44 11.99 10.01 11.26 9.9 11.06C9.78 10.87 9.88 10.76 9.98 10.66C10.07 10.57 10.18 10.43 10.28 10.32C10.38 10.21 10.41 10.13 10.45 10C10.5 9.87 10.47 9.76 10.43 9.67C10.4 9.58 9.96 8.49 9.81 8.1C9.66 7.73 9.51 7.77 9.39 7.77C9.28 7.76 9.15 7.76 9.01 7.76C8.88 7.76 8.67 7.8 8.5 7.99C8.32 8.18 7.74 8.72 7.74 9.81C7.74 10.9 8.51 11.95 8.61 12.08C8.71 12.21 9.94 14.12 11.85 14.96C13.77 15.8 13.77 15.53 14.12 15.5C14.47 15.46 15.37 14.97 15.52 14.52C15.67 14.06 15.67 13.67 15.64 13.61C15.6 13.54 15.47 13.51 15.28 13.42L15.83 13.36Z" />
                </svg>
                WhatsApp
              </button>
            </div>
          </div>
        </div>

        {modalState && (
          <SwatToursModal
            isOpen={modalState}
            onClose={() => setModalState(false)}
            packageDetails={selectedPackage}
          />
        )}
      </div>
    </>
  );
};

export default SwatTours;
