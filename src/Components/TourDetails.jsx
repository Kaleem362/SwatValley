import React, { useContext } from "react";
import { Link, useParams } from "react-router";
import { store } from "../assets/Store/Context";
import { AiOutlineWhatsApp } from "react-icons/ai";

const TourDetails = () => {
  const { id } = useParams();
  const { toursPackage } = useContext(store);
  // Find the selected package based on id
  const selectedPackage = toursPackage.find((pkg) => pkg.id === parseInt(id));

  if (!selectedPackage) {
    // Display a loading or error state
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-xl font-extrabold text-slate-800">
          Failed to load the tour details. Please try again later.
        </h1>
      </div>
    );
  }
  return (
    <div className="flex w-full bg-gray-100 ">
      <div className="w-[75%] mx-auto bg-white  shadow-lg">
        <div className="relative">
          {/* Image */}
          <img
            src={selectedPackage.coverImage}
            alt={selectedPackage.packageName}
            className="relative object-cover w-full h-64"
          />

          {/* Transparent Overlay */}
          <div className="absolute inset-0 flex items-end justify-center pb-4 bg-opacity-50 bg-gradient-to-t from-black to-transparent">
            <h1 className="font-bold text-white xs:text-sm sm:text-lg md:text-xl lg:text-4xl ">
              {selectedPackage.packageName}
            </h1>
          </div>
        </div>

        <div className="p-6">
          <h1 className="mb-2 text-3xl font-bold text-gray-800 uppercase">
            {selectedPackage.destinations.map((destination) => (
              <>
                <span>{destination}</span>
                {selectedPackage.destinations && <span> - </span>}{" "}
                {/* Add '-' as separator */}
              </>
            ))}
          </h1>
          <div className="my-2 packageduration">
            <p className="text-xl font-bold text-gray-700 ">
              Tour Duration :
              <span className="font-normal">
                {" "}
                Days {selectedPackage.duration.days}
              </span>
              <span className="font-normal">
                {" "}
                Nights {selectedPackage.duration.nights}
              </span>
            </p>
          </div>
          <div className="my-2 package-type">
            <h2 className="text-xl font-bold text-slate-700">
              package Type :{" "}
              <span className="font-normal">Executive Package</span>{" "}
            </h2>
          </div>
          <div className="my-2 package-price ">
            <h2 className="my-1 text-xl font-bold text-slate-700">
              Package Price :{" "}
              <span className="font-normal">
                One Couple -{" "}
                <span className="font-bold">
                  {selectedPackage.packagePrices.for1Couple}
                </span>{" "}
              </span>
              <span className="font-normal">
                Two Couples -{" "}
                <span className="font-bold">
                  {selectedPackage.packagePrices.for2Couples}
                </span>{" "}
              </span>
            </h2>
          </div>
          <div className="my-2 accomodation">
            <div className="flex items-center gap-2 accomodation-type">
              <h2 className="text-xl font-bold text-slate-700">
                Accommodation Type :{" "}
                <span className="font-normal">
                  {selectedPackage.accommodation.type}
                </span>
              </h2>
            </div>
            <div className="my-2 accomodation-hotels">
              <ul className="flex items-center font-bold text-slate-700">
                <h2 className="my-1 text-xl font-bold text-slate-700">
                  Hotels :{" "}
                </h2>
                {selectedPackage.accommodation.hotels.map((hotel, index) => {
                  return (
                    <li key={index} className="text-xl font-normal">
                      {" - "}
                      {hotel}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="my-2 Transporation">
              <h2 className="my-1 text-xl font-bold text-slate-700">
                Transportation :
                <span className="ml-1 text-xl font-normal">
                  {selectedPackage.transportation.options}
                </span>
              </h2>
              <p className="my-2 text-xl font-bold text-slate-700">
                Transport Details :{" "}
                <span className="font-normal">
                  {selectedPackage.transportation.details}{" "}
                </span>
                <br />
                <h2 className="my-2 text-xl font-bold text-slate-700">
                  Companies :
                  <span className="text-xl font-normal text-slate-700">
                    {" "}
                    {!selectedPackage.transportation.busTickets.companies
                      ? "loading the data..."
                      : `${selectedPackage.transportation.busTickets.companies}`}
                  </span>
                </h2>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar w-[25%] bg-white">
        <h3 className="w-full p-2 font-extrabold text-center xs:text-md sm:text-md lg:text-xl xl:text-3xl font-Manrope">
          Tour Inclusive
        </h3>
      </div>
    </div>
  );
};

export default TourDetails;
