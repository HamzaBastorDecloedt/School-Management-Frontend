import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section principale du footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center md:text-left gap-8">
          {/* Contact us */}
          <div className="text-center">
            <h3 className="font-semibold uppercase mb-3 text-md">Contact us</h3>
            <hr className="w-50 border-t-2 border-white mx-auto mb-3" />
            <a
              href="#"
              className="text-gray-300 hover:text-gray-400 transition block"
            >
              +971 50 154 8923
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-400 transition block"
            >
              info@wayo.cloud
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-400 transition block"
            >
              R320 Um Hurair 2 Dubai UAE
            </a>
          </div>

          {/* About us */}
          <div className="text-center">
            <h3 className="font-semibold uppercase mb-3 text-md">About us</h3>
            <hr className="w-30 border-t-2 border-white mx-auto mb-3" />
            <a
              href="#"
              className="text-gray-300 hover:text-gray-400 transition block"
            >
              About us
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-400 transition block"
            >
              Mentors
            </a>
          </div>

          {/* Resources */}
          <div className="text-center">
            <h3 className="font-semibold uppercase mb-3 text-md">Resources</h3>
            <hr className="w-50 border-t-2 border-white mx-auto mb-3" />
            <a
              href="#"
              className="text-gray-300 hover:text-gray-400 transition block"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-400 transition block"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Ligne de séparation */}
        <hr className="border-1 border-white my-8" />

        {/* Logo en bas */}
        <div className="flex  ">
          <div className="justify-center md:justify-start">
            <a href="#">
              <img
                src="src/assets/images/Navbar/logo.png"
                alt="Logo"
                className="h-15 w-auto"
              />
            </a>
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
