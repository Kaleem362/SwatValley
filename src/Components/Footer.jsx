import React from "react";
import logo from "../assets/logo/logo.png";

const Footer = () => {
  return (
    <div className="flex items-center justify-around w-full h-auto bg-green-400">
      <div className="logo">
        <img
          src={logo}
          alt="Logo"
          className="h-auto w-60 xs:h-16 xs:w-16 sm:w-24 sm-h-24 md:h-32 md:w-32 lg:h-60 lg:w-60"
        />
      </div>
    </div>
  );
};

export default Footer;
