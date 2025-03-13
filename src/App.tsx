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

const titles: { [key: string]: string } = {
  "/": "Wayo Academy | Home",
  "/aboutus": "Wayo Academy | About Us",
  "/courses": "Wayo Academy | Courses",
  "/coursedetails": "Wayo Academy | Course details",
  "/contactus": "Wayo Academy | Contact Us",
};

const TitleManager = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = titles[location.pathname] || "Wayo Academy";
  }, [location.pathname]);

  return null;
};

function App() {
  console.log("Rendu de App");
  return (
    <Router>
      <TitleManager />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/coursedetails" element={<CourseDetails />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
