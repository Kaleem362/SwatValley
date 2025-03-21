import React, { useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo1.png";

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    localStorage.setItem("selectedTab", selectedTab);
  }, [selectedTab]);

  return (
    <>
      <nav className="flex items-center justify-between w-full h-20 py-4 pr-5 bg-slate-400 animate-fadeInFromTop">
        <Link to={"/"}>
          <img
            className="w-56 ml-4 text-3xl xs:w-80 xs:h-fit h-fit"
            src={logo}
          ></img>
        </Link>
        <ul
          className={`transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "flex flex-col absolute top-48 text-slate-800  sm:top-40 xs:text-slate-800 md:text-slate-800 lg:text-slate-800 xl:text-slate-800 left-0 w-full bg-[#becbd6] p-4 space-y-2  z-50"
              : "hidden"
          } lg:relative lg:flex lg:flex-row lg:top-0 lg:w-auto lg:p-0  lg:space-y-0 lg:items-center lg:justify-between lg:gap-4 lg:mr-10 lg:bg-transparent`}
        >
          <Link
            className={`p-2 px-auto text-md text-slate-900 font-semibold transition-all duration-200 rounded-full cursor-pointer font-Manrope ${
              selectedTab === "Home"
                ? "bg-green-900 text-white"
                : "text-slate-900 lg:text-black"
            } hover:text-white hover:bg-green-600`}
            to={"/"}
            onClick={() => handleTabClick("Home")}
          >
            Home
          </Link>
          <Link
            className={`p-2 px-auto text-md text-slate-900 font-semibold transition-all duration-200 rounded-full cursor-pointer font-Manrope ${
              selectedTab === "Packages"
                ? "bg-green-900 text-white"
                : "text-slate-900 lg:text-black"
            } hover:text-white hover:bg-green-600`}
            onClick={() => handleTabClick("Packages")}
            to={"/tourpackages"}
          >
            Tour Packages
          </Link>
          <Link
            className={`p-2 px-auto text-md text-slate-900 font-semibold transition-all duration-200 rounded-full cursor-pointer font-Manrope ${
              selectedTab === "services"
                ? "bg-green-900 text-white"
                : "text-slate-900 lg:text-black"
            } hover:text-white hover:bg-green-600`}
            to={"/ourservices"}
            onClick={() => handleTabClick("services")}
          >
            Pick & Drop Services
          </Link>
          <Link
            className={`p-2 px-auto text-md text-slate-900 font-semibold transition-all duration-200 rounded-full cursor-pointer font-Manrope ${
              selectedTab === "Events"
                ? "bg-green-900 text-white"
                : "text-slate-900 lg:text-black"
            } hover:text-white hover:bg-green-600`}
            onClick={() => handleTabClick("Events")}
            to={"/eventsactivities"}
          >
            Events & Activities
          </Link>

          <Link
            className={`p-2 px-auto text-md text-slate-900 font-semibold transition-all duration-200 rounded-full cursor-pointer font-Manrope ${
              selectedTab === "Contact"
                ? "bg-green-900 text-white"
                : "text-slate-900 lg:text-black"
            } hover:text-white hover:bg-green-600`}
            onClick={() => handleTabClick("Contact")}
            to={"/contact"}
          >
            Contact
          </Link>
          <Link
            className={`p-2 px-auto text-md text-slate-900 font-semibold transition-all duration-200 rounded-full cursor-pointer font-Manrope ${
              selectedTab === "About us"
                ? "bg-green-900 text-white"
                : "text-slate-900 lg:text-black"
            } hover:text-white hover:bg-green-600`}
            onClick={() => handleTabClick("About us")}
            to={"/about"}
          >
            About us
          </Link>
          <Link
            className={`p-2 px-auto text-md text-slate-900 font-semibold transition-all duration-200 rounded-full cursor-pointer font-Manrope ${
              selectedTab === "About us"
                ? "bg-green-900 text-white"
                : "text-slate-900 lg:text-black"
            } hover:text-white hover:bg-green-600`}
            onClick={() => handleTabClick("Blog")}
            to={"/blog"}
          >
            Blog
          </Link>
        </ul>
        <span
          className="p-2 border rounded-lg cursor-pointer bg-slate-800 border-slate-800 menu lg:hidden"
          aria-label="Toggle menu"
          role="button"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <ImCross className="text-lg text-white lg:text-5xl xs:text-3xl md:text-4xl" />
          ) : (
            <TiThMenu className="text-lg text-white lg:text-5xl xs:text-3xl md:text-4xl" />
          )}
        </span>
      </nav>
    </>
  );
};

export default Navbar;
