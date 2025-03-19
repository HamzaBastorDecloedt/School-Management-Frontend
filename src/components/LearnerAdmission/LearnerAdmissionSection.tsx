import React, { useState } from "react";
import {
    FaCalendarAlt,
    FaImage,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaTransgender,
} from "react-icons/fa";
import { MdKey } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoMdMail } from "react-icons/io";
import { HiIdentification } from "react-icons/hi2";

const LearnerAdmissionSection: React.FC = () => {
  const [learnerBirthDate, setLearnerBirthDate] = useState<string>("");
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center p-5 text-white">
      <h1 className="text-3xl 2xl:text-4xl xl:text-4xl lg:text-4xl font-bold mb-6 mt-10">
        LEARNER ADMISSION
      </h1>
      <h2 className="text-xl font-semibold mb-8 mt-5">LEARNER INFORMATION</h2>
      <form className="w-full max-w-3xl p-0 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm text-right font-medium text-white mb-1">
              FIRST NAME <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative flex items-center border rounded bg-white">
              <div className="flex items-center justify-center w-12 h-12 bg-[#F8F9FA] border-r border-[#DEE2E6]">
                <HiIdentification size={22} className="w-full text-black" />
              </div>
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border-none rounded-r bg-transparent text-black focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-right font-medium text-white mb-1">
              LAST NAME <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative flex items-center border rounded bg-white">
              <div className="flex items-center justify-center w-12 h-12 bg-[#F8F9FA] border-r border-[#DEE2E6]">
                <HiIdentification size={22} className="text-black" />
              </div>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border-none rounded-r bg-transparent text-black focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm text-right font-medium text-white mb-1">
              LEARNER EMAIL <span className="text-red-500 ml-1">*</span>
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
          <div>
            <label className="block text-sm text-right font-medium text-white mb-1">
              PHONE (OPTIONAL) <span className="text-red-500 ml-1">*</span>
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
        
        {/* Gender and Datepicker */}
        <div className="mb-4 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                DATE OF BIRTH <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative flex items-center border rounded bg-white">
              <div className="flex items-center justify-center w-12 h-12 bg-[#F8F9FA] border-r border-[#DEE2E6]">
                <FaCalendarAlt size={20} className="text-black" />
              </div>
                <DatePicker
                  selected={learnerBirthDate ? new Date(learnerBirthDate) : null}
                  onChange={(date: Date | null) =>
                    setLearnerBirthDate(
                      date ? date.toISOString().split("T")[0] : ""
                    )
                  }
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Date of birth"
                  className="w-full p-3 border-none rounded-r bg-transparent text-black focus:outline-none"
                  showPopperArrow={false}
                  isClearable
                  showYearDropdown
                  scrollableYearDropdown
                  todayButton="Today"
                  onKeyDown={(e) => e.preventDefault()}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Address field taking full width */}
        <div className="mb-4">
          <div className="w-full">
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

        {/* Password fields */}
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

        {/* Image Upload and Preview */}
        <div className="flex flex-col items-center mt-15 mb-8">
            <div className="">YOUR PHOTO</div>
          <div className="w-40 h-40 mt-5 rounded-full border-2 flex items-center justify-center mb-4 overflow-hidden">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile preview"
                className="w-full h-full object-cover"
              />
            ) : (
                <img
                src="src/assets/images/Profil/placeholder.jpg"
                alt="Placeholder"
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <label className="w-60 p-2 bg-[#d2822d]/[0.8] rounded text-white font-semibold text-center cursor-pointer flex items-center justify-center"
              >
            <FaImage className="mr-2" /> <span className="text-sm">CHOOSE A IMAGE...</span>
            <input
              type="file"
              accept="image/png, image/jpeg"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </div>

        <div className="text-center items-center mt-10 mb-15">
          <button className="text-lg bg-[#d2822d]/[0.8] px-10 py-1 rounded-md font-semibold">
            APPLY
          </button>
        </div>
      </form>
    </div>
  );
};

export default LearnerAdmissionSection;