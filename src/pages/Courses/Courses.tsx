import React from "react";
import { Helmet } from "react-helmet-async";
import DiscoverOurCourses from "../../components/Courses/DiscoverOurCourses";
import DiscoverOurCoursesBanner from "../../components/Global/DiscoverOurCoursesBanner";
import BottomBanner from "../../components/Courses/BottomBanner";

const Courses: React.FC = () => {
    return (
        <>
        <Helmet>
        <title>Wayo Academy | Courses</title>
      </Helmet>
        <DiscoverOurCoursesBanner />
        <DiscoverOurCourses />
        <BottomBanner />
        </>
    )
}

export default Courses