import React from "react";
import car from "../assets/icons-asset/yellowcar.png";
import hotel from "../assets/icons-asset/5starthotel.png";
import destination from "../assets/icons-asset/mountainsun.png";
import { Link } from "react-router";
const Hero = () => {
  return (
    <div className="relative flex flex-col items-start justify-start h-auto px-3 py-10 tracking-tighter transition-all duration-200 xl:px-10 xs:px-3 sm:px-5 md:px-6 animate-fadeIn lg:px-8">
      <div className="flex w-full text-center header">
        <h1 className="w-full mb-2 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft ">
          Welcome to Swat Tours
        </h1>
      </div>
      <h4 className="xs:text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-slate-600 animate-fadeInFromLeft">
        Discover Nature’s Paradise!
      </h4>
      <div className="flex flex-col w-full gap-10 my-2 lg:flex-row lg:items-start lg:justify-between">
        <p className="flex justify-start  items-start text-slate-500 flex-start font-manrope text-sm sm:text-md md:text-lg lg:text-lg xl:text-xl lg:w-[50%] animate-fadeInFromLeft">
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
        <ul className="w-full h-auto lg:items-start rounded shadow-xl lg:w-[50%] lg:flex  lg:justify-center lg:p-4 lg:gap-8 transition-all mt-4 duration-200  border-2 border-slate-100 shadow-slate-800 lg:flex-col m-x-auto animate-fadeInFromRight">
          <li className="flex items-center w-full gap-2 p-2 text-lg border-b-2 rounded-lg border-slate-800 sm:text-lg md:text-lg lg:text-2xl xl:text-3xl">
            <img
              src={destination}
              alt="Explore Destinations"
              className="w-8 h-8"
            />
            Explore Top Destinations
          </li>
          <li className="flex items-center w-full gap-2 p-2 text-lg border-b-2 rounded-lg border-slate-800 sm:text-lg md:text-lg lg:text-2xl xl:text-3xl">
            <img src={hotel} alt="Stay in Hotels" className="w-8 h-8" />
            Stay in Cozy Hotels
          </li>
          <li className="flex items-center w-full gap-2 p-2 text-lg border-b-2 rounded-lg border-slate-800 sm:text-lg md:text-lg lg:text-2xl xl:text-3xl">
            <img src={car} alt="Travel Comfortably" className="w-8 h-8" />
            Travel Comfortably
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between w-full gap-4 mt-4 xs:w-fit md:w-fit lg:w-fit button animate-fadeInFromBottom">
        <p className="text-lg text-slate-900 font-Manrope xs:text-md sm:text-lg md:text-lg md:font-bold lg:text-xl xl:text-2xl">
          Start Your Journey
        </p>
        <button className="relative flex items-center px-4 py-2 overflow-hidden font-medium transition-all rounded-md bg-slate-800 xs:px-6 xs:py-3 group ">
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out rounded bg-slate-400 group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out rotate-180 rounded bg-slate-400 group-hover:-ml-4 group-hover:-mb-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full rounded-md bg-slate-600 group-hover:translate-x-0"></span>
          <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white xs:text-md sm:text-lg md:text-lg lg:text-xl xl:text-2xl">
            <Link to={"/tourpackages"}>Explore Packages</Link>
          </span>
        </button>
        <div className="relative overflow-x-visible text-center cursor-pointer w-14 h-14 overflow-y-clip group">
          <div className="flex justify-center items-center w-14 h-14 rounded-full bg-slate-900 transition-all duration-300 absolute top-0 group-hover:scale-[.60] group-hover:origin-top text-white">
            <img src={car} alt="Car" className="w-10 h-10" />
          </div>
          <div className="absolute text-sm font-bold text-center text-black transition-all duration-300 transform -translate-x-1/2 group-hover:text-slate-700 -bottom-10 left-1/2 whitespace-nowrap group-hover:bottom-0">
            Book Now
          </div>
        </div>
      </div>
      <hr className="w-full mt-10" />
    </div>
  );
};

export default Hero;
