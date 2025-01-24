import React from "react";
import skating from "../../public/PackagesImages/skatinggallerycoverimage.jpg";

const EventsActivities = () => {
  const events = [
    {
      name: "Swat Summer Festival",
      image: skating, // Assuming "skating" is the imported image variable
    },
    {
      name: "Swat Winter Festival",
      image: skating, // Replace with the actual image variable
    },
    {
      name: "Culture's Festival at PC Malamjabba",
      image: skating, // Replace with the actual image variable
    },
    {
      name: "Eid-ul-Fitr",
      image: skating, // Replace with the actual image variable
    },
    {
      name: "Eid-ul-Adha",
      image: skating, // Replace with the actual image variable
    },
    {
      name: "Culture's Festival at Gaben Jabba",
      image: skating, // Replace with the actual image variable
    },
    {
      name: "Kalam Jeep Racing Game and Others",
      image: skating, // Replace with the actual image variable
    },
  ];

  const activities = [
    "Chairlift",
    "Zipline",
    "Snow ski season",
    "White water rafting",
    "Boating",
    "Horse riding",
    "Air cycle",
    "Bone fire",
    "Barbeque (BBQ)",
    "Musical night",
    "Candal night dinner",
    "Birthday party",
    "Marriage anniversary",
    "Decorated Room for Honeymoon couple",
    "Photography",
    "Fishing",
  ];

  return (
    <div className="w-full min-h-screen p-8 font-Manrope ">
      <style>{`
        

        @keyframes shine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }

        // @keyframes borderGlow {
        //   0%, 100% { border-color: rgba(30, 41, 59, 0.5); }
        //   50% { border-color: rgba(255, 255, 255, 0.8); }
        // }

        @keyframes scale {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .floating {
          animation: float 6s ease-in-out infinite;
        }

        .card-shine {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          background-size: 200% auto;
          animation: shine 3s linear infinite;
        }

        .glow-border {
          animation: borderGlow 2s ease-in-out infinite;
        }

        .scale-animate {
          animation: scale 4s ease-in-out infinite;
        }

        .stagger-animate:nth-child(odd) {
          animation-delay: 0.5s;
        }

        .stagger-animate:nth-child(even) {
          animation-delay: 1s;
        }

        .hover-tilt {
          transition: transform 0.3s ease-out;
        }

        .hover-tilt:hover {
          transform: perspective(1000px) rotateX(10deg) rotateY(10deg) scale(1.05);
        }
      `}</style>

      {/* Title Section with enhanced animation */}
      <div className="duration-500 skew-x-0 m-14 group -rotate-12 hover:-rotate-0 hover:skew-x-1 hover:translate-x-6 hover:translate-y-12 w-fit">
        {" "}
        <div className="group-hover:duration-400 relative rounded-2xl w-64 h-36 bg-slate-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-slate-600 before:right-3 before:top-0 before:w-64 before:h-32 before:-z-10">
          <span className="text-5xl font-bold">SWAT</span>
          <p className="font-thin text-slate-300">
            - Events & activities -
          </p>{" "}
        </div>{" "}
      </div>

      {/* Events Gallery */}
      <div className="mt-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative overflow-hidden shadow-lg group rounded-xl hover-tilt stagger-animate floating"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={event.image}
                alt={event.name}
                className="object-cover w-full h-64 transition-transform duration-700 transform scale-animate"
              />
              <div className="absolute inset-0 transition-all duration-500 opacity-5 bg-gradient-to-t from-white to-transparent group-hover:opacity-100" />
              <div className="absolute inset-0 transition-all duration-500 border-4 border-transparent opacity-50 group-hover:border-white glow-border" />
              <h3 className="absolute text-3xl font-extrabold translate-y-full text-slate-800 -bottom-10 left-4 group-hover:-translate-y-10 lg:group-hover:translate-y-30 lg:opacity-0 lg:group-hover:opacity-100 xs:translate-y-30 xs:opacity-100">
                {event.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Activities Gallery */}
      <div className="mt-20">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-white rounded-lg shadow-lg group hover-tilt stagger-animate scale-animate"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-48">
                <img
                  src={`/api/placeholder/400/300`}
                  alt={activity}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-all duration-500 opacity-0 bg-gradient-to-b from-transparent to-slate-800 group-hover:opacity-70" />
                <div className="absolute inset-0 transition-all duration-500 border-2 border-transparent opacity-50 group-hover:border-white glow-border" />
              </div>
              <h3 className="absolute text-lg font-semibold text-white transition-all duration-500 opacity-0 -bottom-4 left-4 group-hover:opacity-100">
                {activity}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsActivities;
