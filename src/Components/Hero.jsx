import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-start justify-start h-screen p-10 tracking-tighter bg-green-100">
      <div className="flex header">
        <h1 className="w-full my-4 font-bold text-slate-800 text-start xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope">
          Welcome to Swat Tours
        </h1>
      </div>
      <h4 className="xs:text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-slate-600">
        Discover Nature’s Paradise!
      </h4>
      <p className="text-slate-500 font-manrope xs:text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
        Plan your perfect getaway to Swat Valley with our all-inclusive tour
        packages. From scenic drives and luxurious stays to unforgettable
        adventures, we’ve got you covered.
      </p>
    </div>
  );
};

export default Hero;
