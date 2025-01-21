import React, { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
const Contact = () => {
  const [formType, setFormType] = useState("customizeTour"); // Default form type
  const [kids, setKids] = useState(false);
  const [selectedCar, setSelectedCar] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [packageName, setPackageName] = useState("");
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [message, setMessage] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const carOptions = [
    "Prado Jeep",
    "Corolla Car",
    "Prius",
    "APV",
    "BRV Seven Seater",
  ];
  const servicesOptions = [
    "Rent A Car or Taxi service",
    "Hotal accommodation",
    "Tourist information center",
    "Tours Guide (English, Urdu and poshto) spoken",
    "Pick and Drop services",
    "Events planning",
    "Tours packages",
  ];

  const handleFormSwitch = (type) => setFormType(type);

  return (
    <div className="container w-full p-6 mx-auto my-10">
      {/* Header Section */}
      <h1 className="w-full my-2 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
        Contact Us
      </h1>
      <p className="my-2 text-xl text-start text-slate-600">
        Get in touch with us for personalized tour packages, booking a tour, or
        renting a car for your travel needs in Swat and beyond.
      </p>
      <p className="my-2 text-xl text-center underline font-Manrope">
        Select your Desire Form
      </p>
      {/* Form Selection Buttons */}
      <div className="flex justify-center my-2 mb-8 space-x-4 font-Manrope">
        <button
          onClick={() => handleFormSwitch("customizeTour")}
          className={`px-6 xs:px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 text-[10px] xs:text-sm sm:text-sm md:text-lg lg:text-xl xl:text-2xl py-2 font-semibold rounded-full ${
            formType === "customizeTour"
              ? "bg-slate-800 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Customize Budget Tour
        </button>
        <button
          onClick={() => handleFormSwitch("packageTour")}
          className={`px-6 xs:px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 py-2 font-semibold rounded-full text-[10px] xs:text-sm sm:text-sm md:text-lg lg:text-xl xl:text-2xl ${
            formType === "packageTour"
              ? "bg-slate-800 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Package Tour
        </button>
        <button
          onClick={() => handleFormSwitch("serviceForm")}
          className={`px-6 xs:px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 py-2 font-semibold rounded-full text-[10px] xs:text-sm sm:text-sm md:text-lg lg:text-xl xl:text-2xl ${
            formType === "serviceForm"
              ? "bg-slate-800 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Service Form
        </button>
      </div>
      <p className="my-2 text-xs text-center xs:text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-slate-800">
        Book a Tour with us Fill the Form below and we'll Call you.
        <br />
        For Urgency Call us on{" "}
      </p>
      <div className="flex items-center justify-center w-full p-2 my-2 text-xs text-center buttons xs:text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
        <a
          href="tel:+923489857193"
          className="flex items-center justify-center mx-2 text-xs font-semibold text-center underline xs:text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl"
        >
          <IoCall className="text-xl xs:text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl" />
          +923489857193
        </a>
        {" / "}
        <a
          href="https://wa.me/923489857193"
          className="flex items-center justify-center mx-2 text-xs font-semibold text-center xs:text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl"
        >
          WhatsApp Us
          <AiOutlineWhatsApp className="mx-1 text-xl text-green-500 xs:text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl" />
        </a>
      </div>

      {/* Conditional Forms */}
      <div className="p-6 my-2 rounded-lg shadow-xl bg-slate-400 shadow-slate-700 font-Manrope">
        {formType === "customizeTour" && (
          <form>
            <h2 className="w-full mb-2 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
              Customize Your Budget Tour
            </h2>
            <p className="text-sm text-center xs:text-sm sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl text-slate-800">
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

            <div className="flex gap-2 mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Do you have kids?
              </label>
              <input
                type="checkbox"
                onChange={(e) => setKids(e.target.checked)}
                className="w-5 h-5 mr-2 border-none outline-none"
              />
              Yes
            </div>

            {kids && (
              <div className="mb-4">
                <label className="block mb-2 font-semibold text-slate-700">
                  Number of Kids
                </label>
                <select className="w-full px-4 py-2 border border-none rounded-lg outline-none">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700 font-Manrope">
                Write Your Message
              </label>
              <textarea
                type="text"
                onChange={(e) => setMessage(e.target.value)}
                maxLength={100}
                rows={5}
                className="mr-2 w-[70%] p-2 rounded-lg border-none outline-none"
                value={message}
                placeholder="Write a message"
              />
            </div>
            <button className="px-6 py-2 text-white rounded-full bg-slate-800">
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
                Tour Name
              </label>
              <input
                type="text"
                value={packageName}
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                placeholder="Tell us Tour Name"
                onChange={(e) => setPackageName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Tour Destination
              </label>
              <input
                type="text"
                value={destination}
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                placeholder="where you want to travel..."
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                package Duration days
              </label>
              <input
                type="text"
                value={duration}
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                placeholder="how Many days tour..."
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
            {/* <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Package Price
              </label>
              <input
                type="text"
                value={packagePrice}
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                placeholder="Package Price"
                onChange={(e) => setPackagePrice(e.target.value)}
              />
            </div> */}
            {/* <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Accommodation
              </label>
              <input
                type="text"
                value={accommodation}
                onChange={(e) => setAccommodation(e.target.value)}
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                placeholder="Accommodation"
              />
            </div> */}
            {/* <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Transportation
              </label>
              <input
                type="text"
                value={transportation}
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                onChange={(e) => setTranportation(e.target.value)}
                placeholder="Transportation"
              />
            </div> */}

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
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                select Your Service
              </label>
              <select
                className="w-full px-8 py-2 border-none rounded-full outline-none"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
              >
                <option value="">Select a service</option>
                {servicesOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
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
