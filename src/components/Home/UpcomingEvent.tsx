import React, { useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

const UpcomingEvent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"teaser" | "webinar">("teaser");

  return (
    <div className="bg-black text-white flex flex-col items-center px-4 py-12">
      {/* Titre */}
      <h2 className="text-xl md:text-3xl font-serif text-center mb-4">
        Upcoming Event
      </h2>

      {/* Icône flèche vers le bas */}
      <FaAngleDoubleDown className="text-white text-3xl h-20 animate-bounce mb-10" />

      {/* Contenu principal */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl">
        {/* Onglets (Côté gauche) */}
        <div className="w-full md:w-2/5 flex flex-col items-start space-y-4">
          <button
            className={`text-lg md:text-2xl px-4 py-2 w-full text-left border-b-4 font-serif 2xl:text-nowrap cursor-pointer ${
              activeTab === "teaser" ? "text-[#FA9730]" : "text-white"
            }`}
            onClick={() => setActiveTab("teaser")}
          >
            Exciting News Ahead! Watch Our Teaser
          </button>
          <button
            className={`text-lg md:text-2xl px-4 py-2 w-full text-left border-b-4 font-serif cursor-pointer ${
              activeTab === "webinar" ? "text-[#FA9730]" : "text-white"
            }`}
            onClick={() => setActiveTab("webinar")}
          >
            Participate In Our Exclusive Webinar
          </button>
        </div>

        {/* Contenu affiché (Côté droit) */}
        <div className="w-full md:w-3/5 mt-10 flex justify-center items-center ml-2 sm:mt-10">
          {activeTab === "teaser" ? (
            <div className="w-full max-w-full h-72 md:h-[400px] flex items-center justify-center border-2 border-white rounded-lg">
              <iframe
                className="w-full h-full max-w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/p2vpqKBPj4U?si=Pm9T3iiXTtSa4W09"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <img
              src="src/assets/images/Home/flyer.png"
              alt="Webinar Event"
              className="w-full max-w-full h-72 md:h-[500px] object-contain rounded-lg"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
