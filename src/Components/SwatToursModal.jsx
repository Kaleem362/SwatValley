import React, { useState } from "react";
import emailjs from "emailjs-com";

const SwatToursModal = ({ isOpen, onClose, packageDetails }) => {
  if (!isOpen || !packageDetails) return null;

  // State for user inputs
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");

  // State for error messages
  const [errors, setErrors] = useState({
    userName: "",
    userPhone: "",
  });

  // Email.js send function
  const sendEmail = () => {
    let formErrors = { ...errors };
    let formIsValid = true;

    // Validate the fields
    if (!userName) {
      formErrors.userName = "Please enter your name.";
      formIsValid = false;
    }
    if (!userPhone) {
      formErrors.userPhone = "Please enter your phone number.";
      formIsValid = false;
    }

    setErrors(formErrors);

    if (!formIsValid) return;

    // Define template parameters for Email.js
    const templateParams = {
      package_name: packageDetails.tourName || "-",
      destinations: packageDetails.destinations || "-",
      duration: packageDetails.duration || "-",
      price: packageDetails.price || "-",
      accommodation: packageDetails.accommodation || "-",
      transportation: packageDetails.transportation || "-",
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

  // Handle input change and remove the error when the user starts typing
  const handleInputChange = (e, field) => {
    if (e.target.value) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
    if (field === "userName") {
      setUserName(e.target.value);
    } else if (field === "userPhone") {
      setUserPhone(e.target.value);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 font-Manrope">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <p className="mb-4 text-5xl font-extrabold text-center text-slate-800">
          Swat Tours
        </p>
        <h2 className="mb-4 text-2xl font-bold text-center text-slate-800">
          {packageDetails.tourName}
        </h2>

        {/* User Input Fields */}
        <div className="mt-4">
          <label className="block mb-2 text-lg font-bold text-slate-800">
            Your Name:
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => handleInputChange(e, "userName")}
            className="w-full px-3 py-2 border rounded-md text-slate-800"
          />
          {errors.userName && (
            <div className="p-2 mt-2 text-sm text-red-600 bg-red-100 rounded-md">
              {errors.userName}
            </div>
          )}
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-lg font-bold text-slate-800">
            Your Phone Number:
          </label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={userPhone}
            onChange={(e) => handleInputChange(e, "userPhone")}
            className="w-full px-3 py-2 border rounded-md text-slate-800"
          />
          {errors.userPhone && (
            <div className="p-2 mt-2 text-sm text-red-600 bg-red-100 rounded-md">
              {errors.userPhone}
            </div>
          )}
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

        {/* Buttons */}
        <div className="flex items-center justify-start gap-6 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white border-2 rounded text-slate-800 hover:bg-slate-800 border-slate-800"
          >
            Close
          </button>
          <button
            onClick={sendEmail}
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
