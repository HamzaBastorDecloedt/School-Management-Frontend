import React, { useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import LoginPopup from "./LoginPopup";
import { useLogin } from "../../context/LoginContext"; // Import du hook

const Navbar: React.FC = () => {
  const { showLoginForm, toggleLoginPopup } = useLogin(); // Utilisation du contexte
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);
  const [popupPosition, setPopupPosition] = React.useState<{
    top: number;
    left: string;
    transform: string;
  } | null>(null);

  const loginButtonRef = useRef<HTMLButtonElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const getFormPosition = useCallback(() => {
    if (loginButtonRef.current) {
      const rect = loginButtonRef.current.getBoundingClientRect();
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        return {
          top: rect.bottom + 5,
          left: `${rect.right}px`,
          transform: "translateX(-100%)",
        };
      } else {
        return {
          top: rect.bottom + 10,
          left: "10px",
          transform: "translateX(0)",
        };
      }
    }
    return {
      top: 70,
      left: "10px",
      transform: "translateX(0)",
    };
  }, []);

  const updatePosition = useCallback(() => {
    setPopupPosition(getFormPosition());
  }, [getFormPosition]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 1024;
      if (!isDesktop && showLoginForm) {
        toggleLoginPopup();
      }
      if (showLoginForm) {
        updatePosition();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showLoginForm, updatePosition, toggleLoginPopup]);

  useEffect(() => {
    if (showLoginForm) {
      updatePosition();
      const timer = setTimeout(() => updatePosition(), 0);
      return () => clearTimeout(timer);
    } else {
      setPopupPosition(null);
    }
  }, [showLoginForm, updatePosition]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    if (showLoginForm) toggleLoginPopup();
  };

  return (
    <>
      <header
        className={`w-full z-[9999] fixed top-0 2xl:top-0 xl:top-5 lg:top-5 left-0 text-white transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto px-8 flex justify-between items-center h-16 relative">
          <Link to="/" className="absolute left-4 lg:relative z-[999]">
            <img
              src="src/assets/images/Navbar/logo.png"
              alt="Logo"
              className="h-17 w-auto"
            />
          </Link>
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
          <nav
            className={`absolute top-0 left-0 w-full bg-black/90 flex flex-col items-start py-20 space-y-3 font-bold ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            } lg:translate-y-0 lg:relative lg:flex-row lg:h-auto lg:w-auto lg:space-x-5 lg:bg-transparent lg:py-0 lg:space-y-0 lg:items-center`}
          >
            <Link to="/" className="hover:text-[#d2822d] pl-4 lg:pl-0">
              HOME
            </Link>
            <Link to="/aboutus" className="hover:text-[#d2822d] pl-4 lg:pl-0">
              ABOUT US
            </Link>
            <Link to="/courses" className="hover:text-[#d2822d] pl-4 lg:pl-0">
              COURSES
            </Link>
            <Link to="/contactus" className="hover:text-[#d2822d] pl-4 lg:pl-0">
              CONTACT US
            </Link>
            <Link to="" className="hover:text-[#d2822d] pl-4 lg:pl-0">
              DEMO REQUEST
            </Link>
            <Link
              to=""
              className="px-2 py-2 border-2 rounded-lg hover:text-[#d2822d] transition duration-300 text-center ml-2 2xl:ml-0 xl:ml-0 lg:ml-2 align-middle"
            >
              Visit dashboard
            </Link>
            <span className="hidden lg:inline-block border-l-4 border-white h-4"></span>
            <button
              ref={loginButtonRef}
              onClick={toggleLoginPopup}
              className="hover:text-[#d2822d] focus:outline-none pl-4 2xl:pl-0 lg:pl-0"
            >
              LOGIN
            </button>
          </nav>
        </div>
      </header>
      {showLoginForm && popupPosition && (
        <div ref={popupRef} className="fixed z-[10000]">
          <LoginPopup
            isVisible={showLoginForm}
            onClose={toggleLoginPopup}
            position={popupPosition}
          />
        </div>
      )}
    </>
  );
};

export default Navbar;