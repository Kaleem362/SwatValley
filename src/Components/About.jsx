import React from "react";
import owner from "../assets/images/ownersix.jpg";
import campbackground from "../assets/images/ownerfive.jpg";
import snowysunny from "../assets/PackagesImages/snowysunny.jpg";
import malamjabba from "../assets/Valley images/malamjabba mountains.jpg";
import vehicle from "../assets/PackagesImages/vehicle.jpg";

import FAQ from "./FAQ";
import { Camera, Mountain, Vegan } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  const activities = [
    {
      icon: Mountain,
      title: "Natural Attractions",
      items: [
        "Trekking in Kalam Valley",
        "Skiing at Malam Jabba resort",
        "White Water Rafting in Swat River",
        "Fishing in Mahodand Lake",
        "Boating in scenic lakes",
      ],
    },
    {
      icon: Camera,
      title: "Cultural Attractions",
      items: [
        "Swat Museum exploration",
        "White Palace historical tours",
        "Bahrain town visits",
        "Mingora City bazaars",
      ],
    },
    {
      icon: Vegan,
      title: "Adventure Activities",
      items: [
        "Horse Riding trails",
        "Jeep Safari experiences",
        "Paragliding adventures",
        "Rock Climbing",
        "Zipline at Malamjabba",
        "Chairlift experiences",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>About us</title>
        <meta
          name="description"
          content="The Swat Tours is a leading tour operator in Swat Valley, offering premium travel services to local and international tourists. Our team is dedicated to providing unforgettable travel experiences, from honeymoon packages to day tours and more."
        />
        <link rel="canonical" href="https://theswattours.com/about" />
      </Helmet>
      <div className="w-full min-h-screen overflow-hidden text-justify font-Manrope">
        {" "}
        <div className="min-h-screen ">
          {/* Hero Section */}
          <div className="relative h-[400px] overflow-hidden ">
            <img
              src={campbackground}
              alt="Swat Valley"
              className="object-cover object-center w-full h-full"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75"></div>
          </div>

          {/* About Company Section */}
          <div className="px-6 py-10 mx-auto ">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {/* Company Description */}
              <div className="w-full space-y-4">
                <h2 className="text-5xl font-bold sm:text-center text-start text-slate-800">
                  Who We Are
                </h2>
                <p className="text-lg text-justify text-slate-700">
                  At <strong>The Swat Tours</strong>, we are passionate about
                  showcasing the breathtaking beauty of Swat Valley. Known as
                  the "Switzerland of Asia," Swat Valley is a paradise for
                  nature lovers, adventure seekers, and culture enthusiasts. Our
                  mission is to provide unforgettable travel experiences,
                  whether you're planning a honeymoon, a day tour, or an
                  extended stay.
                </p>
                <p className="text-lg text-slate-700">
                  With years of experience, we have built a reputation for
                  trust, reliability, and excellence. Our team is dedicated to
                  ensuring that every traveler enjoys a seamless and memorable
                  journey.
                </p>
              </div>

              {/* Owner's Image */}
              <div className="flex flex-col items-center justify-center gap-4 p-10 my-4">
                <div className="relative xs:w-[290px] md:w-[375px] xs:h-[290px] md:h-[375px] overflow-hidden rounded-full shadow-lg ">
                  <img
                    src={owner}
                    alt="Owner of The Swat Tours"
                    className="object-cover w-full h-full "
                    loading="lazy"
                  />
                </div>
                <h1 className="font-extrabold uppercase font-Manrope text-slate-800 xs:text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-3xl">
                  Fawad Khan
                </h1>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="p-6 !w-full">
            <div className="w-full">
              <h1 className="my-4 text-3xl font-bold text-start sm:text-center sm:text-4xl md:text-5xl lg:text-6xl text-slate-800 animate-fade-in">
                Your Journey Into Paradise
              </h1>

              <div className="w-full rounded-2xl">
                <p className="w-full text-lg leading-relaxed text-slate-700">
                  Welcome to The Swat Tours, where your dream Pakistani
                  adventure comes to life. From the moment you envision your
                  journey, our dedicated team crafts a seamless experience
                  tailored just for you. Whether you're newlyweds seeking a
                  romantic escapade in our enchanting honeymoon packages,
                  international travelers yearning to explore our cultural
                  treasures, or adventurers ready for immersive day tours, we
                  transform your aspirations into unforgettable memories. Our
                  premium fleet of vehicles ensures your travels through the
                  valley are as magnificent as the destinations themselves,
                  while our carefully curated network of luxury accommodations
                  provides peaceful havens amidst the mountains. With exclusive
                  pick-and-drop services from major cities like Islamabad,
                  Peshawar, and beyond, your paradise getaway begins the moment
                  you reach out to us. Every detail, from the warm welcome at
                  your arrival to the careful selection of scenic routes and
                  comfortable stays, is thoughtfully orchestrated to create not
                  just a tour, but a journey that touches your soul. Let us be
                  your gateway to experiencing the majestic beauty, rich
                  culture, and warm hospitality of Swat Valley – where every
                  path leads to wonder, and every moment becomes a cherished
                  memory.
                </p>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="container px-6 py-12 mx-auto">
            <h1 className="my-4 text-3xl font-bold text-start sm:text-center sm:text-4xl md:text-5xl lg:text-6xl text-slate-800 animate-fade-in">
              Explore Swat Valley
            </h1>
            <div className="grid grid-cols-1 gap-6 my-4 md:grid-cols-3">
              {/* Image 1 */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={snowysunny}
                  alt="Swat Valley"
                  className="object-cover w-full h-64"
                  loading="lazy"
                />
              </div>

              {/* Image 2 */}
              <div className="overflow-hidden rounded-lg ">
                <img
                  src={malamjabba}
                  alt="Swat Valley"
                  className="object-cover w-full h-64"
                  loading="lazy"
                />
              </div>

              {/* Image 3 */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={vehicle}
                  alt="Swat Valley"
                  className="object-cover w-full h-64"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-4 my-4">
          <h1 className="my-4 text-3xl font-bold text-start xs:text-center sm:text-4xl md:text-5xl lg:text-6xl text-slate-800 animate-fade-in">
            Discover the Hidden Gem of Pakistan: Swat Valley
          </h1>
        </div>
        <div className="p-6 mx-auto max-full">
          <div className=" rounded-xl animate-slide-in-left">
            <p className="mb-6 text-base leading-relaxed sm:text-lg md:text-xl sm:leading-loose text-slate-800">
              Tucked away in the northeastern part of Pakistan, Swat Valley is a
              breathtakingly beautiful destination that will leave you
              spellbound. Dubbed the "Switzerland of Asia," Swat Valley is a
              treasure trove of natural wonders, rich cultural heritage, and
              warm hospitality. We take pride in providing comprehensive tour
              services to both local and international visitors. Our team
              ensures a comfortable journey from pickup at your location to
              drop-off after an unforgettable tour experience.
            </p>
          </div>

          <div className=" rounded-xl animate-slide-in-right">
            <h2 className="mb-2 text-2xl font-bold text-start sm:text-center sm:text-3xl md:text-4xl text-slate-800">
              Natural Beauty
            </h2>

            <p className="text-lg leading-relaxed text-slate-800">
              Swat Valley is a nature lover's paradise, with its lush green
              meadows, towering mountains, and sparkling lakes. The valley is
              surrounded by the majestic Hindu Kush mountains, which offer
              breathtaking views and exciting trekking opportunities. The
              valley's scenic beauty is further enhanced by the Swat River,
              which flows gently through the valley and provides a soothing
              background noise.
            </p>
          </div>

          <div className="rounded-xl animate-slide-in-left">
            <h2 className="mb-2 text-2xl font-bold text-start sm:text-center sm:text-3xl md:text-4xl text-slate-800">
              Cultural Heritage
            </h2>
            <p className="mb-6 text-base leading-relaxed sm:text-lg md:text-xl sm:leading-loose text-slate-800">
              Swat Valley is steeped in history and culture, with a rich
              heritage that dates back to the ancient Gandhara civilization. The
              valley is home to numerous archaeological sites, including the
              famous Butkara Stupa and the ancient city of Mingora. The valley's
              cultural heritage is also reflected in its traditional crafts,
              music, and dance.
            </p>
          </div>

          <div className=" rounded-xl animate-slide-in-left">
            <h2 className="mb-2 text-2xl font-bold text-start sm:text-center sm:text-3xl md:text-4xl text-slate-800">
              Things to do
            </h2>
            <p className="mb-6 text-base leading-relaxed sm:text-lg md:text-xl sm:leading-loose text-slate-800">
              Swat Valley offers a wide range of activities for visitors,
              including: <br />
              - Trekking and hiking in the Hindu Kush mountains
              <br />
              - Skiing and snowboarding at the Malam Jabba ski resort
              <br />
              - White water rafting and kayaking in the Swat River -Fishing and
              boating in the valley's lakes and rivers
              <br />- Exploring the valley's archaeological sites and cultural
              heritage
            </p>
          </div>
          <div className=" rounded-xl animate-slide-in-left">
            <h2 className="mb-2 text-2xl font-bold text-start sm:text-center sm:text-3xl md:text-4xl text-slate-800">
              Plan Your Trip
            </h2>
            <p className="mb-6 text-base leading-relaxed sm:text-lg md:text-xl sm:leading-loose text-slate-800">
              Swat Valley is easily accessible by road or air, with the nearest
              airport located in Peshawar. The valley has a range of
              accommodation options, from luxury hotels to budget-friendly
              guesthouses. Whether you're a nature lover, a culture vulture, or
              an adventure seeker, Swat Valley has something for everyone. So
              come and discover the hidden gem of Pakistan – you won't be
              disappointed!
              <br />
              Here are some tourist-attractive activities in Swat Valley:
              <h1 className="mb-2 text-3xl font-bold text-slate-800">
                Natural Attractions{" "}
              </h1>
              <ol>
                <li>
                  1. Trekking: Explore Swat Valley's scenic trails, including
                  the famous Kalam Valley trek.
                </li>
                <li>
                  2. Skiing: Enjoy skiing and snowboarding at Malam Jabba ski
                  resort.
                </li>
                <li>
                  3. White Water Rafting: Experience the thrill of rafting in
                  Swat River.
                </li>
                <li>
                  4. Fishing: Try your luck at fishing in Swat River or Mahodand
                  Lake.
                </li>
                <li>
                  5. Boating: Enjoy boating in Mahodand Lake or other scenic
                  lakes.
                </li>
              </ol>
              <h1 className="mb-2 text-3xl font-bold text-slate-800">
                Cultural Attractions{" "}
              </h1>
              <ol>
                <li>
                  1. Swat Museum: Learn about the region's history, culture, and
                  archaeology.
                </li>
                <li>
                  2. White Palace: Visit the historic palace built in the early
                  20th century.
                </li>
                <li>
                  3. Bahrain: Explore the scenic town with a mix of modern and
                  traditional architecture.
                </li>
                <li>
                  4. Mingora City: Visit the city's bazaars, mosques, and
                  historic sites.
                </li>
              </ol>
              <h1 className="mb-2 text-3xl font-bold text-slate-800">
                Adventure Activities{" "}
              </h1>
              <ol>
                <li>
                  1. Horse Riding: Explore Swat Valley's scenic trails on
                  horseback.
                </li>
                <li>
                  2. Jeep Safari: Take a thrilling jeep ride through Swat
                  Valley's rugged terrain.
                </li>
                <li>
                  3. Air Cycle: Experience the thrill of Air Cycling in Swat
                  Valley.
                </li>
                <li>
                  4. Rock Climbing: Challenge yourself with rock climbing in
                  Swat Valley's scenic mountains.
                </li>
                <li>
                  5. Zipline You can enjoy height adventure at zip of Malamjabba
                </li>
                <li>
                  6. Chairlift At the top of mountain view here is chairlift an
                  unforgettable experience
                </li>
              </ol>
              <h1 className="mb-2 text-3xl font-bold text-slate-800">
                Relaxation and Leisure{" "}
              </h1>
              <ol>
                <li>
                  1. Camping: Set up camp in Swat Valley's scenic meadows and
                  enjoy the peaceful surroundings.
                </li>
                <li>
                  2. Birdwatching: Spot various bird species in Swat Valley's
                  forests and meadows.
                </li>
                <li>
                  3. Photography: Capture the breathtaking scenery and cultural
                  heritage of Swat Valley.
                </li>
                <li>
                  4. Yoga and Meditation: Practice yoga and meditation in Swat
                  Valley's serene environment.
                </li>
              </ol>
              <h1 className="mb-2 text-3xl font-bold text-slate-800">
                Festivals & Events{" "}
              </h1>
              <ol>
                <li>
                  1. Swat Festival: Attend the annual Swat Festival, which
                  showcases the region's culture, music, and food.
                </li>
                <li>
                  2. Summer Festival: Enjoy the summer festival in Swat Valley,
                  which features music, dance, and cultural performances.
                </li>
              </ol>
            </p>
            <FAQ />
          </div>
          <div className="grid grid-cols-1 gap-8 my-10 md:grid-cols-3">
            {activities.map((category, index) => (
              <div
                key={index}
                className="p-6 transition-transform duration-300 transform bg-white shadow-lg rounded-xl hover:-translate-y-2"
              >
                <category.icon className="w-12 h-12 mb-4 text-slate-800" />
                <h3 className="mb-4 text-xl font-bold text-slate-800">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-2 text-slate-700"
                    >
                      <div className="w-2 h-2 rounded-full bg-slate-800" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="p-8 text-center bg-slate-800 rounded-xl">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Ready to Experience Swat Valley?
            </h2>
            <p className="mb-6 text-lg text-slate-200">
              Book your tour now and get ready for the adventure of a lifetime!
            </p>
            <Link
              to={"/contact"}
              className="px-8 py-3 font-semibold transition-colors duration-300 bg-white rounded-lg text-slate-800 hover:bg-slate-100"
            >
              Book Your Tour with us
            </Link>
          </div>
        </div>
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideInLeft {
            from {
              transform: translateX(-100px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slideInRight {
            from {
              transform: translateX(100px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes widthAnimation {
            from {
              width: 0;
            }
            to {
              width: 6rem;
            }
          }

          .animate-fade-in {
            animation: fadeIn 1s ease-out;
          }

          .animate-slide-in-left {
            animation: slideInLeft 1s ease-out;
          }

          .animate-slide-in-right {
            animation: slideInRight 1s ease-out;
          }

          .animate-width {
            animation: widthAnimation 1s ease-out;
          }
        `}</style>
      </div>
    </>
  );
};

export default AboutUs;
