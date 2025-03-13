import React from "react";

const DownloadSection: React.FC = () => {
  return (
    <div className="w-full flex items-center bg-gradient-to-r from-white via-[#FFCA61] via-40% to-[#FFA043] py-15 2xl:py-0 xl:py-0 lg:py-0 md:py-0 sm:py-10">
      <div className="w-full flex flex-row xl:flex-row lg:flex-row md:flex-row items-center justify-between">
        <div className="w-full flex flex-row items-center justify-between">
          <img
            src="src/assets/images/Home/bg_download.png"
            alt="Hands exchanging phone"
            className="w-full md:w-1/2 lg:w-2/4 xl:w-2/4 2xl:w-2/5  object-contain hidden md:block"
          />
          <div className="flex flex-col items-center space-y-6 px-20 2xl:pr-50 md:pr-10">
            <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-serif text-black leading-tight text-center 2xl:p-2">
              Easier, faster and more accessible mentoring at your fingertips!
            </h2>
            <div className="flex items-center justify-center gap-8 2xl:gap-15 xl:gap-6 lg:gap-6 md:gap-6 md:justify-center 2xl:flex-row xl:flex-row lg:flex-row md:flex-row">
              <img
                src="src/assets/images/Home/App_Store_Bouton.svg"
                alt="Download on App Store"
                className="2xl:w-[230px] xl:w-[220px] lg:w-[180px] md:w-[120px] h-[40px] 2xl:h-[60px] xl:h-[50px] sm:h-[42px] md:h-[40px] lg:h-[48px] cursor-pointer"
              />
              <img
                src="src/assets/images/Home/Google_Play_Store_Bouton.svg"
                alt="Get it on Google Play"
                className="2xl:w-[230px] xl:w-[220px] lg:w-[180px] md:w-[120px] h-[40px] 2xl:h-[60px] xl:h-[50px] sm:h-[42px] md:h-[40px] lg:h-[48px] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;