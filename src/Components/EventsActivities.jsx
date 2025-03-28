import React from "react";
import winterfestival from "./../assets/PackagesImages/swattour.jpg";
import swatsummerfestival from "./../assets/PackagesImages/swatsummerfestival.jpg";
import boating from "./../assets/PackagesImages/boating.jpg";
import horseriding from "./../assets/PackagesImages/horseriding.jpg";
import BoneFire from "./../assets/PackagesImages/BoneFire.jpg";
import KalamJeep from "./../assets/PackagesImages/KalamJeep.jpg";
import Eidulfitar from "./../assets/PackagesImages/Eidulfitar.jpg";
import Eiduladha from "./../assets/PackagesImages/Eiduladha.jpg";
import culturefestival from "./../assets/PackagesImages/culturefestival.jpg";
import chairlift from "./../assets/PackagesImages/chairlift.jpg";
import Zipline from "./../assets/PackagesImages/Zipline.jpg";
import waterafting from "./../assets/PackagesImages/waterafting.jpg";
import snowski from "./../assets/PackagesImages/snowski.jpg";
import BBQ from "./../assets/PackagesImages/BBQ.jpeg";
import musicnight from "./../assets/PackagesImages/musicnight.jpeg";
import candlelight from "./../assets/PackagesImages/candlelight.jpeg";
import birthdayparty from "./../assets/PackagesImages/birthdayparty.jpeg";
import marriageanni from "./../assets/PackagesImages/marriageanni.jpeg";
import decoratedroom from "./../assets/PackagesImages/decoratedroom.jpeg";
import fishing from "./../assets/PackagesImages/fishing.jpeg";
import photography from "./../assets/PackagesImages/photography.jpeg";
import { useScrollAnimation } from "./useScrollAnimation";

const EventsActivities = () => {
  const { ref: eventsRef, isVisible: eventsVisible } = useScrollAnimation(0.1);
  const { ref: activitiesRef, isVisible: activitiesVisible } =
    useScrollAnimation(0.1);

  const events = [
    { name: "Swat Summer Festival", image: swatsummerfestival },
    { name: "Swat Winter Festival", image: winterfestival },
    { name: "Culture's Festival", image: culturefestival },
    { name: "Eid-ul-Fitr", image: Eidulfitar },
    { name: "Eid-ul-Adha", image: Eiduladha },
    { name: "Kalam Jeep Racing Game and Others", image: KalamJeep },
  ];

  const activities = [
    { name: "Chairlift", image: chairlift },
    { name: "Zipline", image: Zipline },
    { name: "Snow ski season", image: snowski },
    { name: "White water rafting", image: waterafting },
    { name: "Boating", image: boating },
    { name: "Horse riding", image: horseriding },
    { name: "Bone fire", image: BoneFire },
    { name: "Barbeque (BBQ)", image: BBQ },
    { name: "Musical night", image: musicnight },
    { name: "Candle night dinner", image: candlelight },
    { name: "Birthday party", image: birthdayparty },
    { name: "Marriage anniversary", image: marriageanni },
    { name: "Decorated Rooms", image: decoratedroom },
    { name: "Photography", image: photography },
    { name: "Fishing", image: fishing },
  ];

  return (
    <>
      <div className="w-full min-h-screen p-8 font-Manrope">
        {/* Events Section */}
        <div
          ref={eventsRef}
          className={`transition-opacity duration-1000 ${
            eventsVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="w-full my-4 text-6xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl font-Manrope">
            Events
          </h1>
          <p className="px-2 my-4 text-justify bg-white rounded-lg xs:text-md sm:text-lg lg:text-xl xs:w-full text-slate-500">
            Celebrate Life’s Special Moments with Unforgettable Tours" At The
            Swat Tours, we turn your celebrations into extraordinary
            experiences. Whether it’s a romantic honeymoon, a dreamy anniversary
            trip, or an adventure-filled birthday tour, we design personalized
            journeys that create lifelong memories. Plus, explore Swat in style
            with our premium car rentals!
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <div
                key={index}
                className={`relative overflow-hidden shadow-lg group hover:scale-105 transition-transform duration-500 ${
                  eventsVisible ? "animate-fadeInFromBottom" : "opacity-0"
                }`}
                style={{
                  animationDelay: eventsVisible ? `${index * 0.2}s` : "0s",
                }}
              >
                <img
                  src={event.image}
                  alt={event.name}
                  loading="lazy"
                  className="object-cover w-full h-64 transition-transform duration-700 transform scale-animate"
                />
                <div className="absolute inset-0 transition-opacity duration-500 opacity-50 bg-gradient-to-t from-black to-transparent group-hover:opacity-75"></div>
                <h2 className="absolute text-xl font-bold text-white transition-colors duration-500 bottom-4 left-4 group-hover:text-yellow-400">
                  {event.name}
                </h2>
              </div>
            ))}
          </div>
        </div>

        {/* Activities Section */}
        <div
          ref={activitiesRef}
          className={`px-4 mt-20 sm:px-6 lg:px-8 transition-opacity duration-1000 ${
            activitiesVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="w-full my-4 text-3xl font-bold text-center sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-slate-800 font-Manrope">
            Activities
          </h3>
          <ul className="bg-white">
            <li className="p-1 my-1 list-disc sm:ml-10 bg-slate-100 ">
              <b>Trekking & Hiking : </b>
              <br />
              Mahodand Lake Trail: Moderate 4-hour hike with alpine views.{" "}
              <br />
              Ushu Forest Walk: Easy guided nature trails (family-friendly).
            </li>
            <li className="p-1 my-1 list-disc sm:ml-10 bg-slate-100 ">
              <b>Skiing & Snow Fun :</b> <br />
              Malam Jabba Resort: Dec-Feb skiing, snowboarding, and cozy lodge
              stays.
            </li>
            <li className="p-1 my-1 list-disc sm:ml-10 bg-slate-100 ">
              <b>
                Cultural Experiences : <br />{" "}
              </b>
              Swat Museum Tours: <br /> Ancient Gandhara artifacts in Saidu
              Sharif. <br /> Local Village Visits: <br />
              Meet Kalash communities, taste organic walnuts.
            </li>
            <li className="p-1 my-1 list-disc sm:ml-10 bg-slate-100 ">
              <b>Water Adventures:</b>
              <br />
              River Rafting: Swat River rapids (May-August, grade III). <br />
              Fishing at Gabral: Trout fishing in crystal streams.
            </li>
            <li className="p-1 my-1 list-disc sm:ml-10 bg-slate-100 ">
              <b>Zip-lining through Ushu Forest :</b>- 800m cable over pine
            </li>
            <li className="p-1 my-1 list-disc sm:ml-10 bg-slate-100 ">
              <b>Ice Climbing (Winter):</b> - Frozen waterfalls near Malam Jabba
            </li>
          </ul>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className={`relative overflow-hidden bg-white rounded-lg shadow-lg group hover:scale-105 transition-transform duration-500 ${
                  activitiesVisible ? "animate-fadeInFromBottom" : "opacity-0"
                }`}
                style={{
                  animationDelay: activitiesVisible ? `${index * 0.15}s` : "0s",
                }}
              >
                <div className="relative pb-[56.25%]">
                  <img
                    src={activity.image}
                    alt={activity.name}
                    loading="lazy"
                    className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-500 bg-black bg-opacity-50 group-hover:bg-opacity-75"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-lg font-bold text-white transition-all duration-500 sm:text-xl md:text-2xl group-hover:opacity-0">
                      {activity.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsActivities;
