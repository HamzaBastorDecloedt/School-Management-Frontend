import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const goToMentors = () => {
    navigate("/", { state: { scrollTo: "mentors" } });
  };
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center md:text-left gap-8">
          <div className="text-center">
            <h3 className="font-semibold uppercase mb-3 text-md">Contact us</h3>
            <hr className="w-50 border-t-2 border-white mx-auto mb-3" />
            <a
              href="tel:+971501548923"
              className="text-gray-300 hover:text-gray-400 transition block"
            >
              +971 50 154 8923
            </a>
            <a
              href="mailto:info@wayo.cloud"
              className="text-gray-300 hover:text-gray-400 transition block"
            >
              info@wayo.cloud
            </a>
            <Link to="/contactus#location"
              className="text-gray-300 hover:text-gray-400 transition block"
            >
              R320 Um Hurair 2 Dubai UAE
            </Link>
          </div>
          <div className="text-center">
            <h3 className="font-semibold uppercase mb-3 text-md">About us</h3>
            <hr className="w-30 border-t-2 border-white mx-auto mb-3" />
            <Link
              to="/aboutus"
              className="text-gray-300 hover:text-gray-400 transition block"
            >
              About us
            </Link>
           <div
              onClick={goToMentors}
              className="text-gray-300 hover:text-gray-400 transition block cursor-pointer"
            >
              Mentors
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-semibold uppercase mb-3 text-md">Resources</h3>
            <hr className="w-50 border-t-2 border-white mx-auto mb-3" />
           <Link
              to="/terms_conditions" 
              className="text-gray-300 hover:text-gray-400 transition block"
            >
              Terms & Conditions
            </Link>
             <Link
              to="/privacy_policy"
              className="text-gray-300 hover:text-gray-400 transition block"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <hr className="border-1 border-white my-8" />
        <div className="flex  ">
          <div className="justify-center md:justify-start">
          <Link
              to="/">
              <img
                src="src/assets/images/Navbar/logo.png"
                alt="Logo"
                className="h-15 w-auto"
              />
            </Link>
          </div>
          <div className="text-center mx-auto">
            © All the rights reserved to Wayo Academy
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
