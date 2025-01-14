import React from "react";
import vehicle from "../assets/Valley images/carcamping.jpg";
import CozyHotels from "../assets/Valley images/PC hotel malamjabba.jpg";
import Travel from "../assets/Valley images/travel.jpg";
import { Link } from "react-router";

const Services = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full h-auto gap-4 p-10 bg-green-400">
      <h1 className="w-full mb-2 text-4xl font-bold text-slate-800 text-start xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope">
        Services We offer
      </h1>
      <div className="flex flex-wrap justify-center w-full gap-6 xs:p-2 sm:p-4 card-container">
        {/* card */}
        <div className="h-auto bg-white border-2 rounded-lg shadow sm:w-64 xs border-slate-300">
          <Link to="#">
            <img
              className="object-cover w-full h-auto rounded-t-lg"
              src={vehicle}
              alt=""
            />
          </Link>
          <div className="px-4 py-2 ">
            <Link to="#">
              <h5 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl md:text-2xl">
                4x4 Off-Road Adventure
              </h5>
            </Link>
            <p className="mb-4 text-sm font-normal text-gray-700 sm:text-base md:text-lg">
              We provide 4x4 vehicles for a comfortable ride both off-road and
              on-road. Your safety is our priority.
            </p>
          </div>
        </div>
        {/* card */}
        <div className="h-auto bg-white border-2 rounded-lg shadow sm:w-64 xs border-slate-300">
          <Link to="#">
            <img
              className="object-cover w-full h-auto rounded-t-lg"
              src={CozyHotels}
              alt=""
            />
          </Link>
          <div className="px-4 py-2 ">
            <Link to="#">
              <h5 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl md:text-2xl">
                Cozy Hotels
              </h5>
            </Link>
            <p className="mb-4 text-sm font-normal text-gray-700 sm:text-base md:text-lg">
              Enjoy comfort and luxury in our cozy hotels with exceptional
              service and serene locations, our hotel provides top-notch
              amenities.
            </p>
          </div>
        </div>
        {/* card */}
        <div className="h-auto bg-white border-2 rounded-lg shadow sm:w-64 xs border-slate-300">
          <Link to="#">
            <img
              className="object-cover w-full h-auto rounded-t-lg"
              src={Travel}
              alt=""
            />
          </Link>
          <div className="px-4 py-2 ">
            <h5 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl md:text-2xl">
              Travel with Ease
            </h5>

            <p className="mb-4 text-sm font-normal text-gray-700 sm:text-base md:text-lg">
              Travel with ease and discover new horizons through seamless
              planning and curated experiences. Enjoy a hassle-free journey.
            </p>
          </div>
        </div>
        <div className="h-auto bg-white border-2 rounded-lg shadow sm:w-64 xs border-slate-300">
          <img
            className="object-cover w-full h-auto rounded-t-lg"
            src={vehicle}
            alt=""
          />

          <div className="px-4 py-2 ">
            <h5 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl md:text-2xl">
              Experienced Travelling Guide
            </h5>

            <p className="mb-4 text-sm font-normal text-gray-700 sm:text-base md:text-lg">
              Our guides ensure a safe, enriching journey, sharing local culture
              and history to make your trip enjoyable.
            </p>
          </div>
        </div>
      </div>
      <div className="whyChooseSwat">
        <h1 className="w-full mb-2 text-4xl font-bold text-slate-800 text-start xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope">
          Why Visit Swat Valley?
        </h1>
        <p className="p-4 my-4 xs:text-md sm:text-lg lg:text-xl  bg-white rounded-lg shadow-lg  xs:w-[400px] sm:w-[520px] md:w-[600px] lg:w-[700px] text-slate-500">
          <b>Welcome to Swat Valley,</b> the Switzerland of the East! Whether
          you're seeking adventure, relaxation, or a mix of both, our tour
          services are designed to provide an unforgettable experience. From
          serene valleys and majestic peaks to luxurious accommodations and
          hassle-free travel, we ensure your trip is seamless and extraordinary.
        </p>
        <p className="p-4 my-4 bg-white rounded-lg shadow-lg xs:text-md sm:text-lg lg:text-xl xs:w-full sm:w-full md:w-full lg:w-full text-slate-500">
          <b>Swat Valley,</b> often called the{" "}
          <strong>"Switzerland of the East,"</strong> is a breathtaking
          destination known for its majestic mountains, lush green meadows, and
          crystal-clear rivers. Whether you are a nature enthusiast, an
          adventure seeker, or a history lover, Swat Valley has something for
          everyone. Explore the enchanting beauty of Malam Jabba, a popular ski
          resort, or wander through the serene landscapes of Kalam and Mingora.
          Discover the valley's rich cultural heritage with ancient Buddhist
          sites like Butkara Stupa and Udegram Monastery. Swat offers
          unparalleled experiences, from thrilling hikes and river rafting to
          relaxing by pristine lakes like Mahodand and Daral. With its welcoming
          locals, vibrant traditions, and year-round festivals, Swat Valley is
          truly a paradise waiting to be explored. Plan your trip today and
          immerse yourself in the unmatched beauty and charm of Swat Valley!
        </p>
      </div>
    </div>
  );
};

export default Services;
