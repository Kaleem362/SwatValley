import React, { useContext } from "react";
import { store } from "../assets/Store/Context";
import malamjabbadaytour from "../../public/PackagesImages/malamjabbadaytour.jpg";
import kalamValleyTour from "../../public/PackagesImages/kalamvalleytourenhanced.jpg";
import gabenJabbaTour from "../../public/PackagesImages/gabinjabbadaytour.jpg";
import marghuzarTour from "../../public/PackagesImages/murghuzardaytour.jpg";
import shanglaTopTour from "../../public/PackagesImages/shangladaytour.jpg";
import { Link } from "react-router";
const SwatTours = () => {
  // Destructure data from context
  const { Swatdaytourpackage } = useContext(store);
  const { swatTourPackages } = Swatdaytourpackage[0];

  // Background images mapping (you would need to replace these with actual image paths)
  const tourImages = {
    "Malam Jabba Day Tour": malamjabbadaytour,
    "Kalam Valley Day Tour": kalamValleyTour,
    "Gaben Jabba Day Tour": gabenJabbaTour,
    "Marghuzar and White Palace Tour": marghuzarTour,
    "Shangla Top and Yakhtingai Day Tour": shanglaTopTour,
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="my-4 text-3xl text-start xs:text-xs sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-Manrope text-slate-800 ">
        We Provide Day packages for swat Valley
      </h2>
      <h2 className="mb-8 text-5xl font-extrabold text-center text-slate-800 font-Manrope">
        Swat Tour Packages
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {swatTourPackages.dayTours.map((tour, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg h-96 group"
          >
            {/* Background Image with Gradient Overlay */}
            <div
              className="absolute inset-0 w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${tourImages[tour.tourName]})` }}
            >
              <div className="absolute inset-0 opacity-100 bg-gradient-to-t from-black to-transparent" />
            </div>

            {/* Content */}
            <div className="relative flex flex-col justify-end h-full p-6 text-white">
              <h3 className="mb-2 text-2xl font-bold">{tour.tourName}</h3>
              <p className="mb-4 text-gray-200">{tour.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold">{tour.price}</span>
                <button className="px-6 py-2 font-semibold transition duration-300 transform rounded-full hover:scale-105 bg-slate-800 hover:bg-white hover:text-slate-800">
                  <Link to={"/contactpage"}>Book Now</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwatTours;
