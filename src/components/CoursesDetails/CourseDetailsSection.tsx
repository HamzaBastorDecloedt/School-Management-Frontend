import React from "react";
import { FaLock } from "react-icons/fa";

const CourseDetailsSection: React.FC = () => {
  return (
    <div className="bg-black flex flex-wrap justify-center py-10 mx-auto gap-6 w-full px-4 md:px-10">
      <div className="relative w-full md:w-[850px] max-w-full">
        <div className="bg-[#545454] rounded-xl shadow-xl min-h-auto ">
          <img
            src="src/assets/images/Courses/bg_courses_01.jpg"
            alt="Course participants"
            className="w-full h-[250px] md:h-[500px] object-cover rounded-t-xl transition-transform duration-300 hover:scale-101"
          />
          <div className="mt-6 text-white">
            <div className="flex flex-col md:flex-row items-center justify-center text-center mt-4">
              <img
                src="src/assets/images/Courses/bg_courses_01.jpg"
                alt="Logo"
                className="w-16 h-16 md:w-25 md:h-25 rounded-xl"
              />
              <h2 className="text-2xl md:text-4xl ml-0 md:ml-4 font-semibold">
                Wayo Academy
              </h2>
            </div>
            <div className="bg-[#373737] text-sm mt-6 flex flex-wrap gap-5 md:gap-5 justify-center items-center py-2 px-4">
              <span className="flex items-center font-bold">
                <FaLock className="mr-2" /> PRIVATE
              </span>
              <span className="border-l border-[#6E6E6E] h-10"></span>
              <div className="flex flex-col items-center">
                <span className="font-bold">23</span>
                <span className="text-xs text-[#C9C9C9] font-bold">
                  LEARNERS
                </span>
              </div>
              <span className="border-l border-[#6E6E6E] h-10"></span>
              <img
                src="src/assets/images/Courses/bg_courses_01.jpg"
                alt="Participants icon"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <div className="border-y border-[#6E6E6E] w-auto mx-auto mt-6 2xl:mt-4 xl:mt-4 lg:mt-4 md:mt-4"></div>
            <div className="flex justify-center text-justify leading-relaxed mt-5 2xl:mt-5 xl:mt-5 lg:mt-5 md:mt-5">
              <h1 className="text-left p-5 2xl:max-w-3xl xl:max-w-3xl lg:max-w-3xl md:max-w-2xl sm:max-w-2xl font-semibold">
                Wayo Academy is an innovative training platform designed to meet
                the needs of professionals, trainers, and learners in a
                constantly evolving world. It provides simple yet powerful tools
                to create, manage, and track online courses across various
                fields, including IT, agility, management, and more. Accessible
                worldwide, Wayo Academy focuses on user experience, flexibility,
                and high-quality content to ensure engaging and effective
                learning. Join Wayo Academy and turn your knowledge into
                opportunities for success. Accessible worldwide, Wayo Academy
                focuses on user experience, flexibility, and high-quality
                content to ensure engaging and effective learning. Join Wayo
                Academy and turn your knowledge into opportunities for success.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="relative w-full sm:w-[350px] md:w-[320px] max-w-full">
          <div className="bg-[#464646] rounded-xl shadow-xl flex flex-col">
            <img
              src="src/assets/images/Courses/bg_courses_01.jpg"
              alt="Course participants"
              className="w-full h-[155px] object-cover rounded-t-2xl"
            />
            <div className="text-white rounded-b-2xl flex flex-col flex-grow">
              <div className="bg-[#373737] text-sm mt-4 flex flex-wrap gap-3 md:gap-5 justify-center items-center px-4">
                <span className="flex items-center font-bold">
                  <FaLock className="mr-2" /> PRIVATE
                </span>
                <span className="border-l border-[#6E6E6E] h-9"></span>
                <span className="font-bold">TECH</span>
              </div>
              <div className="flex justify-center items-center gap-6 text-white mt-3 border-y border-[#6E6E6E] w-73 mx-auto py-2">
                <div className="flex flex-col items-center border-r border-[#6E6E6E] pr-5">
                  <span className="text-md font-bold">23</span>
                  <span className="text-xs text-[#C9C9C9] font-bold">
                    LEARNERS
                  </span>
                </div>
                <img
                  src="src/assets/images/Courses/bg_courses_01.jpg"
                  alt="Participants icon"
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <div className="mt-6">
                <button className="w-full bg-[#A86A28] font-bold shadow transition-all duration-700 hover:bg-[#A86A28]/80 py-2 rounded-b-xl cursor-pointer">
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default CourseDetailsSection;