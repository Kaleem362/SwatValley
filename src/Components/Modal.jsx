import React from "react";

const Modal = ({ isOpen, onClose, packageDetails }) => {
  if (!isOpen || !packageDetails) return null;

  const { title, duration, pricing, inclusions } = packageDetails;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-slate-800">{title}</h2>
        <p className="mb-4 text-lg text-slate-600">{duration}</p>

        {pricing && (
          <div>
            <h3 className="text-lg font-bold text-slate-800">Pricing:</h3>
            {Object.entries(pricing.luxuryPackage).map(([category, price]) => (
              <p key={category} className="text-slate-600">
                {category}: {price}
              </p>
            ))}
          </div>
        )}

        {inclusions && (
          <div>
            <h3 className="mt-4 text-lg font-bold text-slate-800">
              Inclusions:
            </h3>
            <ul>
              {inclusions.map((item, index) => (
                <li key={index} className="text-slate-600">
                  - {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={onClose}
          className="px-6 py-2 mt-6 font-semibold text-white rounded-lg bg-slate-800 hover:bg-slate-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
