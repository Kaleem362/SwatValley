import React from "react";
import logo from "../assets/logo/logo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="items-center w-full p-6 h-52 xs:justify-between xs:flex xs:flex-col sm:flex sm:flex-row md:flex md:flex-row lg:flex lg:flex-row animate-fadeInFromRight bg-slate-400">
      <div className="flex items-center justify-center w-auto h-full ">
        <img
          src={logo}
          alt="Logo"
          className="w-auto !h-[300px] animate-fadeInFromLeft "
        />
      </div>

      <div className="flex-col items-start justify-center h-full title md:w-96">
        <h1 className="w-full text-3xl font-extrabold text-center md:text-4xl lg:text-5xl text-slate-900 animate-fadeInFromTop">
          The Swat Tours
        </h1>
        <p className="my-2 text-slate-900 md:w-fit animate-fadeInFromBottom">
          Choose <b>The Swat Tours</b> for a stress-free and unforgettable tour,
          where every detail is taken care of with care and expertise. Let’s
          make your travel dreams a reality!
        </p>
      </div>
      <div className="flex flex-col items-start justify-center w-full h-full gap-2 pages-content md:w-fit animate-fadeInFromBottom">
        <h4 className="w-full text-lg text-slate-900 hover:underline font-manrope">
          {" "}
          <Link rel="stylesheet" to={"/tourpackages"}>
            Tour packages
          </Link>
        </h4>
        <h4 className="text-lg text-slate-900 hover:underline font-manrope">
          {" "}
          <Link rel="stylesheet" to={"/eventsactivites"}>
            Events & Activities
          </Link>
        </h4>
        <h4 className="text-lg hover:underline font-manrope text-slate-900 ">
          {" "}
          <Link rel="stylesheet" to={"/gallery"}>
            Gallery
          </Link>
        </h4>
        <h4 className="text-lg hover:underline font-manrope text-slate-900 ">
          {" "}
          <Link rel="stylesheet" to={"/contact"}>
            Contact us
          </Link>
        </h4>
        <h4 className="text-lg hover:underline font-manrope text-slate-900 ">
          {" "}
          <Link rel="stylesheet" to={"/about"}>
            About us
          </Link>
        </h4>
      </div>
      <div className="flex flex-col items-start w-full gap-2 mt-4 xs:pt-4 md:p-0 md:w-fit misc-pages text-slate-200 animate-fadeInFromTop">
        <h4 className="text-lg hover:underline font-manrope text-slate-900 ">
          <Link>Privacy Policy</Link>
        </h4>
        <h4 className="text-lg hover:underline font-manrope text-slate-900 ">
          <Link>Terms of Service</Link>
        </h4>
        <h4 className="text-lg hover:underline font-manrope text-slate-900 ">
          <Link>FAQ</Link>
        </h4>
      </div>
    </div>
  );
};

export default Footer;
