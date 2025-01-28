import React, { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
const Contact = () => {
  const [formType, setFormType] = useState("customizeTour"); // Default form type
  const [kids, setKids] = useState(false);
  const [selectedCar, setSelectedCar] = useState("");
  const [message, setMessage] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [formResponse, setFormResponse] = useState(false);
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
                Destination
              </label>
              <input
                required
                type="text"
                className="w-full px-4 py-2 border-none rounded-full outline-none"
                placeholder="Where you want to travel..."
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
            <p className="my-2 font-semibold font-Manrope">
              Submit the Form , and We Will get back to you very Soon.
            </p>
            <button className="px-6 py-2 text-white rounded-full bg-slate-800">
              Submit
            </button>
          </form>
        )}

        {formType === "serviceForm" && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Create WhatsApp message with form data
              const name = e.target.elements.name.value;
              const phone = e.target.elements.phone.value;
              const car = selectedCar;
              const services = selectedServices.join(", ");

              // Format the message for WhatsApp
              const message = `New Service Request%0A
                                Name: ${name}%0A
                                Phone: ${phone}%0A
                                Selected Car: ${car}%0A
                                Requested Services:%0A${services}`;

              // WhatsApp API URL
              const whatsappURL = `https://wa.me/923489857193?text=${message}`;
              window.open(whatsappURL, "_blank");
            }}
          >
            <h2 className="w-full mb-2 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
              Rent a Car or Service
            </h2>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-700">
                Your Name
              </label>
              <input
                name="name"
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
                name="phone"
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
                required
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
                Select Your Services
              </label>
              <div className="flex flex-col">
                {servicesOptions.map((service) => (
                  <label key={service} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      value={service}
                      onChange={(e) => {
                        const value = e.target.value;
                        setSelectedServices((prev) =>
                          prev.includes(value)
                            ? prev.filter((s) => s !== value)
                            : [...prev, value]
                        );
                      }}
                      className="mr-2"
                    />
                    {service}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2 text-lg font-bold text-white transition-all duration-300 bg-green-600 border-2 border-green-600 rounded-lg "
              >
                Send WhatsApp <AiOutlineWhatsApp size={28} />
              </button>

              <a
                href="tel:+923489857193"
                className="flex items-center gap-2 px-6 py-2 text-lg font-bold text-white transition-all duration-300 border-2 rounded-lg bg-slate-600 border-slate-600 hover:text-slate-800 "
              >
                Call Now <IoCall size={28} />
              </a>
            </div>
            <br />
            <marquee
              href="tel:+923489857193"
              className="text-md text-slate-800 "
            >
              Call us for More information and Queries at +923489857193
            </marquee>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
