import React from "react";
import logo from "../../src/assets/logo/logo1.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute z-50 flex items-center justify-end w-full h-20 px-6 bg-transparent">
      {/* Logo */}
      {/* <Link to="/blog" className="h-fit">
        <img
          src={logo}
          alt="theswattours.com/"
          className="h-auto w-72 xs:w-60 sm:w-64 md:w-68 lg:w-72 xl:w-96 2xl:w-96"
        />
      </Link> */}

      {/* Navigation Links */}
      <ul className="flex items-center justify-between w-auto navlinks h-fit">
        {/* Home */}
        <NavLink
          to="/blog"
          end // Add this prop to ensure exact matching
          className={({ isActive }) =>
            isActive
              ? "mx-4 text-lg font-Manrope underline text-blue-700 font-semibold"
              : "mx-4 text-lg font-Manrope hover:text-blue-700 font-semibold"
          }
        >
          Home
        </NavLink>

        {/* Tour Packages - Dropdown */}
        <div className="relative group">
          <NavLink
            to="/blog/tourpackages"
            className={({ isActive }) =>
              isActive
                ? "mx-4 text-lg font-Manrope underline text-blue-700 font-semibold"
                : "mx-4 text-lg font-Manrope hover:text-blue-700 font-semibold"
            }
          >
            Tour Packages
          </NavLink>

          {/* Dropdown Menu */}
          <ul className="absolute left-0 hidden p-4 space-y-2 rounded-lg shadow-lg group-hover:block bg-slate-400 w-60">
            <li>
              <Link
                to="/blog/tourpackages/lahore-lahore"
                className="block text-sm hover:text-slate-700 text-slate-50"
              >
                Lahore to Lahore
              </Link>
            </li>
            <li>
              <Link
                to="/blog/tourpackages/karachi-karachi"
                className="block text-sm hover:text-slate-700 text-slate-50"
              >
                Karachi to Karachi
              </Link>
            </li>
            <li>
              <Link
                to="/blog/tourpackages/swat-lahore"
                className="block text-sm hover:text-slate-700 text-slate-50"
              >
                Swat to Lahore
              </Link>
            </li>
            <li>
              <Link
                to="/blog/tourpackages/islamabad-swat"
                className="block text-sm hover:text-slate-700 text-slate-50"
              >
                Islamabad to Swat
              </Link>
            </li>
            <li>
              <Link
                to="/blog/tourpackages/karachi-swat"
                className="block text-sm hover:text-slate-700 text-slate-50"
              >
                Karachi to Swat
              </Link>
            </li>
            <li>
              <Link
                to="/blog/tourpackages/private-honeymoon"
                className="block text-sm hover:text-slate-700 text-slate-50"
              >
                Private Honeymoon Tour
              </Link>
            </li>
            <li>
              <Link
                to="/blog/tourpackages/deluxe-honeymoon"
                className="block text-sm hover:text-slate-700 text-slate-50"
              >
                Deluxe Private Honeymoon
              </Link>
            </li>
            <li>
              <Link
                to="/blog/tourpackages/private-tour"
                className="block text-sm hover:text-slate-700 text-slate-50"
              >
                Private Tour
              </Link>
            </li>
            <li>
              <Link
                to="/blog/tourpackages/family-private-tour"
                className="block text-sm hover:text-slate-700 text-slate-50"
              >
                Family Private Tour
              </Link>
            </li>
          </ul>
        </div>

        {/* Honeymoon Packages */}
        <NavLink
          to="/blog/honeymoonpackages"
          className={({ isActive }) =>
            isActive
              ? "mx-4 text-lg font-Manrope underline text-blue-700 font-semibold"
              : "mx-4 text-lg font-Manrope hover:text-blue-700 font-semibold"
          }
        >
          Honeymoon Packages
        </NavLink>

        {/* About Us */}
        <NavLink
          to="/blog/aboutus"
          className={({ isActive }) =>
            isActive
              ? "mx-4 text-lg font-Manrope underline text-blue-700 font-semibold"
              : "mx-4 text-lg font-Manrope hover:text-blue-700 font-semibold"
          }
        >
          About Us
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
