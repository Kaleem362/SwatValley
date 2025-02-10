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
import { Helmet } from "react-helmet-async";

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
    { name: "Candal night dinner", image: candlelight },
    { name: "Birthday party", image: birthdayparty },
    { name: "Marriage anniversary", image: marriageanni },
    { name: "Decorated Rooms", image: decoratedroom },
    { name: "Photography", image: photography },
    { name: "Fishing", image: fishing },
  ];

  return (
    <>
      <Helmet>
        <title>Swat Tours - Events & Activities</title>
        <meta
          name="description"
          content="Swat Tours offers a variety of events and activities including Swat Summer Festival, Swat Winter Festival, Culture's Festival, Eid-ul-Fitr, Eid-ul-Adha, Kalam Jeep Racing Game, Chairlift, Zipline, Snow ski season, White water rafting, Boating, Horse riding, Bone fire, Barbeque (BBQ), Musical night, Candal night dinner, Birthday party, Marriage anniversary, Decorated Rooms, Photography, and Fishing"
        />
        <link rel="canonical" href="https://theswattours.com/eventsactivites" />
      </Helmet>
      <div className="w-full min-h-screen p-8 font-Manrope">
        <div
          ref={eventsRef}
          className={`
        ${eventsVisible ? "animate-fadeInFromTop" : "opacity-0"}
      `}
        >
          <h1 className="w-full my-4 text-6xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl font-Manrope">
            Events
          </h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <div
                key={index}
                className={`
                relative overflow-hidden shadow-lg group hover-tilt stagger-animate floating
                ${eventsVisible ? "animate-fadeInFromBottom" : "opacity-0"}
              `}
                style={{
                  animationDelay: eventsVisible ? `${index * 0.2}s` : "0s",
                }}
              >
                <img
                  src={event.image}
                  alt={event.name}
                  className="object-cover w-full h-64 transition-transform duration-700 transform scale-animate"
                />
                <div className="absolute inset-0 transition-all duration-500 opacity-5 bg-gradient-to-t from-white to-transparent group-hover:opacity-100" />
                <div className="absolute inset-0 transition-all duration-500 border-4 border-transparent opacity-50 group-hover:border-white glow-border" />
                <h3 className="absolute text-5xl font-extrabold translate-y-full text-start text-slate-800 -bottom-10 left-4 group-hover:-translate-y-10 lg:group-hover:translate-y-30 lg:opacity-0 lg:group-hover:opacity-100 xs:translate-y-30 xs:opacity-100">
                  {event.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={activitiesRef}
          className={`
          px-4 mt-20 sm:px-6 lg:px-8
          ${activitiesVisible ? "animate-fadeInFromLeft" : "opacity-0"}
        `}
        >
          <h1 className="w-full my-4 text-3xl font-bold text-center sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-slate-800 font-Manrope">
            Activities
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className={`
                relative overflow-hidden bg-white rounded-lg shadow-lg group hover-tilt stagger-animate scale-animate
                ${activitiesVisible ? "animate-fadeInFromBottom" : "opacity-0"}
              `}
                style={{
                  animationDelay: activitiesVisible ? `${index * 0.15}s` : "0s",
                }}
              >
                <div className="relative pb-[56.25%]">
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-500 bg-black bg-opacity-50 group-hover:opacity-0"></div>
                  <div className="absolute inset-0 transition-all duration-500 border-2 border-transparent opacity-50 group-hover:border-white glow-border"></div>
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
