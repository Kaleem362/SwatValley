import React, { useState, useEffect } from "react";
import hotelsKalam from "../assets/Valley images/hotelsKalam.jpg";
import chairlifts from "../assets/Valley images/Malamjabbachairlifts.jpg";
import kalamhills from "../assets/Valley images/snowy.jpg";
import PCfrontimage from "../assets/Valley images/PC front image.jpg";
import forestroad from "../assets/Valley images/roadbetweenforests.jpg";
import kalammountains from "../assets/Valley images/beautifulhills.jpg";
import kandollake from "../assets/Valley images/kandollake.jpg";
import Mahodandlakecover from "../assets/Valley images/Mahodandlakecover.jpg";
import malamjabbamountains from "../assets/Valley images/malamjabba mountains.jpg";

const HomeScreenCarousal = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    chairlifts,
    kalamhills,
    PCfrontimage,
    kalammountains,
    hotelsKalam,
    Mahodandlakecover,
    malamjabbamountains,
    kandollake,
    forestroad,
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div id="carouselExample" className="carousel slide h-[500px] relative">
        <div className="h-full carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative h-full carousel-item ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <img
                src={image}
                className="object-cover w-full h-full d-block"
                alt={`Slide ${index}`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          ))}
        </div>

        <button
          className="absolute z-10 text-white -translate-y-1/2 bg-gray-800 rounded-full carousel-control-prev top-1/2 left-4 xs:h-[40px] xs:w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] lg:h-[70px] lg:w-[70px] xl:h-[80px] xl:w-[80px] 2xl:h-[90px] 2xl:w-[90px] h-14 w-14"
          type="button"
          onClick={() =>
            setActiveIndex(
              activeIndex === 0 ? images.length - 1 : activeIndex - 1
            )
          }
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
          onClick={() =>
            setActiveIndex(
              activeIndex === images.length - 1 ? 0 : activeIndex + 1
            )
          }
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
