import React from 'react';
import CoursesPageHeaderProps from '../CourseProps/CoursesPageHeaderProps';
import CoursesPageBodyProps from '../CourseProps/CoursesPageBodyProps';
import '../CoursesPageALL.css';
import NavBar from '../../Navbar/NavBar';
import Footer from '../../Footer/Footer';
import accordionData from './accordionData';
import {Helmet} from "react-helmet-async";



export default function CoursesPageUIUX(){
    return(
             <>
                 <Helmet>
                     <title>UI/UX Page</title>
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
                     <link rel="canonical" href="https://starpenzu-seo.netlify.app/coursespageuiux"/>

                 </Helmet>
                    <NavBar/>
                <div className='forceMiddle'>
                    <div className="CoursesPageContainer">
                        <CoursesPageHeaderProps
                            CoursesPagetitle='Learn Figma: Design Essentials-  UI/UX Design'
                            CoursesPageimgClass='CoursesPageimgUIUX'
                        />
                        <CoursesPageBodyProps
                            //CoursesPagetext
                            CoursesPagetext=' This is a course in Product Design using Figma as your main tool for Beginners requesting a
                                full concentration from students. This is so well detailed starting from how to install Figma software even for those with
                                zero knowledge in design. There would be series of live sections, quizzes and examinations as you partake in this course.
                                You will also be issued a certificate at the end of this course.'


                            //CoursesPagelist1
                            one='Understanding Figma tools'
                            two='Design Thinking'
                            three='User Research'
                            four='User Experience'
                            five='User Interface Design'
                            six='UX Deliverables'
                            seven='Case Studies and UX Portfolios'
                            eight='Designing with Figma'
                            nine='Wireframing'
                            ten='Building Style Guides & Design Systems'
                            ele='Understanding Responsive Designs'
                            twel='Prototyping'
                            thirt='UX Documentation & Design Hand off'

                            //CoursesPagelist2
                            fourt='Internet Connectivity'
                            fivt='At Least a 4GB RAM Laptop'
                            sixt='A Pen and Jotter for Note Taking'
                            sevent='Your Concentration'

                            coursedata={accordionData}


                        />
                    </div>

                    <Footer/>
                </div>
             </>
    )
}