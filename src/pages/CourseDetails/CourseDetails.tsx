import React from "react";
import CourseDetailsSection from "../../components/CoursesDetails/CourseDetailsSection";
import TopBanner from "../../components/Global/TopBanner";

const CourseDetails: React.FC = () => {
  return (
    <>
        <title>Wayo Academy | Course details</title>
        <TopBanner>DISCOVER OUR COURSES</TopBanner>
      <CourseDetailsSection />
    </>
  );
};

export default CourseDetails;
