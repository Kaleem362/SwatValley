import React from "react";
import vehicle from "../assets/Valley images/carcamping.jpg";
import CozyHotels from "../assets/Valley images/PC hotel malamjabba.jpg";
import Travel from "../assets/Valley images/travel.jpg";
import guide from "../assets/images/guide.jpg";
import ContactButton from "../Components/ContactButton";
import { Link } from "react-router";
import whatsappIcon from "../assets/icons-asset/whatsapp (1).png";
const Services = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full h-auto gap-4 px-3 py-10 xs:px-3 sm:px-4 md:px-6 lg:px-8 animate-fadeIn">
      <h1 className="w-full mb-2 text-4xl font-bold text-slate-800 text-start xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
        Services We offer
      </h1>
      <div className="flex flex-wrap justify-center w-full gap-6 xs:p-2 sm:p-4 card-container animate-fadeInFromTop">
        {/* card */}
        <div className="h-auto transition-all duration-300 bg-white border-2 rounded-lg shadow sm:w-64 xs border-slate-300 lg:hover:scale-105 animate-fadeInFromLeft">
          <img
            className="object-cover w-full h-auto rounded-t-lg"
            src={vehicle}
            alt=""
          />

          <div className="px-4 py-2 ">
            <h5 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl md:text-2xl">
              4x4 Off-Road Adventure
            </h5>

            <p className="mb-4 text-sm font-normal text-gray-700 sm:text-base md:text-lg">
              We provide 4x4 vehicles for a comfortable ride both off-road and
              on-road. Your safety is our priority.
            </p>
          </div>
        </div>
        {/* card */}
        <div className="h-auto transition-all duration-300 bg-white border-2 rounded-lg shadow sm:w-64 xs border-slate-300 lg:hover:scale-105">
          <img
            className="object-cover w-full h-auto rounded-t-lg"
            src={CozyHotels}
            alt=""
          />

          <div className="px-4 py-2 ">
            <h5 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl md:text-2xl">
              Cozy Hotels
            </h5>

            <p className="mb-4 text-sm font-normal text-gray-700 sm:text-base md:text-lg">
              Enjoy comfort and luxury in our cozy hotels with exceptional
              service and serene locations, our hotel provides top-notch
              amenities.
            </p>
          </div>
        </div>
        {/* card */}
        <div className="h-auto transition-all duration-300 bg-white border-2 rounded-lg shadow sm:w-64 xs border-slate-300 lg:hover:scale-105">
          <img
            className="object-cover w-full h-auto rounded-t-lg"
            src={Travel}
            alt=""
          />

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
        <div className="h-auto transition-all duration-300 bg-white border-2 rounded-lg shadow sm:w-64 xs border-slate-300 lg:hover:scale-105 animate-fadeInFromRight">
          <img
            className="object-cover w-full h-auto rounded-t-lg"
            src={guide}
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
      <div className="why-choose-us">
        <h1 className="w-full mb-2 text-4xl font-bold text-slate-800 text-start xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
          Why Choose us?
        </h1>
        <div className="p-4 my-4 bg-white rounded-lg shadow-lg xs:text-md sm:text-lg lg:text-xl xs:w-full sm:w-full md:w-full lg:w-full text-slate-500 animate-fadeInFromLeft">
          At <b>The Swat Tours</b>, we strive to make your travel experience
          seamless, comfortable, and memorable. Here’s why we stand out:
          <br />
          <ul className="bg-white">
            <li className="p-1 my-1 list-disc sm:ml-10 bg-slate-100 animate-fadeInFromRight">
              <b>Expert Tour Guides:</b>
              Our professional guides are well-versed in local history, culture,
              and attractions, ensuring an informative and enriching journey
              through Swat Valley.
            </li>
            <li className="p-1 my-1 list-disc sm:ml-10 bg-slate-100 animate-fadeInFromLeft">
              <b>Reliable Tour Vehicles:</b>We provide well-maintained vehicles,
              including 4x4 options for off-road adventures, ensuring a smooth
              ride across all terrains.
            </li>
            <li className="p-1 my-1 list-disc sm:ml-10 bg-slate-100 animate-fadeInFromRight">
              <b>Comprehensive Packages</b>From car fuel and parking charges to
              accommodation in cozy, well-equipped hotels, we cover all
              tour-related expenses so you can focus on enjoying the journey.
            </li>
            <li className="p-1 my-1 list-disc sm:ml-10 bg-slate-100 animate-fadeInFromLeft">
              <b>Tailored Services:</b>Whether it’s exploring scenic routes,
              visiting historical landmarks, or trekking through nature, we
              cater to your preferences to deliver a personalized travel
              experience.
            </li>
            <li className="p-1 my-1 list-disc sm:ml-10 bg-slate-100 animate-fadeInFromRight">
              <b>Hassle-Free Planning:</b>Leave the details to us! We manage
              logistics, so you can immerse yourself in the breathtaking beauty
              of Swat Valley without any worries.
            </li>
          </ul>
          Choose <b>The Swat Tours</b> for a stress-free and unforgettable tour,
          where every detail is taken care of with care and expertise. Let’s
          make your travel dreams a reality!
        </div>
      </div>
      {/* Rent a car Division */}
      <div className="w-full Car-service">
        <div className="flex w-full h-auto header">
          <h1 className="w-full mb-2 text-3xl font-extrabold text-slate-800 text-start xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft ">
            Rent a Car
          </h1>
          <div className="flex items-center justify-end w-auto gap-2 animate-fadeInFromRight">
            <a href="https://wa.me/923489857193">
              <img
                src={whatsappIcon}
                alt="WhatsApp Icon"
                className="w-[10%] max-w-24 min-w-12 h-auto animate-fadeInFromRight"
              />
            </a>
            <Link to={"/contactPage"}>
              <ContactButton />
            </Link>
          </div>
        </div>
        <div className="p-1 overflow-x-auto sm:p-4">
          <table className="min-w-full text-center border border-collapse rounded-lg table-auto bg-slate-900 text-slate-100 border-slate-700">
            <thead>
              <tr>
                <th className="px-1 py-2 text-center border-2 sm:px-6 sm:py-3 border-slate-700 xs:text-sm sm:text-lg">
                  Cars for Rent
                </th>
                <th className="px-1 py-2 text-center border-2 sm:px-6 sm:py-3 border-slate-700 xs:text-sm sm:text-lg">
                  Hotel Accommodations
                </th>
                <th className="px-1 py-2 text-center border-2 sm:px-6 sm:py-3 border-slate-700 xs:text-sm sm:text-lg">
                  Taxi Pick and Drop Service
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-1 py-2 border-2 sm:px-6 sm:py-4 border-slate-700 xs:text-sm sm:text-lg">
                  Prado Jeep
                </td>
                <td className="px-1 py-2 border-2 sm:px-6 sm:py-4 border-slate-700 xs:text-sm sm:text-lg">
                  Executive Room
                </td>
                <td className="px-1 py-2 border-2 sm:px-6 sm:py-4 border-slate-700 xs:text-sm sm:text-lg">
                  VIP Taxi
                </td>
              </tr>
              <tr>
                <td className="px-1 py-2 border-2 sm:px-6 sm:py-4 border-slate-700 xs:text-sm sm:text-lg">
                  Car Corolla or Prius
                </td>
                <td className="px-1 py-2 border-2 sm:px-6 sm:py-4 border-slate-700 xs:text-sm sm:text-lg">
                  Deluxe Room
                </td>
                <td className="px-1 py-2 border-2 sm:px-6 sm:py-4 border-slate-700 xs:text-sm sm:text-lg">
                  Simple Taxi
                </td>
              </tr>
              <tr>
                <td className="px-1 py-2 border-2 sm:px-6 sm:py-4 border-slate-700 xs:text-sm sm:text-lg">
                  APV or BRV (Seven Seater)
                </td>
                <td className="py-2 border-2 border-slate-700 px-auto sm:px-6 sm:py-4 xs:text-sm sm:text-lg">
                  Economic Room
                </td>
                <td className="px-1 py-2 border-2 sm:px-6 sm:py-4 border-slate-700 xs:text-sm sm:text-lg">
                  —
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="whyChooseSwat">
        <h1 className="w-full mb-2 text-4xl font-bold text-slate-800 text-start xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
          Why Visit Swat Valley?
        </h1>
        <p className="p-4 my-4 xs:text-md sm:text-lg lg:text-xl  bg-white rounded-lg shadow-lg  xs:w-full sm:w-[520px] md:w-[600px] lg:w-[700px] text-slate-500 animate-fadeInFromLeft">
          <b>Swat Valley,</b> the Switzerland of the East! Whether you're
          seeking adventure, relaxation, or a mix of both, our tour services are
          designed to provide an unforgettable experience. From serene valleys
          and majestic peaks to luxurious accommodations and hassle-free travel,
          we ensure your trip is seamless and extraordinary.
        </p>
        <p className="p-4 my-4 bg-white rounded-lg shadow-lg xs:text-md sm:text-lg lg:text-xl xs:w-full sm:w-full md:w-full lg:w-full text-slate-500 animate-fadeInFromRight">
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
        <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md xs:px-6 xs:py-3 group animate-fadeInFromBottom">
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out rotate-180 bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
          <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            <Link to={"/gallery"}>Image Gallery</Link>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Services;
