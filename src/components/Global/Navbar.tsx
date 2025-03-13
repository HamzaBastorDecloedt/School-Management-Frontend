import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const loginButtonRef = useRef<HTMLButtonElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) setShowLoginForm(false); // Ferme le formulaire si le menu se ferme
  };

  const handleLogin = () => {
    console.log("Email:", email, "Password:", password);
  };

  const getFormPosition = () => {
    if (loginButtonRef.current) {
      const rect = loginButtonRef.current.getBoundingClientRect();
      if (window.innerWidth >= 1024) {
        // Desktop: position sous le bouton LOGIN, aligné à droite
        return {
          top: rect.bottom + 10,
          left: rect.right,
          transform: "translateX(-100%)",
        };
      } else {
        // Mobile/Tablette: centré horizontalement, ajusté selon l'état du menu
        return {
          top: isOpen ? rect.bottom + 10 : 70, // Si menu ouvert, sous le bouton LOGIN, sinon sous la barre
          left: "50%",
          transform: "translateX(-50%)",
        };
      }
    }
    return { top: 70, left: "50%", transform: "translateX(-50%)" }; // Valeur par défaut
  };

  return (
    <header className="w-full z-9999 fixed top-0 2xl:top-5 xl:top-5 lg:top-5 left-0 text-white">
      <div className="mx-auto px-8 flex justify-between items-center h-16 relative">
        <a href="/" className="absolute left-4 lg:relative">
          <img
            src="src/assets/images/Navbar/logo.png"
            alt="Logo"
            className="h-17 w-auto"
          />
        </a>

        {/* Bouton hamburger */}
        <button
          className="lg:hidden absolute top-4 right-4 z-50 flex flex-col space-y-1"
          onClick={toggleMenu}
        >
          <span
            className={`block h-1 w-6 bg-white transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-6 bg-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-6 bg-white transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Navigation */}
        <nav
          className={`absolute top-0 left-0 w-full bg-black/90 flex flex-col items-center py-20 space-y-3 font-bold ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } lg:translate-y-0 lg:relative lg:flex-row lg:h-auto lg:w-auto lg:space-x-5 lg:bg-transparent lg:py-0 lg:space-y-0`}
        >
          <a href="/" className="hover:text-[#A86A28]">
            HOME
          </a>
          <a href="/aboutus" className="hover:text-[#A86A28]">
            ABOUT US
          </a>
          <a href="/courses" className="hover:text-[#A86A28]">
            COURSES
          </a>
          <a href="/contactus" className="hover:text-[#A86A28]">
            CONTACT US
          </a>
          <a href="#" className="hover:text-[#A86A28]">
            DEMO REQUEST
          </a> {/* Option Demo Request */}
          </a>
          <button
            onClick={() => navigate("")}
            className="px-3 py-2 border-2 rounded-lg hover:text-[#A86A28] transition duration-300"
          >
            Visit dashboard
          </button>
          <span className="hidden lg:inline-block border-l-4 border-white h-4"></span>

          {/* Bouton LOGIN */}
          <button
            ref={loginButtonRef}
            onClick={() => setShowLoginForm(!showLoginForm)} // Simplement toggle le formulaire
            className="hover:text-[#A86A28] focus:outline-none"
          >
            LOGIN
          </button>
        </nav>
      </div>

      {/* Formulaire LOGIN */}
      {showLoginForm && (
        <div
          className="absolute bg-white text-black p-4 rounded-lg shadow-lg w-64 sm:w-80 md:w-96 lg:w-1/4 xl:w-1/6 max-w-[90vw]"
          style={{
            top: getFormPosition().top,
            left: getFormPosition().left,
            transform: getFormPosition().transform,
            zIndex: 100,
          }}
        >
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-2 border rounded"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-[#A86A28] text-white p-2 rounded hover:bg-opacity-90"
          >
            Login
          </button>
          <div className="text-start mt-3">
            <span>No account yet? </span>
            <a href="" className="hover:text-[#A86A28] px-1 inline">
              (Register)
            </a>
            <div className="mt-2">
              <span>Forgot account?</span>
              <a href="" className="hover:text-[#A86A28] px-1">
                (Forget password)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
