import React, { useContext, useState } from "react";

import { store } from "../assets/Store/Context";
import Modal from "./Modal";

const ForeignerPackages = () => {
  const { foreignerPackages, modalState, setModalState } = useContext(store);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleBookNow = (tourPackage) => {
    setSelectedPackage(tourPackage);
    setModalState(true);
  };

  return (
    <div className="w-full my-10 transition-all duration-300 md:p-6 font-Manrope">
      <h1 className="w-full mb-4 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
        Exclusive Swat Valley Tour Packages for Foreigners
      </h1>

      {foreignerPackages.map((item, index) => {
        if (!item || !item.tourPackage) {
          return null;
        }

        const { title, duration, image, pricing, inclusions, callToAction } =
          item.tourPackage;

        return (
          <div
            key={index}
            className="mb-20 overflow-hidden shadow-xl bg-slate-300 rounded-2xl"
          >
            <div className="p-6 text-white sm:p-8 bg-gradient-to-r from-slate-800 to-slate-900">
              <h2 className="text-2xl font-bold md:text-3xl xs:text-2xl sm:text-2xl">
                {title}
              </h2>
              <p className="md:text-xl xs:text-xl sm:text-xl lg:text-xl text-slate-200">
                {duration}
              </p>
            </div>
            <div className="relative">
              <img
                src={image}
                alt="foreignersImagetwo"
                className="object-cover w-full h-96"
              />
              <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
            </div>

            {pricing && pricing.luxuryPackage && (
              <div className="p-3 sm:p-4 bg-slate-300">
                <h3 className="mb-6 text-2xl font-bold text-slate-800">
                  Affordable Tour Packages with Luxury Options
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {Object.entries(pricing.luxuryPackage).map(
                    ([category, price]) => (
                      <div
                        key={category}
                        className="p-3 bg-white rounded-lg shadow-md"
                      >
                        <h4 className="mb-2 text-lg font-semibold text-slate-800">
                          {category
                            .replace(/([A-Z])/g, " $1")
                            .replace(/([0-9]+)/g, " $1 ")
                            .trim()}
                        </h4>
                        <p className="text-2xl font-bold text-slate-900">
                          {price}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
            {inclusions && (
              <div className="p-3 md:p-8">
                <h3 className="mb-6 text-2xl font-bold text-slate-800">
                  Scenic Tours and Inclusions in Pakistan
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {inclusions.map((inclusion, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-slate-600">{inclusion}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {callToAction && (
              <div className="flex items-center justify-around gap-4 p-6 xl:justify-start bg-slate-300">
                <button
                  onClick={() => handleBookNow(item.tourPackage)}
                  className="flex items-center justify-center px-6 py-2 font-semibold text-white transition-colors duration-300 rounded-lg bg-slate-800 hover:bg-slate-700"
                >
                  {callToAction}
                </button>
                <a
                  href="https://wa.me/923489857193"
                  className="flex items-center justify-center px-6 py-2 font-semibold text-white transition-colors duration-300 bg-green-800 rounded-lg hover:bg-green-700"
                >
                  Whatsapp
                </a>
              </div>
            )}
            {
              <div className="my-4 text">
                <marquee>
                  "For any inquiries or assistance, feel free to contact us on
                  WhatsApp. We're here to help!"
                </marquee>
              </div>
            }
          </div>
        );
      })}

      {modalState && (
        <Modal
          isOpen={modalState}
          onClose={() => setModalState(false)}
          packageDetails={selectedPackage}
        />
      )}
    </div>
  );
};

export default ForeignerPackages;
