import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaLock } from "react-icons/fa";
import { useLogin } from "../../context/LoginContext"; // Import du hook

const slides2 = [
  {
    image: "src/assets/images/CourseDetails/Image_04.jpg",
    text: "Scrum Master \n Master the foundations of Scrum and Agile project management with our comprehensive training program. This course is designed to provide you with essential knowledge and practical skills to implement Scrum effectively within your organization.",
    learners: "20",
    price: "2",
    buttonText: "Join Course A",
  },
  {
    image: "src/assets/images/CourseDetails/Image_05.jpg",
    text: "Les personnes de type pensée",
    learners: "30",
    price: "1",
    buttonText: "Join Course B",
  },
];

const CourseDetailsSection: React.FC = () => {
  const { toggleLoginPopup } = useLogin(); // Utilisation du contexte
  const [index2, setIndex2] = useState(0);
  const [startX2, setStartX2] = useState<number | null>(null);
  const [isGrabbing2, setIsGrabbing2] = useState(false);
  const [direction2, setDirection2] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex2((prevIndex) => (prevIndex + 1) % slides2.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseDown2 = (event: React.MouseEvent) => {
    setStartX2(event.clientX);
    setIsGrabbing2(true);
  };

  const handleMouseUp2 = (event: React.MouseEvent) => {
    if (startX2 !== null) {
      const deltaX = event.clientX - startX2;
      if (deltaX < -50) {
        setDirection2(1);
        setIndex2((prevIndex) => (prevIndex + 1) % slides2.length);
      } else if (deltaX > 50) {
        setDirection2(-1);
        setIndex2((prevIndex) => (prevIndex - 1 + slides2.length) % slides2.length);
      }
    }
    setStartX2(null);
    setIsGrabbing2(false);
  };

  const handleTouchStart2 = (event: React.TouchEvent) => {
    setStartX2(event.touches[0].clientX);
  };

  const handleTouchMove2 = (event: React.TouchEvent) => {
    if (startX2 !== null) {
      const deltaX = event.touches[0].clientX - startX2;
      if (deltaX < -50) {
        setDirection2(1);
        setIndex2((prevIndex) => (prevIndex + 1) % slides2.length);
        setStartX2(null);
      } else if (deltaX > 50) {
        setDirection2(-1);
        setIndex2((prevIndex) => (prevIndex - 1 + slides2.length) % slides2.length);
        setStartX2(null);
      }
    }
  };

  const handleTouchEnd2 = () => {
    setStartX2(null);
  };

  return (
    <div className="bg-black flex flex-wrap justify-center py-10 mx-auto gap-6 w-full px-4 md:px-10">
      <div className="relative w-full md:w-[850px] max-w-full">
        <div className="bg-[#545454] rounded-xl shadow-xl min-h-auto ">
          <img
            src="src/assets/images/Courses/bg_courses_01.jpg"
            alt="Course participants"
            className="w-full h-[250px] md:h-[500px] object-cover rounded-t-xl transition-transform duration-300 hover:scale-101"
          />
          <div className="mt-6 text-white">
            <div className="flex flex-col md:flex-row items-center justify-center text-center mt-4">
              <img
                src="src/assets/images/Courses/bg_courses_01.jpg"
                alt="Logo"
                className="w-16 h-16 md:w-25 md:h-25 rounded-xl"
              />
              <h2 className="text-2xl md:text-4xl ml-0 md:ml-4 font-semibold">
                Wayo Academy
              </h2>
            </div>
            <div className="bg-[#373737] text-sm mt-6 flex flex-wrap gap-5 md:gap-5 justify-center items-center py-2 px-4">
              <span className="flex items-center font-bold">
                <FaLock className="mr-2" /> PRIVATE
              </span>
              <span className="border-l border-[#6E6E6E] h-10"></span>
              <div className="flex flex-col items-center">
                <span className="font-bold">23</span>
                <span className="text-xs text-[#C9C9C9] font-bold">
                  LEARNERS
                </span>
              </div>
              <span className="border-l border-[#6E6E6E] h-10"></span>
              <img
                src="src/assets/images/Courses/bg_courses_01.jpg"
                alt="Participants icon"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <div className="border-y border-[#6E6E6E] w-auto mx-auto mt-6 2xl:mt-4 xl:mt-4 lg:mt-4 md:mt-4"></div>
            <div className="flex justify-center text-justify leading-relaxed mt-5 2xl:mt-5 xl:mt-5 lg:mt-5 md:mt-5">
              <h1 className="text-left p-5 2xl:max-w-3xl xl:max-w-3xl lg:max-w-3xl md:max-w-2xl sm:max-w-2xl font-semibold">
                Wayo Academy is an innovative training platform designed to meet
                the needs of professionals, trainers, and learners in a
                constantly evolving world. It provides simple yet powerful tools
                to create, manage, and track online courses across various
                fields, including IT, agility, management, and more. Accessible
                worldwide, Wayo Academy focuses on user experience, flexibility,
                and high-quality content to ensure engaging and effective
                learning. Join Wayo Academy and turn your knowledge into
                opportunities for success. Accessible worldwide, Wayo Academy
                focuses on user experience, flexibility, and high-quality
                content to ensure engaging and effective learning. Join Wayo
                Academy and turn your knowledge into opportunities for success.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="relative w-full sm:w-[350px] md:w-[320px] max-w-full">
          <div className="bg-[#464646] rounded-xl shadow-xl flex flex-col">
            <img
              src="src/assets/images/Courses/bg_courses_01.jpg"
              alt="Course participants"
              className="w-full h-[155px] object-cover rounded-t-2xl"
            />
            <div className="text-white rounded-b-2xl flex flex-col flex-grow">
              <div className="bg-[#373737] text-sm mt-4 flex flex-wrap gap-3 md:gap-5 justify-center items-center px-4">
                <span className="flex items-center font-bold">
                  <FaLock className="mr-2" /> PRIVATE
                </span>
                <span className="border-l border-[#6E6E6E] h-9"></span>
                <span className="font-bold">TECH</span>
              </div>
              <div className="flex justify-center items-center gap-6 text-white mt-3 border-y border-[#6E6E6E] w-73 mx-auto py-2">
                <div className="flex flex-col items-center border-r border-[#6E6E6E] pr-5">
                  <span className="text-md font-bold">23</span>
                  <span className="text-xs text-[#C9C9C9] font-bold">
                    LEARNERS
                  </span>
                </div>
                <img
                  src="src/assets/images/Courses/bg_courses_01.jpg"
                  alt="Participants icon"
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <div className="mt-6">
                <button
                  onClick={toggleLoginPopup} // Utilisation de toggleLoginPopup
                  className="w-full bg-[#A86A28] font-bold shadow transition-all duration-700 hover:bg-[#A86A28]/80 py-2 rounded-b-xl cursor-pointer"
                >
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[320px] h-[609px] max-w-full">
          <div className="bg-[#464646] rounded-xl shadow-xl flex flex-col h-full w-full">
            <div className="relative w-full h-full mx-auto flex flex-col">
              <div className="relative w-full h-[60%] overflow-hidden select-none rounded-t-2xl">
                <div
                  className={`relative w-full h-full flex items-center justify-center transition-transform duration-500 ease-in-out ${
                    isGrabbing2 ? "cursor-grabbing" : "cursor-grab"
                  }`}
                  onMouseDown={handleMouseDown2}
                  onMouseUp={handleMouseUp2}
                  onTouchStart={handleTouchStart2}
                  onTouchMove={handleTouchMove2}
                  onTouchEnd={handleTouchEnd2}
                >
                  <AnimatePresence>
                    <motion.img
                      key={slides2[index2].image}
                      src={slides2[index2].image}
                      alt="Course Slide"
                      className="absolute w-full h-full rounded-t-2xl"
                      initial={{ opacity: 0, x: 100 * direction2 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 * direction2 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                    ></motion.div>
                  </AnimatePresence>
                </div>
              </div>
              <motion.div
                key={slides2[index2].text}
                className="text-left p-3 h-[30%] overflow-y-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {slides2[index2].text.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {index2 === 0 && i === 0 ? (
                      <span className="text-center text-lg block font-bold">
                        {line}
                      </span>
                    ) : (
                      line
                    )}
                    <br />
                  </React.Fragment>
                ))}
              </motion.div>
              <div className="flex justify-center items-center gap-6 text-white mt-3 border-y border-[#6E6E6E] w-73 mx-auto py-2">
                <div className="flex flex-col items-center border-r border-[#6E6E6E] pr-5">
                  <span className="text-md font-bold">{slides2[index2].learners}</span>
                  <span className="text-xs text-[#C9C9C9] font-bold">LEARNERS</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-md font-bold">{slides2[index2].price}$</span>
                  <span className="text-xs text-[#C9C9C9] font-bold">PRICE</span>
                </div>
              </div>
              <div className="mt-5">
                <button className="w-full h-full bg-[#A86A28] font-bold shadow transition-all duration-700 hover:bg-[#A86A28]/80 py-2 rounded-b-xl cursor-pointer">
                  {slides2[index2].buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsSection;