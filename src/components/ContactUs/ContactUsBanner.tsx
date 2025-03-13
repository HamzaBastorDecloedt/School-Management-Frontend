import React from "react";

const ContactUsBanner: React.FC = () => {
  return (
    <section>
      <div className="relative flex items-center justify-center 2xl:py-30 md:px-17 lg:px-40 py-35 md:py-45 sm:py-45 overflow-hidden">
        <div className="absolute h-139 inset-0 bg-[url('src/assets/images/ContactUs/dubai_02.jpg')] bg-cover blur-xs bg-center opacity-70"></div>
        <div className="relative text-center mt-15">
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl text-white font-bold drop-shadow-lg">
            CONTACT US
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ContactUsBanner;
