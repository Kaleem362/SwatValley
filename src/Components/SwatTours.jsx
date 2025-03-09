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
    <div className="py-10 mx-auto">
      <h3 className="w-full mb-4 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
        Swat Tour Packages
      </h3>
      <p className="my-4 text-lg text-start text-slate-800 font-Manrope">
        {swatTourPackages.introduction}
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {swatTourPackages.dayTours.map((tour, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg h-96 group"
          >
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: `url(${tourImages[tour.tourName]})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            </div>
            <div className="relative flex flex-col justify-end h-full p-6 text-white">
              <h3 className="mb-2 text-2xl font-bold">{tour.tourName}</h3>
              <p className="mb-4 text-gray-200">{tour.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold">{tour.price}</span>
                <div className="flex gap-2">
                  <a
                    href={`https://wa.me/923489857193?text=I'm interested in the ${tour.tourName} of ${tour.description} with ${tour.price} package`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 font-semibold text-white bg-green-500 rounded-full hover:scale-105 hover:bg-green-600"
                  >
                    WhatsApp
                  </a>
                  <button
                    onClick={() => handleBookNow(tour)}
                    className="px-6 py-2 font-semibold bg-white rounded-full text-slate-800 hover:scale-105 hover:bg-slate-800"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="w-full my-10 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
        Family customized & Private Tour Packages
      </h3>
      <div className="grid grid-cols-1 gap-6 py-2 mx-auto md:grid-cols-2">
        {Swatdaytourpackage.length > 1 &&
          Swatdaytourpackage[1]?.familytourpackages?.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-white border rounded-lg shadow-md"
            >
              <h3 className="mb-3 text-2xl font-semibold text-gray-700">
                {category.category}
              </h3>
              <p className="mb-3 text-gray-600">{category.accommodation}</p>
              <ul>
                {category.packages?.map((pkg, idx) => (
                  <li key={idx} className="flex justify-between py-2 border-b">
                    <span>{pkg.duration}</span>
                    <span className="font-semibold">PKR {pkg.price}</span>
                    <div className="flex gap-2">
                      <a
                        href={`https://wa.me/923489857193?text=I'm interested in the ${category.category}, ${category.accommodation}, of ${pkg.price} with the duration ${pkg.duration} package`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 text-white bg-green-500 rounded-md"
                      >
                        WhatsApp
                      </a>
                      <button
                        className="px-3 py-1 text-white bg-blue-600 rounded-md"
                        onClick={() => handleBookNow(pkg)}
                      >
                        Book Now
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>

      {Swatdaytourpackage.length > 1 && Swatdaytourpackage[1]?.destinations && (
        <div className="p-6 bg-white border rounded-lg shadow-md">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            Destinations:
            <br />
            <p className="text-xl font-normal font-Manrope">
              {Swatdaytourpackage[1].destinations.join(", ")}
            </p>
          </h3>

          <div>
            <h3 className="my-4 text-2xl font-semibold text-gray-700">
              Transportation:
            </h3>
            {Swatdaytourpackage[1]?.transportation.map((transport, index) => (
              <p key={index} className="text-xl text-gray-600 ">
                {transport.vehicle
                  ? `${transport.vehicle} - ${transport.capacity}`
                  : transport.info}
              </p>
            ))}
          </div>

          <h3 className="my-4 mb-3 text-2xl font-semibold text-gray-700">
            Package Includes
          </h3>
          <ul>
            {Swatdaytourpackage[1]?.packageIncludes.map((item, index) => (
              <li key={index} className="text-gray-600">
                {item}
              </li>
            ))}
          </ul>

          <div>
            <h3 className="my-4 text-2xl font-semibold text-gray-700">
              Extra Charges:
            </h3>
            <ul className="pl-5 list-disc">
              {Swatdaytourpackage[1]?.extraCharges.map((charge, index) => (
                <li key={index} className="text-gray-600">
                  <span className="font-semibold">{charge.from}:</span> ₨{" "}
                  {charge.price}
                </li>
              ))}
            </ul>
          </div>

          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            Contact us
          </h3>
          <div className="flex gap-2">
            <a
              href={`https://wa.me/923489857193?text=I'm interested in the ${Swatdaytourpackage[1].destinations.join(
                ", "
              )} package`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 font-semibold text-white bg-green-500 rounded-md font-Manrope"
            >
              WhatsApp
            </a>
            <a
              href="tel:+923489857193"
              className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-md"
            >
              Call Now
            </a>
          </div>
        </div>
      )}

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
