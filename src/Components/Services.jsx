import React, { useContext } from "react";
import vehicle from "../assets/Valley images/carcamping.jpg";
import CozyHotels from "../assets/Valley images/PC hotel malamjabba.jpg";
import Travel from "../assets/Valley images/travel.jpg";
import guide from "../assets/images/guide.jpg";
import ContactButton from "../Components/ContactButton";
import { Link } from "react-router";
import whatsappIcon from "../assets/icons-asset/whatsapp (1).png";
import { store } from "../assets/Store/Context";

const Services = () => {
  const { toursPackage, services } = useContext(store);

  return (
    <div className="flex flex-col items-start justify-center w-full h-auto gap-4 px-3 py-3 xl:px-10 xs:px-3 sm:px-4 md:px-6 lg:px-10 animate-fadeIn font-Manrope">
      <div className="flex flex-col items-start justify-start w-full gap-2 px-1 py-0 h-fit lg:py-10 sm:px-3 highlighted-tours xs:w-full sm:w-full md:w-full lg:w-full animate-fadeInFromBottom">
        <h1 className="w-full text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
          Highlight Tours
        </h1>
        <div className="flex flex-wrap items-center justify-start w-full md:my-4 xs:w-full sm:w-full md:w-full lg:w-full cards-container xs:px-3">
          {toursPackage.slice(0, 4).map((tour) => {
            return (
              <div
                className="relative z-50 w-full mx-auto mt-10 mb-20 rounded sm:w-56 xs:w-full md:w-52 lg:w-72 lg:mx-auto bg-slate-100 group lg:mb-0 animate-fadeInFromTop"
                key={tour.id}
              >
                <img
                  className="z-50 object-cover w-full h-64 rounded-md"
                  src={tour.Image}
                  alt={tour.packageName}
                ></img>
                <div className="absolute inset-0 bg-gray-700 rounded-md opacity-60 "></div>
                <div className="absolute inset-0 flex items-end justify-center">
                  <h2 className="w-full text-xl font-bold text-center text-white ">
                    {tour.packageName}
                    <br />
                    <div className="bg-slate-800">{tour.duration || "-"}</div>
                  </h2>
                </div>
                <div className="absolute flex items-center justify-center w-full gap-2 transition-all duration lg:mt-0 xs:-bottom-10 -bottom-10 sm:-bottom-10 lg:group-hover:-bottom-12 lg:-bottom-0 -z-50 buttons">
                  <Link to={`/tourdetails/tour/${tour.id}`}>
                    <button className="relative flex items-center px-10 py-2 overflow-hidden font-medium transition-all rounded-md bg-slate-800 group ">
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out rounded bg-slate-400 group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                      </span>
                      <span className="absolute bottom-0 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out rotate-180 rounded bg-slate-400 group-hover:-ml-4 group-hover:-mb-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full rounded-md bg-slate-600 group-hover:translate-x-0"></span>
                      <span className="relative w-full text-xs text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white md:text-lg xs:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                        Tour Details
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <Link
          className="px-6 py-3 mx-auto text-center text-white transition-all duration-1000 border-2 rounded-full shadow-xl xs:mx-auto w-fit border-red bg-gradient-to-r from-slate-400 to-slate-900 xs:mt-10 lg:mt-10 hover:bg-gradient-to-l hover:from-slate-400 hover:to-slate-900 sm:mx-auto"
          to={"/tourpackages"}
        >
          See All Tour Packages
        </Link>
      </div>
      <section className="w-full py-10 ">
        <div className="container mx-auto">
          <h2 className="w-full mb-2 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft ">
            Explore Our Tour Packages
          </h2>
          <p className="mb-10 text-lg text-center text-gray-600">
            Discover a range of tour options tailored to meet your unique
            preferences. Whether you're planning a family vacation, a
            budget-friendly adventure, or a private getaway, we’ve got you
            covered.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 text-center transition-all duration-300 bg-gray-200 rounded-lg hover:shadow-lg hover:shadow-black border-1 border-slate-800">
              <h3 className="mb-4 text-2xl font-bold text-gray-800">
                Customize Tour
              </h3>
              <p className="mb-6 text-gray-600">
                Create your dream tour! Choose destinations, activities, and
                plan a trip that fits your needs and budget.
              </p>
              <Link to={"/contact"}>
                <button className="px-4 py-2 text-white transition rounded-full bg-slate-600 hover:bg-slate-800">
                  Book Now
                </button>
              </Link>
            </div>
            <div className="p-6 text-center transition-all duration-300 bg-gray-200 rounded-lg hover:shadow-lg hover:shadow-black">
              <h3 className="mb-4 text-2xl font-bold text-gray-800">
                Family Tours
              </h3>
              <p className="mb-6 text-gray-600">
                Spend quality time with your loved ones! Our family-friendly
                packages include activities for all ages.
              </p>
              <Link to={"/contact"}>
                <button className="px-4 py-2 text-white transition rounded-full bg-slate-600 hover:bg-slate-800">
                  See Now
                </button>
              </Link>
            </div>
            <div className="p-6 text-center transition-all duration-300 bg-gray-200 rounded-lg hover:shadow-lg hover:shadow-black">
              <h3 className="mb-4 text-2xl font-bold text-gray-800">
                Foreigner Tours
              </h3>
              <p className="mb-6 text-gray-600">
                Enjoy amazing adventures without breaking the bank! Our budget
                packages offer great value and unforgettable experiences.
              </p>
              <Link to={"/tourpackages"}>
                <button className="px-4 py-2 text-white transition rounded-full bg-slate-600 hover:bg-slate-800">
                  View Packages
                </button>
              </Link>
            </div>
            <div className="p-6 text-center transition-all duration-300 bg-gray-200 rounded-lg hover:shadow-lg hover:shadow-black">
              <h3 className="mb-4 text-2xl font-bold text-gray-800">
                Private Tours
              </h3>
              <p className="mb-6 text-gray-600">
                Looking for exclusivity? Our customized tour packages ensure a
                personalized and luxurious travel experience.
              </p>
              <Link to={"/contact"}>
                <button className="px-4 py-2 text-white transition rounded-full bg-slate-600 hover:bg-slate-800">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full my-6 font-Manrope">
            <div className="container w-full">
              <div className="w-full text-justify">
                <h2 className="w-full mb-2 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft ">
                  Customize Your Perfect Tour
                </h2>
                <div className="w-full bg-white rounded-lg ">
                  <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    We specialize in creating personalized tour experiences
                    tailored exactly to your preferences. To help us craft your
                    perfect journey, please contact us with the following
                    information:
                  </p>
                  <ul className="mb-8 space-y-2 text-left text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 mr-3 rounded-full bg-slate-600"></span>
                      Number of travelers in your group
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 mr-3 rounded-full bg-slate-600"></span>
                      Preferred destinations or regions
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 mr-3 rounded-full bg-slate-600"></span>
                      Duration of your ideal trip
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 mr-3 rounded-full bg-slate-600"></span>
                      Specific interests (adventure, culture, relaxation, etc.)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 mr-3 rounded-full bg-slate-600"></span>
                      Accommodation preferences
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 mr-3 rounded-full bg-slate-600"></span>
                      Budget range for your trip
                    </li>
                  </ul>
                  <p className="mb-8 text-gray-700">
                    Our expert travel consultants will review your requirements
                    and create a custom itinerary that perfectly matches your
                    preferences. We'll get back to you within 24 hours with a
                    personalized proposal.
                  </p>
                  <div className="grid items-center w-full">
                    <Link
                      className="px-8 py-3 mx-auto text-lg font-semibold text-center text-white transition rounded-full bg-slate-600 hover:bg-slate-800"
                      to={"/contact"}
                    >
                      Start Planning Your Custom Tour
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1 className="w-full mb-2 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
        Services We offer
      </h1>
      <div className="flex flex-wrap justify-center w-full gap-10 xs:p-2 sm:p-4 card-container animate-fadeInFromTop">
        <div className="h-auto transition-all duration-300 bg-white border-2 rounded-lg shadow sm:w-72 xs border-slate-300 lg:hover:scale-105 animate-fadeInFromLeft">
          <img
            className="object-cover w-full h-auto rounded-t-lg"
            src={vehicle}
            alt=""
          />

          <div className="px-4 py-2 ">
            <h5 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl md:text-2xl">
              Luxury Transportation
            </h5>

            <p className="mb-4 text-sm font-normal text-gray-700 sm:text-base md:text-lg">
              We provide all types of vehicles for a comfortable ride both
              off-road and on-road. Your safety is our priority.
            </p>
          </div>
        </div>
        <div className="h-auto transition-all duration-300 bg-white border-2 rounded-lg shadow sm:w-72 xs border-slate-300 lg:hover:scale-105">
          <img
            className="object-cover w-full h-auto rounded-t-lg"
            src={CozyHotels}
            alt=""
          />

          <div className="px-4 py-2 ">
            <h5 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl md:text-2xl">
              Cozy Hotels
            </h5>

            <p className="mb-4 text-sm font-normal text-gray-700 sm:text-base md:text-lg">
              Enjoy comfort and luxury in our cozy hotels with exceptional
              service and serene locations, our hotel provides top-notch
              amenities.
            </p>
          </div>
        </div>
        <div className="h-auto transition-all duration-300 bg-white border-2 rounded-lg shadow sm:w-72 xs border-slate-300 lg:hover:scale-105">
          <img
            className="object-cover w-full h-auto rounded-t-lg"
            src={Travel}
            alt=""
          />

          <div className="px-4 py-2 ">
            <h5 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl md:text-2xl">
              Travel with Ease
            </h5>

            <p className="mb-4 text-sm font-normal text-gray-700 sm:text-base md:text-lg">
              Travel with ease and discover new horizons through seamless
              planning and curated experiences. Enjoy a hassle-free journey.
            </p>
          </div>
        </div>
        <div className="h-auto transition-all duration-300 bg-white border-2 rounded-lg shadow sm:w-72 xs border-slate-300 lg:hover:scale-105 animate-fadeInFromRight">
          <img
            className="object-cover w-full h-auto rounded-t-lg"
            src={guide}
            alt=""
          />

          <div className="px-4 py-2 ">
            <h5 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl md:text-2xl">
              Experienced Travelling Guide
            </h5>

            <p className="mb-4 text-sm font-normal text-gray-700 sm:text-base md:text-lg">
              Our guides ensure a safe, enriching journey, sharing local culture
              and history to make your trip enjoyable.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-6 py-10 Car-service">
        <div className="flex flex-col md:pr-20 header animate-fadeInFromTop">
          <h1 className="w-full mb-2 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
            Pick and Drop Service
          </h1>
          <div className="flex items-center justify-center w-full gap-4 my-2 animate-fadeInFromRight">
            <a href="https://wa.me/923489857193">
              <img
                src={whatsappIcon}
                alt="WhatsApp Icon"
                className="w-10 h-auto duration-200 max-w-24 min-w-12 animate-fadeInFromRight hover:scale-90 transition-scale"
              />
            </a>
            <Link to={"/contact"}>
              <ContactButton />
            </Link>
          </div>
        </div>
        <div className="py-4 ">
          <Link to={"/contact"}>
            <div className="flex flex-wrap justify-center gap-6">
              {services.map((service, index) => (
                <div
                  className="w-full p-6 transition-transform transform rounded-lg shadow-lg sm:w-64 bg-slate-300 hover:scale-105 hover:shadow-xl"
                  key={index}
                >
                  <h3 className="mb-2 text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </Link>
        </div>
      </div>

      <div className="py-10 why-choose-us">
        <h1 className="w-full mb-2 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft ">
          Why Choose us?
        </h1>
        <div className="p-4 my-4 bg-white rounded-lg shadow-lg xs:text-md sm:text-lg lg:text-xl xs:w-full sm:w-full md:w-full lg:w-full text-slate-500 animate-fadeInFromLeft">
          At <b>The Swat Tours</b>, we strive to make your travel experience
          seamless, comfortable, and memorable. Here’s why we stand out:
          <br />
          <ul className="bg-white">
            <li className="p-1 my-1 list-disc sm:ml-10 bg-slate-100 ">
              <b>Expert Tour Guides:</b>
              Our professional guides are well-versed in local history, culture,
              and attractions, ensuring an informative and enriching journey
              through Swat Valley.
            </li>
            <li className="p-1 my-1 list-disc sm:ml-10 bg-slate-100 ">
              <b>Reliable Tour Vehicles:</b>We provide well-maintained vehicles,
              including 4x4 options for off-road adventures, ensuring a smooth
              ride across all terrains.
            </li>
            <li className="p-1 my-1 list-disc sm:ml-10 bg-slate-100 ">
              <b>Comprehensive Packages</b>From car fuel and parking charges to
              accommodation in cozy, well-equipped hotels, we cover all
              tour-related expenses so you can focus on enjoying the journey.
            </li>
            <li className="p-1 my-1 list-disc sm:ml-10 bg-slate-100 ">
              <b>Tailored Services:</b>Whether it’s exploring scenic routes,
              visiting historical landmarks, or trekking through nature, we
              cater to your preferences to deliver a personalized travel
              experience.
            </li>
            <li className="p-1 my-1 list-disc sm:ml-10 bg-slate-100 ">
              <b>Hassle-Free Planning:</b>Leave the details to us! We manage
              logistics, so you can immerse yourself in the breathtaking beauty
              of Swat Valley without any worries.
            </li>
            <li className="p-1 my-1 list-disc sm:ml-10 bg-slate-100 ">
              <b>Customizable Tours:</b> Plan your perfect adventure with us!
              Our flexible tour options allow you to customize every detail—from
              destinations to activities—ensuring a personalized experience that
              fits your preferences and budget.
            </li>
          </ul>
          Choose <b>The Swat Tours</b> for a stress-free and unforgettable tour,
          where every detail is taken care of with care and expertise. Let’s
          make your travel dreams a reality!
        </div>
      </div>

      <div className="whyChooseSwat">
        <h1 className="w-full mb-2 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft ">
          Why Visit Swat Valley?
        </h1>
        <p className="p-4 my-4 xs:text-md sm:text-lg lg:text-xl  bg-white rounded-lg shadow-lg  xs:w-full sm:w-[520px] md:w-[600px] lg:w-[700px] text-slate-500 animate-fadeInFromLeft">
          <b>Swat Valley,</b> the Switzerland of the East! Whether you're
          seeking adventure, relaxation, or a mix of both, our tour services are
          designed to provide an unforgettable experience. From serene valleys
          and majestic peaks to luxurious accommodations and hassle-free travel,
          we ensure your trip is seamless and extraordinary.
        </p>
        <p className="p-4 my-4 bg-white rounded-lg shadow-lg xs:text-md sm:text-lg lg:text-xl xs:w-full sm:w-full md:w-full lg:w-full text-slate-500 animate-fadeInFromRight">
          <b>Swat Valley,</b> often called the{" "}
          <strong>"Switzerland of the East,"</strong> is a breathtaking
          destination known for its majestic mountains, lush green meadows, and
          crystal-clear rivers. Whether you are a nature enthusiast, an
          adventure seeker, or a history lover, Swat Valley has something for
          everyone. Explore the enchanting beauty of Malam Jabba, a popular ski
          resort, or wander through the serene landscapes of Kalam and Mingora.
          Discover the valley's rich cultural heritage with ancient Buddhist
          sites like Butkara Stupa and Udegram Monastery. Swat offers
          unparalleled experiences, from thrilling hikes and river rafting to
          relaxing by pristine lakes like Mahodand and Daral. With its welcoming
          locals, vibrant traditions, and year-round festivals, Swat Valley is
          truly a paradise waiting to be explored. Plan your trip today and
          immerse yourself in the unmatched beauty and charm of Swat Valley!{" "}
          <Link
            to={"/about"}
            className="text-sm underline font-Manrope text-slate-800"
          >
            read more
          </Link>
        </p>
        <button className="relative flex items-center px-4 py-2 overflow-hidden font-medium transition-all rounded-md bg-slate-800 xs:px-6 xs:py-3 group ">
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out rounded bg-slate-400 group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out rotate-180 rounded bg-slate-400 group-hover:-ml-4 group-hover:-mb-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full rounded-md bg-slate-600 group-hover:translate-x-0"></span>
          <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white xs:text-md sm:text-lg md:text-lg lg:text-xl xl:text-2xl">
            <Link to={"/gallery"}>Image Gallery</Link>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Services;
