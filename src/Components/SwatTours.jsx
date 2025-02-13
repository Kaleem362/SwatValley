import React, { useContext, useState } from "react";
import { store } from "../assets/Store/Context";
import SwatToursModal from "./SwatToursModal";
import malamjabbadaytour from "./../assets/PackagesImages/malamjabbadaytour.jpg";
import kalamValleyTour from "./../assets/PackagesImages/kalamvalleytourenhanced.jpg";
import gabenJabbaTour from "./../assets/PackagesImages/gabinjabbadaytour.jpg";
import marghuzarTour from "./../assets/PackagesImages/murghuzardaytour.jpg";
import shanglaTopTour from "./../assets/PackagesImages/shangladaytour.jpg";

const SwatTours = () => {
  const { Swatdaytourpackage, modalState, setModalState } = useContext(store);
  const { swatTourPackages } = Swatdaytourpackage[0];
  const [selectedPackage, setSelectedPackage] = useState(null);

  const tourImages = {
    "Malam Jabba Day Tour": malamjabbadaytour,
    "Kalam Valley Day Tour": kalamValleyTour,
    "Gaben Jabba Day Tour": gabenJabbaTour,
    "Marghuzar and White Palace Tour": marghuzarTour,
    "Shangla Top and Yakhtingai Day Tour": shanglaTopTour,
  };

  const handleBookNow = (tour) => {
    setSelectedPackage(tour);
    setModalState(true);
  };

  return (
    <div className="py-10 mx-auto ">
      <h1 className="w-full mb-4 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
        Swat Tour Packages
      </h1>
      <h2 className="my-4 text-xl text-start xs:text-md sm:text-lg md:text-lg lg:text-xl xl:text-xl font-Manrope text-slate-800">
        Providing the day packages for the local tourist of swat valley to
        explore the beautiful places of swat valley, the tours can be plan to
        visit the archaelogical sites, the beautiful lakes and the lush greenery
        of swat kalam , malamjabba mountains beauty, snowfall moments and picnic
        points.
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {swatTourPackages.dayTours.map((tour, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg h-96 group"
          >
            <div
              className="absolute inset-0 w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${tourImages[tour.tourName]})` }}
            >
              <div className="absolute inset-0 opacity-100 bg-gradient-to-t from-black to-transparent" />
            </div>

            <div className="relative flex flex-col justify-end h-full p-6 text-white">
              <h3 className="mb-2 text-2xl font-bold">{tour.tourName}</h3>
              <p className="mb-4 text-gray-200">{tour.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold">{tour.price}</span>
                <button
                  onClick={() => handleBookNow(tour)}
                  className="px-6 py-2 font-semibold transition duration-300 transform bg-white rounded-full text-slate-800 hover:scale-105 hover:bg-slate-800"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalState && (
        <SwatToursModal
          isOpen={modalState}
          onClose={() => setModalState(false)}
          packageDetails={selectedPackage}
        />
      )}
    </div>
  );
};

export default SwatTours;
