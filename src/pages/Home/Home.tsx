import React, { useEffect } from "react";
import MainSection from "../../components/Home/Header";
import GetToKnowUs from "../../components/Home/GetToKnowUs";
import WhyChooseWayo from "../../components/Home/WhyChooseWayo";
import MeetYourMentors from "../../components/Home/MeetYourMentors";
import DownloadSection from "../../components/Home/DownloadSection";
import FollowUsOn from "../../components/Home/FollowUsOn";
import WhatOurMentorsSayAboutUs from "../../components/Home/WhatOurMentorsSayAboutUs";
import FAQ from "../../components/Home/FAQ";
import UpcomingEvent from "../../components/Home/UpcomingEvent";
import Pricing from "../../components/Home/Pricing";
import MasteringScrum from "../../components/Home/Carousel";
import { useLocation } from "react-router-dom";

const Home: React.FC = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.state?.scrollTo) {
          const section = document.getElementById(location.state.scrollTo);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, [location]);
      
    return (
        <>
            <title>Wayo Academy | Home</title>
        <MainSection />
        <GetToKnowUs />
        <WhyChooseWayo />
        <MeetYourMentors id="mentors" />
        <DownloadSection />
        <FollowUsOn />
        <WhatOurMentorsSayAboutUs />
        <FAQ />
        <UpcomingEvent />
        <Pricing />
        <MasteringScrum />
        </>
    )
}

export default Home