import React from 'react'
import NavBar from "../Navbar/NavBar";
import './VideoPageStyle.css'
import Footer from "../Footer/Footer";
import {useLocation, useParams} from "react-router-dom";
import ReactPlayer from "react-player";
import {Helmet} from "react-helmet-async";
// import accordionData from "../CoursesPageALL/Django/accordionData";


export default function VideoPage(){
    const { videoId } = useParams();
    const location = useLocation();
    const { courseData, selectedIndex } = location.state || {};

    if (!courseData || selectedIndex === undefined) {
        // Handle the case when data is not available
        return <div>Loading or error message...</div>;
    }





    return (
        <>
            <Helmet>
                <title>Video Page</title>
                <meta
                    name='description'
                    content='Unlock your potential with our programming courses. From beginner to advanced levels, master the art of programming with our expert-led courses.'
                />
                <meta property="og:title" content="Starpenzu" />

                <meta name="keywords" content="Programming, CodingCourses, TechEducation" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourwebsite.com" />
                <meta property="og:image" content="https://example.com/image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Your Website Title" />
                <meta
                    name="twitter:description"
                    content="Embark on a coding journey with our premier programming courses! From Python to JavaScript, level up your skills with expert-led tutorials and hands-on projects."
                />
                <meta name="twitter:image" content="https://example.com/image.jpg" />
                <meta name="twitter:site" content="@yourtwitterhandle" />
                <meta
                    property="og:description"
                    content="Embark on a coding journey with our premier programming courses! From Python to JavaScript, level up your skills with expert-led tutorials and hands-on projects."
                />
                <link rel="canonical" href="https://starpenzu-seo.netlify.app/videopage/:videoId"/>
            </Helmet>
            <NavBar/>
            <div className="videoPageCont">
                <div className="videoPageContHeader">
                    <div className="backArrowCont">
                        <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1683922753/starpenzu/Vector_r4aqp6.svg" alt=""/>
                    </div>

                    <div className="videoPageContText">
                        <div className="videoPageContHeaderText">
                            Learn Figma: Design Essentials-  UI/UX Design
                        </div>

                        <div className="videoPageContSubText">
                         {/*Downloading and Installation of Figma on your PC*/}
                            {courseData}
                        </div>

                    </div>
                </div>

                <div className="videoCont">
                    <div className="mainVid">
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${videoId}`}
                            controls
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>

                <div className="aboutVideo">
                    <div className="aboutVideoMainText">
                        About This Video
                    </div>

                    <div className="aboutVideoSubText">
                        In this Video, you will learn how to download Figma Software Application on your PC or Mac.
                    </div>

                </div>

                <div className="progressBtnCont">

                <div className="progressBtn">
                    <div className="prevBtn">
                        <span className='arrowBackk'>
                           <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1683922753/starpenzu/Vector_r4aqp6.svg" alt=""/>
                        </span>
                        <div>
                        Previous Video
                        </div>
                    </div>
                    <div className="NextBtn">
                        <div>
                        Next Video
                        </div>

                        <span className='arrowForww'>
                           <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1683922753/starpenzu/Vector_r4aqp6.svg" alt=""/>

                        </span>
                    </div>
                </div>
                </div>

            </div>
            <Footer/>
        </>
    )
}