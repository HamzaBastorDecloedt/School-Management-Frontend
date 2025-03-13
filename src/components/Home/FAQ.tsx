import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: '"What are the main features offered by Wayo Academy?"',
    answer:
      "Wayo Academy provides a platform for online classes, quizzes, student management, and interactive learning tools.",
  },
  {
    question: '"Can I organize online classes and quizzes on the platform?"',
    answer:
      "Yes, Wayo Academy allows you to create and manage online classes, quizzes, and assessments with ease.",
  },
  {
    question: '"How do I create an account on Wayo Academy?"',
    answer:
      "To create an account, simply visit our website, click on 'Sign Up', and follow the registration steps.",
  },
  {
    question: '"Is Wayo Academy available on both mobile and desktop?"',
    answer:
      "Yes, the platform is accessible on both mobile devices and desktops for convenience.",
  },
  {
    question: '"What subscription plans are available?"',
    answer:
      "Wayo Academy offers free and premium plans tailored to different needs, including individual and institutional packages.",
  },
  {
    question: '"How can I contact technical support if I encounter an issue?"',
    answer:
      "You can contact our technical support via email, live chat, or the support ticket system available in your account.",
  },
  {
    question: '"Is my personal data secure on Wayo Academy?"',
    answer:
      "Absolutely! We use advanced encryption and security measures to protect all user data.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center py-5">
      <div className="max-w-4xl w-full">
        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Icône et titre alignés à gauche */}
          <div className=" md:flex flex-col text-center items-center md:col-span-1">
            <h2 className="2xl:text-left xl:text-left lg:text-center text-5xl font-serif mb-4">
              FAQ
            </h2>
            <div className="relative w-full  flex-col items-center hidden md:block">
              <img
                src="src/assets/images/Home/FAQ.png"
                className="2xl:w-25 2xl:h-30 xl:w-25 xl:h-30 lg:w-25 lg:h-30 w-25 h-32 md:w-25 md:h-30 rotate-[-10deg] absolute top-7 right-10 2xl:right-20 xl:right-20 lg:right-20 md:right-10"
              />
              <img
                src="src/assets/images/Home/FAQ.png"
                className="2xl:w-30 2xl:h-35 xl:w-30 xl:h-35 lg:w-30 lg:h-35 w-30 h-40 md:w-30 md:h-35 rotate-[22deg] absolute top-18 left-15 2xl:left-12 xl:left-12 lg:left-10 md:left-10"
              />
            </div>
          </div>

          {/* FAQ Section - Prend plus de largeur */}
          <div className="w-full md:col-span-4 2xl:ml-40 xl:ml-40 lg:ml-10 md:ml-0">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b-3 border-white w-full">
                <button
                  className={`w-full flex justify-between items-center py-3 px-6 text-left text-xl tracking-wider font-bold transition-all duration-300 ${
                    openIndex === index
                      ? "text-[#FA9730] font-bold"
                      : "text-white"
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="w-full">{faq.question}</span>
                  {openIndex === index ? (
                    <FaMinus className="text-[#FA9730]" />
                  ) : (
                    <FaPlus className="text-white" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[500px] py-4 px-6" : "max-h-0"
                  }`}
                >
                  <p className="text-white text-justify">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
