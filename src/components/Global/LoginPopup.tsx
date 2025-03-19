import React, { useState, useEffect } from "react";
import { BsFillGeoAltFill } from "react-icons/bs";
import {
  FaChevronDown,
  FaSchool,
  FaPhoneAlt,
  FaCalendarAlt,
  FaRegWindowClose,
  FaList,
  FaImage,
} from "react-icons/fa";
import { PiSkipBackCircle } from "react-icons/pi";
import { TbGenderBigender } from "react-icons/tb";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

interface LoginPopupProps {
  isVisible: boolean;
  onClose: () => void;
  position: { top: number; left: string; transform: string };
}

const LoginPopup: React.FC<LoginPopupProps> = ({
  isVisible,
  onClose,
  position,
}) => {
  // États pour le formulaire de connexion initial
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Nouvel état pour Forget Password
  const [showForgetPasswordForm, setShowForgetPasswordForm] = useState(false);
  const [forgetEmail, setForgetEmail] = useState("");

  // États communs pour la navigation
  const [showRegisterOptions, setShowRegisterOptions] = useState(false);
  const [showMentorForm, setShowMentorForm] = useState(false);
  const [showLearnerForm, setShowLearnerForm] = useState(false);
  const [step, setStep] = useState(1);

  // États spécifiques pour Mentor
  const [mentorSchoolName, setMentorSchoolName] = useState("");
  const [mentorPhone, setMentorPhone] = useState("");
  const [mentorAddress, setMentorAddress] = useState("");
  const [mentorDescription, setMentorDescription] = useState("");
  const [mentorFullName, setMentorFullName] = useState("");
  const [mentorEmail, setMentorEmail] = useState("");
  const [mentorPassword, setMentorPassword] = useState("");
  const [mentorConfirmPassword, setMentorConfirmPassword] = useState("");
  const [mentorSelectedImage, setMentorSelectedImage] = useState<File | null>(null);
  const [mentorSelectedGender, setMentorSelectedGender] = useState<string>("Select gender");
  const [mentorSelectedCategory, setMentorSelectedCategory] = useState<string>("Select a category");
  const [mentorToggleOption, setMentorToggleOption] = useState<"private" | "public">("private");
  const [mentorIsDropdownOpen, setMentorIsDropdownOpen] = useState(false);
  const [mentorIsGenderDropdownOpen, setMentorIsGenderDropdownOpen] = useState(false);

  // États spécifiques pour Learner
  const [learnerFirstName, setLearnerFirstName] = useState("");
  const [learnerLastName, setLearnerLastName] = useState("");
  const [learnerEmail, setLearnerEmail] = useState("");
  const [learnerBirthDate, setLearnerBirthDate] = useState<string>("");
  const [learnerAddress, setLearnerAddress] = useState("");
  const [learnerPhone, setLearnerPhone] = useState("");
  const [learnerPassword, setLearnerPassword] = useState("");
  const [learnerConfirmPassword, setLearnerConfirmPassword] = useState("");
  const [learnerSelectedGender, setLearnerSelectedGender] = useState<string>("Select gender");
  const [learnerIsGenderDropdownOpen, setLearnerIsGenderDropdownOpen] = useState(false);
  const [learnerSelectedImage, setLearnerSelectedImage] = useState<File | null>(null);

  // États pour la gestion des images
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // Handlers pour Mentor
  const handleMentorImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMentorSelectedImage(file);
      console.log("Image sélectionnée (Mentor) :", file.name);
    }
  };

  const handleMentorDropdownToggle = () => setMentorIsDropdownOpen((prev) => !prev);
  const handleMentorCategorySelect = (category: string) => {
    setMentorSelectedCategory(category);
    setMentorIsDropdownOpen(false);
  };

  const handleMentorGenderDropdownToggle = () => setMentorIsGenderDropdownOpen((prev) => !prev);
  const handleMentorGenderSelect = (gender: string) => {
    setMentorSelectedGender(gender);
    setMentorIsGenderDropdownOpen(false);
  };

  const handleMentorToggle = (option: "private" | "public") => setMentorToggleOption(option);

  // Handlers pour Learner
  const handleLearnerGenderDropdownToggle = () => setLearnerIsGenderDropdownOpen((prev) => !prev);
  const handleLearnerGenderSelect = (gender: string) => {
    setLearnerSelectedGender(gender);
    setLearnerIsGenderDropdownOpen(false);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  // Handlers communs
  const handleLogin = () => console.log("Email:", email, "Password:", password);

  const handleRegisterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowRegisterOptions(true);
  };

  const handleBackToLogin = () => {
    setShowMentorForm(false);
    setShowLearnerForm(false);
    setShowForgetPasswordForm(false);
  };

  const handleBackToLoginForm = () => {
    setShowRegisterOptions(false);
    setShowMentorForm(false);
    setShowLearnerForm(false);
    setShowForgetPasswordForm(false);
  };

  const handleMentorRegisterClick = () => {
    setShowMentorForm(true);
    setShowLearnerForm(false);
    setShowForgetPasswordForm(false);
    setStep(1);
  };

  const handleLearnerRegisterClick = () => {
    setShowLearnerForm(true);
    setShowMentorForm(false);
    setShowForgetPasswordForm(false);
    setStep(1);
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleNextStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const handleNextStep3 = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
  };

  const handlePreviousStepFrom2 = () => setStep(1);
  const handlePreviousStepFrom3 = () => setStep(2);
  const handlePreviousStepFrom4 = () => setStep(3);

  const handleMentorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mentor registration submitted:", {
      schoolName: mentorSchoolName,
      selectedCategory: mentorSelectedCategory,
      phone: mentorPhone,
      address: mentorAddress,
      description: mentorDescription,
      toggleOption: mentorToggleOption,
      fullName: mentorFullName,
      email: mentorEmail,
      selectedGender: mentorSelectedGender,
      selectedImage: mentorSelectedImage ? mentorSelectedImage.name : "No image",
      password: mentorPassword,
      confirmpassword: mentorConfirmPassword,
    });
  };

  const handleLearnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Learner registration submitted:", {
      firstName: learnerFirstName,
      lastName: learnerLastName,
      email: learnerEmail,
      address: learnerAddress,
      phone: learnerPhone,
      selectedGender: learnerSelectedGender,
      birthDate: learnerBirthDate || "Non spécifiée",
      password: learnerPassword,
      confirmpassword: learnerConfirmPassword,
      selectedImage: learnerSelectedImage ? learnerSelectedImage.name : "No image",
    });
  };

  // Handler pour Forget Password
  const handleForgetPasswordClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowForgetPasswordForm(true);
    setShowRegisterOptions(false);
    setShowMentorForm(false);
    setShowLearnerForm(false);
  };

  const handleForgetPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Forget Password submitted with email:", forgetEmail);
    setForgetEmail("");
    onClose(); // Ferme le popup après soumission (optionnel)
  };

  const resetForm = () => {
    setShowRegisterOptions(false);
    setShowMentorForm(false);
    setShowLearnerForm(false);
    setShowForgetPasswordForm(false);
    setStep(1);
    setEmail("");
    setPassword("");
    setForgetEmail("");
    setMentorSchoolName("");
    setMentorPhone("");
    setMentorAddress("");
    setMentorDescription("");
    setMentorFullName("");
    setMentorEmail("");
    setMentorPassword("");
    setMentorConfirmPassword("");
    setMentorSelectedCategory("Select a category");
    setMentorToggleOption("private");
    setMentorSelectedImage(null);
    setMentorSelectedGender("Select gender");
    setLearnerFirstName("");
    setLearnerLastName("");
    setLearnerEmail("");
    setLearnerAddress("");
    setLearnerPhone("");
    setLearnerPassword("");
    setLearnerConfirmPassword("");
    setLearnerSelectedGender("Select gender");
    setLearnerBirthDate("");
    setLearnerSelectedImage(null);
    setProfileImage(null);
  };

  useEffect(() => {
    if (!isVisible) {
      resetForm();
    }
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed 2xl:mt-4 xl:mt-4 lg:mt-4 py-10 bg-[#dadada91] backdrop-blur-sm text-black border border-white p-8 rounded-lg shadow-lg w-[90vw] 2xl:w-[20vw] xl:w-[23vw] lg:w-[29vw] md:w-[40vw] sm:w-[45vw] max-w-[100vw] max-h-[70vh] h-auto login-popup"
      style={{
        position: "absolute",
        zIndex: 100,
        top: position.top,
        left: position.left,
        transform: position.transform,
      }}
    >
      <button onClick={onClose} className="absolute top-2 right-3 text-white">
        <FaRegWindowClose size={20} />
      </button>
      {!showRegisterOptions && !showMentorForm && !showLearnerForm && !showForgetPasswordForm ? (
        <>
          <div className="relative mb-5">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded bg-white"
            />
            <span className="absolute -top-4 right-0 text-red-500">*</span>
          </div>
          <div className="relative mb-5">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded bg-white"
            />
            <span className="absolute -top-4 right-0 text-red-500">*</span>
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-[#d2822d] text-white p-1 rounded hover:bg-opacity-90"
          >
            LOGIN
          </button>
          <div className="text-start text-xs mt-3">
            <span className="tracking-wide">NO ACCOUNT YET? </span>
            <a
              href="#"
              onClick={handleRegisterClick}
              className="text-white hover:text-[#000000] px-1 inline tracking-wider font-semibold"
            >
              (REGISTER)
            </a>
            <div className="mt-4 text-nowrap">
              <span className="tracking-wide">FORGOT ACCOUNT?</span>
              <a
                href="#"
                onClick={handleForgetPasswordClick}
                className="text-white hover:text-[#000000] px-1 tracking-wider font-semibold"
              >
                (FORGET PASSWORD)
              </a>
            </div>
          </div>
        </>
      ) : showForgetPasswordForm ? (
        <div className="flex flex-col space-y-3">
          <div className="flex items-center mb-5">
            <a onClick={handleBackToLoginForm} className="flex items-center cursor-pointer">
              <PiSkipBackCircle size={25} className="mr-1" />
              <h1 className="text-md font-semibold">LOGIN</h1>
            </a>
          </div>
          <h1 className="text-md font-semibold">RESET PASSWORD</h1>
          <form onSubmit={handleForgetPasswordSubmit} className="space-y-5">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                value={forgetEmail}
                onChange={(e) => setForgetEmail(e.target.value)}
                className="w-full p-2 border rounded bg-white"
              />
              <span className="absolute -top-4 right-0 text-red-500">*</span>
            </div>
            <button
              type="submit"
              className="w-full bg-[#d2822d] text-white p-2 rounded-lg hover:bg-opacity-90"
            >
              SENT PASSWORD RESET LINK
            </button>
          </form>
        </div>
      ) : !showMentorForm && !showLearnerForm ? (
        <div className="flex flex-col space-y-4">
          <a
            onClick={handleBackToLoginForm}
            className="flex items-center mb-6 cursor-pointer"
          >
            <PiSkipBackCircle size={25} className="mr-1" />
            <h1 className="text-md font-semibold">LOGIN</h1>
          </a>
          <button
            onClick={handleLearnerRegisterClick}
            className="w-full bg-[#d2822d] text-white p-2 rounded hover:bg-opacity-90 cursor-pointer"
          >
            I am a Learner
          </button>
          <button
            onClick={handleMentorRegisterClick}
            className="w-full bg-[#d2822d] text-white p-2 rounded hover:bg-opacity-90 cursor-pointer"
          >
            I am a Mentor
          </button>
        </div>
      ) : (
        <div className="flex space-x-4">
          <div className="flex flex-col items-start">
            <a
              onClick={
                step === 1
                  ? handleBackToLogin
                  : step === 2
                  ? handlePreviousStepFrom2
                  : step === 3
                  ? handlePreviousStepFrom3
                  : handlePreviousStepFrom4
              }
              className="flex mb-0 cursor-pointer"
            >
              <PiSkipBackCircle size={25} className="mr-1" />
              <h1 className="text-sm"></h1>
            </a>
            <div className="flex flex-col items-center space-y-3 py-3">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center ${
                  step === 1 ? "bg-[#d2822d] text-white" : "bg-gray-300"
                }`}
              >
                1
              </div>
              <span className="border-l h-5"></span>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center ${
                  step === 2 ? "bg-[#d2822d] text-white" : "bg-gray-300"
                }`}
              >
                2
              </div>
              <span className="border-l h-5"></span>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center ${
                  step === 3 ? "bg-[#d2822d] text-white" : "bg-gray-300"
                }`}
              >
                3
              </div>
              <span className="border-l h-5"></span>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center ${
                  step === 4 ? "bg-[#d2822d] text-white" : "bg-gray-300"
                }`}
              >
                4
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4 mt-5">
            {showMentorForm ? (
              <>
                {step === 1 ? (
                  <form onSubmit={handleNextStep} className="space-y-4">
                    <h1 className="text-md font-semibold 2xl:text-md xl:text-sm lg:text-sm">
                      SCHOOL INFORMATION
                    </h1>
                    <div className="relative">
                      <div className="relative">
                        <FaSchool className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                        <input
                          type="text"
                          placeholder="School Name"
                          value={mentorSchoolName}
                          onChange={(e) => setMentorSchoolName(e.target.value)}
                          className="w-full pl-10 p-2 border rounded text-sm 2xl:text-md xl:text-sm lg:text-sm bg-white"
                        />
                      </div>
                      <span className="absolute -top-4 right-0 text-red-500">*</span>
                    </div>
                    <div className="relative">
                      <div className="relative flex items-center border rounded bg-white">
                        <div className="flex items-center justify-center w-12 h-12 bg-[#F8F9FA] border-r border-[#DEE2E6]">
                          <FaList className="text-black" />
                        </div>
                        <button
                          type="button"
                          onClick={handleMentorDropdownToggle}
                          className="w-full p-3 text-left text-sm text-black bg-transparent focus:outline-none flex justify-between items-center"
                        >
                          {mentorSelectedCategory}
                          <FaChevronDown className="ml-2" />
                        </button>
                        {mentorIsDropdownOpen && (
                          <div className="absolute top-full left-0 mt-1 w-full bg-white border rounded shadow-lg z-10">
                            <button
                              type="button"
                              onClick={() => handleMentorCategorySelect("Select a category")}
                              className="w-full p-2 text-left text-sm hover:bg-gray-100"
                            >
                              Select a category
                            </button>
                            <button
                              type="button"
                              onClick={() => handleMentorCategorySelect("Business")}
                              className="w-full p-2 text-left text-sm hover:bg-gray-100"
                            >
                              Business
                            </button>
                            <button
                              type="button"
                              onClick={() => handleMentorCategorySelect("Health & fitness")}
                              className="w-full p-2 text-left text-sm hover:bg-gray-100"
                            >
                              Health & fitness
                            </button>
                            <button
                              type="button"
                              onClick={() => handleMentorCategorySelect("Tech")}
                              className="w-full p-2 text-left text-sm hover:bg-gray-100"
                            >
                              Tech
                            </button>
                          </div>
                        )}
                      </div>
                      <span className="absolute -top-4 right-0 text-red-500">*</span>
                    </div>
                    <div className="relative">
                      <div className="relative">
                        <FaPhoneAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                        <input
                          type="tel"
                          placeholder="+971 22 222 2222"
                          value={mentorPhone}
                          onChange={(e) => setMentorPhone(e.target.value)}
                          className="w-full pl-10 p-2 border rounded text-sm 2xl:text-md xl:text-sm lg:text-sm bg-white"
                        />
                      </div>
                      <span className="absolute -top-4 right-0 text-red-500">*</span>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#d2822d] text-sm 2xl:text-md xl:text-sm lg:text-sm text-white p-2 rounded hover:bg-opacity-90 mt-4 cursor-pointer"
                    >
                      Next
                    </button>
                  </form>
                ) : step === 2 ? (
                  <form onSubmit={handleNextStep2} className="space-y-4">
                    <div className="relative">
                      <div className="relative">
                        <BsFillGeoAltFill className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                        <input
                          type="text"
                          placeholder="Address"
                          value={mentorAddress}
                          onChange={(e) => setMentorAddress(e.target.value)}
                          className="w-full pl-10 p-2 border rounded text-sm 2xl:text-md xl:text-sm lg:text-sm bg-white"
                        />
                      </div>
                      <span className="absolute -top-4 right-0 text-red-500">*</span>
                    </div>
                    <div className="relative">
                      <textarea
                        placeholder="Description"
                        value={mentorDescription}
                        onChange={(e) => setMentorDescription(e.target.value)}
                        className="w-full h-20 resize-none text-sm 2xl:text-md xl:text-sm lg:text-sm leading-7 focus:outline-none p-2 border rounded bg-white"
                      ></textarea>
                      <span className="absolute -top-4 right-0 text-red-500">*</span>
                    </div>
                    <div className="relative">
                      <div className="flex">
                        <button
                          type="button"
                          onClick={() => handleMentorToggle("private")}
                          className={`flex-1 py-1 rounded-l ${
                            mentorToggleOption === "private"
                              ? "bg-[#d2822d] text-sm 2xl:text-md xl:text-sm lg:text-sm text-white"
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300 text-sm 2xl:text-md xl:text-sm lg:text-sm"
                          }`}
                        >
                          PRIVATE
                        </button>
                        <button
                          type="button"
                          onClick={() => handleMentorToggle("public")}
                          className={`flex-1 py-1 rounded-r ${
                            mentorToggleOption === "public"
                              ? "bg-[#d2822d] text-sm 2xl:text-md xl:text-sm lg:text-sm text-white"
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300 text-sm 2xl:text-md xl:text-sm lg:text-sm"
                          }`}
                        >
                          PUBLIC
                        </button>
                      </div>
                      <span className="absolute -top-4 right-0 text-red-500">*</span>
                    </div>
                    <div className="relative">
                      <label
                        htmlFor="mentor-image-upload"
                        className="w-full bg-gray-200 text-sm 2xl:text-md xl:text-sm lg:text-sm text-gray-700 p-2 rounded hover:bg-gray-300 cursor-pointer text-center block"
                      >
                        {mentorSelectedImage ? mentorSelectedImage.name : "Upload Image"}
                      </label>
                      <input
                        id="mentor-image-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleMentorImageChange}
                        className="hidden"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#d2822d] text-sm 2xl:text-md xl:text-sm lg:text-sm text-white p-2 rounded hover:bg-opacity-90 cursor-pointer"
                    >
                      Next
                    </button>
                  </form>
                ) : step === 3 ? (
                  <form onSubmit={handleNextStep3} className="space-y-4">
                    <h1 className="text-md font-semibold">PERSONAL INFORMATION</h1>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={mentorFullName}
                        onChange={(e) => setMentorFullName(e.target.value)}
                        className="w-full p-2 border rounded 2xl:text-md xl:text-sm lg:text-sm bg-white"
                      />
                      <span className="absolute -top-4 right-0 text-red-500">*</span>
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Email"
                        value={mentorEmail}
                        onChange={(e) => setMentorEmail(e.target.value)}
                        className="w-full p-2 border rounded 2xl:text-md xl:text-sm lg:text-sm bg-white"
                      />
                      <span className="absolute -top-4 right-0 text-red-500">*</span>
                    </div>
                    <div className="relative">
                      <div className="relative flex items-center border rounded bg-white">
                        <div className="flex items-center justify-center w-12 h-12 bg-[#F8F9FA] border-r border-[#DEE2E6]">
                          <TbGenderBigender className="text-black" />
                        </div>
                        <button
                          type="button"
                          onClick={handleMentorGenderDropdownToggle}
                          className="w-full p-3 text-left text-sm text-black bg-transparent focus:outline-none flex justify-between items-center"
                        >
                          {mentorSelectedGender}
                          <FaChevronDown className="ml-2" />
                        </button>
                        {mentorIsGenderDropdownOpen && (
                          <div className="absolute top-full left-0 mt-1 w-full bg-white border rounded shadow-lg z-10">
                            <button
                              type="button"
                              onClick={() => handleMentorGenderSelect("Select gender")}
                              className="w-full p-2 text-left text-sm hover:bg-gray-100"
                            >
                              Select gender
                            </button>
                            <button
                              type="button"
                              onClick={() => handleMentorGenderSelect("Male")}
                              className="w-full p-2 text-left text-sm hover:bg-gray-100"
                            >
                              Male
                            </button>
                            <button
                              type="button"
                              onClick={() => handleMentorGenderSelect("Female")}
                              className="w-full p-2 text-left text-sm hover:bg-gray-100"
                            >
                              Female
                            </button>
                            <button
                              type="button"
                              onClick={() => handleMentorGenderSelect("Others")}
                              className="w-full p-2 text-left text-sm hover:bg-gray-100"
                            >
                              Others
                            </button>
                          </div>
                        )}
                      </div>
                      <span className="absolute -top-4 right-0 text-red-500">*</span>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#d2822d] text-sm 2xl:text-md xl:text-sm lg:text-sm text-white p-2 rounded hover:bg-opacity-90 cursor-pointer"
                    >
                      Next
                    </button>
                  </form>
                ) : step === 4 ? (
                  <form onSubmit={handleMentorSubmit} className="space-y-4 mt-8">
                    <div className="relative">
                      <div className="relative">
                        <FaPhoneAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                        <input
                          type="tel"
                          placeholder="+971 22 222 2222"
                          value={mentorPhone}
                          onChange={(e) => setMentorPhone(e.target.value)}
                          className="w-full pl-10 p-2 border rounded text-sm 2xl:text-md xl:text-sm lg:text-sm bg-white"
                        />
                      </div>
                      <span className="absolute -top-4 right-0 text-red-500">*</span>
                    </div>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Password"
                        value={mentorPassword}
                        onChange={(e) => setMentorPassword(e.target.value)}
                        className="w-full p-2 border rounded text-sm 2xl:text-md xl:text-sm lg:text-sm bg-white"
                      />
                      <span className="absolute -top-4 right-0 text-red-500">*</span>
                    </div>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Confirm password"
                        value={mentorConfirmPassword}
                        onChange={(e) => setMentorConfirmPassword(e.target.value)}
                        className="w-full p-2 border rounded text-sm 2xl:text-md xl:text-sm lg:text-sm bg-white"
                      />
                      <span className="absolute -top-4 right-0 text-red-500">*</span>
                    </div>
                    <button
                      type="submit"
                      className="w-full mt-5 bg-[#d2822d] text-sm 2xl:text-md xl:text-sm lg:text-sm text-white p-2 rounded hover:bg-opacity-90"
                    >
                      APPLY
                    </button>
                  </form>
                ) : null}
              </>
            ) : showLearnerForm ? (
              <>
                {step === 1 ? (
                  <form onSubmit={handleNextStep} className="space-y-4">
                    <h1 className="text-md font-semibold 2xl:text-md xl:text-sm lg:text-sm">
                      LEARNER INFORMATION
                    </h1>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="First name"
                        value={learnerFirstName}
                        onChange={(e) => setLearnerFirstName(e.target.value)}
                        className="w-full p-2 border rounded text-sm 2xl:text-md xl:text-sm lg:text-sm bg-white"
                      />
                      <span className="absolute -top-4 right-0 text-red-500">*</span>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Last name"
                        value={learnerLastName}
                        onChange={(e) => setLearnerLastName(e.target.value)}
                        className="w-full p-2 border rounded text-sm 2xl:text-md xl:text-sm lg:text-sm bg-white"
                      />
                      <span className="absolute -top-4 right-0 text-red-500">*</span>
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Email"
                        value={learnerEmail}
                        onChange={(e) => setLearnerEmail(e.target.value)}
                        className="w-full p-2 border rounded text-sm 2xl:text-md xl:text-sm lg:text-sm bg-white"
                      />
                      <span className="absolute -top-4 right-0 text-red-500">*</span>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#d2822d] text-sm 2xl:text-md xl:text-sm lg:text-sm text-white p-2 rounded hover:bg-opacity-90 mt-4 cursor-pointer"
                    >
                      Next
                    </button>
                  </form>
                ) : step === 2 ? (
                  <form onSubmit={handleNextStep2} className="space-y-4 mt-8">
                    <div className="relative">
                      <input
                        type="tel"
                        placeholder="+971 22 222 2222"
                        value={learnerPhone}
                        onChange={(e) => setLearnerPhone(e.target.value)}
                        className="w-full p-2 border rounded text-sm 2xl:text-md xl:text-sm lg:text-sm bg-white"
                      />
                      <span className="absolute -top-4 right-0 text-red-500">*</span>
                    </div>
                    <div className="relative">
                      <div className="relative flex items-center border rounded bg-white">
                        <div className="flex items-center justify-center w-12 h-12 bg-[#F8F9FA] border-r border-[#DEE2E6]">
                          <TbGenderBigender className="text-black" />
                        </div>
                        <button
                          type="button"
                          onClick={handleLearnerGenderDropdownToggle}
                          className="w-full p-3 text-left text-sm text-black bg-transparent focus:outline-none flex justify-between items-center"
                        >
                          {learnerSelectedGender}
                          <FaChevronDown className="ml-2" />
                        </button>
                        {learnerIsGenderDropdownOpen && (
                          <div className="absolute top-full left-0 mt-1 w-full bg-white border rounded shadow-lg z-10">
                            <button
                              type="button"
                              onClick={() => handleLearnerGenderSelect("Select gender")}
                              className="w-full p-2 text-left text-sm hover:bg-gray-100"
                            >
                              Select gender
                            </button>
                            <button
                              type="button"
                              onClick={() => handleLearnerGenderSelect("Male")}
                              className="w-full p-2 text-left text-sm hover:bg-gray-100"
                            >
                              Male
                            </button>
                            <button
                              type="button"
                              onClick={() => handleLearnerGenderSelect("Female")}
                              className="w-full p-2 text-left text-sm hover:bg-gray-100"
                            >
                              Female
                            </button>
                            <button
                              type="button"
                              onClick={() => handleLearnerGenderSelect("Others")}
                              className="w-full p-2 text-left text-sm hover:bg-gray-100"
                            >
                              Others
                            </button>
                          </div>
                        )}
                      </div>
                      <span className="absolute -top-4 right-0 text-red-500">*</span>
                    </div>
                    <div className="relative">
                      <DatePicker
                        selected={learnerBirthDate ? new Date(learnerBirthDate) : null}
                        onChange={(date: Date | null) =>
                          setLearnerBirthDate(date ? date.toISOString().split("T")[0] : "")
                        }
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Date of birth"
                        className="w-full pl-10 p-2 border rounded text-sm 2xl:text-md xl:text-sm lg:text-sm bg-white"
                        showPopperArrow={false}
                        isClearable
                        showYearDropdown
                        scrollableYearDropdown
                        todayButton="Today"
                        onKeyDown={(e) => e.preventDefault()}
                      />
                      <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-4 h-4" />
                      <span className="absolute -top-4 right-0 text-red-500">*</span>
                    </div>
                    <button
                      type="submit"
                      className="w-full mt-5 bg-[#d2822d] text-sm 2xl:text-md xl:text-sm lg:text-sm text-white p-2 rounded hover:bg-opacity-90 cursor-pointer"
                    >
                      Next
                    </button>
                  </form>
                ) : step === 3 ? (
                  <form onSubmit={handleNextStep3} className="space-y-4 mt-8">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Address"
                        value={learnerAddress}
                        onChange={(e) => setLearnerAddress(e.target.value)}
                        className="w-full p-2 border rounded text-sm 2xl:text-md xl:text-sm lg:text-sm bg-white"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Password"
                        value={learnerPassword}
                        onChange={(e) => setLearnerPassword(e.target.value)}
                        className="w-full p-2 border rounded text-sm 2xl:text-md xl:text-sm lg:text-sm bg-white"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        value={learnerConfirmPassword}
                        onChange={(e) => setLearnerConfirmPassword(e.target.value)}
                        className="w-full p-2 border rounded text-sm 2xl:text-md xl:text-sm lg:text-sm bg-white"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#d2822d] text-sm 2xl:text-md xl:text-sm lg:text-sm text-white p-2 rounded hover:bg-opacity-90 cursor-pointer"
                    >
                      Next
                    </button>
                  </form>
                ) : step === 4 ? (
                  <form onSubmit={handleLearnerSubmit} className="space-y-4">
                    <div className="flex flex-col items-center mb-5">
                      <div className="font-semibold">YOUR PHOTO</div>
                      <div className="w-25 h-25 mt-5 rounded-full border-2 flex items-center justify-center mb-4 overflow-hidden">
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
                      <label className="w-40 p-2 bg-[#d2822d]/[0.8] rounded text-white font-semibold text-center cursor-pointer flex items-center justify-center">
                        <FaImage className="mr-2" /> <span className="text-sm">CHOOSE A IMAGE...</span>
                        <input
                          type="file"
                          accept="image/png, image/jpeg"
                          className="hidden"
                          onChange={handleImageUpload}
                        />
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="w-full mt-7 bg-[#d2822d] text-sm 2xl:text-md xl:text-sm lg:text-sm text-white p-2 rounded hover:bg-opacity-90"
                    >
                      APPLY
                    </button>
                  </form>
                ) : null}
              </>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPopup;