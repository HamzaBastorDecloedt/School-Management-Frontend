import React from "react";
import { BsFillGeoAltFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

const scrollToLocation = () => {
  const locationSection = document.getElementById("location");
  if (locationSection) {
    locationSection.scrollIntoView({ behavior: "smooth" });
  }
};

const ContactSection: React.FC = () => {
  return (
    <section className="w-full relative py-5 p-3">
      <div className="absolute inset-0 bg-[url('src/assets/images/ContactUs/dubai_01.jpg')] bg-cover bg-center opacity-60"></div>
      <div className="relative mx-auto max-w-7xl sm:px-6 lg:px-8 z-10">
        <div className="bg-black rounded-4xl shadow-xl py-9">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 lg:gap-x-24 gap-y-10 lg:gap-y-0">
              <div className="flex items-center justify-center lg:mb-0 mb-10">
                <div className="w-full max-w-lg">
                  <h2 className="text-white font-manrope text-2xl sm:text-3xl lg:text-4xl font-semibold leading-10 mb-9 text-center lg:text-left">
                    Reach Out To Us
                  </h2>
                  <form action="" className="space-y-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <input
                        type="text"
                        className="w-full sm:w-1/2 h-14 shadow-sm text-white placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4"
                        placeholder="First name"
                      />
                      <input
                        type="text"
                        className="w-full sm:w-1/2 h-14 shadow-sm text-white placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4"
                        placeholder="Last name"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6">
                      <input
                        type="email"
                        className="w-full sm:w-1/2 h-14 shadow-sm text-white placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus-outline-none py-2 px-4"
                        placeholder="Email address"
                      />
                      <input
                        type="tel"
                        className="w-full sm:w-1/2 h-14 shadow-sm text-white placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4"
                        placeholder="+971 22 222 2222"
                      />
                    </div>
                    <input
                      type="text"
                      className="w-full h-14 shadow-sm text-white placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4"
                      placeholder="Location"
                    />
                    <textarea
                      name="message"
                      id="contact-message"
                      className="w-full h-48 shadow-sm resize-none text-white placeholder-text-400 text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none px-4 py-4"
                      placeholder="Comments or questions"
                    ></textarea>
                    <button className="w-full h-12 text-center text-white text-base font-semibold leading-6 rounded-full bg-[#d2822d]/[0.8] shadow transition-all duration-700 hover:bg-[#d2822d]/66 cursor-pointer">
                      Send
                    </button>
                  </form>
                </div>
              </div>
              <div className=" flex items-center justify-center relative ">
                <div className="absolute inset-0 bg-[url('https://pagedone.io/asset/uploads/1696245837.png')] bg-cover bg-no-repeat filter hue-rotate-[160deg] brightness-140 saturate-160 hidden lg:block"></div>
                <div className="w-full max-w-md relative z-10">
                  <div className="bg-[#dcdcdc] shadow-xl rounded-4xl p-4 sm:p-6">
                    <a
                      href="tel:+971501548923"
                      className="flex items-center mb-6"
                    >
                      <FaPhoneAlt size={20} color="black" />
                      <h5 className="text-black text-base font-normal leading-6 ml-3">
                        +971 50 154 8923
                      </h5>
                    </a>
                    <a
                      href="mailto:info@wayo.cloud"
                      className="flex items-center mb-6"
                    >
                      <CiMail size={25} color="black" />
                      <h5 className="text-black text-base font-normal leading-6 ml-3">
                        info@wayo.cloud
                      </h5>
                    </a>
                    <div
                      onClick={scrollToLocation}
                      className="flex items-center mb-6 cursor-pointer"
                    >
                      <BsFillGeoAltFill size={25} color="black" />
                      <h5 className="text-black text-base font-normal leading-6 ml-3">
                        R320 Um Hurair 2 Dubai UAE
                      </h5>
                    </div>
                    <div className="flex items-center justify-center border-t border-gray-100 pt-6"></div>
                    <div className="flex gap-8 justify-center">
                      <a href="" target="_blank">
                        <FaFacebook size={35} color="#1877F2" />
                      </a>
                      <a
                        href="https://www.instagram.com/wayo_academy/"
                        target="_blank"
                      >
                        <svg width="35" height="35" viewBox="0 0 24 24">
                          <defs>
                            <linearGradient
                              id="instaGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="100%"
                            >
                              <stop
                                offset="0%"
                                style={{ stopColor: "#833AB4" }}
                              />
                              <stop
                                offset="50%"
                                style={{ stopColor: "#FD1D1D" }}
                              />
                              <stop
                                offset="100%"
                                style={{ stopColor: "#F77737" }}
                              />
                            </linearGradient>
                          </defs>
                          <FaInstagram size={25} fill="url(#instaGradient)" />
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/wayoacademy/"
                        target="_blank"
                      >
                        <FaLinkedin size={35} color="#0A66C2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
