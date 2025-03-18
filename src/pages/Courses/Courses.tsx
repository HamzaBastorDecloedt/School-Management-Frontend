import React from "react";
import DiscoverOurCourses from "../../components/Courses/DiscoverOurCourses";

import BottomBanner from "../../components/Global/BottomBanner";
import TopBanner from "../../components/Global/TopBanner";

const Courses: React.FC = () => {
    return (
        <>
        <title>Wayo Academy | Courses</title>
        <TopBanner>DISCOVER OUR COURSES</TopBanner>
        <DiscoverOurCourses />
        <BottomBanner />
        </>
    )
}

export default Courses