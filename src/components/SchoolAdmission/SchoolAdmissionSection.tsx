import React, { useState } from "react";
import {
  FaSchool,
  FaList,
  FaMapMarkerAlt,
  FaImage,
  FaPhoneAlt,
  FaTransgender,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdKey } from "react-icons/md";
import { TbFileDescription } from "react-icons/tb";

const SchoolAdmissionSection: React.FC = () => {
  const [accessMode, setAccessMode] = useState<"PRIVATE" | "PUBLIC" | null>(
    "PRIVATE"
  );
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleToggle = (mode: "PRIVATE" | "PUBLIC") => {
    setAccessMode(mode === accessMode ? null : mode);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file.name);
    } else {
      setSelectedFile(null);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center p-5 text-white">
      <h1 className="text-3xl 2xl:text-4xl xl:text-4xl lg:text-4xl font-bold mb-6 mt-10">
        SCHOOL ADMISSION
      </h1>
      <h2 className="text-xl font-semibold mb-8 mt-5">SCHOOL INFORMATION</h2>
      <form className="w-full max-w-3xl p-0 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm text-right font-medium text-white mb-1">
              SCHOOL NAME <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative flex items-center border rounded bg-white">
              <div className="flex items-center justify-center w-12 h-12 bg-[#F8F9FA] border-r border-[#DEE2E6]">
                <FaSchool className="w-full text-black" />
              </div>
              <input
                type="text"
                placeholder="School Name"
                className="w-full p-3 border-none rounded-r bg-transparent text-black focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-right font-medium text-white mb-1">
              CATEGORY <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative flex items-center border rounded bg-white">
              <div className="flex items-center justify-center w-12 h-12 bg-[#F8F9FA] border-r border-[#DEE2E6]">
                <FaList className="text-black" />
              </div>
              <select className="w-full p-3 border-none rounded-r bg-transparent text-black focus:outline-none">
                <option>Select a category</option>
                <option>Business</option>
                <option>Health & fitness</option>
                <option>Tech</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm text-right font-medium text-white mb-1">
              PHONE <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative flex items-center border rounded bg-white">
              <div className="flex items-center justify-center w-12 h-12 bg-[#F8F9FA] border-r border-[#DEE2E6]">
                <FaPhoneAlt className="text-black" />
              </div>
              <input
                type="tel"
                placeholder="+971 22 222 222"
                className="w-full p-3 border-none rounded-r bg-transparent text-black focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-right font-medium text-white mb-1">
              ADDRESS <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative flex items-center border rounded bg-white">
              <div className="flex items-center justify-center w-12 h-12 bg-[#F8F9FA] border-r border-[#DEE2E6]">
                <FaMapMarkerAlt className="text-black" />
              </div>
              <input
                type="text"
                placeholder="Address"
                className="w-full p-3 border-none rounded-r bg-transparent text-black focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="mb-4 mt-10">
          <label className="block text-sm text-right font-medium text-white mb-1">
            DESCRIPTION <span className="text-red-500 ml-1">*</span>
          </label>
          <div className="relative flex items-start border rounded bg-white">
            <div className="flex items-center justify-center w-12 h-20 bg-[#F8F9FA] border-r border-[#DEE2E6]">
              <TbFileDescription size={22} className="text-black" />
            </div>
            <textarea
              placeholder=""
              className="w-full p-4 border-none rounded-r bg-transparent text-black focus:outline-none resize-none"
            ></textarea>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4 mt-10">
          <div className="flex flex-col">
            <label className="block text-sm text-right font-medium text-white mb-1">
              ACCESS MODE <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="flex mt-1">
              <button
                type="button"
                className={`w-1/2 p-2 text-white font-semibold rounded-l ${
                  accessMode === "PRIVATE" ? "bg-[#d2822d]/[0.8]" : "bg-[#2E2E2E]"
                }`}
                onClick={() => handleToggle("PRIVATE")}
              >
                PRIVATE
              </button>
              <button
                type="button"
                className={`w-1/2 p-2 text-white font-semibold rounded-r ${
                  accessMode === "PUBLIC" ? "bg-[#d2822d]/[0.8]" : "bg-[#2E2E2E]"
                }`}
                onClick={() => handleToggle("PUBLIC")}
              >
                PUBLIC
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="block text-sm text-right font-medium text-white mb-1">
              SCHOOL IMAGE
            </label>
            <div className="flex items-center mt-1">
              <input
                type="file"
                accept="image/png, image/jpeg"
                className="hidden"
                id="imageUpload"
                onChange={handleFileChange}
              />
              <label
                htmlFor="imageUpload"
                className="w-full p-2 bg-[#d2822d] rounded text-white font-semibold text-center cursor-pointer flex items-center justify-center"
              >
                {selectedFile ? (
                  selectedFile
                ) : (
                  <>
                    <FaImage className="mr-2" /> CHOOSE A FILE...
                  </>
                )}
              </label>
            </div>
          </div>
        </div>
      </form>
      <hr className="border border-[#2A2A2A] my-8 w-full max-w-3xl 2xl:max-w-4xl xl:max-w-4xl lg:max-w-4xl" />
      <h2 className="text-xl font-semibold mb-8">PERSONAL INFORMATION</h2>
      <form className="w-full max-w-3xl p-0 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm text-right font-medium text-white mb-1">
              Full Name<span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative flex items-center border rounded bg-white">
              <div className="flex items-center justify-center w-12 h-12 bg-[#F8F9FA] border-r border-[#DEE2E6]">
                <FaSchool className="w-full text-black" />
              </div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border-none rounded-r bg-transparent text-black focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-right font-medium text-white mb-1">
              EMAIL<span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative flex items-center border rounded bg-white">
              <div className="flex items-center justify-center w-12 h-12 bg-[#F8F9FA] border-r border-[#DEE2E6]">
                <IoMdMail className="text-black" />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border-none rounded-r bg-transparent text-black focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm text-right font-medium text-white mb-1">
              GENDER <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative flex items-center border rounded bg-white">
              <div className="flex items-center justify-center w-12 h-12 bg-[#F8F9FA] border-r border-[#DEE2E6]">
                <FaTransgender className="text-black" />
              </div>
              <select className="w-full p-3 border-none rounded-r bg-transparent text-black focus:outline-none">
                <option>Select your gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm text-right font-medium text-white mb-1">
              PHONE <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative flex items-center border rounded bg-white">
              <div className="flex items-center justify-center w-12 h-12 bg-[#F8F9FA] border-r border-[#DEE2E6]">
                <FaPhoneAlt className="text-black" />
              </div>
              <input
                type="tel"
                placeholder="+971 22 222 222"
                className="w-full p-3 border-none rounded-r bg-transparent text-black focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div>
            <label className="block text-sm text-right font-medium text-white mb-1">
              PASSWORD <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative flex items-center border rounded bg-white">
              <div className="flex items-center justify-center w-12 h-12 bg-[#F8F9FA] border-r border-[#DEE2E6]">
                <MdKey className="text-black" />
              </div>
              <input
                type="password"
                placeholder=""
                className="w-full p-3 border-none rounded-r bg-transparent text-black focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-right font-medium text-white mb-1">
              REPEAT PASSWORD <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative flex items-center border rounded bg-white">
              <div className="flex items-center justify-center w-12 h-12 bg-[#F8F9FA] border-r border-[#DEE2E6]">
                <MdKey className="text-black" />
              </div>
              <input
                type="password"
                placeholder=""
                className="w-full p-3 border-none rounded-r bg-transparent text-black focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="text-center items-center mt-10 mb-15">
            <button className="text-lg bg-[#d2822d]/[0.8] px-10 py-1 rounded-md font-semibold">APPLY</button>
        </div>
      </form>
    </div>
  );
};

export default SchoolAdmissionSection;
