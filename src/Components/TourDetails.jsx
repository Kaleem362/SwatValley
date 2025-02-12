import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { store } from "../assets/Store/Context";
import email from "../assets/icons-asset/gmail.png";
import BookingModal from "./BookingModal";
import { Helmet } from "react-helmet-async";

const TourDetails = () => {
  const { id } = useParams();
  const { toursPackage } = useContext(store);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedPackage = toursPackage.find((pkg) => pkg.id === parseInt(id));

  if (!selectedPackage) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-xl font-extrabold text-slate-800">
          Failed to load the tour details. Please try again later.
        </h1>
      </div>
    );
  }
  const handleBookNow = () => {
    setIsModalOpen(true);
  };

  const handleConfirmBooking = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Swat Tours - Tour Detail Page</title>
        <meta
          name="description"
          content="Swat Tours offers a variety of tour packages to explore the beauty of Swat Valley and its surroundings."
        />
        <link
          rel="canonical"
          href="https://theswattours.com/tourdetails/tour/:id"
        />
      </Helmet>
      <div className="flex flex-col w-full bg-gray-100 ">
        <div className="w-full mx-auto bg-white shadow-lg">
          <div className="relative">
            <img
              src={selectedPackage.coverImage || "defaultImage.jpg"} // Fallback for missing image
              alt={selectedPackage.destination || "Unknown Destination"}
              className="relative object-cover w-full h-64 sm:h-72"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 bg-opacity-50 bg-gradient-to-t from-black to-transparent">
              <h1 className="text-xl font-bold text-center text-white uppercase xs:text-2xl sm:text-lg md:text-3xl lg:text-5xl">
                {selectedPackage.packageName}
                <br />
              </h1>
              <p className=" text-2xl font-semibold tracking-widest text-white word-spacing-[20px] mt-4">
                {selectedPackage.tourPoints ? selectedPackage.tourPoints : ""}
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full xs:flex-col md:flex-row tourdetailsinformationdiv">
            <div className="p-6 w-full md:w-[70%]">
              <h1 className="min-w-full mb-2 text-xl font-extrabold text-gray-800 uppercase xs:text-xl sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl ">
                {selectedPackage.packageName || "-"}
              </h1>

              <h1 className="text-xl font-bold text-gray-700 xs:text-sm sm:text-md md:text-xl lg:text-2xl xl:text-2xl">
                Tour Destinations :{" "}
                <span className="font-normal">
                  {selectedPackage.destinations?.join(" - ") ||
                    "No Destinations"}
                </span>
              </h1>

              <div className="my-2 packageduration">
                <p className="text-xl font-bold text-gray-700 xs:text-sm sm:text-md md:text-xl lg:text-2xl xl:text-2xl">
                  Tour Duration:
                  <span className="font-normal">
                    {" "}
                    {selectedPackage?.duration || "-"}
                  </span>
                </p>
              </div>

              <div className="my-2 package-type">
                <h2 className="text-xl font-bold text-gray-700 xs:text-sm sm:text-md md:text-xl lg:text-2xl xl:text-2xl">
                  Package Price:
                  {typeof selectedPackage.packagePrices === "object" ? (
                    <>
                      {selectedPackage.packagePrices?.for1Couple && (
                        <span className="font-normal">
                          One Couple -{" "}
                          <span className="font-bold">
                            {selectedPackage.packagePrices.for1Couple}
                          </span>
                        </span>
                      )}
                      {selectedPackage.packagePrices?.for2Couples && (
                        <span className="font-normal">
                          Two Couples -{" "}
                          <span className="font-bold">
                            {selectedPackage.packagePrices.for2Couples}
                          </span>
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="font-normal">
                      <span className="font-bold">
                        {selectedPackage.packagePrices || "-"}
                      </span>
                    </span>
                  )}
                </h2>
              </div>

              {selectedPackage?.packageType && (
                <div className="my-2 package-type">
                  <h2 className="text-xl font-bold text-gray-700 xs:text-sm sm:text-md md:text-xl lg:text-2xl xl:text-2xl">
                    Package Type:
                    <span className="font-normal">
                      {" "}
                      {selectedPackage.packageType}
                    </span>
                  </h2>
                </div>
              )}

              {selectedPackage.accommodation && (
                <div className="my-2 accomodation">
                  <h2 className="text-xl font-bold text-gray-700 xs:text-sm sm:text-md md:text-xl lg:text-2xl xl:text-2xl">
                    Accommodation Type:{" "}
                    <span className="font-normal">
                      {selectedPackage.accommodation?.type || "-"}
                    </span>
                  </h2>
                  <ul className="my-2 text-xl font-bold text-gray-700 accomodation-hotels xs:text-sm sm:text-md md:text-xl lg:text-2xl xl:text-2xl">
                    {selectedPackage.accommodation?.hotels?.length > 0
                      ? selectedPackage.accommodation.hotels.map(
                          (hotel, index) => (
                            <li key={index} className="text-xl font-normal">
                              {" - "} {hotel}
                            </li>
                          )
                        )
                      : ""}
                  </ul>
                </div>
              )}

              {selectedPackage.transportation && (
                <div className="my-2 Transporation">
                  <h2 className="text-xl font-bold text-gray-700 xs:text-sm sm:text-md md:text-xl lg:text-2xl xl:text-2xl">
                    Transportation:{" "}
                    <span className="font-normal">
                      {selectedPackage.transportation?.options?.join(", ") ||
                        "-"}
                    </span>
                  </h2>
                </div>
              )}

              {Array.isArray(selectedPackage.itinerary) &&
              selectedPackage.itinerary.length > 0
                ? selectedPackage.itinerary.map((day, index) => (
                    <div
                      key={index}
                      className="w-full py-6 itinerary-container"
                    >
                      <div className="p-2 text-slate-900 font-Manrope bg-slate-300 days card">
                        <h1 className="text-xl font-bold xs:text-sm sm:text-md md:text-xl lg:text-2xl xl:text-2xl font-Manrope">
                          {day.title || `Day ${index + 1}`}
                        </h1>
                        <p className="float-right text-2xl font-extrabold">
                          Day:{day.day || "-"}
                        </p>
                        <div>
                          {Array.isArray(day.activities) &&
                            day.activities.map((activity, idx) => (
                              <div
                                key={idx}
                                className="text-sm xs:text- ssmm:text-md md:text-lg lg:text-xl"
                              >
                                {activity}
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  ))
                : ""}
              <h1 className="my-2 text-2xl font-extrabold text-slate-800 font-Manrope">
                Book Your Tour Now
              </h1>
              <div className="flex justify-start">
                <button
                  className="flex items-center justify-center px-4 py-2 mx-1 font-semibold text-white transition-all duration-300 rounded-full bg-slate-800 xs:px-auto xs:py-1 sm:px-auto sm:py- md:px-auto md:py-2 lg:px-auto lg:py-3 xl:px-auto xl:py-3 "
                  onClick={handleBookNow}
                >
                  Book Now
                </button>

                <a
                  href="https://wa.me/923489857193"
                  className="flex items-center justify-center px-4 py-2 mx-1 font-semibold text-white transition-all duration-300 bg-green-600 rounded-full xs:px-3 xs:py-1 sm:px-4 sm:py-2 md:px-5 md:py-2 lg:px-6 lg:py-2 xl:px-6 xl:py-2 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-800 hover:text-black"
                >
                  Whatsapp
                </a>
                <a
                  href={`mailto:fawadkhan1930@gmail.com?subject=Booking Inquiry: ${encodeURIComponent(
                    selectedPackage.packageName
                  )}&body=Hello! We want to book the tour ${encodeURIComponent(
                    selectedPackage.packageName
                  )} for the destination of ${encodeURIComponent(
                    selectedPackage.destinations
                  )} Can you provide more information?`}
                  className="flex items-center justify-center px-4 py-2 mx-1 font-semibold text-white transition-all duration-300 border-2 border-white rounded-full bg-slate-800 xs:px-3 xs:py-1 sm:px-4 sm:py-2 md:px-5 md:py-2 lg:px-6 lg:py-2 xl:px-6 xl:py-2 hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-500 hover:border-slate-900 group"
                >
                  Send Email
                  <img
                    src={email}
                    className="w-4 h-4 ml-2 transition-transform duration-300 xs:w-5 xs:h-5 group-hover:scale-125 group-hover:rotate-6"
                    alt="Email Icon"
                  />
                </a>
              </div>
            </div>

            <div className="bg-white sidebar w-full xs:w-full sm:w-full md:w-[30%]  lg:w-[30%] border-2 border-slate-200 p-3 rounded-lg">
              <h3 className="min-w-full mb-2 text-xl font-extrabold text-center text-gray-800 uppercase xs:text-xl sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl">
                Tour Inclusive
              </h3>
              <ul className="flex flex-col w-full gap-1">
                {selectedPackage.packageIncludes?.length > 0 ? (
                  selectedPackage.packageIncludes.map((include, index) => (
                    <li
                      key={index}
                      className="p-1 rounded bg-slate-100 xs:text-sm sm:text-md md:text-lg lg:text-xl"
                    >
                      {include}
                    </li>
                  ))
                ) : (
                  <li className="bg-slate-300 xs:text-sm sm:text-md md:text-lg lg:text-xl">
                    No inclusions available
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <BookingModal
        isOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmBooking}
        tourDetails={{
          packageName: selectedPackage.packageName,
          destination: selectedPackage.destinations?.join(" - "),
          duration: selectedPackage.duration,
          price: selectedPackage.packagePrices,
          accommodation: selectedPackage.accommodation?.type,
          transportation: selectedPackage.transportation?.options?.join(", "),
        }}
      />
      ;
    </>
  );
};

export default TourDetails;
