import React from 'react'
import NavBar from "../Navbar/NavBar";
import './VideoPageStyle.css'
import Footer from "../Footer/Footer";
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';

export default function VideoPage(){
    const { videoId } = useParams();
    const { videoTitle } = useParams();
    const goBack = () =>{
        window.history.back();

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 10);
    }

    return (
        <>
            <NavBar/>
            <div className="videoPageCont">
                <div className="videoPageContHeader">
                    <div className="backArrowCont">
                        <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1683922753/starpenzu/Vector_r4aqp6.svg" onClick={goBack} alt=""/>
                    </div>

                    <div className="videoPageContText">
                        <div className="videoPageContHeaderText">
                            {videoTitle}
                        </div>

                        <div className="videoPageContSubText">
                            {videoTitle}
                        </div>
                    </div>
                </div>

                <div className="videoCont">
                    <div className="mainVid">

                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${videoId}`}
                            controls={true}
                            dark={true}
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
                        {videoTitle}

                    </div>

                </div>

                {/*<div className="progressBtnCont">*/}

                {/*<div className="progressBtn">*/}
                {/*    <div className="prevBtn">*/}
                {/*        <span className='arrowBackk'>*/}
                {/*           <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1683922753/starpenzu/Vector_r4aqp6.svg" alt=""/>*/}
                {/*        </span>*/}
                {/*        <div>*/}
                {/*        Previous Video*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="NextBtn">*/}
                {/*        <div>*/}
                {/*        Next Video*/}
                {/*        </div>*/}

                {/*        <span className='arrowForww'>*/}
                {/*           <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1683922753/starpenzu/Vector_r4aqp6.svg" alt=""/>*/}

                {/*        </span>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*</div>*/}

            </div>
            <Footer/>
        </>
    )
}