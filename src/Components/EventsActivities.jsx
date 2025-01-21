import React from "react";
import skatingcover from "../../public/PackagesImages/skatinggallerycoverimage.jpg";

const EventsActivities = () => {
  const events = [
    "Swat summer festival",
    "Swat winter festival",
    "Caltures festival at PC Malamjabba",
    "Eid-ul-fater",
    "Eid-ul-azgha",
    "Caltures festival Gabenjabba",
    "Kalam jeep racing game and others",
  ];

  const activities = [
    "Chairlift",
    "Zipline",
    "Snow ski season",
    "White water rafting",
    "Boating",
    "Hours riding",
    "Air cycle",
    "Bone fire",
    "Barbeque (BBQ)",
    "Musical night",
    "Candal night dinner",
    "Birthday party",
    "Marriage inversery",
    "Decorated Room for Honeymoon couple",
    "Photography",
    "Fishing",
  ];

  return (
    <div className="w-full ">
      <div class="m-14 group duration-500 -rotate-12 hover:-rotate-0 hover:skew-x-1 skew-x-0 hover:translate-x-6  hover:translate-y-12 w-fit">
        <div class="group-hover:duration-400 relative rounded-2xl w-64 h-36 bg-slate-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-slate-600 before:right-3 before:top-0 before:w-64 before:h-32 before:-z-10">
          <span class="text-5xl font-bold">SWAT</span>
          <p class="text-slate-300 font-thin">- Welcome to Gallery -</p>
        </div>
      </div>
    </div>
  );
};

export default EventsActivities;
