import React from "react";
import car from "../assets/icons-asset/yellowcar.png";
import hotel from "../assets/icons-asset/5starthotel.png";
import destination from "../assets/icons-asset/mountainsun.png";
const Hero = () => {
  return (
    <div className="relative flex flex-col items-start justify-start h-screen p-10 tracking-tighter bg-green-100">
      <div className="flex header">
        <h1 className="w-full mb-2 text-4xl font-bold text-slate-800 text-start xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope">
          Welcome to Swat Tours
        </h1>
      </div>
      <h4 className="xs:text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-slate-600">
        Discover Nature’s Paradise!
      </h4>
      <div className="w-full text-content lg:flex lg:w-full lg:gap-10 xs:flex-col xs:gap-10 sm:flex-col sm:gap-10 md:flex-col md:gap-10 ">
        <p className="text-slate-500 font-manrope xs:text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
          Plan your perfect getaway to Swat Valley with our all-inclusive tour
          packages. From scenic drives and luxurious stays to unforgettable
          adventures, we’ve got you covered.
        </p>
        <ul className="hover: lg:w-[50%] h-auto rounded shadow-xl shadow-slate-800  border-2 border-slate-300 lg:w-full lg:flex lg:p-4 lg:justify-center  hover:scale-105 transition-all duration-200 lg:items-center  lg:gap-8 xs:w-full xs:p-2 w-full">
          <li className="flex items-center justify-start gap-2 p-2 text-2xl xs:text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-3xl">
            <img src={destination} alt="" className="w-8 h-8" />
            Explore Top Destinations
          </li>
          <li className="flex items-center justify-start gap-2 p-2 text-2xl xs:text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-3xl">
            <img src={hotel} alt="" className="w-8 h-8" />
            Stay in Cozy Hotels
          </li>
          <li className="flex items-center justify-start gap-2 p-2 text-2xl xs:text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-3xl">
            <img src={car} alt="" className="w-8 h-8" />
            Travel Comfortably
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
