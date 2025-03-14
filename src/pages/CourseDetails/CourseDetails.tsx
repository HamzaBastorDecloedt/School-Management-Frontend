import React from "react";
import { Helmet } from "react-helmet-async";
import DiscoverOurCoursesBanner from "../../components/Global/DiscoverOurCoursesBanner";
import CourseDetailsSection from "../../components/CoursesDetails/CourseDetailsSection";

const CourseDetails: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Wayo Academy | Course details</title>
      </Helmet>
      <DiscoverOurCoursesBanner />
      <CourseDetailsSection />
    </>
  );
};

export default CourseDetails;
