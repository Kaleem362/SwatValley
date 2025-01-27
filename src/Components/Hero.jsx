import React from "react";
import car from "../assets/icons-asset/yellowcar.png";
import thumbnail from "../assets/PackagesImages/thumbnail.jpg";
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
      <div className="flex flex-col w-full h-auto gap-2 my-2 lg:flex-row lg:items-start lg:justify-between">
        <p className="flex justify-start  items-start text-slate-500 flex-start font-manrope text-sm sm:text-md md:text-lg lg:text-lg xl:text-xl lg:w-[50%] animate-fadeInFromLeft ">
          Escape to the stunning Swat Valley with our meticulously crafted,
          all-inclusive tour packages. Immerse yourself in the natural beauty of
          this picturesque region, where lush green valleys meet towering
          mountains. Whether you crave thrilling adventures, cultural
          experiences, or peaceful relaxation, our packages cater to your every
          desire. Indulge in luxurious accommodations amidst breathtaking
          scenery, ensuring a perfect blend of comfort and immersion in nature.
          With seamless transportation and flexible durations, enjoy hassle-free
          travel tailored to your schedule. From cozy hotel stays with modern
          amenities to personalized itineraries showcasing the best of Swat
          Valley, every detail is planned to make your trip unforgettable. Let
          us handle the logistics while you focus on creating cherished memories
          in one of Pakistan's most captivating destinations. Your adventure
          awaits—book your Swat Valley tour today!
        </p>
        <img
          src={thumbnail}
          alt=""
          className="h-auto  xs:w-full sm:w-full md:w-full lg:w-[700px] rounded-lg sm:h-auto xs:h-auto "
        />
      </div>
      <div className="flex items-center justify-between w-full gap-4 mt-4 xs:w-fit md:w-fit lg:w-fit button animate-fadeInFromBottom">
        <p className="text-lg text-slate-900 font-Manrope xs:text-sm sm:text-md md:text-md md:font-bold lg:text-xl xl:text-2xl">
          Start Your Journey
        </p>
        <Link to={"/tourpackages"}>
          <button className="relative flex items-center px-4 py-2 overflow-hidden font-medium transition-all rounded-md bg-slate-800 group ">
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out rounded bg-slate-400 group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out rotate-180 rounded bg-slate-400 group-hover:-ml-4 group-hover:-mb-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full rounded-md bg-slate-600 group-hover:translate-x-0"></span>
            <span className="relative w-full text-xs text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white md:text-lg xs:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
              Explore Packages
            </span>
          </button>
        </Link>
        <Link to={"/contact"}>
          <div className="relative overflow-x-visible text-center cursor-pointer w-14 h-14 overflow-y-clip group">
            <div className="flex justify-center items-center w-14 h-14 rounded-full bg-slate-900 transition-all duration-300 absolute top-0 group-hover:scale-[.60] group-hover:origin-top text-white">
              <img src={car} alt="Car" className="w-10 h-10" />
            </div>
            <div className="absolute text-sm font-bold text-center text-black transition-all duration-300 transform -translate-x-1/2 group-hover:text-slate-700 -bottom-10 left-1/2 whitespace-nowrap group-hover:bottom-0">
              Book Now
            </div>
          </div>
        </Link>
      </div>
      <hr className="w-full mt-10" />
    </div>
  );
};

export default Hero;
