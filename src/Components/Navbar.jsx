import React, { useState } from "react";
import "./Navbar.css";
import { AiFillCaretDown } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";

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

  return (
    <nav className="flex items-center justify-between w-full h-20 py-4 pr-5 bg-slate-300">
      <h1 className="ml-10 text-3xl font-extrabold tracking-tighter text-slate-800 font-Manrope xs:text-2xlmd:text-3xl lg:text-5xl xs:text-4xl ">
        The Swat Tours
      </h1>
      <ul
        className={`${
          isMenuOpen
            ? "flex flex-col absolute top-52 sm:top-40 xs:text-white left-0 w-full bg-slate-800 p-4 space-y-2  z-50"
            : "hidden"
        } lg:relative lg:flex lg:flex-row lg:top-0 lg:w-auto lg:p-0  lg:space-y-0 lg:items-center lg:justify-between lg:gap-4 lg:mr-10 lg:bg-transparent`}
      >
        <li
          className={`p-2 px-3 text-lg xs:text-white font-semibold transition-all duration-200 rounded-full cursor-pointer font-Manrope ${
            selectedTab === "Home"
              ? "bg-green-900 text-white"
              : "text-black lg:text-black"
          } hover:text-slate-300 hover:bg-green-500`}
          onClick={() => handleTabClick("Home")}
        >
          Home
        </li>
        <li
          className={`p-2 px-3 text-lg text-slate-900 font-semibold transition-all duration-200 rounded-full cursor-pointer font-Manrope ${
            selectedTab === "Packages"
              ? "bg-green-900 text-white"
              : "text-black lg:text-black"
          } hover:text-slate-300 hover:bg-green-500`}
          onClick={() => handleTabClick("Packages")}
        >
          Packages
        </li>
        <li className="relative z-50 flex items-center gap-1 p-2 px-3 text-lg font-semibold text-black transition-all duration-200 rounded-full cursor-pointer font-Manrope lg:text-black hover:bg-green-500 group">
          Tours <AiFillCaretDown />
          <ul className="absolute flex-col justify-center hidden w-56 h-auto top-10 -left-20 group-hover:flex bg-slate-800 border-slate-800">
            <li className="w-full px-2 py-2 font-bold bg-slate-300 text-slate-800 hover:text-slate-300 font-Manrope hover:bg-slate-800">
              Kalam Tour
            </li>
            <li className="w-full px-2 py-2 font-bold bg-slate-300 text-slate-800 hover:text-slate-300 font-Manrope hover:bg-slate-800">
              MalamJabba Tour
            </li>
            <li className="w-full px-2 py-2 font-bold bg-slate-300 text-slate-800 hover:text-slate-300 font-Manrope hover:bg-slate-800">
              Mahodand Lake Tour
            </li>
            <li className="w-full px-2 py-2 font-bold bg-slate-300 text-slate-800 hover:text-slate-300 font-Manrope hover:bg-slate-800">
              Jarogo Abshar Tour
            </li>
            <li className="w-full px-2 py-2 font-bold bg-slate-300 text-slate-800 hover:text-slate-300 font-Manrope hover:bg-slate-800">
              Murghuzar Tour
            </li>
            <li className="w-full px-2 py-2 font-bold bg-slate-300 text-slate-800 hover:text-slate-300 font-Manrope hover:bg-slate-800">
              Sangar Tour
            </li>
          </ul>
        </li>
        <li
          className={`p-2 px-3 text-lg font-semibold transition-all duration-200 rounded-full cursor-pointer font-Manrope ${
            selectedTab === "Contact"
              ? "bg-green-900 text-white"
              : "text-black lg:text-black"
          } hover:text-slate-300 hover:bg-green-500`}
          onClick={() => handleTabClick("Contact")}
        >
          Contact
        </li>
        <li
          className={`p-2 px-3 text-lg font-semibold transition-all duration-200 rounded-full cursor-pointer font-Manrope ${
            selectedTab === "About us"
              ? "bg-green-900 text-white"
              : "text-black lg:text-black"
          } hover:text-slate-300 hover:bg-green-500`}
          onClick={() => handleTabClick("About us")}
        >
          About us
        </li>
      </ul>
      <span
        className="p-2 border rounded-lg cursor-pointer bg-slate-800 border-slate-800 menu lg:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <ImCross className="text-white" size={28} />
        ) : (
          <TiThMenu className="text-white lg:text-5xl xs:text-3xl md:text-4xl" />
        )}
      </span>
    </nav>
  );
};

export default Navbar;
