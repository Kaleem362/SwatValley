import React from "react";
import { useContext } from "react";
import { store } from "../assets/Store/Context";

const ForeignerPackages = () => {
  const { foreignerPackages } = useContext(store);
  console.log(foreignerPackages);

  return (
    <div className="container p-6 max-w-7xl">
      <h1 className="mb-16 text-5xl font-bold text-center text-slate-800 font-Manrope">
        Exclusive Foreign Tour Packages
      </h1>

      {foreignerPackages.map((item, index) => {
        if (!item || !item.tourPackage) {
          return null; // Skip rendering if the item or required data is missing
        }

        const {
          title,
          duration,
          itinerary,
          pricing,
          inclusions,
          notes,
          callToAction,
        } = item.tourPackage;

        return (
          <div
            key={index}
            className="mb-20 overflow-hidden bg-white shadow-xl rounded-2xl"
          >
            {/* Package Header */}
            <div className="p-8 text-white bg-gradient-to-r from-slate-800 to-slate-900">
              <h2 className="mb-3 text-3xl font-bold">{title}</h2>
              <p className="text-xl text-slate-200">{duration}</p>
            </div>

            {/* Itinerary Section */}
            {itinerary && (
              <div className="p-8">
                <h3 className="mb-6 text-2xl font-bold text-slate-800">
                  Detailed Itinerary
                </h3>
                <div className="space-y-6">
                  {Object.entries(itinerary).map(
                    ([day, details]) =>
                      details && (
                        <div
                          key={day}
                          className="flex py-2 pl-6 border-l-4 border-slate-800"
                        >
                          <div className="flex-1">
                            <h4 className="mb-2 text-xl font-semibold text-slate-800">
                              {details.title}
                            </h4>
                            <ul className="space-y-2">
                              {details.activities.map((activity, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start text-slate-600"
                                >
                                  <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-slate-800"></span>
                                  {activity}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )
                  )}
                </div>
              </div>
            )}

            {/* Pricing Section */}
            {pricing && pricing.luxuryPackage && (
              <div className="p-8 bg-slate-50">
                <h3 className="mb-6 text-2xl font-bold text-slate-800">
                  Package Pricing
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {Object.entries(pricing.luxuryPackage).map(
                    ([category, price]) => (
                      <div
                        key={category}
                        className="p-6 bg-white rounded-lg shadow-md"
                      >
                        <h4 className="mb-2 text-lg font-semibold text-slate-800">
                          {category
                            .replace(/([A-Z])/g, " $1")
                            .replace(/([0-9]+)/g, " $1 ")
                            .trim()}
                        </h4>
                        <p className="text-2xl font-bold text-slate-900">
                          ${price}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {/* Inclusions Section */}
            {inclusions && (
              <div className="p-8">
                <h3 className="mb-6 text-2xl font-bold text-slate-800">
                  Package Inclusions
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

            {/* Notes & CTA Section */}
            {notes && callToAction && (
              <div className="p-8 bg-slate-50">
                <p className="mb-6 text-slate-600">{notes}</p>
                <button className="px-8 py-3 font-semibold text-white transition-colors duration-300 rounded-lg bg-slate-800 hover:bg-slate-700">
                  {callToAction}
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ForeignerPackages;
