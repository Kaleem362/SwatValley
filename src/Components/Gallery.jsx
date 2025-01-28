import React from "react";
import "../styles/gallery.css";
import gateway from "../assets/PackagesImages/gateway.jpg";
import swatroad from "../assets/PackagesImages/swatroad.jpg";
import mesmerizingBeauty from "../assets/PackagesImages/greenerymountains.jpg";
import travel from "../assets/Valley images/travel.jpg";
import honeymoonprofile from "../assets/PackagesImages/honeymoonprofile.jpg";
import honeymoonprofiletwo from "../assets/PackagesImages/honeymoonprofiletwo.jpg";
import couplethree from "../assets/PackagesImages/honeymoonthree.jpg";
import couplefour from "../assets/PackagesImages/honeymoonfour.jpg";
import couplefive from "../assets/PackagesImages/honeymoonfive.jpg";
import couplesix from "../assets/PackagesImages/honeymoonsix.jpg";
import coupleseven from "../assets/PackagesImages/coupleone.jpg";
import coupleeight from "../assets/PackagesImages/coupletwo.jpg";
import couplenine from "../assets/PackagesImages/couplethree.jpg";
import coupleten from "../assets/PackagesImages/couplefour.jpg";
import coupleEleven from "../assets/PackagesImages/couplefive.jpg";
import shanglaDayTour from "../assets/PackagesImages/shanglaDayTour.jpg";
import mahodandboat from "../assets/PackagesImages/mahodandboat.jpg";
import murghuzardaytour from "../assets/PackagesImages/murghuzardaytour.jpg";
import malamjabbadaytour from "../assets/PackagesImages/malamjabbadaytour.jpg";
import snowroad from "../assets/PackagesImages/snowroad.jpg";
import swattour from "../assets/PackagesImages/swattour.jpg";
import sangartop from "../assets/PackagesImages/sangartop.jpg";
import SwatValley2 from "../assets/PackagesImages/SwatValley2.jpg";
import ushuforestroad from "../assets/PackagesImages/ushuforestroad.jpg";
import mahodandcamping from "../assets/PackagesImages/mahodandcamping.jpg";
import chukailmeadhows from "../assets/PackagesImages/chukailmeadhows.jpg";
import ushusnowyroad from "../assets/PackagesImages/ushusnowyroad.jpg";
import snowysunny from "../assets/PackagesImages/snowysunny.jpg";
import snowsunnytwo from "../assets/PackagesImages/snowsunnytwo.jpg";
import treesinsnow from "../assets/PackagesImages/treesinsnow.jpg";

import AutoScrollGallery from "./ScrollGallery";

const Gallery = () => {
  const swatScenes = [
    shanglaDayTour,
    mahodandboat,
    murghuzardaytour,
    malamjabbadaytour,
    snowroad,
    swattour,
    sangartop,
    ushuforestroad,
    SwatValley2,
    snowysunny,
    mahodandcamping,
    chukailmeadhows,
    ushusnowyroad,
    snowsunnytwo,
    treesinsnow,
  ];
  return (
    <>
      <div className="py-6 bg-white dark:bg-gray-800 sm:py-8 lg:py-12 font-Manrope">
        <div className="h-auto px-4 mx-auto max-w-screen-2xl md:px-8">
          <div className="flex items-center justify-between gap-8 mb-4 sm:mb-8 md:mb-12">
            <div className="flex flex-col items-start gap-4">
              <h1 className="w-full mb-4 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromTop">
                Photo's Gallery
              </h1>

              <p className="w-full text-slate-800 md:block font-Manrope xs:text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl animate-fadeInFromBottom">
                Welcome to the scenic wonders of Swat Valley, often called the
                "Switzerland of the East." This gallery showcases breathtaking
                views of lush green valleys, snow-capped mountains,
                crystal-clear rivers, and serene lakes that will leave you
                mesmerized. <br /> Swat Valley is a paradise for couples seeking
                a romantic getaway, a serene retreat for local travelers, and a
                captivating destination for international adventurers. Whether
                you're looking to explore historical sites, indulge in thrilling
                adventures, or simply immerse yourself in nature's beauty, Swat
                Valley offers something special for everyone.
                <br /> Our tours are tailored to provide unforgettable
                experiences, from luxury stays and guided treks to personalized
                services designed just for you. Let these images inspire your
                journey and take the first step towards creating cherished
                memories with us.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 animate-fadeInFromRight">
            <a
              href="#"
              className="relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:h-80"
            >
              <img
                src={gateway}
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 object-center w-full h-full transition duration-200 object-fit group-hover:scale-110"
              />

              <div className="absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent"></div>

              <span className="relative inline-block mb-3 ml-4 text-sm text-white md:ml-5 md:text-lg">
                Gateway to Swat Valley
              </span>
            </a>

            <a
              href="#"
              className="relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:col-span-2 md:h-80"
            >
              <img
                src={swatroad}
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110 animate-fadeInFromLeft"
              />

              <div className="absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent"></div>

              <span className="relative inline-block mb-3 ml-4 text-sm text-white md:ml-5 md:text-lg">
                Enchanting Roads with Heights
              </span>
            </a>

            <a
              href="#"
              className="relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:col-span-2 md:h-80"
            >
              <img
                src={mesmerizingBeauty}
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110 animate-fadeInFromRight"
              />

              <div className="absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent"></div>

              <span className="relative inline-block mb-3 ml-4 text-sm text-white md:ml-5 md:text-lg">
                Mesmerizing Greenery & Bliss Beauty
              </span>
            </a>

            <a
              href="#"
              className="relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:h-80"
            >
              <img
                src={travel}
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110 animate-fadeInFromLeft"
              />

              <div className="absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent"></div>

              <span className="relative inline-block mb-3 ml-4 text-sm text-white md:ml-5 md:text-lg">
                Enchanting places with Heights
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full p-6 grid-parent bg-slate-800">
        <h1 className="w-full my-4 text-4xl font-bold text-center text-white xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromTop">
          Couples Before
        </h1>
        {/* beautiful grid */}
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 bg-slate-800 p-6">
          <div class="grid gap-2">
            <div className="group">
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center overflow-hidden group-hover:-skew-y-2 group-hover:skew-x-2 group-hover:scale-110 duration-300 transition-all group-hover:shadow-lg group-hover:shadow-white"
                src={honeymoonprofile}
                alt=""
              />
            </div>
            <div className="group">
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center overflow-hidden group-hover:skew-y-2 group-hover:-skew-x-2 group-hover:scale-110 duration-300 transition-all group-hover:shadow-lg group-hover:shadow-white"
                src={honeymoonprofiletwo}
                alt=""
              />
            </div>
            <div className="group">
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center overflow-hidden group-hover:-skew-y-2 group-hover:skew-x-2 group-hover:scale-110 duration-300 transition-all group-hover:shadow-lg group-hover:shadow-white"
                src={couplethree}
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-2">
            <div className="group">
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center overflow-hidden group-hover:skew-y-2 group-hover:-skew-x-2 group-hover:scale-110 duration-300 transition-all group-hover:shadow-lg group-hover:shadow-white"
                src={couplefour}
                alt=""
              />
            </div>
            <div className="group">
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center overflow-hidden group-hover:-skew-y-2 group-hover:skew-x-2 group-hover:scale-110 duration-300 transition-all group-hover:shadow-lg group-hover:shadow-white"
                src={couplefive}
                alt=""
              />
            </div>
            <div className="group">
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center overflow-hidden group-hover:skew-y-2 group-hover:-skew-x-2 group-hover:scale-110 duration-300 transition-all group-hover:shadow-lg group-hover:shadow-white"
                src={couplesix}
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-2">
            <div className="group">
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center overflow-hidden group-hover:-skew-y-2 group-hover:skew-x-2 group-hover:scale-110 duration-300 transition-all group-hover:shadow-lg group-hover:shadow-white"
                src={couplesix}
                alt=""
              />
            </div>
            <div className="group">
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center overflow-hidden group-hover:-skew-y-2 group-hover:skew-x-2 group-hover:scale-110 duration-300 transition-all group-hover:shadow-lg group-hover:shadow-white"
                src={coupleseven}
                alt=""
              />
            </div>
            <div className="group">
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center overflow-hidden group-hover:skew-y-2 group-hover:-skew-x-2 group-hover:scale-110 duration-300 transition-all group-hover:shadow-lg group-hover:shadow-white"
                src={coupleeight}
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-2">
            <div className="group">
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center overflow-hidden group-hover:-skew-y-2 group-hover:skew-x-2 group-hover:scale-110 duration-300 transition-all group-hover:shadow-lg group-hover:shadow-white"
                src={couplenine}
                alt=""
              />
            </div>
            <div className="group">
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center overflow-hidden group-hover:-skew-y-2 group-hover:skew-x-2 group-hover:scale-110 duration-300 transition-all group-hover:shadow-lg group-hover:shadow-white"
                src={coupleten}
                alt=""
              />
            </div>
            <div className="group">
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center overflow-hidden group-hover:-skew-y-2 group-hover:skew-x-2 group-hover:scale-110 duration-300 transition-all group-hover:shadow-lg group-hover:shadow-white"
                src={coupleEleven}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <h1 className="w-full mt-4 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
        Swat Valley Beautiful Sceneries
      </h1>
      <AutoScrollGallery swatScenes={swatScenes} />
    </>
  );
};

export default Gallery;
