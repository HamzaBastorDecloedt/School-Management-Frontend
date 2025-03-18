import React from "react";
import ContactSection from "../../components/ContactUs/ContactSection";
import ContactUsBanner from "../../components/ContactUs/ContactUsBanner";
import WayoAcademyLocation from "../../components/ContactUs/LocationBanner";
import Map from "../../components/ContactUs/MapSection";

const ContactUs: React.FC = () => {
    return (
        <>
          <title>Wayo Academy | Contact Us</title>
        <ContactUsBanner />
        <ContactSection />
        <WayoAcademyLocation />
        <Map />
        </>
    )
}

export default ContactUs