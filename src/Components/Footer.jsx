import React from "react";
import logo from "../assets/logo/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="items-center w-full p-6 xs:justify-around xs:flex xs:flex-col sm:flex sm:flex-row md:flex md:flex-row lg:flex lg:flex-row animate-fadeInFromRight bg-slate-400">
      <div className="flex items-center justify-center h-full w-fit ">
        <img
          src={logo}
          alt="Logo"
          className="w-fit xs:h-[300px] animate-fadeInFromLeft "
        />
      </div>

      <div className="flex-col items-start justify-center h-full title md:w-[410px]">
        <h1 className="w-full text-3xl font-extrabold uppercase xs:text-center sm:text-left md:text-left md:text-4xl lg:text-5xl text-slate-900 animate-fadeInFromTop">
          The Swat Tours
        </h1>
        <p className="my-2 text-slate-900 md:w-fit animate-fadeInFromBottom">
          Choose <b>The Swat Tours</b> for a stress-free and unforgettable tour,
          where every detail is taken care of with care and expertise. Let’s
          make your travel dreams a reality!
        </p>
      </div>
      <div className="flex flex-col items-start justify-center w-full h-full gap-2 border-t-2 pages-content md:w-fit animate-fadeInFromBottom border-slate-500 xs:border-none">
        <h4 className="w-full text-lg text-slate-900 hover:underline font-manrope">
          {" "}
          <Link to="/tourpackages">Tour packages</Link>
        </h4>
        <h4 className="text-lg text-slate-900 hover:underline font-manrope">
          {" "}
          <Link to="/eventsactivities">Events & Activities</Link>
        </h4>
        <h4 className="text-lg hover:underline font-manrope text-slate-900 ">
          {" "}
          <Link to="/gallery">Gallery</Link>
        </h4>
        <h4 className="text-lg hover:underline font-manrope text-slate-900 ">
          {" "}
          <Link to="/contact">Contact us</Link>
        </h4>
        <h4 className="text-lg hover:underline font-manrope text-slate-900 ">
          {" "}
          <Link to="/about">About us</Link>
        </h4>
      </div>

      <div className="flex flex-col items-start justify-center w-full gap-2 my-2 border-t-2 md:p-0 md:w-fit misc-pages text-slate-200 animate-fadeInFromTop border-slate-500 xs:border-none">
        <h4 className="text-lg hover:underline font-manrope text-slate-900 ">
          Privacy Policy
        </h4>
        <h4 className="text-lg hover:underline font-manrope text-slate-900 ">
          Terms of Service
        </h4>
        <h4 className="text-lg hover:underline font-manrope text-slate-900 ">
          FAQ
        </h4>
      </div>
    </div>
  );
};

export default Footer;
