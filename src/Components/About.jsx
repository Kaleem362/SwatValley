import React from "react";

import FAQ from "./FAQ";
import { Camera, Mountain, Vegan } from "lucide-react";

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
    <div className="w-full min-h-screen py-10 overflow-hidden ">
      {/* Header Section */}
      <div className="w-full mb-16">
        <h1 className="mb-2 text-5xl font-bold text-center md:text-5xl text-slate-800 animate-fade-in">
          Discover the Hidden Gem of Pakistan: Swat Valley
        </h1>
        <div className="w-24 h-1 mx-auto mb-8 bg-slate-800 animate-width" />
      </div>

      {/* Main Content */}
      <div className="p-6 mx-auto space-y-10 max-full">
        {/* Introduction */}
        <div className="p-6 bg-white shadow-lg rounded-xl animate-slide-in-left">
          <p className="mb-6 text-lg leading-relaxed text-slate-800">
            Tucked away in the northeastern part of Pakistan, Swat Valley is a
            breathtakingly beautiful destination that will leave you spellbound.
            Dubbed the "Switzerland of Asia," Swat Valley is a treasure trove of
            natural wonders, rich cultural heritage, and warm hospitality. We
            take pride in providing comprehensive tour services to both local
            and international visitors. Our team ensures a comfortable journey
            from pickup at your location to drop-off after an unforgettable tour
            experience.
          </p>
        </div>

        {/* Natural Beauty Section */}
        <div className="p-8 bg-white shadow-lg rounded-xl animate-slide-in-right">
          <h2 className="mb-2 text-3xl font-bold text-slate-800">
            Natural Beauty
          </h2>
          <p className="text-lg leading-relaxed text-slate-800">
            Swat Valley is a nature lover's paradise, with its lush green
            meadows, towering mountains, and sparkling lakes. The valley is
            surrounded by the majestic Hindu Kush mountains, which offer
            breathtaking views and exciting trekking opportunities. The valley's
            scenic beauty is further enhanced by the Swat River, which flows
            gently through the valley and provides a soothing background noise.
          </p>
        </div>

        {/* Cultural Heritage */}
        <div className="p-8 bg-white shadow-lg rounded-xl animate-slide-in-left">
          <h2 className="mb-2 text-3xl font-bold text-slate-800">
            Cultural Heritage
          </h2>
          <p className="text-lg leading-relaxed text-slate-800">
            Swat Valley is steeped in history and culture, with a rich heritage
            that dates back to the ancient Gandhara civilization. The valley is
            home to numerous archaeological sites, including the famous Butkara
            Stupa and the ancient city of Mingora. The valley's cultural
            heritage is also reflected in its traditional crafts, music, and
            dance.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="p-8 bg-white shadow-lg rounded-xl animate-slide-in-left">
          <h2 className="mb-2 text-3xl font-bold text-slate-800">
            Things to do
          </h2>
          <p className="text-lg leading-relaxed text-slate-800">
            Swat Valley offers a wide range of activities for visitors,
            including: <br />- Trekking and hiking in the Hindu Kush mountains
            <br /> - Skiing and snowboarding at the Malam Jabba ski resort
            <br /> - White water rafting and kayaking in the Swat River -
            Fishing and boating in the valley's lakes and rivers
            <br /> - Exploring the valley's archaeological sites and cultural
            heritage
          </p>
        </div>
        <div className="p-8 bg-white shadow-lg rounded-xl animate-slide-in-left">
          <h2 className="mb-2 text-3xl font-bold text-slate-800">
            Plan Your Trip
          </h2>
          <p className="text-lg leading-relaxed text-slate-800">
            Swat Valley is easily accessible by road or air, with the nearest
            airport located in Peshawar. The valley has a range of accommodation
            options, from luxury hotels to budget-friendly guesthouses. Whether
            you're a nature lover, a culture vulture, or an adventure seeker,
            Swat Valley has something for everyone. So come and discover the
            hidden gem of Pakistan – you won't be disappointed!
            <br />
            Here are some tourist-attractive activities in Swat Valley:
            <h1 className="mb-2 text-3xl font-bold text-slate-800">
              Natural Attractions{" "}
            </h1>
            <ol>
              <li>
                1. Trekking: Explore Swat Valley's scenic trails, including the
                famous Kalam Valley trek.
              </li>
              <li>
                2. Skiing: Enjoy skiing and snowboarding at Malam Jabba ski
                resort.
              </li>
              <li>
                3. White Water Rafting: Experience the thrill of rafting in Swat
                River.
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
                4. Mingora City: Visit the city's bazaars, mosques, and historic
                sites.
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
                2. Jeep Safari: Take a thrilling jeep ride through Swat Valley's
                rugged terrain.
              </li>
              <li>
                3. Air Cycle: Experience the thrill of Air Cycling in Swat
                Valley.
              </li>
              <li>
                4. Rock Climbing: Challenge yourself with rock climbing in Swat
                Valley's scenic mountains.
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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

        {/* Call to Action */}
        <div className="p-8 text-center shadow-lg bg-slate-800 rounded-xl">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Ready to Experience Swat Valley?
          </h2>
          <p className="mb-6 text-lg text-slate-200">
            Book your tour now and get ready for the adventure of a lifetime!
          </p>
          <button className="px-8 py-3 font-semibold transition-colors duration-300 bg-white rounded-lg text-slate-800 hover:bg-slate-100">
            Book Now
          </button>
        </div>
      </div>

      {/* CSS Animations */}
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
  );
};

export default AboutUs;
