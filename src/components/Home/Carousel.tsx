import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "src/assets/images/Home/bg_Caroussel.png",
    text: "Mastering Scrum: Your Guide to Becoming an Expert",
    buttonText: "Read More",
  },
  {
    image: "src/assets/images/Home/Image_02.jpg",
    text: "Work Smarter, Not Harder Online Course",
    buttonText: "Read More",
  },
  {
    image: "src/assets/images/Home/Image_03.png",
    text: "From Awkward To Awesome: Secrets To Success",
    buttonText: "Read More",
  },
];

const Carousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [startY, setStartY] = useState<number | null>(null);
  const [isGrabbing, setIsGrabbing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseDown = (event: React.MouseEvent) => {
    setStartY(event.clientY);
    setIsGrabbing(true);
  };

  const handleMouseUp = (event: React.MouseEvent) => {
    if (startY !== null) {
      const deltaY = event.clientY - startY;
      if (deltaY < -50) {
        setIndex((prevIndex) => (prevIndex + 1) % slides.length);
      } else if (deltaY > 50) {
        setIndex(
          (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
        );
      }
    }
    setStartY(null);
    setIsGrabbing(false);
  };

  return (
    <div
      className={`relative w-full h-[60vh] overflow-hidden select-none ${
        isGrabbing ? "cursor-grabbing" : "cursor-grab"
      }`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <AnimatePresence>
        <motion.img
          key={slides[index].image}
          src={slides[index].image}
          alt="Scrum Image"
          className="absolute w-full h-full "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }} // Plus sombre (ajuste entre 0 et 1)
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        ></motion.div>
      </AnimatePresence>

      {/* Indicateurs de position (points à gauche) */}
      <div className="absolute top-0 left-4 h-full flex flex-col justify-center gap-4">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-1 h-10 rounded-full transition-all duration-300 ${
              i === index ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-between text-white text-2xl p-5">
        <h1 className="font-serif text-center">{slides[index].text}</h1>

        <button className="mb-30 px-6 py-2 text-white transition font-semibold cursor-pointer">
          {slides[index].buttonText}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
