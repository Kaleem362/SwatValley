import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import Email.js

const SwatToursModal = ({ isOpen, onClose, packageDetails }) => {
  if (!isOpen || !packageDetails) return null;

  // State for user inputs
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");

  // Email.js send function
  const sendEmail = () => {
    // Check if user has provided name and phone number
    if (!userName || !userPhone) {
      alert("Please enter your name and phone number.");
      return;
    }

    // Define default values for Swat Tour packages
    const isSwatTour = packageDetails.tourName === "Swat Tour Package"; // Adjust as needed
    const templateParams = {
      package_name: isSwatTour
        ? "Swat Tour Package"
        : packageDetails.tourName || "Not specified",
      destinations: isSwatTour
        ? "Mingora, Kalam, Malam Jabba"
        : packageDetails.destinations || "",
      duration: isSwatTour ? "3 days, 2 nights" : packageDetails.duration || "",
      price: packageDetails.price || "",
      accommodation: isSwatTour
        ? "3-star hotel with breakfast"
        : packageDetails.accommodation || "",
      transportation: isSwatTour
        ? "Air-conditioned bus"
        : packageDetails.transportation || "",
      customer_message: "Looking forward to this amazing trip!",
      user_name: userName,
      user_phone: userPhone,
    };

    // Replace these with your Email.js credentials
    const serviceId = "service_lo35keo";
    const templateId = "template_kwn2dnv";
    const userId = "TN_SsrQLJSJwg7m9V";

    emailjs.send(serviceId, templateId, templateParams, userId).then(
      (response) => {
        console.log("Email successfully sent!", response.status, response.text);
        alert(
          `Thank you, ${userName}! Your booking request has been sent successfully. We will contact you soon at ${userPhone}.`
        );
        onClose(); // Close modal on success
      },
      (error) => {
        console.error("Failed to send email:", error);
        alert("Failed to send booking request. Please try again.");
      }
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <p className="mb-4 text-5xl font-extrabold text-center text-slate-800">
          Swat Tours
        </p>
        <h2 className="mb-4 text-2xl font-bold text-slate-800">
          {packageDetails.tourName}
        </h2>
        <div className="mt-4">
          <label className="block mb-2 text-sm font-bold text-slate-800">
            Your Name:
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md text-slate-800"
          />
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-sm font-bold text-slate-800">
            Your Phone Number:
          </label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
            className="w-full px-3 py-2 border rounded-md text-slate-800"
          />
        </div>
        {/* Pricing Section */}
        <div className="mt-4">
          <h3 className="text-lg font-bold text-slate-800">Tour Price:</h3>
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
            {Array.isArray(packageDetails.highlights) &&
              packageDetails.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
          </ul>
        </div>

        {/* User Input Fields */}

        {/* Buttons */}
        <div className="flex items-center justify-start gap-6 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white border-2 rounded text-slate-800 hover:bg-slate-800 border-slate-800"
          >
            Close
          </button>
          <button
            onClick={() => {
              sendEmail(); // Call Email.js send function
            }}
            className="px-4 py-2 text-white rounded bg-slate-800 hover:bg-green-500"
          >
            Book Now (Send Email)
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwatToursModal;
