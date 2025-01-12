import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full py-4 pr-5 bg-slate-300">
      <h1 className="ml-10 text-5xl font-extrabold tracking-tighter text-slate-800 font-Manrope ">
        The Swat Tours
      </h1>
      <ul className="flex items-center justify-between gap-4 mr-10">
        <li className="p-2 px-3 font-semibold text-black transition-all duration-200 rounded-full cursor-pointer font-Manrope hover:text-slate-500 hover:bg-green-500">
          Home
        </li>
        <li className="p-2 px-3 font-semibold text-black transition-all duration-200 rounded-full cursor-pointer font-Manrope hover:text-slate-500 hover:bg-green-500">
          Packages
        </li>
        <li className="p-2 px-3 font-semibold text-black transition-all duration-200 rounded-full cursor-pointer font-Manrope hover:text-slate-500 hover:bg-green-500">
          Services
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
