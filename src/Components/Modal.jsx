import React, { useState } from "react";
import emailjs from "emailjs-com";

const Modal = ({ isOpen, onClose, packageDetails }) => {
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [errors, setErrors] = useState({ userName: false, userPhone: false });

  if (!isOpen || !packageDetails) return null;

  const { title, duration, pricing, inclusions } = packageDetails;

  const handlePriceSelect = (category, price) => {
    setSelectedPrice({ category, price });
  };

  const handleSubmit = () => {
    let hasError = false;
    // Validate name and phone fields
    if (!userName) {
      setErrors((prev) => ({ ...prev, userName: true }));
      hasError = true;
    }
    if (!userPhone) {
      setErrors((prev) => ({ ...prev, userPhone: true }));
      hasError = true;
    }

    if (hasError) return; // Prevent form submission if there's any error

    // Send email using Email.js
    const templateParams = {
      user_name: userName,
      user_phone: userPhone,
      tour_title: title,
      tour_duration: duration,
      pricing: selectedPrice
        ? `${selectedPrice.category}: ${selectedPrice.price}`
        : "Not Selected",
      inclusions: inclusions ? inclusions.join(", ") : "No Inclusions",
    };

    const serviceId = "service_2a2am5r";
    const templateId = "template_a6kc84r";
    const userId = "Pt_mzuyRqieukIXdt";

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("Email successfully sent!", response.status, response.text);
        alert("Booking request has been sent successfully.");
        onClose();
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("Failed to send booking request. Please try again.");
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 font-Manrope">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg max-h-[90vh] overflow-y-auto">
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

        {/* User Input Fields */}
        <div className="mt-4">
          <label className="block mb-2 text-lg font-bold text-slate-800">
            Your Name:
          </label>
          <input
            type="text"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
              if (e.target.value)
                setErrors((prev) => ({ ...prev, userName: false }));
            }}
            placeholder="Enter your name"
            className={`w-full px-3 py-2 border rounded-md text-slate-800 ${
              errors.userName ? "border-red-500 bg-red-100" : ""
            }`}
          />
          {errors.userName && (
            <p className="mt-1 text-sm text-red-500">Please enter your name.</p>
          )}
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-lg font-bold text-slate-800">
            Your Phone Number:
          </label>
          <input
            type="tel"
            value={userPhone}
            onChange={(e) => {
              setUserPhone(e.target.value);
              if (e.target.value)
                setErrors((prev) => ({ ...prev, userPhone: false }));
            }}
            placeholder="Enter your phone number"
            className={`w-full px-3 py-2 border rounded-md text-slate-800 ${
              errors.userPhone ? "border-red-500 bg-red-100" : ""
            }`}
          />
          {errors.userPhone && (
            <p className="mt-1 text-sm text-red-500">
              Please enter your phone number.
            </p>
          )}
        </div>

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
            onClick={handleSubmit}
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
