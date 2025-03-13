import React from "react";

const AboutUsSection: React.FC = () => {
  return (
    <section className="py-40 relative">
      <div className="text-4xl 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl text-white font-bold text-center">
        ABOUT US
      </div>
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto mt-20">
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <h2 className="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Welcome to Wayo Academy
              </h2>
              <p className="text-white text-base font-normal leading-relaxed lg:text-start text-center">
                Where learning adapts to you at Wayo Academy, we are dedicated
                to delivering a personalized, dynamic educational experience
                that integrates effortlessly into your life. Our platform offers
                a diverse selection of expert-led courses and practical
                resources to help you develop the skills that matter most, for
                today and the future.
              </p>
              <div>
                <p className="text-white text-base font-normal leading-relaxed lg:text-start text-center">
                  Whether you are beginning a new career, advancing in your
                  field or exploring a passion, we will support you at every
                  stage. Join us in a journey of growth, discovery and
                  achievement.
                </p>
              </div>
              <div>
                <p
                  className="text-white text-3xl leading-relaxed lg:text-start text-center"
                  style={{ fontFamily: "Pacifico, cursive" }}
                >
                  Because learning should evolve with you !
                </p>
              </div>
            </div>
            <button className="sm:w-fit w-[120px] px-3.5 py-2 bg-[#A86A28] hover:bg-[#a86a28be] transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-1.5 text-white text-sm font-medium leading-6">
                Get Started
              </span>
            </button>
          </div>
          <div className="relative w-full flex lg:justify-start md:justify-center sm:justify-center justify-center mt-10">
            <img
              className="2xl:w-[550px] 2xl:h-[540px] xl:w-[500px] xl:h-[450px] lg:w-[490px] lg:h-[450px] 
                         md:w-[500px] md:h-[450px] sm:w-[500px] sm:h-[450px] w-[450px] h-[420px] rounded-3xl"
              src="src/assets/images/AboutUs/bg_aboutus.jpg"
              alt="About Us image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
