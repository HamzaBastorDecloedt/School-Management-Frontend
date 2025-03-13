import React from "react";
import { AiFillStar } from "react-icons/ai";

const WhatOurMentorsSayAboutUs: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-[400px] sm:min-h-[500px]">
      {/* Image occupant la moitié gauche */}
      <div className="w-full 2xl:w-2/3 2xl:h-[500px] md:w-1/2 h-[300px] sm:h-[400px] md:h-auto">
        <img
          src="src/assets/images/Home/WhatOurMentorsSay.jpg"
          className="w-full h-full object-cover"
          alt="Mentors background"
        />
      </div>

      {/* Section témoignage occupant la moitié droite */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-6 sm:py-8 bg-gradient-to-r from-[#ED9838] via-orange-300 to-[#F0AB5A]">
        {/* Titre */}
        <h2 className="text-white text-lg 2xl:text-3xl sm:text-xl md:text-2xl font-serif mb-4 sm:mb-6 text-center">
          What our mentors say about us
        </h2>
        {/* Carte Témoignage */}
        <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 max-w-xs 2xl:max-w-2xl sm:max-w-md md:max-w-xl mx-auto">
          {/* Étoiles */}
          <div className="flex items-center mb-2 sm:mb-4 space-x-1">
            {[...Array(5)].map((_, index) => (
              <AiFillStar key={index} className="text-[#FFEA31] text-xl sm:text-2xl" />
            ))}
          </div>

          {/* Témoignage */}
          <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed text-justify font-semibold">
            "Wayo Academy has changed the way I connect with my students. The platform is 
            user-friendly and has everything I need to create a meaningful learning experience. 
            I appreciate how it helps me stay organized and engaged with my learners. 
            Highly recommend!"
          </p>

          {/* Auteur */}
          <div className="flex items-center mt-3 sm:mt-4">
            <img
              src="src/assets/images/Home/Mentor_03.png"
              alt="Théo James"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-2 sm:mr-3"
            />
            <span className="text-base sm:text-lg font-bold text-gray-900">Théo James</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatOurMentorsSayAboutUs;