import React from "react";
import car from "../assets/icons-asset/yellowcar.png";
import hotel from "../assets/icons-asset/5starthotel.png";
import destination from "../assets/icons-asset/mountainsun.png";
import { Link } from "react-router";
const Hero = () => {
  return (
    <div className="relative flex flex-col items-start justify-start h-auto p-10 tracking-tighter transition-all duration-200 bg-green-100">
      <div className="flex header">
        <h1 className="w-full mb-2 text-4xl font-bold text-slate-800 text-start xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope">
          Welcome to Swat Tours
        </h1>
      </div>
      <h4 className="xs:text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-slate-600">
        Discover Nature’s Paradise!
      </h4>
      <div className="flex flex-col w-full gap-10 my-2 lg:flex-row lg:items-start lg:justify-between">
        <p className="flex justify-start  items-start text-slate-500 flex-start font-manrope text-sm sm:text-md md:text-lg lg:text-lg xl:text-xl lg:w-[50%]">
          Plan your dream escape to Swat Valley with our all-inclusive tour
          packages. Explore breathtaking landscapes, from lush green valleys to
          majestic mountains, while enjoying luxurious accommodations and
          seamless transportation. Whether you're seeking thrilling adventures,
          cultural experiences, or peaceful retreats, we’ve got you covered. Our
          packages include cozy hotel stays, comfortable travel, and flexible
          durations to suit your needs. Leave the planning to us and focus on
          creating unforgettable memories in one of Pakistan’s most beautiful
          destinations. Your adventure begins here—book your Swat Valley tour
          today!
        </p>
        <ul className="w-full h-auto lg:items-start  rounded shadow-xl lg:w-[50%] lg:flex  lg:justify-center lg:p-4 lg:gap-8 transition-all duration-200 hover:scale-105 hover:shadow-slate-800 lg:flex-col">
          <li className="flex items-center w-full gap-2 p-2 text-lg border-b-2 sm:text-lg md:text-lg lg:text-2xl xl:text-3xl border-slate-300">
            <img
              src={destination}
              alt="Explore Destinations"
              className="w-8 h-8"
            />
            Explore Top Destinations
          </li>
          <li className="flex items-center w-full gap-2 p-2 text-lg border-b-2 border-slate-300 sm:text-lg md:text-lg lg:text-2xl xl:text-3xl">
            <img src={hotel} alt="Stay in Hotels" className="w-8 h-8" />
            Stay in Cozy Hotels
          </li>
          <li className="flex items-center w-full gap-2 p-2 text-lg border-b-2 border-slate-300 sm:text-lg md:text-lg lg:text-2xl xl:text-3xl">
            <img src={car} alt="Travel Comfortably" className="w-8 h-8" />
            Travel Comfortably
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between w-full gap-4 mt-4 xs:w-full md:w-fit lg:w-fit button">
        <p className="text-lg text-slate-900 font-Manrope">
          Start Your Journey
        </p>
        <button class="relative flex items-center  xs:px-6 xs:py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group">
          <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
            <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
          <span class="relative w-full  text-white transition-colors duration-200 ease-in-out text-center group-hover:text-white">
            <Link to={"/packages"}>Explore Packages</Link>
          </span>
        </button>
        <div class="overflow-x-visible relative w-14 h-14 overflow-y-clip group text-center">
          <div class="flex justify-center items-center w-14 h-14 rounded-full bg-slate-900 transition-all duration-300 absolute top-0 group-hover:scale-[.60] group-hover:origin-top text-white">
            <img src={car} alt="Car" className="w-10 h-10" />
          </div>
          <div class="absolute  font-bold -bottom-10 left-1/2 text-sm text-center text-black whitespace-nowrap transition-all duration-300 transform -translate-x-1/2 group-hover:bottom-0">
            Book Now
          </div>
        </div>
        {/* <Link
          to="/packages"
          className="px-4 font-bold bg-green-300 rounded-full text-slate-900 md:px-6 md:py-4 btn hover:bg-slate-700 hover:text-white font-Manrope"
        >
          Explore packages
        </Link> */}
      </div>
    </div>
  );
};

export default Hero;
