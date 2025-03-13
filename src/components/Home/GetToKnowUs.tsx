import React from "react";

const GetToKnowUs: React.FC = () => {
  return (
    <section className="w-screen bg-black text-white py-12">
      <div className="w-full px-6 md:px-30 flex flex-col xl:flex-row lg:flex-col md:flex-col items-stretch gap-15">
        {/* Texte à gauche */}
        <div className="xlmd:w-full lg:w-full space-y-5 lg:max-w-5xl md:max-w-2xl flex flex-col justify-center h-full tracking-wide">
          <h2 className="text-2xl md:text-3xl text-center font-serif text-white">
            Get to know us
          </h2>
          <p className="text-lg text-justify leading-relaxed flex-grow">
            Welcome to <span className="font-bold">Wayo Academy</span>, your partner in digital learning. Designed to
            meet the needs of mentors, educators, and professional coaches, our
            platform offers comprehensive tools to manage your online classes,
            organize educational routines, track learner progress, and more.
            Whether you're an experienced educator or new to digital teaching,
          </p>
          <p className="font-bold text-lg text-justify leading-relaxed flex-grow">
            Wayo Academy is here to support you. Discover a new way to share your
            knowledge with simplicity and efficiency!
          </p>
        </div>

        {/* Bloc vidéo YouTube */}
        <div className="md:w-full  lg:w-full w-full p-6 flex items-center justify-center">
          <div className="w-full h-80 2xl:w-160 xl:w-140 md:h-76 2xl:h-80 xl:h-75 lg:h-100 lg:w-190 border-2 border-white rounded-lg">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/p2vpqKBPj4U?si=Pm9T3iiXTtSa4W09"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetToKnowUs;
