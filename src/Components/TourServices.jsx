import React from "react";
import {
  Truck,
  Calendar1,
  Package2,
  Users2,
  LanguagesIcon,
  InfoIcon,
  HotelIcon,
  CarFront,
} from "lucide-react";
import { AiFillPhone, AiOutlineWhatsApp } from "react-icons/ai";

const TourServices = () => {
  const services = [
    {
      icon: CarFront,
      title: "Rent A Car / Taxi",
      desc: "we provide cars for rent and for taxi services in swat valley for tour and your own occasions",
    },
    {
      icon: HotelIcon,
      title: "Hotel Accommodation",
      desc: "Providing the best luxury and executive hotel accommodation in Swat Valley, the hotels are equipped with all modern facilities",
    },
    {
      icon: InfoIcon,
      title: "Tourist Information",
      desc: "For local and foreign tourists, we provide information about the best places to visit in Swat Valley",
    },
    {
      icon: LanguagesIcon,
      title: "Tour Guides",
      desc: "professional guides that can talk in multiple languages ( urdu, English, and pusho language )",
    },
    {
      icon: Truck,
      title: "Pick & Drop",
      desc: "we are providing transportation services in swat, peshawar, islamabad, we are ready to pick you from your destination and drop you to your destination, we have multiple packages for pick and drop, and feel free to contact us for car booking and pick and drop services, you can call us from picking you from your destination if you are locating in peshawar islamabad or swat, we are providing pick and drop services in swat valley, peshawar, and islamabad",
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
      desc: "we can plan an event for you if you want to celebrate your birthday, wedding anniversary, or any other event, we can plan an event for you in swat valley, your happiness and satisfaction is our responsibility and our first priority",
    },
    {
      icon: Package2,
      title: "Tour Packages",
      desc: "All inclusive we are providing the best tour packages in swat valley and other northern areas of pakistan, the tour packages has multiple options and you can choose the best package for you, we are providing the best tour packages in swat valley, the tour packages are for families, groups, and couples, we are providing the best tour packages in swat valley, the tour packages are for families, groups, and couples",
    },
    {
      icon: Users2,
      title: "Guest Services",
      desc: "we are providing personalized attention to our special guests, coming from all over the world, your respect , care and satisfaction in every thick and thin is our responsibility, we are comitted to provide you the best of our services and make your trip memorable",
    },
  ];

  return (
    <>
      <div className="gap-4">
        <h1 className="w-full my-4 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
          Our Services
        </h1>

        <div className="grid grid-cols-1 gap-6 px-6 my-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) =>
            service.title === "Pick & Drop" ? (
              <div
                key={index}
                className="col-span-1 p-6 transition-shadow duration-300 transform shadow-lg sm:col-span-2 lg:col-span-4 bg-slate-300 rounded-xl hover:shadow-xl hover:-translate-y-1 font-manrope"
              >
                <service.icon className="w-12 h-12 mb-4 text-slate-800" />
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
                      WhatsApp us at
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
    </>
  );
};

export default TourServices;
