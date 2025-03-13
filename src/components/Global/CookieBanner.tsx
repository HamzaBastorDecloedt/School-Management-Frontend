import React, { useState } from "react";

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    isVisible && (
      <div className="fixed bottom-5 right-5 max-w-sm md:max-w-md lg:max-w-lg w-auto bg-white/80 shadow-lg rounded-3xl p-6 border border-gray-300 z-9999">
        <h2 className="font-bold text-lg md:text-xl text-black text-center">
          We value your privacy
        </h2>
        <p className="text-sm md:text-md lg:text-lg text-black mt-4 text-center">
          We use cookies to enhance your browsing experience, serve personalised
          ads or content, and analyse our traffic. By clicking "Accept All", you
          consent to our use of cookies.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-5">
          <button className="border-2 border-[#FD9830] text-black px-4 py-2 rounded-xl font-bold w-full md:w-auto">
            Customise
          </button>
          <button className="border-2 border-[#FD9830] text-black px-4 py-2 rounded-xl font-bold w-full md:w-auto">
            Reject all
          </button>
          <button
            className="bg-[#FD9830] text-white px-6 py-2 rounded-xl font-bold w-full md:w-auto"
            onClick={() => setIsVisible(false)}
          >
            Accept All
          </button>
        </div>
      </div>
    )
  );
};

export default CookieBanner;
