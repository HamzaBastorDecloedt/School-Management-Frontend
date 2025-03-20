import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import MainLayout from "./layouts/MainLayout";
import Courses from "./pages/Courses/Courses";
import ContactUs from "./pages/ContactUs/ContactUs";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import ScrollToTop from "./utils/ScrollToTop";
import { LoginProvider } from "./context/LoginContext";
import SchoolAdmission from "./pages/SchoolAdmission/SchoolAdmission";
import LearnerAdmission from "./pages/LearnerAdmission/LearnerAdmission";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

const titles: { [key: string]: string } = {
  "/": "Wayo Academy | Home",
  "/aboutus": "Wayo Academy | About Us",
  "/courses": "Wayo Academy | Courses",
  "/coursedetails": "Wayo Academy | Course details",
  "/contactus": "Wayo Academy | Contact Us",
  "/schooladmission": "Wayo Academy | School Admission",
  "/learneradmission": "Wayo Academy | Learner Admission",
  "/terms_conditions": "Wayo Academy | Terms and Conditions",
  "/privacy_policy": "Wayo Academy | Privacy policy",
};

const TitleManager = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = titles[location.pathname] || "Wayo Academy";
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <LoginProvider>
        <TitleManager />
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/coursedetails" element={<CourseDetails />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/schooladmission" element={<SchoolAdmission />} />
            <Route path="/learneradmission" element={<LearnerAdmission />} />
            <Route path="/terms_conditions" element={<TermsAndConditions />} />
            <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
      </LoginProvider>
    </Router>
  );
}

export default App;