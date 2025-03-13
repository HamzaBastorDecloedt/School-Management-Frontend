import React from "react";

const BottomBanner: React.FC = () => {
  return (
    <div className="relative w-full flex items-center justify-center md:px-17 lg:px-40 xl:px-50 2xl:px-30 py-35 md:py-45 sm:py-45 overflow-hidden">
      <div className="absolute inset-0 bg-[url('src/assets/images/Courses/dubai_04.jpg')] bg-cover bg-center opacity-70"></div>
    </div>
  );
};

export default BottomBanner;
