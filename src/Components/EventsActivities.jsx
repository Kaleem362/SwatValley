import React from "react";
import { Calendar, Activity, ChevronRight } from "lucide-react";

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
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Events & Activities
        </h1>
        <p className="text-lg text-gray-600">
          Discover exciting events and activities in Swat Valley
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Events Section */}
        <div className="p-8 bg-white shadow-xl rounded-2xl">
          <div className="flex items-center mb-6">
            <Calendar className="w-8 h-8 mr-3 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900">Events</h2>
          </div>
          <ul className="space-y-4">
            {events.map((event, index) => (
              <li
                key={index}
                className="flex items-center text-gray-700 transition-colors duration-200 hover:text-indigo-600"
              >
                <ChevronRight className="w-5 h-5 mr-2 text-indigo-500" />
                <span>{event}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Activities Section */}
        <div className="p-8 bg-white shadow-xl rounded-2xl">
          <div className="flex items-center mb-6">
            <Activity className="w-8 h-8 mr-3 text-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-900">Activities</h2>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {activities.map((activity, index) => (
              <li
                key={index}
                className="flex items-center text-gray-700 transition-colors duration-200 hover:text-emerald-600"
              >
                <ChevronRight className="w-5 h-5 mr-2 text-emerald-500" />
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventsActivities;
