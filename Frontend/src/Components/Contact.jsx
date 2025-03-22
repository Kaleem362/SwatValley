import React, { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import Loader from "../Components/Loader";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formType, setFormType] = useState("customizeTour");
  const [kids, setKids] = useState(false);
  const [selectedCar, setSelectedCar] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [loading, setLoading] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    userName: "",
    phoneNumber: "",
    destination: "",
    totalMembers: "",
    males: "",
    females: "",
    message: "",
  });

  // Error state
  const [errors, setErrors] = useState({
    userName: "",
    phoneNumber: "",
    destination: "",
    totalMembers: "",
    males: "",
    females: "",
    message: "",
  });

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

  const validateField = (name, value) => {
    switch (name) {
      case "userName":
        return value.trim() === ""
          ? "Name is required"
          : value.length < 2
          ? "Name must be at least 2 characters"
          : "";
      case "phoneNumber":
        return value.trim() === ""
          ? "Phone number is required"
          : !/^\d{10,}$/.test(value)
          ? "Please enter a valid phone number"
          : "";
      case "destination":
        return value.trim() === "" ? "Destination is required" : "";
      case "totalMembers":
        return value.trim() === ""
          ? "Total members is required"
          : isNaN(value) || value <= 0
          ? "Please enter a valid number"
          : "";
      case "males":
        return value.trim() === ""
          ? "Number of males is required"
          : isNaN(value) || value < 0
          ? "Please enter a valid number"
          : "";
      case "females":
        return value.trim() === ""
          ? "Number of females is required"
          : isNaN(value) || value < 0
          ? "Please enter a valid number"
          : "";
      case "message":
        return value.trim() === ""
          ? "Message is required"
          : value.length < 10
          ? "Message must be at least 10 characters"
          : "";
      default:
        return "";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const templateParams = {
        user_name: formData.userName || "No Name Provided ",
        user_phone: formData.phoneNumber || "No Phone number Provided",
        package_name:
          formData.packageName || "No package Name for customized Tours",
        destinations: formData.destination
          ? formData.destination
          : "No Destination Entered",
        duration: formData.duration || "No duration for customized Tours",
        price: formData.price || "Price are only for tour packages",
        accommodation:
          formData.accommodation ||
          "No accommodation Specified for customized Tours",
        transportation:
          formData.transportation ||
          "No transportation Specified for customized Tours",
        total_members: formData.totalMembers || "Not Provided",
        males: formData.males || 0,
        females: formData.females || 0,
        has_kids: kids !== undefined ? (kids ? "Yes" : "No") : "Not Specified",
        customer_message: formData.message || "No Message Provided",
      };

      const result = await emailjs.send(
        "service_mrk3x8a",
        "template_tdnpfww",
        templateParams,
        "Pt_mzuyRqieukIXdt"
      );

      setFormData({
        userName: "",
        phoneNumber: "",
        destination: "",
        totalMembers: "",
        males: "",
        females: "",
        message: "",
      });
      setKids(false);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to submit the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {" "}
      <div className="container w-full p-6 mx-auto my-4">
        <h1 className="w-full my-2 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromTop">
          Contact Us
        </h1>

        <div className="flex flex-col items-center justify-center mb-4 space-x-4 font-Manrope">
          <div className="w-full text-center font-Manrope">
            <small className="text-lg ">Select Your desired Form here</small>
          </div>
          <div className="flex items-center justify-center w-full gap-2 my-2 xs:gap-4 buttons">
            <button
              onClick={() => setFormType("customizeTour")}
              className={`px-6 xs:px-4 sm:px-3 md:px-4 lg:px-5 xl:px-6 text-[12px]  xs:text-[15px] sm:text-sm md:text-lg lg:text-xl xl:text-2xl py-2 font-semibold rounded-full ${
                formType === "customizeTour"
                  ? "bg-slate-800 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Customize Budget Tour
            </button>

            <button
              onClick={() => setFormType("serviceForm")}
              className={`px-6 xs:px-4 sm:px-3 md:px-4 lg:px-5 xl:px-6 text-[12px]  xs:text-[15px] sm:text-sm md:text-lg lg:text-xl xl:text-2xl py-2 font-semibold rounded-full ${
                formType === "serviceForm"
                  ? "bg-slate-800 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Service Form
            </button>
          </div>
        </div>

        <div className="p-6 my-2 rounded-lg shadow-xl bg-slate-400 shadow-slate-700 font-Manrope">
          {formType === "customizeTour" && (
            <form onSubmit={handleSubmit}>
              <h2 className="text-3xl font-extrabold text-center xs:text-3xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-slate-800">
                Customize Tour Form
              </h2>
              <p className="my-2 text-center xs:text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-slate-800">
                Fill the Form below for planning a Customize tour , let us know
                how many persons you are, and where you want to travel we get
                back to you for customizing a tour according to your budget.
              </p>
              <div className="my-4">
                <label className="block mb-2 font-semibold text-slate-700">
                  Your Name
                </label>
                <input
                  type="text"
                  name="userName"
                  className={`w-full px-4 py-2 border rounded-full outline-none ${
                    errors.userName ? "border-red-500" : "border-none"
                  }`}
                  placeholder="Enter Name"
                  value={formData.userName}
                  onChange={handleInputChange}
                />
                {errors.userName && (
                  <p className="mt-1 text-sm text-red-500">{errors.userName}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-slate-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  className={`w-full px-4 py-2 border rounded-full outline-none ${
                    errors.phoneNumber ? "border-red-500" : "border-none"
                  }`}
                  placeholder="Enter Phone Number..."
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
                {errors.phoneNumber && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-slate-700">
                  Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  className={`w-full px-4 py-2 border rounded-full outline-none ${
                    errors.destination ? "border-red-500" : "border-none"
                  }`}
                  placeholder="Where you want to travel..."
                  value={formData.destination}
                  onChange={handleInputChange}
                />
                {errors.destination && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.destination}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-slate-700">
                  Number of Members
                </label>
                <input
                  type="number"
                  name="totalMembers"
                  className={`w-full px-4 py-2 border rounded-full outline-none ${
                    errors.totalMembers ? "border-red-500" : "border-none"
                  }`}
                  placeholder="Amount of Persons..."
                  value={formData.totalMembers}
                  onChange={handleInputChange}
                />
                {errors.totalMembers && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.totalMembers}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-slate-700">
                  Number of Males
                </label>
                <input
                  type="number"
                  name="males"
                  className={`w-full px-4 py-2 border rounded-full outline-none ${
                    errors.males ? "border-red-500" : "border-none"
                  }`}
                  placeholder="No of males..."
                  value={formData.males}
                  onChange={handleInputChange}
                />
                {errors.males && (
                  <p className="mt-1 text-sm text-red-500">{errors.males}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-slate-700">
                  Number of Females
                </label>
                <input
                  type="number"
                  name="females"
                  className={`w-full px-4 py-2 border rounded-full outline-none ${
                    errors.females ? "border-red-500" : "border-none"
                  }`}
                  placeholder="No of Females..."
                  value={formData.females}
                  onChange={handleInputChange}
                />
                {errors.females && (
                  <p className="mt-1 text-sm text-red-500">{errors.females}</p>
                )}
              </div>

              <div className="flex items-center gap-2 mb-4">
                <label className="block font-semibold text-slate-700">
                  Do you have kids?
                </label>
                <input
                  type="checkbox"
                  checked={kids}
                  onChange={(e) => setKids(e.target.checked)}
                  className="w-6 h-6 "
                />
                Yes
              </div>

              {kids && (
                <div className="mb-4">
                  <label className="block mb-2 font-semibold text-slate-700">
                    Number of Kids
                  </label>
                  <select className="w-full px-4 py-2 border-none rounded-lg outline-none">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-slate-700">
                  Write a Message
                </label>
                <textarea
                  name="message"
                  className={`w-full p-3 rounded-lg outline-none ${
                    errors.message ? "border-red-500" : "border-none"
                  }`}
                  rows={5}
                  placeholder="Write a message...."
                  value={formData.message}
                  onChange={handleInputChange}
                  maxLength={100}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {loading && <Loader />}

              <button
                type="submit"
                className="px-6 py-2 text-white transition-all rounded-full bg-slate-800 hover:bg-slate-700 hover:scale-110 hover:translate-x-1 hover:-skew-y-2"
                disabled={loading}
              >
                Send Details
              </button>
            </form>
          )}

          {formType === "serviceForm" && (
            <form
              onSubmit={(e) => {
                e.preventDefault();

                const name = e.target.elements.name.value;
                const phone = e.target.elements.phone.value;
                const car = selectedCar;
                const services = selectedServices.join(", ");
                if (!name || !phone || !car || !services) {
                  alert("please fill the input forms first");
                  return;
                }

                const message = `New Service Request%0A
                                Name: ${name}%0A
                                Phone: ${phone}%0A
                                Selected Car: ${car}%0A
                                Requested Services:%0A${services}`;

                const whatsappURL = `https://wa.me/923489857193?text=${message}`;
                window.open(whatsappURL, "_blank");

                e.target.reset();
              }}
            >
              <h3 className="w-full mb-2 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromTop">
                Service Form
              </h3>
              <p className="text-center text-slate-800 xs:text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl 2xl:text-3xl">
                Fill the service form with the below required data and make sure
                to send the details via whatsapp, if invain, <br /> Try Calling
                on the Phone Number
              </p>
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
                  name="selectedCar"
                  value={selectedCar}
                  onChange={(e) => setSelectedCar(e.target.value)}
                  className="w-64 px-4 py-2 border-none rounded-full outline-none accent-slate-800"
                >
                  {carOptions.map((car, index) => (
                    <option
                      key={index}
                      value={car}
                      className="text-slate-800 bg-slate-100"
                    >
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
                        className="w-5 h-5 mr-2 text-slate-800"
                      />
                      {service}
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2 font-bold text-white transition-all duration-300 bg-green-600 border-2 border-green-600 rounded-lg text-md xs:px-4 sm:px-4 md:px-5 "
                >
                  Send <span className="hidden md:visible">Whatsapp</span>{" "}
                  <AiOutlineWhatsApp size={28} />
                </button>

                <a
                  href="tel:+923489857193"
                  className="flex items-center gap-2 px-6 py-2 text-lg font-bold text-white transition-all duration-300 border-2 rounded-lg bg-slate-600 border-slate-600 hover:text-slate-800 "
                >
                  Call us <IoCall size={28} />
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
    </>
  );
};

export default Contact;
