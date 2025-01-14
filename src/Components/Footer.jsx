import React from "react";
import logo from "../assets/logo/logo.png";

const Footer = () => {
  return (
    <div className="flex items-start justify-around w-full h-auto bg-green-400">
      <img
        src={logo}
        alt="Logo"
        className="w-16 h-16 sm:w-24 sm-h-24 md:h-32 md:w-32 lg:h-60 lg:w-60"
      />

      <div className="tit">
        <h1>The Swat Tours</h1>
      </div>
    </div>
  );
};

export default Footer;
