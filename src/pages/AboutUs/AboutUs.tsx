import React from "react";
import AboutUsSection from "../../components/AboutUs/AboutUsSection";
import TopBanner from "../../components/Global/TopBanner";
import BottomBanner from "../../components/Global/BottomBanner";

const AboutUs: React.FC = () => {
  return (
    <>
        <title>Wayo Academy | About Us</title>
        <TopBanner>ABOUT US</TopBanner>
      <AboutUsSection />
      <BottomBanner />
    </>
  );
};

export default AboutUs;