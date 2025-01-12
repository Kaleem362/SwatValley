import React from "react";
import Ushuforest from "../assets/Valley images/ushu forests.jpg";
import SwatValley from "../assets/Valley images/Swat Valley.jpg";
import chairlifts from "../assets/Valley images/Malamjabbachairlifts.jpg";
import kalamhills from "../assets/Valley images/snowy.jpg";
import PCfrontimage from "../assets/Valley images/PC hotel malamjabba.jpg";

const HomeScreenCarousal = () => {
  return (
    <div>
      <div id="carouselExample" className="carousel slide h-[500px] relative">
        <div className="h-full carousel-inner">
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
              src={Ushuforest}
              className="object-cover w-full h-full d-block"
              alt="..."
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative h-full carousel-item">
            <img
              src={SwatValley}
              className="object-cover w-full h-full d-block"
              alt="..."
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        </div>
        <button
          className="absolute z-10 text-white -translate-y-1/2 bg-gray-800 rounded-full carousel-control-prev top-1/2 left-4 h-[70px] w-[70px]"
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
          className="absolute z-10 text-white -translate-y-1/2 bg-gray-800 rounded-full carousel-control-next top-1/2 right-4 h-[70px] w-[70px]"
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
