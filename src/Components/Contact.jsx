import React, { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
const Contact = () => {
  const [formType, setFormType] = useState("customizeTour"); // Default form type
  const [kids, setKids] = useState(false);
  const [selectedCar, setSelectedCar] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const carOptions = [
    "Prado Jeep",
    "Corolla Car",
    "Prius",
    "APV",
    "BRV Seven Seater",
  ];

  const handleFormSwitch = (type) => setFormType(type);

  return (
    <div className="container w-full p-6 mx-auto">
      {/* Header Section */}
      <h1 className="w-full mb-2 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
        Contact Us
      </h1>
      <p className="mb-12 text-xl text-start text-slate-600">
        Get in touch with us for personalized tour packages, booking a tour, or
        renting a car for your travel needs in Swat and beyond.
      </p>
      <p className="my-1 text-xl text-center underline font-Manrope">
        Select your Desire Form
      </p>
      {/* Form Selection Buttons */}
      <div className="flex justify-center mb-8 space-x-4 font-Manrope">
        <button
          onClick={() => handleFormSwitch("customizeTour")}
          className={`px-6 py-2 font-semibold rounded-full ${
            formType === "customizeTour"
              ? "bg-slate-800 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Customize Budget Tour
        </button>
        <button
          onClick={() => handleFormSwitch("packageTour")}
          className={`px-6 py-2 font-semibold rounded-full ${
            formType === "packageTour"
              ? "bg-slate-800 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Package Tour
        </button>
        <button
          onClick={() => handleFormSwitch("serviceForm")}
          className={`px-6 py-2 font-semibold rounded-full ${
            formType === "serviceForm"
              ? "bg-slate-800 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Service Form
        </button>
      </div>
      <p className="text-xl text-center text-slate-800">
        Book a Tour with us Fill the Form below and we'll Call you.
        <br />
        For Urgency Call us on{" "}
      </p>
      <div className="flex items-center justify-center w-full p-2 buttons">
        <a
          href="tel:+923489857193"
          className="flex items-center justify-center mx-2 text-xl font-semibold underline"
        >
          <IoCall size={34} />
          +923489857193
        </a>
        {" / "}
        <a
          href="https://wa.me/923489857193"
          className="flex items-center justify-center mx-2 text-xl font-semibold"
        >
          WhatsApp Us
          <AiOutlineWhatsApp size={34} className="mx-1 text-green-500" />
        </a>
      </div>

      {/* Conditional Forms */}
      <div className="p-8 rounded-lg shadow-xl bg-slate-400 shadow-slate-700 font-Manrope">
        {formType === "customizeTour" && (
          <form>
            <h2 className="w-full mb-2 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
              Customize Your Budget Tour
            </h2>
            <p className="text-xl text-center text-slate-800">
              Tell us About yourself and Your desired Destination and we'll
              response you Soon
            </p>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-none rounded-full outline-none"
                placeholder="Enter Name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                placeholder="Enter Phone Number..."
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Number of Members
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border rounded-full outline-none"
                placeholder="Amount of Persons..."
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Number of Males
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                placeholder="No of males..."
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Number of Females
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                placeholder="No of Females..."
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Do you have kids?
              </label>
              <input
                type="checkbox"
                onChange={(e) => setKids(e.target.checked)}
                className="mr-2 border-none outline-none"
              />
              Yes
            </div>
            {kids && (
              <div className="mb-4">
                <label className="block mb-2 font-semibold text-slate-700">
                  Number of Kids
                </label>
                <select className="w-full px-4 py-2 border rounded-lg">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <button className="px-6 py-2 text-white rounded-lg bg-slate-800">
              Submit
            </button>
          </form>
        )}

        {formType === "packageTour" && (
          <form>
            <h2 className="w-full mb-2 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
              Book a Tour Package
            </h2>

            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Package Name
              </label>
              <input
                type="text"
                value={packageName || ""}
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                readOnly
                placeholder="Package Name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Destination
              </label>
              <input
                type="text"
                value={destination || ""}
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                placeholder="Destination"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                package Duration
              </label>
              <input
                type="text"
                value={duration || ""}
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                readOnly
                placeholder="Duration"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Package Price
              </label>
              <input
                type="text"
                value={price || ""}
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                readOnly
                placeholder="Package Price"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Accommodation
              </label>
              <input
                type="text"
                value={accommodation || ""}
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                readOnly
                placeholder="Accommodation"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Transportation
              </label>
              <input
                type="text"
                value={transportation || ""}
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                readOnly
                placeholder="Transportation"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Your Phone"
              />
            </div>
            <button className="px-6 py-2 text-white rounded-lg bg-slate-800">
              Book Tour
            </button>
          </form>
        )}

        {formType === "serviceForm" && (
          <form>
            <h2 className="w-full mb-2 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
              Rent a Car or Service
            </h2>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Select a Car
              </label>
              <select
                className="w-full px-8 py-2 border-none rounded-full outline-none"
                value={selectedCar}
                onChange={(e) => setSelectedCar(e.target.value)}
              >
                <option value="">Select a car</option>
                {carOptions.map((car) => (
                  <option key={car} value={car}>
                    {car}
                  </option>
                ))}
              </select>
            </div>
            <button className="px-6 py-2 text-white rounded-lg bg-slate-800">
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
