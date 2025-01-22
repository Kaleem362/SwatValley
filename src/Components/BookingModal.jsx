import React from "react";

const BookingModal = ({ isOpen, onClose, tourDetails, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
      {/* Overlay */}
      <div
        className="fixed inset-0 transition-opacity bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl p-6 mx-4 bg-white rounded-lg shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-slate-800">
            Confirm Your Booking
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="max-h-[60vh] overflow-y-auto pr-4">
          <div className="space-y-4">
            {/* Package Name */}
            <div>
              <h3 className="text-lg font-semibold text-slate-700">
                Package Name
              </h3>
              <p className="text-slate-600">{tourDetails.packageName}</p>
            </div>

            {/* Destinations */}
            <div>
              <h3 className="text-lg font-semibold text-slate-700">
                Destinations
              </h3>
              <p className="text-slate-600">{tourDetails.destination}</p>
            </div>

            {/* Duration */}
            <div>
              <h3 className="text-lg font-semibold text-slate-700">Duration</h3>
              <p className="text-slate-600">{tourDetails.duration}</p>
            </div>

            {/* Price */}
            <div>
              <h3 className="text-lg font-semibold text-slate-700">
                Price Details
              </h3>
              {typeof tourDetails.price === "object" ? (
                <div className="space-y-1">
                  {tourDetails.price.for1Couple && (
                    <p className="text-slate-600">
                      One Couple: {tourDetails.price.for1Couple}
                    </p>
                  )}
                  {tourDetails.price.for2Couples && (
                    <p className="text-slate-600">
                      Two Couples: {tourDetails.price.for2Couples}
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-slate-600">{tourDetails.price}</p>
              )}
            </div>

            {/* Accommodation */}
            <div>
              <h3 className="text-lg font-semibold text-slate-700">
                Accommodation
              </h3>
              <p className="text-slate-600">{tourDetails.accommodation}</p>
            </div>

            {/* Transportation */}
            <div>
              <h3 className="text-lg font-semibold text-slate-700">
                Transportation
              </h3>
              <p className="text-slate-600">{tourDetails.transportation}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 transition-colors border rounded text-slate-700 border-slate-300 hover:bg-slate-100"
          >
            Close
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-white transition-colors rounded bg-slate-800 hover:bg-slate-700"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
