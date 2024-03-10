import React from 'react'
import {Link} from "react-router-dom";


export default function Hero(){
    return(
        <div className="hero">
            <div className="hero2">
                <Link class='stop' to='/LandingPage'>
                <h1 className="heroText">
                    Grow Your Career!<br/>
                    Start Learning With<br/>
                     Starpenzu Tech<br/>
                     Academy.
                </h1> </Link>

                <div className="heroImg">
                    <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1684031978/starpenzu/hhh_bpjcsf.png" alt="heroimages"/>
                </div>
            </div>

            {/*<div className="testRel">*/}
            {/*    <div className="whatDoYouWantcontainer">*/}
            {/*        <div className="wantText">*/}
            {/*            What do you want <br/>*/}
            {/*            to learn today?*/}
            {/*        </div>*/}

            {/*        <div className="wantInput">*/}
            {/*            <input type="text" placeholder={'Search for courses'}/>*/}
            {/*            <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1684105403/starpenzu/Group_103_zvhj59.svg" className='searchBtn' alt=""/>*/}
            {/*        </div>*/}
            {/*        <div className="wantTrend">*/}
            {/*            <p>Trending Courses: <u>Data Structure</u> <u>Cyber Security</u> <u>Product Designing</u></p>*/}
            {/*        </div>*/}
            {/*</div>*/}


            {/*</div>*/}
        </div>

    )
}