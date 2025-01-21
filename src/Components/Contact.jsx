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
  const [packageType, setPackageType] = useState(""); // Add packageType here
  const [price, setPrice] = useState("");
  const [couples, setCouples] = useState("");
  const [accommodation, setAccommodation] = useState("");
  const [hotel, setHotel] = useState("");

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
  const tourPackageOptions = [
    { id: 1, name: "Luxury Honeymoon/Couple Tour Package" },
    { id: 2, name: "Honeymoon Couple / Family Tour Package" },
    { id: 3, name: "Private Luxury Honeymoon/Couple Tour Package" },
    { id: 4, name: "Deluxe Private Luxury Honeymoon/Couple Tour Package" },
    { id: 5, name: "Private Luxury Honeymoon/Couple Tour Package" },
    { id: 6, name: "Deluxe Private Luxury Honeymoon/Couple Tour Package" },
    { id: 7, name: "Luxury 3-Day Swat Tour Package" },
    { id: 8, name: "Luxury 2-Day Swat Tour Package" },
  ];

  const tourDurationOptions = [
    "4 Days 3 Nights",
    "3 Days 2 Nights",
    "7 Days 4 Nights (Karachi)",
    "4 days 3 Nights (Karachi)",
    "2 Days 1 Night",
  ];

  const tourDestinationOptions = [
    "Kalam",
    "Malam Jabba",
    "Mingora",
    "Ushu Forest",
    "Mahodand Lake",
    "White Palace",
  ];

  const packageTypeOptions = ["Executive Package", "Deluxe Accommodations"];

  const packagePriceOptions = [
    { id: 1, prices: { for1Couple: "₨ 80,000", for2Couples: "₨ 130,000" } },
    { id: 2, prices: { for1Couple: "₨ 45,000", for2Couples: "₨ 75,000" } },
    { id: 3, prices: { for1Couple: "₨ 95,000", for2Couples: "₨ 150,000" } },
    { id: 4, prices: { for1Couple: "₨ 60,000", for2Couples: "₨ 100,000" } },
    { id: 5, prices: { for1Couple: "₨ 65,000", for2Couples: "₨ 98,000" } },
    { id: 6, prices: { for1Couple: "₨ 38,000", for2Couples: "₨ 60,000" } },
    { id: 7, prices: "₨ 35,000" },
    { id: 8, prices: "₨ 20,000" },
  ];

  const coupleOptions = ["Single Couple", "Double Couple"];

  const accommodationTypeOptions = [
    "Executive Hotels",
    "Deluxe Accommodations",
  ];

  const hotelOptions = [
    "Malam Jabba Palace",
    "Burj Al Swat",
    "Swat Hilton",
    "Rock City Resort",
    "Honeymoon Hotel",
    "Hotel Liberty Bahrain",
    "Swat Palace",
    "Swastu Resorts",
    "Holiday Inn Kalam",
  ];

  const handleFormSwitch = (type) => setFormType(type);
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload).

    // 1. Collect the submitted form data.
    const formData = new FormData(e.target);

    // 2. Convert form data to a plain JavaScript object.
    const data = Object.fromEntries(formData.entries());

    // 3. Print the collected data to verify it works.
    console.log(data);

    // 4. Send the form data to Email.js.
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with Email.js Service ID
        "YOUR_TEMPLATE_ID", // Replace with Email.js Template ID
        data, // Form data collected as an object
        "YOUR_PUBLIC_KEY" // Replace with Email.js Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Form submitted successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to submit the form. Please try again.");
        }
      );
  };

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
          <form onSubmit={handleSubmit}>
            <h2 className="w-full mb-2 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
              Customize Your Budget Tour
            </h2>
            <p className="text-sm text-center xs:text-sm sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl text-slate-800">
              Tell us About yourself and Your desired Destination and we'll
              response you Soon
            </p>
            <div className="mb-4">
              <input type="hidden" name="formType" value="customizeTour" />
              <label className="block mb-2 font-semibold text-slate-700">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-none rounded-full outline-none"
                placeholder="Enter Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Phone Number
              </label>
              <input
                required
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
                required
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
                required
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
                required
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
                required
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
                required
              />
            </div>
            <button className="px-6 py-2 text-white rounded-full bg-slate-800">
              Submit
            </button>
          </form>
        )}

        {formType === "packageTour" && (
          <form onSubmit={handleSubmit}>
            <h2 className="w-full mb-2 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
              Book a Tour package
            </h2>
            {/* Name Input */}{" "}
            <input type="hidden" name="formType" value="packageTour" />
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
                required
              />
            </div>
            {/* Tour Package Options */}
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Tour Name
              </label>
              <select
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                value={packageName}
                onChange={(e) => setPackageName(e.target.value)}
              >
                <option value="">Select Tour Name</option>
                {tourPackageOptions.map((option) => (
                  <option key={option.id} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
            {/* Tour Destination Options */}
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Tour Destination
              </label>
              <select
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              >
                <option value="">Select Destination</option>
                {tourDestinationOptions.map((destination, index) => (
                  <option key={index} value={destination}>
                    {destination}
                  </option>
                ))}
              </select>
            </div>
            {/* Duration Options */}
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Package Duration
              </label>
              <select
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                <option value="">Select Duration</option>
                {tourDurationOptions.map((duration, index) => (
                  <option key={index} value={duration}>
                    {duration}
                  </option>
                ))}
              </select>
            </div>
            {/* Package Type */}
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Package Type
              </label>
              <select
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                value={packageType}
                onChange={(e) => setPackageType(e.target.value)}
              >
                <option value="">Select Package Type</option>
                {packageTypeOptions.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            {/* Couple Options */}
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Number of Couples
              </label>
              <select
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                value={couples}
                onChange={(e) => setCouples(e.target.value)}
              >
                <option value="">Select Couple Option</option>
                {coupleOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            {/* Price Options */}
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Package Price
              </label>
              <select
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                disabled={!couples} // Disable if no couple option is selected
              >
                <option value="">Select Price</option>
                {packagePriceOptions.map((option) => {
                  // Determine the price to show based on the couple selection
                  if (typeof option.prices === "object") {
                    if (couples === "Single Couple") {
                      return (
                        <option
                          key={option.id}
                          value={option.prices.for1Couple}
                        >
                          {"For One couple "}
                          {option.prices.for1Couple}
                        </option>
                      );
                    } else if (couples === "Double Couple") {
                      return (
                        <option
                          key={option.id}
                          value={option.prices.for2Couples}
                        >
                          {"For Double couples "}
                          {option.prices.for2Couples}
                        </option>
                      );
                    }
                  } else {
                    // Show single price for non-object prices
                    return (
                      <option key={option.id} value={option.prices}>
                        {option.prices}
                      </option>
                    );
                  }
                  return null; // Skip options not matching the condition
                })}
              </select>
            </div>
            {/* Accommodation Options */}
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Accommodation Type
              </label>
              <select
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                value={accommodation}
                onChange={(e) => setAccommodation(e.target.value)}
              >
                <option value="">Select Accommodation Type</option>
                {accommodationTypeOptions.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            {/* Hotel Options */}
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Hotel Name
              </label>
              <select
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                value={hotel}
                onChange={(e) => setHotel(e.target.value)}
              >
                <option value="">Select Hotel</option>
                {hotelOptions.map((hotel, index) => (
                  <option key={index} value={hotel}>
                    {hotel}
                  </option>
                ))}
              </select>
            </div>
            {/* Phone Input */}
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
          <form onSubmit={handleSubmit}>
            <h2 className="w-full mb-2 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
              Rent a Car or Service
            </h2>
            <div className="mb-4">
              {" "}
              <input type="hidden" name="formType" value="serviceForm" />
              <label className="block mb-2 font-semibold text-slate-700">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                placeholder="Enter Your Name"
                required
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
                required
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
