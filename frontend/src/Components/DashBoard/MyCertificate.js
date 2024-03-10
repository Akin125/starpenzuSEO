import React,  {useEffect, useState}  from 'react';
import NavBar from '../Navbar/NavBar';
// import InprogressProps from './InprogressProps';
// import CompletedProps from './CompletedProps';
import CertificateProps from './CertificateProps';
import AxiosWithAuth from "../SignUp/AxiosWithAuth";
import {Helmet} from "react-helmet-async";

export default function MyCertificate (){

    const [dataBaseCourse, setDataBaseCourse] = useState(() => null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await AxiosWithAuth.get('/user/me/', {

                });

                if (response.status === 200 || response.status === 201) {
                    // setUserInfo(response.data.name)
                    // setUserGender(response.data.gender)
                    // setNick(response.data.username)
                    setDataBaseCourse(response.data.course)
                    console.log(response.data.gender)
                }else {
                    console.log('ori e ti gbale')
                }


                // Access the user info from the response data


                // Further processing of the user info
                // ...
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Helmet>
                <title>Certificate Page</title>
                <meta
                    name='description'
                    content='Unlock your potential with our programming courses. From beginner to advanced levels, master the art of programming with our expert-led courses.'
                />
                <meta property="og:title" content="Starpenzu" />

                <meta name="keywords" content="Programming, CodingCourses, TechEducation, tech, computer programming courses" />
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
                <link rel="canonical" href="https://starpenzu-seo.netlify.app/mycerti"/>

            </Helmet>

            <NavBar/>

            <div className="dashcontainer">
                <div className="myProfile margine">
                    Certificate
                </div>
                {dataBaseCourse === "No Course" ? 'No Certificate available' :
                    (
                        <div className="conterr">

                            <CertificateProps
                                imgFirst='https://res.cloudinary.com/do5wu6ikf/image/upload/v1686911910/starpenzu/How-Important-is-UI-UX-Design-in-an-App-Development-Process_4_k6q7yv.svg'
                                headtext='The complete javascript course 2023: build real projects'
                                subtext='Congratulations'
                                thirdsegbtn='Download'
                            />
                        </div>
                    )
                }



            </div>
        </>
    )
}