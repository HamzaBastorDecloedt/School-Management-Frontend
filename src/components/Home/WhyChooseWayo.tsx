import React from "react";
import { FaCheck } from "react-icons/fa";

const WhyChooseWayo: React.FC = () => {
  return (
    <div className="relative text-white py-12 px-4 md:px-8 lg:px-16
                    before:absolute before:inset-0 before:bg-[url('src/assets/images/Home/bg_WhyChooseAcademy.jpg')] 
                    before:bg-cover before:bg-center before:bg-no-repeat before:brightness-75 before:-z-10">
      <h2 className="relative text-center text-2xl md:text-3xl lg:text-4xl font-serif mb-8">
        Why choose Wayo Academy as a...
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Mentor Section */}
        <h3 className="text-xl md:text-2xl font-serif text-center mb-6">
          Mentor
        </h3>
        <div className="text-lg text-center grid grid-cols-2 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-7 mb-10 font-bold">
          {[
            "Create and customize interactive courses in just a few clicks",
            "Easily schedule online classes and track attendance",
            "Access an intuitive calendar to organize your events",
            "Evaluate learners with automated quizzes & exams",
            "Analyze performance with detailed reports",
            "Build a community around your expertise",
          ].map((text, index) => (
            <div key={index} className="bg-[#ff8903]/[0.4] p-6 rounded-3xl flex">
              <FaCheck className="text-white text-lg flex-shrink-0" />
              <p>{text}</p>
            </div>
          ))}
        </div>

        {/* Learner Section */}
        <h3 className="text-xl 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl font-serif text-center mb-6">
          Learner
        </h3>
        <div className="text-lg text-center grid grid-cols-2 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-7 mb-10 font-bold">
          {[
            "Learn at your own pace with online courses",
            "Follow a clear and motivating class routine",
            "Access a variety of multimedia resources (videos, quizzes, etc.)",
            "Stay organized with event reminders and deadlines",
            "Join live interactive classes with your mentors",
            "Progress with instant feedback on your results",
          ].map((text, index) => (
            <div key={index} className="bg-[#ff8903]/[0.4] p-5 rounded-3xl flex">
              <FaCheck className="text-white text-lg flex-shrink-0" />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseWayo;
