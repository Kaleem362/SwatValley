import React, { useState } from "react";
import emailjs from "emailjs-com";
import Loader from "./Loader";

const BookingModal = ({ isOpen, onClose, tourDetails, setIsModalOpen }) => {
  const [selectedPrice, setSelectedPrice] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    userName: "",
    phoneNumber: "",
    selectedPrice: "",
  });

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
    if (errors.selectedPrice) {
      setErrors((prev) => ({ ...prev, selectedPrice: "" }));
    }
  };

  const handleInputChange = (setter, fieldName) => (event) => {
    setter(event.target.value);
    if (errors[fieldName]) {
      setErrors((prev) => ({ ...prev, [fieldName]: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = { userName: "", phoneNumber: "", selectedPrice: "" };

    if (!userName) {
      newErrors.userName = "Please enter your name";
      isValid = false;
    }
    if (!phoneNumber) {
      newErrors.phoneNumber = "Please enter your phone number";
      isValid = false;
    }
    // Only validate selectedPrice if there are multiple price options
    if (
      typeof tourDetails.price === "object" &&
      !selectedPrice &&
      (tourDetails.price.for1Couple || tourDetails.price.for2Couples)
    ) {
      newErrors.selectedPrice = "Please select a price";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const sendEmail = () => {
    if (!validateForm()) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const emailData = {
      user_name: userName,
      user_phone: phoneNumber,
      package_name: tourDetails.packageName,
      destinations: tourDetails.destination,
      duration: tourDetails.duration,
      price: selectedPrice || tourDetails.price, // Use selectedPrice or the fixed price
      accommodation: tourDetails.accommodation,
      transportation: tourDetails.transportation,
    };

    emailjs
      .send(
        "service_casw1hg", // Your service ID
        "template_tdnpfww", // Your template ID
        emailData,
        "Pt_mzuyRqieukIXdt" // Your public key
      )
      .then(
        (result) => {
          // alert("Email sent successfully!");
          setLoading(false);
          console.log(result.text);
          setIsModalOpen(false);
          setPhoneNumber("");
          setUserName("");
          setSelectedPrice("");
        },
        (error) => {
          console.log(error);
          alert("Failed to send email. Please try WhatsApp.");
          handleWhatsApp();
          setLoading(false);
        }
      );
  };

  const handleWhatsApp = () => {
    const message = `Booking Details:%0A%0APackage Name: ${
      tourDetails.packageName
    }%0ADestination: ${tourDetails.destination}%0ADuration: ${
      tourDetails.duration
    }%0APrice: ${selectedPrice || tourDetails.price}%0AAccommodation: ${
      tourDetails.accommodation
    }%0ATransportation: ${
      tourDetails.transportation
    }%0AUser Name: ${userName}%0APhone Number: ${phoneNumber}`;
    const whatsappLink = `https://wa.me/923489857193?text=${message}`;
    window.open(whatsappLink, "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto font-Manrope">
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
          {/* User input fields at the top */}
          <div className="mb-6 space-y-4">
            <div>
              <label className="block text-lg font-semibold text-slate-700">
                Your Name
              </label>
              <input
                type="text"
                value={userName}
                onChange={handleInputChange(setUserName, "userName")}
                className="w-full px-3 py-2 mt-1 border rounded-md text-slate-800 focus:outline-none focus:ring focus:ring-slate-200"
                placeholder="Enter your name"
              />
              {errors.userName && (
                <p className="p-2 mt-1 text-xs text-red-500 bg-red-100">
                  {errors.userName}
                </p>
              )}
            </div>
            {loading ? <Loader /> : ""}
            <div>
              <label className="block text-lg font-semibold text-slate-700">
                Phone Number
              </label>
              <input
                type="text"
                value={phoneNumber}
                onChange={handleInputChange(setPhoneNumber, "phoneNumber")}
                className="w-full px-3 py-2 mt-1 border rounded-md text-slate-800 focus:outline-none focus:ring focus:ring-slate-200"
                placeholder="Enter your phone number"
              />
              {errors.phoneNumber && (
                <p className="p-2 mt-1 text-xs text-red-500 bg-red-100">
                  {errors.phoneNumber}
                </p>
              )}
            </div>
          </div>

          {/* Existing tour details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-700">
                Package Name
              </h3>
              <p className="text-slate-600">{tourDetails.packageName}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-700">
                Destinations
              </h3>
              <p className="text-slate-600">{tourDetails.destination}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-700">Duration</h3>
              <p className="text-slate-600">{tourDetails.duration}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-700">
                Price Details
              </h3>
              {typeof tourDetails.price === "object" ? (
                <div className="space-y-1">
                  <p>Choose Your price below</p>
                  {tourDetails.price.for1Couple && (
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="price"
                        value={tourDetails.price.for1Couple}
                        className="text-slate-600"
                        onChange={handlePriceChange}
                      />
                      <span>One Couple: {tourDetails.price.for1Couple}</span>
                    </label>
                  )}
                  {tourDetails.price.for2Couples && (
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="price"
                        value={tourDetails.price.for2Couples}
                        className="text-slate-600"
                        onChange={handlePriceChange}
                      />
                      <span>Two Couples: {tourDetails.price.for2Couples}</span>
                    </label>
                  )}
                </div>
              ) : (
                <p className="text-slate-600">{tourDetails.price}</p>
              )}
              {errors.selectedPrice && (
                <p className="p-2 mt-1 text-xs text-red-500 bg-red-100">
                  {errors.selectedPrice}
                </p>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-700">
                Accommodation
              </h3>
              <p className="text-slate-600">{tourDetails.accommodation}</p>
            </div>

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
            onClick={sendEmail}
            className="px-4 py-2 text-white transition-colors rounded bg-slate-800 hover:bg-slate-700"
          >
            Confirm Booking (Email)
          </button>
          <button
            onClick={handleWhatsApp}
            className="px-4 py-2 text-white transition-colors bg-green-600 rounded hover:bg-green-500"
          >
            Confirm Booking (WhatsApp)
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
