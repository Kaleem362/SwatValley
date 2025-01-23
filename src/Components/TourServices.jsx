import React from "react";
import {
  Truck,
  Mountain,
  Camera,
  Vegan,
  Calendar1,
  Package2,
  Users2,
  LanguagesIcon,
  InfoIcon,
  HotelIcon,
  CarFront,
  Phone,
} from "lucide-react";
import { AiFillPhone, AiOutlineWhatsApp } from "react-icons/ai";
import { MdAddIcCall } from "react-icons/md";

const TourServices = () => {
  const services = [
    {
      icon: CarFront,
      title: "Rent A Car / Taxi",
      desc: "Premium vehicle rental and taxi services for comfortable travel",
    },
    {
      icon: HotelIcon,
      title: "Hotel Accommodation",
      desc: "Quality lodging options across Swat Valley",
    },
    {
      icon: InfoIcon,
      title: "Tourist Information",
      desc: "Comprehensive guidance and support center",
    },
    {
      icon: LanguagesIcon,
      title: "Tour Guides",
      desc: "Professional guides fluent in English, Urdu, and Pashto",
    },
    {
      icon: Truck,
      title: "Pick & Drop",
      desc: "Convenient transportation from your location",
      packages: [
        { location: "Malam Jabba Pick/Drop", price: "Rs 5,500/-" },
        { location: "Kalam Pick/Drop", price: "Rs 7,000/-" },
        { location: "Gaben Jabba Pick/Drop", price: "Rs 6,000/-" },
        { location: "Marghuzar/White Palace Pick/Drop", price: "Rs 3,000/-" },
        { location: "Shangla Top/ YakhTangai Pick/Drop", price: "Rs 5,500/-" },
        { location: "Islamabad to Mingora", price: "Rs 10,000/-" },
        { location: "Islamabad to Malam Jabba", price: "Rs 15,000/-" },
        { location: "Peshawar to Swat", price: "Rs 8,000/-" },
        { location: "Peshawar to Malam Jabba", price: "Rs 13,500/-" },
        { location: "Peshawar to Kalam", price: "Rs 15,000/-" },
      ],
    },
    {
      icon: Calendar1,
      title: "Event Planning",
      desc: "Custom event organization in Swat Valley",
    },
    {
      icon: Package2,
      title: "Tour Packages",
      desc: "All-inclusive tour packages for every preference",
    },
    {
      icon: Users2,
      title: "Guest Services",
      desc: "Personalized attention for local and foreign tourists",
    },
  ];

  return (
    <div className="gap-4">
      <h1 className="w-full my-4 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
        Our Services
      </h1>
      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-6 px-6 my-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) =>
          service.title === "Pick & Drop" ? (
            <div
              key={index}
              className="col-span-1 p-6 transition-shadow duration-300 transform shadow-lg sm:col-span-2 lg:col-span-4 bg-slate-300 rounded-xl hover:shadow-xl hover:-translate-y-1 font-manrope"
            >
              <service.icon className="mb-4 w-14 h-14 text-slate-800" />
              <h3 className="flex flex-col items-center justify-between mb-2 text-3xl font-extrabold lg:flex lg:flex-row text-slate-800 font-Manrope">
                {service.title}
                <div className="flex flex-col items-center justify-around w-full text-sm lg:w-fit lg:items-center lg:justify-center xs:text-lg sm:text-lg lg:text-2xl font-Manrope">
                  <a
                    href="tel:+923489857193"
                    className="flex items-center gap-1 min-w-fit animate-fadeIn"
                  >
                    Contact Us :
                    <span className="font-normal underline">03489857193</span>
                    <AiFillPhone className="w-8 h-8 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:h-12 xl:w-12 text-slate-800" />
                  </a>
                  <a
                    href="https://wa.me/923489857193"
                    className="flex items-center gap-2 ml-2 min-w-fit animate-fadeIn "
                  >
                    {" "}
                    WhatsApp us at{" "}
                    <span className="font-normal underline">03489857193</span>
                    <AiOutlineWhatsApp className="w-8 h-8 p-1 text-white bg-green-500 rounded-full xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:h-12 xl:w-12" />
                  </a>
                </div>
              </h3>
              <p className="mb-4 text-lg text-slate-600">{service.desc}</p>
              <ul className="ml-8 text-lg text-slate-600 font-Manrope">
                {service.packages.map((pkg, pkgIndex) => (
                  <li key={pkgIndex} className="my-2 list-disc">
                    <div className="flex items-center justify-between w-full text-xs font-bold xs:text-sm sm:text-md md:text-lg lg:text-xl text-slate-800">
                      {pkg.location}

                      <strong className="p-1 ml-8 text-xs font-bold bg-white rounded-lg xs:text-sm sm:text-md md:text-lg lg:text-xl">
                        {pkg.price}
                      </strong>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div
              key={index}
              className="p-6 transition-shadow duration-300 transform shadow-lg bg-slate-300 rounded-xl hover:shadow-xl hover:-translate-y-1"
            >
              <service.icon className="w-12 h-12 mb-4 text-slate-800" />
              <h3 className="mb-2 text-2xl font-extrabold text-slate-800 font-Manrope">
                {service.title}
              </h3>
              <p className="text-lg text-slate-600 font-Manrope">
                {service.desc}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TourServices;
