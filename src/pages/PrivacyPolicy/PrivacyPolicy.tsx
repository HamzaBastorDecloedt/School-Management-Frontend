import React from "react";
import DarkBanner from "../../components/Global/DarkBanner";
import PrivacyPolicySection from "../../components/PrivacyPolicy/PrivacyPolicySection";


const PrivacyPolicy: React.FC = () => {
  return (
    <>
        <title>Wayo Academy | Privacy Policy</title>
        <DarkBanner><div className="text-white [text-shadow:0_5px_7px_rgba(255,255,255,0.5)]">PRIVACY POLICY</div></DarkBanner>
        <PrivacyPolicySection />
    </>
  );
};

export default PrivacyPolicy;
