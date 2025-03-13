import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const FollowUsOn: React.FC = () => {
  return (
    <div className="bg-black text-white py-15">
      <h2 className="text-center text-3xl font-serif mb-10">Follow us on :</h2>

      {/* Section des icônes */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 2xl:gap-40 xl:gap-40 lg:gap-40 md:gap-10 sm:gap-10">
        {/* Facebook */}
        <div className="flex items-center space-x-3">
          <div className="bg-white text-black p-2 rounded">
            <FaFacebookF size={20} />
          </div>
          <span className="text-lg font-serif">Wayo Academy</span>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center space-x-3">
          <div className="bg-white text-black p-2 rounded">
            <FaLinkedinIn size={20} />
          </div>
          <span className="text-lg font-serif">Wayo Academy</span>
        </div>

        {/* Instagram */}
        <div className="flex items-center space-x-3">
          <div className="bg-white text-black p-2 rounded">
            <FaInstagram size={20} />
          </div>
          <span className="text-lg font-serif">@wayo_academy</span>
        </div>
      </div>
    </div>
  );
};

export default FollowUsOn;
