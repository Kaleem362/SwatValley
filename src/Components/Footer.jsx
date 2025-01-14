import React from "react";
import logo from "../assets/logo/logo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="items-center justify-around w-full p-8 text-white bg-green-900 xs:flex xs:flex-col sm:flex sm:flex-row md:flex md:flex-row lg:flex lg:flex-row">
      <img
        src={logo}
        alt="Logo"
        className="xs:w-48 xs:h-48 sm:w-24 sm-h-24 md:h-32 md:w-32 lg:h-48 lg:w-48"
      />

      <div className="flex-col items-start justify-center h-full title min-w-80">
        <h1 className="w-full text-5xl font-extrabold text-slate-400">
          The Swat Tours
        </h1>
        <p className="text-slate-400 w-80">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          minus sunt delectus tempore dignissimos consequuntur possimus vitae
          aliquam quidem voluptas?
        </p>
      </div>
      <div className="flex flex-col items-start justify-center w-full h-full gap-2 pages-content ">
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
        <h4 className="hover:underline text-slate-200">
          {" "}
          <Link rel="stylesheet" href="">
            About us
          </Link>
        </h4>
      </div>
      <div className="flex flex-col w-full gap-2 pt-4 mt-4 border-t-2 border-slate-900 misc-pages text-slate-200">
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
