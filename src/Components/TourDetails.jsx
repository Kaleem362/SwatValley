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
          <h1 className="mb-4 text-3xl font-bold text-gray-800">
            {selectedPackage.packageName}
          </h1>
          <p className="mb-4 text-gray-700">
            Days {selectedPackage.duration.days}
          </p>
          <p className="mb-4 text-gray-700">
            Nights {selectedPackage.duration.nights}
          </p>
          <div className="flex items-center justify-between h-10 gap-2 w-fit buttons">
            <Link className="px-4 py-2 text-white transition-all rounded-md duration-400 from-black to-slate-700 bg-gradient-to-r hover:bg-gradient-to-l hover:from-black hover:to-slate-700 font-Manrope">
              Book Now
            </Link>
            <a
              href="wa.me/923489857193"
              className="flex items-center justify-center h-full gap-2 px-2 py-2 text-white bg-green-500 rounded-md text-md w-fit"
            >
              Whatsapp us <AiOutlineWhatsApp />
            </a>
          </div>
        </div>
      </div>
      <div className="sidebar w-[25%]">
        <h3 className="w-full p-2 font-extrabold text-center xs:text-md sm:text-md lg:text-xl xl:text-3xl font-Manrope">
          Tour Inclusive
        </h3>
      </div>
    </div>
  );
};

export default TourDetails;
