import React from "react";
import TermsAndConditionsSection from "../../components/TermsAndConditions/TermsAndConditionsSection";
import DarkBanner from "../../components/Global/DarkBanner";

const TermsAndConditions: React.FC = () => {
  return (
    <>
        <title>Wayo Academy | Terms and Conditions</title>
        <DarkBanner><div className="text-white [text-shadow:0_5px_7px_rgba(255,255,255,0.5)]">TERMS AND CONDITIONS</div></DarkBanner>
        <TermsAndConditionsSection />
    </>
  );
};

export default TermsAndConditions;
