import React, { useState } from "react";
import "./Navbar.css";
import { AiFillCaretDown } from "react-icons/ai";

const Navbar = () => {
  const [selectedTab, isSelectedTab] = useState("");
  return (
    <nav className="flex items-center justify-between w-full py-4 pr-5 bg-slate-300">
      <h1 className="ml-10 text-5xl font-extrabold tracking-tighter text-slate-800 font-Manrope ">
        The Swat Tours
      </h1>
      <ul className="flex items-center justify-between gap-4 mr-10">
        <li
          className={`p-2 px-3 font-semibold text-black transition-all duration-200 rounded-full cursor-pointer font-Manrope hover:text-slate-500 ${
            isSelectedTab ? "bg-green-500" : ""
          } hover:bg-green-500`}
          onSelect={isSelectedTab}
        >
          Home
        </li>
        <li className="p-2 px-3 font-semibold text-black transition-all duration-200 rounded-full cursor-pointer font-Manrope hover:text-slate-500 hover:bg-green-500">
          Packages
        </li>
        <li className="relative z-50 flex items-center gap-1 p-2 px-3 font-semibold text-black transition-all duration-200 rounded-full cursor-pointer font-Manrope hover:text-slate-500 hover:bg-green-500 group">
          Tours <AiFillCaretDown />
          <ul className="absolute flex-col justify-center hidden w-56 h-auto border top-10 -left-20 group-hover:flex bg-slate-800 border-slate-800">
            <li className="w-full px-2 py-2 font-bold bg-slate-300 text-slate-800 hover:text-slate-300 font-Manrope hover:bg-slate-800 ">
              Kalam Tour
            </li>
            <li className="w-full px-2 py-2 font-bold bg-slate-300 text-slate-800 hover:text-slate-300 font-Manrope hover:bg-slate-800 ">
              MalamJabba Tour
            </li>
            <li className="w-full px-2 py-2 font-bold bg-slate-300 text-slate-800 hover:text-slate-300 font-Manrope hover:bg-slate-800 ">
              Mahodand Lake Tour
            </li>
            <li className="w-full px-2 py-2 font-bold bg-slate-300 text-slate-800 hover:text-slate-300 font-Manrope hover:bg-slate-800 ">
              Jarogo Abshar Tour
            </li>
            <li className="w-full px-2 py-2 font-bold bg-slate-300 text-slate-800 hover:text-slate-300 font-Manrope hover:bg-slate-800 ">
              Murghuzar Tour
            </li>
            <li className="w-full px-2 py-2 font-bold bg-slate-300 text-slate-800 hover:text-slate-300 font-Manrope hover:bg-slate-800 ">
              Sangar Tour
            </li>
          </ul>
        </li>
        <li className="p-2 px-3 font-semibold text-black transition-all duration-200 rounded-full cursor-pointer font-Manrope hover:text-slate-500 hover:bg-green-500">
          Contact
        </li>
        <li className="p-2 px-3 font-semibold text-black transition-all duration-200 rounded-full cursor-pointer font-Manrope hover:text-slate-500 hover:bg-green-500">
          About us
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
