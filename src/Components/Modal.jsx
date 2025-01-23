import React, { useState } from "react";

const Modal = ({ isOpen, onClose, packageDetails }) => {
  const [selectedPrice, setSelectedPrice] = useState(null);

  if (!isOpen || !packageDetails) return null;

  const { title, duration, pricing, inclusions } = packageDetails;

  const handlePriceSelect = (category, price) => {
    setSelectedPrice({ category, price });
  };

  const handleBooking = () => {
    if (selectedPrice) {
      // Implement booking logic with selected price
      alert(
        `Booking ${title} for ${selectedPrice.category}: ${selectedPrice.price}`
      );
      onClose();
    } else {
      alert("Please select a pricing option");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-slate-800">{title}</h2>
        <p className="mb-4 text-lg text-slate-600">{duration}</p>

        {/* Pricing Section with Radio Button Selection */}
        {pricing && pricing.luxuryPackage && (
          <div>
            <h3 className="text-lg font-bold text-slate-800">
              Select Pricing:
            </h3>
            <div className="mt-2 space-y-2">
              {Object.entries(pricing.luxuryPackage).map(
                ([category, price]) => (
                  <div
                    key={category}
                    className="flex items-center p-2 space-x-3 border rounded hover:bg-slate-100"
                  >
                    <input
                      type="radio"
                      id={category}
                      name="pricingOption"
                      className="form-radio text-slate-800"
                      checked={selectedPrice?.category === category}
                      onChange={() => handlePriceSelect(category, price)}
                    />
                    <label
                      htmlFor={category}
                      className="flex-grow cursor-pointer"
                    >
                      <span className="font-semibold text-slate-800">
                        {category.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                      <span className="ml-2 text-slate-600">{price}</span>
                    </label>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* Inclusions Section */}
        {inclusions && (
          <div className="mt-4">
            <h3 className="text-lg font-bold text-slate-800">
              Package Inclusions:
            </h3>
            <ul className="space-y-1 list-disc list-inside text-slate-600">
              {inclusions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between mt-6 space-x-4">
          <button
            onClick={onClose}
            className="flex-grow px-4 py-2 border rounded text-slate-800 border-slate-300 hover:bg-slate-100"
          >
            Close
          </button>
          <button
            onClick={handleBooking}
            className="flex-grow px-4 py-2 text-white rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-50"
            disabled={!selectedPrice}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
