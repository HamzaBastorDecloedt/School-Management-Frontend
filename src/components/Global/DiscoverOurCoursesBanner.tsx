import React from "react";

const DiscoverOurCoursesBanner: React.FC = () => {
  return (
    <div className="relative w-full h-50 flex items-center justify-center md:px-17 lg:px-40 xl:px-50 2xl:px-30 py-35 md:py-45 sm:py-45 overflow-hidden">
      <div className="absolute  inset-0 bg-[url('src/assets/images/Courses/dubai_03.jpg')] bg-cover bg-center blur-xs opacity-70"></div>
      <div className="relative z-20 text-center mt-15">
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl text-white font-bold drop-shadow-lg">
          DISCOVER OUR COURSES
        </h1>
      </div>
    </div>
  );
};

export default DiscoverOurCoursesBanner;
