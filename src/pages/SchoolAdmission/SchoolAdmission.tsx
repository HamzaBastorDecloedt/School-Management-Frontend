import React from "react";
import TopBanner from "../../components/Global/TopBanner";
import BottomBanner from "../../components/Global/BottomBanner";
import SchoolAdmissionSection from "../../components/SchoolAdmission/SchoolAdmissionSection";

const SchoolAdmission: React.FC = () => {
  return (
    <>
        <title>Wayo Academy | School Admission</title>
        <TopBanner>START YOUR JOURNEY</TopBanner>
        <SchoolAdmissionSection />
        <BottomBanner />
    </>
  );
};

export default SchoolAdmission;
