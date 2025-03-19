import React from "react";
import TopBanner from "../../components/Global/TopBanner";
import BottomBanner from "../../components/Global/BottomBanner";
import LearnerAdmissionSection from "../../components/LearnerAdmission/LearnerAdmissionSection";

const LearnerAdmission: React.FC = () => {
  return (
    <>
        <title>Wayo Academy | Learner Admission</title>
        <TopBanner>START YOUR JOURNEY</TopBanner>
        <LearnerAdmissionSection />
        <BottomBanner />
    </>
  );
};

export default LearnerAdmission;
