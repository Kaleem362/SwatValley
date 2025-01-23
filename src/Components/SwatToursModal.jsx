import React from "react";

const SwatToursModal = ({ isOpen, onClose, packageDetails }) => {
  if (!isOpen || !packageDetails) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <p className="mb-4 text-5xl font-extrabold text-center text-slate-800 ">
          Swat Tours
        </p>
        <h2 className="mb-4 text-2xl font-bold text-slate-800">
          {packageDetails.tourName}
        </h2>

        {/* Pricing Section */}
        <div>
          <h3 className="text-lg font-bold text-slate-800">Pricing:</h3>
          <p className="text-slate-600">Price: {packageDetails.price}</p>
        </div>

        {/* Description Section */}
        <div className="mt-4">
          <h3 className="text-lg font-bold text-slate-800">Description:</h3>
          <p className="text-slate-600">{packageDetails.description}</p>
        </div>

        {/* Key Highlights */}
        <div className="mt-4">
          {packageDetails.highlights && (
            <h3 className="text-lg font-bold text-slate-800">Highlights:</h3>
          )}
          <ul className="list-disc list-inside text-slate-600">
            {packageDetails.highlights &&
              packageDetails.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-start gap-6 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white border-2 rounded text-slate-800 hover:bg-slate-800 border-slate-800 "
          >
            Close
          </button>
          <button
            onClick={() => {
              // Add booking confirmation logic
              alert("Booking request sent!");
              onClose();
            }}
            className="px-4 py-2 text-white rounded bg-slate-800 hover:bg-slate-500"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwatToursModal;
