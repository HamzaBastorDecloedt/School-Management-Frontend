import React from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-200 flex flex-col md:flex-row px-5 md:px-17 lg:px-40 xl:px-50 2xl:px-30 2xl:py-70 py-35 md:py-45 sm:py-45 min-h-screen">
      <div className="absolute inset-0 bg-[url('src/assets/images/Home/main_bg.jpg')] bg-cover bg-center opacity-80 brightness-40 "></div>
      <div className="relative w-full text-center 2xl:pr-30">
        <h1 className="text-3xl 2xl:text-3xl xl:text-2xl lg:text-3xl md:text-3xl font-bold text-white tracking-widest 2xl:text-nowrap">
          YOUR MENTORSHIP THEIR SUCCESS
        </h1>
        <p className="text-white mt-2 sm:mt-3 md:mt-4 text-md sm:text-lg md:text-lg lg:text-lg 2xl:text-xl xl:text-xl">
          Strengthen loyalty, maintain engagement and drive growth
        </p>
        <div className="mt-5 sm:mt-6 md:mt-10 flex sm:flex-row gap-3 sm:gap-5 justify-center">
          <button
            onClick={() => navigate("")}
            className="bg-[#d2822d]/[0.7] hover:bg-[#d2822d]/55 text-white border-3 border-[#A9A9A8] px-5 sm:px-4 2xl:px-15 2xl:p-2 md:px-4 py-2 rounded-xl shadow-md transition duration-300 text-md 2xl:text-xl xl:text-md sm:text-lg w-auto max-w-fit whitespace-nowrap cursor-pointer"
          >
            School Admission
          </button>
          <button
            onClick={() => navigate("")}
            className="bg-[#d2822d]/[0.7] hover:bg-[#d2822d]/55 text-white border-3 border-[#A9A9A8] px-5 sm:px-4 2xl:px-15 2xl:p-2 md:px-4 py-2 rounded-xl shadow-md transition duration-300 text-md 2xl:text-xl xl:text-md sm:text-lg w-auto max-w-fit cursor-pointer whitespace-nowrap"
          >
            Learner Admission
          </button>
        </div>
        <div className="mt-4 sm:mt-6 flex justify-center">
          <button
            onClick={() => navigate("")}
            className="bg-[#d2822d]/[0.7] hover:bg-[#d2822d]/55 text-white border-3 border-[#A9A9A8] 2xl:mt-4 px-25 2xl:px-52 xl:px-25 lg:px-25 md:px-25 sm:px-25 2xl:p-2 py-2 rounded-xl shadow-md transition duration-300 text-md xl:text-md sm:text-xl w-auto max-w-fit cursor-pointer whitespace-nowrap"
          >
            Discover our courses
          </button>
        </div>

        {/* Affichage pour largeur <1280px */}
        <div className="relative mt-6 sm:mt-4 xl:hidden text-center">
          <p className="text-white text-lg 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-xl font-bold">
            Enjoy 30 days free to explore Wayo Academy!
          </p>
          <p className="text-white text-lg sm:text-lg font-bold">
            Offer valid until February 28th
          </p>
          <div className="mt-3 sm:mt-4 flex justify-center">
            <button
              onClick={() => navigate("")}
              className="bg-[#A86A28] hover:bg-[#A86A28]/90 text-white border-6 border-[#A9A9A8] px-31 sm:px-40 md:px-35 lg:px-35 py-2 rounded-lg shadow-md transition duration-300 font-semibold text-lg sm:text-lg w-auto max-w-fit cursor-pointer text-nowrap"
            >
              START NOW
            </button>
          </div>
        </div>
      </div>

      {/* Affichage pour largeur ≥1280px */}
      <div className="relative hidden xl:block text-center mt-6 sm:mt-4 2xl:mt-7 xl:mt-5 lg:mt-3 pl-5 md:pl-5 lg:pl-10 xl:pl-23 2xl:pl-0">
        <p className="text-white text-sm 2xl:text-3xl xl:text-2xl lg:text-xl font-bold text-nowrap">
          Enjoy 30 days free to explore Wayo Academy!
        </p>
        <p className="text-white text-xs sm:text-lg 2xl:text-3xl xl:text-xl font-bold break-words">
          Offer valid until February 28th
        </p>
        <div className="mt-3 2xl:mt-7 sm:mt-4 flex justify-center">
          <button
            onClick={() => navigate("")}
            className="bg-[#A86A28] hover:bg-[#A86A28]/90 text-white border-6 border-[#A9A9A8] px-6 sm:px-10 2xl:px-60 2xl:py-3 xl:px-40 lg:px-16 py-2 rounded-lg shadow-md transition duration-300 font-bold text-sm 2xl:text-xl sm:text-lg w-full sm:w-auto cursor-pointer text-nowrap"
          >
            START NOW
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 right-0">
        <img
          src="src/assets/images/Home/bg_ClaimYourFreeTrial.png"
          alt="Free Trial Offer"
          className="w-125 h-auto sm:w-124 md:w-130 lg:w-140 xl:w-160 2xl:w-170 object-contain brightness-110"
        />
      </div>
    </div>
  );
};

export default Header;