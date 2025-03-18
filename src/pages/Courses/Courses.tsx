import React from "react";
import DiscoverOurCourses from "../../components/Courses/DiscoverOurCourses";
import DiscoverOurCoursesBanner from "../../components/Global/DiscoverOurCoursesBanner";
import BottomBanner from "../../components/Courses/BottomBanner";

const Courses: React.FC = () => {
    return (
        <>
        <title>Wayo Academy | Courses</title>
        <DiscoverOurCoursesBanner />
        <DiscoverOurCourses />
        <BottomBanner />
        </>
    )
}

export default Courses