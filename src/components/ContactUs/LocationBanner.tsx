import React from "react";

const LocationBanner: React.FC = () => {
  return (
    <section>
      <div className="relative bg-black flex items-center justify-center 2xl:py-15 md:px-17 lg:px-40 py-10 md:py-45 sm:py-45 overflow-hidden">
        <div className="relative text-center">
          <h1 className="text-xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-4xl text-white font-bold drop-shadow-lg">
            WAYO ACADEMY LOCATION
          </h1>
        </div>
      </div>
    </section>
  );
};

export default LocationBanner;
