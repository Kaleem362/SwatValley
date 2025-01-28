import React from "react";
import "../styles/gallery.css";
import gateway from "../assets/PackagesImages/gateway.jpg";
import swatroad from "../assets/PackagesImages/swatroad.jpg";
import mesmerizingBeauty from "../assets/PackagesImages/greenerymountains.jpg";
import travel from "../assets/Valley images/travel.jpg";
import Couple1 from "../assets/PackagesImages/honeymoonprofile.jpg";
import couple2 from "../assets/PackagesImages/honeymoonprofiletwo.jpg";
import couple3 from "../assets/PackagesImages/honeymoonthree.jpg";
import couple4 from "../assets/PackagesImages/honeymoonfour.jpg";
import couple5 from "../assets/PackagesImages/honeymoonfive.jpg";
import couple6 from "../assets/PackagesImages/honeymoonsix.jpg";
import couple7 from "../assets/PackagesImages/c1.jpg";
import couple8 from "../assets/PackagesImages/c2.jpg";
import couple9 from "../assets/PackagesImages/c3.jpg";
import couple10 from "../assets/PackagesImages/c6.jpg";
import coupleeleven from "../assets/PackagesImages/c5.jpg";
import familytour from "../assets/PackagesImages/familyPhotowithBGremove.png";
// import familiyphotoone from "../assets/PackagesImages/familiyphotoone.png";

import AutoScrollGallery from "./ScrollGallery";

const Gallery = () => {
  // const familytourImages = [familiyphotoone];
  return (
    <>
      <div className="p-6 bg-white dark:bg-gray-800 sm:py-8 lg:py-12 font-Manrope">
        <div className="h-auto px-4 mx-auto max-w-screen-2xl md:px-8">
          <div className="flex items-center justify-between gap-8 mb-4 sm:mb-8 md:mb-12 ">
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
                src={Couple1}
                alt=""
              />
            </div>
            <div className="group">
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center overflow-hidden group-hover:skew-y-2 group-hover:-skew-x-2 group-hover:scale-110 duration-300 transition-all group-hover:shadow-lg group-hover:shadow-white"
                src={couple2}
                alt=""
              />
            </div>
            <div className="group">
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center overflow-hidden group-hover:-skew-y-2 group-hover:skew-x-2 group-hover:scale-110 duration-300 transition-all group-hover:shadow-lg group-hover:shadow-white"
                src={couple3}
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-2">
            <div className="group">
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center overflow-hidden group-hover:skew-y-2 group-hover:-skew-x-2 group-hover:scale-110 duration-300 transition-all group-hover:shadow-lg group-hover:shadow-white"
                src={couple4}
                alt=""
              />
            </div>
            <div className="group">
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center overflow-hidden group-hover:-skew-y-2 group-hover:skew-x-2 group-hover:scale-110 duration-300 transition-all group-hover:shadow-lg group-hover:shadow-white"
                src={couple5}
                alt=""
              />
            </div>
            <div className="group">
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center overflow-hidden group-hover:skew-y-2 group-hover:-skew-x-2 group-hover:scale-110 duration-300 transition-all group-hover:shadow-lg group-hover:shadow-white"
                src={couple6}
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-2">
            <div className="group">
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center overflow-hidden group-hover:-skew-y-2 group-hover:skew-x-2 group-hover:scale-110 duration-300 transition-all group-hover:shadow-lg group-hover:shadow-white"
                src={couple7}
                alt=""
              />
            </div>
            <div className="group">
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center overflow-hidden group-hover:-skew-y-2 group-hover:skew-x-2 group-hover:scale-110 duration-300 transition-all group-hover:shadow-lg group-hover:shadow-white"
                src={couple8}
                alt=""
              />
            </div>
            <div className="group">
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center overflow-hidden group-hover:skew-y-2 group-hover:-skew-x-2 group-hover:scale-110 duration-300 transition-all group-hover:shadow-lg group-hover:shadow-white"
                src={couple9}
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-2">
            <div className="group">
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center overflow-hidden group-hover:-skew-y-2 group-hover:skew-x-2 group-hover:scale-110 duration-300 transition-all group-hover:shadow-lg group-hover:shadow-white"
                src={couple10}
                alt=""
              />
            </div>
            <div className="group">
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center overflow-hidden group-hover:-skew-y-2 group-hover:skew-x-2 group-hover:scale-110 duration-300 transition-all group-hover:shadow-lg group-hover:shadow-white"
                src={coupleeleven}
                alt=""
              />
            </div>
            <div className="group">
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center overflow-hidden group-hover:-skew-y-2 group-hover:skew-x-2 group-hover:scale-110 duration-300 transition-all group-hover:shadow-lg group-hover:shadow-white"
                src={coupleeleven}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <h1 className="w-full mt-4 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
        Swat Valley Beautiful Sceneries
      </h1>
      <AutoScrollGallery />
      <div className="familyTours">
        <h1 className="w-full mb-4 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromTop">
          Family Tours
        </h1>
        <marquee>
          {/* <img src={familytour} alt="familyTour" className="w-48 h-48" /> */}
        </marquee>
      </div>
    </>
  );
};

export default Gallery;
