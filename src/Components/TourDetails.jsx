import React, { useContext } from "react";
import { useParams } from "react-router";
import { store } from "../assets/Store/Context";

const TourDetails = () => {
  const { id } = useParams();
  const { toursPackage } = useContext(store);

  // Find the selected package based on id
  const selectedPackage = toursPackage.find((pkg) => pkg.id === parseInt(id));

  if (!selectedPackage) {
    // Display an error message if the package is not found
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-xl font-extrabold text-slate-800">
          Failed to load the tour details. Please try again later.
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full bg-gray-100">
      <div className="w-full mx-auto bg-white shadow-lg">
        {/* Image and Title */}
        <div className="relative">
          <img
            src={selectedPackage.coverImage || "defaultImage.jpg"} // Fallback for missing image
            alt={selectedPackage.destination || "Unknown Destination"}
            className="relative object-cover w-full h-64 sm:h-72"
          />
          <div className="absolute inset-0 flex items-end justify-center pb-4 bg-opacity-50 bg-gradient-to-t from-black to-transparent">
            <h1 className="text-xl font-bold text-center text-white uppercase xs:text-2xl sm:text-lg md:text-3xl lg:text-5xl">
              Tour to
              <br />
              {selectedPackage.destinations?.join(" - ") || "No Destinations"}
            </h1>
          </div>
        </div>

        {/* Package Information */}
        <div className="flex flex-col w-full xs:flex-col md:flex-row tourdetailsinformationdiv">
          <div className="p-6 w-full md:w-[70%]">
            <h1 className="min-w-full mb-2 text-xl font-extrabold text-gray-800 uppercase xs:text-xl sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl ">
              {selectedPackage.packageName || "-"}
            </h1>
            {/* tour destination */}

            <h1 className="text-xl font-bold text-gray-700 xs:text-sm sm:text-md md:text-xl lg:text-2xl xl:text-2xl">
              Tour Destinations :{" "}
              <span className="font-normal">
                {selectedPackage.destinations?.join(" - ") || "No Destinations"}
              </span>
            </h1>

            {/* Tour Duration */}
            <div className="my-2 packageduration">
              <p className="text-xl font-bold text-gray-700 xs:text-sm sm:text-md md:text-xl lg:text-2xl xl:text-2xl">
                Tour Duration:
                <span className="font-normal">
                  {" "}
                  {selectedPackage?.duration || "-"}
                </span>
              </p>
            </div>

            {/* Package Price */}
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

            {/* package Type */}

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

            {/* Accommodation Details */}
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

            {/* Transportation Details */}
            {selectedPackage.transportation && (
              <div className="my-2 Transporation">
                <h2 className="text-xl font-bold text-gray-700 xs:text-sm sm:text-md md:text-xl lg:text-2xl xl:text-2xl">
                  Transportation:{" "}
                  <span className="ml-1 text-xl font-normal">
                    {selectedPackage.transportation?.options?.join(", ") || "-"}
                  </span>
                </h2>
              </div>
            )}

            {/* Itinerary */}
            {Array.isArray(selectedPackage.itinerary) &&
            selectedPackage.itinerary.length > 0
              ? selectedPackage.itinerary.map((day, index) => (
                  <div key={index} className="w-full py-6 itinerary-container">
                    <div className="p-2 text-white bg-black days card">
                      <h1 className="text-xl font-bold text-gray-700 xs:text-sm sm:text-md md:text-xl lg:text-2xl xl:text-2xl">
                        {day.title || `Day ${index + 1}`}
                      </h1>
                      <p>Day:{day.day || "-"}</p>
                      <div>
                        {Array.isArray(day.activities) &&
                          day.activities.map((activity, idx) => (
                            <div key={idx}>{activity}</div>
                          ))}
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>

          {/* Sidebar: Tour Inclusive */}
          <div className="bg-white sidebar w-full xs:w-full sm:w-full md:w-[30%]  lg:w-[30%] border-2 border-slate-200 p-3 rounded-lg">
            <h3 className="min-w-full mb-2 text-xl font-extrabold text-gray-800 uppercase xs:text-xl sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl ">
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
  );
};

export default TourDetails;
