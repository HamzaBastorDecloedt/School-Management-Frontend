import React, { useState } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";

const DiscoverOurCourses: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState: any) => !prevState);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };
  return (
    <div className="flex flex-col items-center justify-center p-5 bg-black">
      {/* Barre de recherche */}
      <form className="mb-6 w-full max-w-md mt-5">
        <div className="flex">
          <button
            id="dropdown-button"
            onClick={handleDropdownToggle} // Ouvrir/fermer le menu déroulant
            className="shrink-0 z-99 inline-flex items-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-s-3xl hover:bg-gray-200 "
            type="button"
          >
            {selectedCategory} {/* Affiche la catégorie sélectionnée */}
            <FaChevronDown className="w-2.5 h-2.5 ms-2.5" />
          </button>

          {/* Menu déroulant */}
          {isDropdownOpen && (
            <div className="absolute mt-12 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44  z-10">
              <ul
                className="py-2 text-sm text-black "
                aria-labelledby="dropdown-button"
              >
                <li>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect("All")}
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                  >
                    All
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect("Arts & crafts")}
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                  >
                    Arts & crafts
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect("Business")}
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                  >
                    Business
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect("E-commerce")}
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                  >
                    E-commerce
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect("Tech")}
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                  >
                    Tech
                  </button>
                </li>
              </ul>
            </div>
          )}

          <div className="relative w-full">
            <input
              type="search"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-3xl border border-gray-300"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full bg-[#A86A28] rounded-e-3xl border border-white hover:bg-[#A86A28]/80 cursor-pointer"
            >
              <FaSearch className="w-4 h-4" />
            </button>
          </div>
        </div>
      </form>
      <a href="/coursedetails">
        <div className="relative w-80 h-[380px] mt-20 max-w-xs sm:max-w-sm md:max-w-md bg-white shadow-lg rounded-xl overflow-hidden group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
            style={{
              backgroundImage:
                "url('src/assets/images/Courses/bg_courses_01.jpg')",
            }}
          ></div>
          <div className="absolute top-2 left-2 bg-[#383838]/60 text-white text-sm font-bold px-3 py-1 rounded-full z-9">
            Tech
          </div>
          <div className="absolute top-2 right-2 bg-[#A86A28] text-white text-sm font-bold px-3 py-1 rounded-full z-9">
            Private
          </div>
          <div className="absolute bottom-0 w-full bg-[#383838]/70 backdrop-blur-xs p-5 text-white rounded-b-xl transition-all duration-700 h-40 group-hover:h-full group-hover:backdrop-blur-xl overflow-hidden">
            <h3 className="text-xl font-bold text-center transition-all duration-700 transform translate-y-0 group-hover:translate-y-10 group-hover:opacity-100">
              WAYO ACADEMY
            </h3>
            <p className="text-md font-bold text-justify mt-5 opacity-100 max-h-17 overflow-hidden transition-all duration-700 ease-in-out group-hover:mt-10 group-hover:max-h-55 group-hover:opacity-100 group-hover:translate-y-10 translate-y-2">
              Wayo Academy is an innovative training platform designed to meet
              the needs of professionals, trainers, and learners in a constantly
              evolving world. It provides simple yet powerful tools to create,
              manage, and track online courses across various fields, including
              IT, agility, management, and more...
            </p>
          </div>
        </div>
      </a>
      <div className="flex justify-center mt-15">
        <nav className="bg-gray-200 rounded-full px-4 py-2">
          <ul className="flex text-gray-600 gap-4 font-medium py-2">
            <li>
              <a
                href="#"
                className="rounded-full px-4 py-2 bg-[#A86A28] text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="rounded-full px-4 py-2 hover:bg-[#A86A28] hover:text-white transition duration-300 ease-in-out"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="rounded-full px-4 py-2 hover:bg-[#A86A28] hover:text-white transition duration-300 ease-in-out"
              >
                3
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DiscoverOurCourses;
