import React from "react";
import AboutUsSection from "../../components/AboutUs/AboutUsSection";
import { Helmet } from "react-helmet-async";

const AboutUs: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Wayo Academy | About Us</title>
      </Helmet>
      <AboutUsSection />
    </>
  );
};

export default AboutUs;