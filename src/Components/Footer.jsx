import React from "react";
import logo from "../assets/logo/logo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="items-start justify-around w-full p-8 text-white bg-green-900 xs:flex xs:flex-col sm:flex sm:flex-row md:flex md:flex-row lg:flex lg:flex-row animate-fadeInFromBottom">
      <img
        src={logo}
        alt="Logo"
        className="animate-fadeInFromLeft xs:w-48 xs:h-48 sm:w-24 sm-h-24 md:h-32 md:w-32 lg:h-48 lg:w-48"
      />

      <div className="flex-col items-start justify-center h-full title md:w-96">
        <h1 className="w-full my-2 text-3xl font-extrabold text-center md:text-4xl lg:text-5xl text-slate-100 animate-fadeInFromTop">
          The Swat Tours
        </h1>
        <p className="my-2 text-slate-100 md:w-fit animate-fadeInFromBottom">
          Choose <b>The Swat Tours</b> for a stress-free and unforgettable tour,
          where every detail is taken care of with care and expertise. Let’s
          make your travel dreams a reality!
        </p>
      </div>
      <div className="flex flex-col items-start justify-center w-full h-full gap-2 pages-content md:w-fit animate-fadeInFromBottom">
        <h4 className="w-full text-lg text-slate-200 hover:underline font-manrope">
          {" "}
          <Link rel="stylesheet" href="">
            packages
          </Link>
        </h4>
        <h4 className="text-lg text-slate-200 hover:underline font-manrope">
          {" "}
          <Link rel="stylesheet" href="">
            Tours
          </Link>
        </h4>
        <h4 className="text-lg hover:underline font-manrope text-slate-200">
          {" "}
          <Link rel="stylesheet" href="">
            Gallery
          </Link>
        </h4>
        <h4 className="text-lg hover:underline font-manrope text-slate-200">
          {" "}
          <Link rel="stylesheet" href="">
            Contact us
          </Link>
        </h4>
        <h4 className="text-lg hover:underline font-manrope text-slate-200">
          {" "}
          <Link rel="stylesheet" href="">
            About us
          </Link>
        </h4>
      </div>
      <div className="flex flex-col items-start w-full gap-2 mt-4 xs:pt-4 md:p-0 md:w-fit misc-pages text-slate-200 animate-fadeInFromTop">
        <h4 className="text-lg hover:underline font-manrope">
          <Link>Privacy Policy</Link>
        </h4>
        <h4 className="text-lg hover:underline font-manrope">
          <Link>Terms of Service</Link>
        </h4>
        <h4 className="text-lg hover:underline font-manrope">
          <Link>FAQ</Link>
        </h4>
      </div>
    </div>
  );
};

export default Footer;
