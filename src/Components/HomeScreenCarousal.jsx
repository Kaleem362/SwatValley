import React from "react";
import hotelsKalam from "../assets/Valley images/hotelsKalam.jpg";
import chairlifts from "../assets/Valley images/Malamjabbachairlifts.jpg";
import kalamhills from "../assets/Valley images/snowy.jpg";
import PCfrontimage from "../assets/Valley images/PC hotel malamjabba.jpg";
import forestroad from "../assets/Valley images/roadbetweenforests.jpg";
import kalammountains from "../assets/Valley images/beautifulhills.jpg";
import kandollake from "../assets/Valley images/kandollake.jpg";
import Mahodandlakecover from "../assets/Valley images/Mahodandlakecover.jpg";
import malamjabbamountains from "../assets/Valley images/malamjabba mountains.jpg";
const HomeScreenCarousal = () => {
  return (
    <div>
      <div id="carouselExample" className="carousel slide h-[500px] relative">
        <div className="h-full carousel-inner">
          <marquee
            className="xs:text-8xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl flex w-full m-auto text-slate-700 z-50 absolute top-[70%] text-center text-stroke text-stroke-2 text-stroke-red-800 font-bold font-Manrope text-9xl"
            style={{
              WebkitTextStroke: "1px black",
              color: "transparent",
            }}
          >
            Swat Adventure Awaits
          </marquee>
          <div className="relative h-full carousel-item active">
            <img
              src={chairlifts}
              className="object-cover w-full h-full d-block"
              alt="..."
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative h-full carousel-item">
            <img
              src={kalamhills}
              className="object-cover w-full h-full d-block"
              alt="..."
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative h-full carousel-item">
            <img
              src={PCfrontimage}
              className="object-cover w-full h-full d-block"
              alt="..."
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative h-full carousel-item">
            <img
              src={kalammountains}
              className="object-cover w-full h-full d-block"
              alt="..."
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative h-full carousel-item">
            <img
              src={hotelsKalam}
              className="object-cover w-full h-full d-block"
              alt="..."
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative h-full carousel-item">
            <img
              src={Mahodandlakecover}
              className="object-cover w-full h-full d-block"
              alt="..."
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative h-full carousel-item">
            <img
              src={malamjabbamountains}
              className="object-cover w-full h-full d-block"
              alt="..."
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative h-full carousel-item">
            <img
              src={kandollake}
              className="object-center w-full h-full overflow-hidden d-block"
              alt="..."
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative h-full carousel-item">
            <img
              src={forestroad}
              className="object-cover w-full h-full overflow-hidden d-block"
              s
              alt="..."
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        </div>
        <button
          className="absolute z-10 text-white -translate-y-1/2 bg-gray-800 rounded-full carousel-control-prev top-1/2 left-4 xs:h-[40px] xs:w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] lg:h-[70px] lg:w-[70px] xl:h-[80px] xl:w-[80px] 2xl:h-[90px] 2xl:w-[90px] h-14 w-14"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="absolute z-10 text-white -translate-y-1/2 bg-gray-800 rounded-full xs:rounded-full h-14 w-14 carousel-control-next top-1/2 right-4 xs:h-[40px] xs:w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] lg:h-[70px] lg:w-[70px] xl:h-[80px] xl:w-[80px] 2xl:h-[90px] 2xl:w-[90px]"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomeScreenCarousal;
