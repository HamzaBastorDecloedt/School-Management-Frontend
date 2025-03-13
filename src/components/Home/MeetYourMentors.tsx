import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const mentors = [
  {
    id: 1,
    image: "src/assets/images/Home/Mentor_01.jpg",
    name: "John Doe",
    title: "Software Engineer",
  },
  {
    id: 2,
    image: "src/assets/images/Home/Mentor_02.png",
    name: "Jane Smith",
    title: "Data Scientist",
  },
  {
    id: 3,
    image: "src/assets/images/Home/Mentor_03.png",
    name: "Charlie Wilson",
    title: "UI/UX Designer",
  },
  {
    id: 4,
    image: "src/assets/images/Home/Mentor_04.png",
    name: "Alice Johnson ",
    title: "Cybersecurity Expert",
  },
];

const MeetYourMentors: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (_: number, newIndex: number) => setCurrentSlide(newIndex),
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-black text-white py-10">
      <h2 className="text-center text-3xl font-serif mb-6">
        Meet your mentors
      </h2>
      <div className="max-w-sm 2xl:max-w-4xl xl:max-w-4xl lg:max-w-4xl md:max-w-xl sm:max-w-sm mx-auto px-5 relative">
        <Slider ref={sliderRef} {...settings}>
          {mentors.map((mentor, index) => {
            const isActive = index === currentSlide;

            return (
              <div key={mentor.id} className="px-8">
                {" "}
                <div
                  className={`bg-[#545454]  rounded-2xl flex flex-col items-center overflow-hidden  transition-all duration-300
                    ${isActive ? " opacity-100 rounded-2xl" : " opacity-50"}`}
                >
                  <div className="w-30 h-30 rounded-full overflow-hidden mt-7">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mt-3">{mentor.name}</h3>
                  <p className="text-sm text-gray-400">{mentor.title}</p>
                  <div className="bg-[#848484] w-full py-4 flex justify-center items-center mt-10 rounded-b-2xl">
                    <FaLinkedin className="text-white text-xl cursor-pointer hover:text-blue-500 transition" />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>

        <div className="flex flex-col items-center mt-4">
          <div className="flex justify-center items-center space-x-4">
            <button
              className="text-white text-2xl bg-black/50 p-2 rounded-full hover:bg-black transition"
              onClick={() => sliderRef.current?.slickPrev()}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="text-white text-2xl bg-black/50 p-2 rounded-full hover:bg-black transition"
              onClick={() => sliderRef.current?.slickNext()}
            >
              <IoIosArrowForward />
            </button>
          </div>

          <div className="flex justify-center space-x-4 mt-3">
            {mentors.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentSlide === index ? "bg-white" : "bg-[#848484]"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetYourMentors;
