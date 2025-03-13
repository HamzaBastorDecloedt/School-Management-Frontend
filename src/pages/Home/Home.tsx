import React from "react";
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
import { Helmet } from "react-helmet-async";

const Home: React.FC = () => {
    return (
        <>
        <Helmet>
                <title>Wayo Academy | Home</title>
        </Helmet>
        <MainSection />
        <GetToKnowUs />
        <WhyChooseWayo />
        <MeetYourMentors />
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