import React from 'react';
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import './policyPage.css'
import {Helmet} from "react-helmet-async";

const HelpSupport = () =>{
    return(
        <>
            <Helmet>
                <title>Help and Support Page</title>
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
                <link rel="canonical" href="/"/>

            </Helmet>

            <NavBar/>

            <div className="heroSec">
                <div className="PrivacyHeroText">
                    Help & Support
                </div>
            </div>


            <div className="privacyBody">

                <p className="privacyHead">Help and Support:</p>

                <p className="privacyMain">
                    At Starpenzu Tech Academy, we are committed to providing excellent support to our students. We are
                    here to assist you every step of the way on your learning journey. If you have any questions,
                    concerns, or need assistance, please refer to the following information:

                </p>


                <p className="privacyHead">Frequently Asked Questions (FAQs):</p>

                <p className="privacyMain">
                    Browse through our comprehensive FAQ section to find answers to common questions about our courses,
                    admissions process, curriculum, and more. Visit <span className="makekHighlight">[link to FAQ page]</span>  to access the FAQs.

                </p>




                <p className="privacyHead">Contact Us:</p>

                <p className="privacyMain">
                    If you can't find the information you need in our FAQ section, we encourage you to reach out to our
                    dedicated support team. We are available to assist you via email, phone, or live chat during our
                    office hours. Visit<a className='link-d ffs' href="https://wa.me/message/6PVZWPUTB6KSN1"><span className="makekHighlight"> [link to contact] </span> </a> for a live chat with the support team.

                </p>

                <p className="privacyHead">Technical Support:</p>

                <p className="privacyMain">
                    For any technical issues or difficulties accessing our online learning platform, please contact our
                    technical support team <a className='link-d ffs' href="https://wa.me/message/6PVZWPUTB6KSN1"><span className="makekHighlight"> [link to contact] </span> </a>. We are available to
                    troubleshoot and provide assistance to ensure a seamless learning experience.
                </p>

                <p className="privacyHead">Feedback and Suggestions:</p>

                <p className="privacyMain">
                    We value your feedback and suggestions to continuously improve our programs and services. If you
                    have any ideas, suggestions, or feedback, please share them with us. We appreciate your input and
                    strive to provide the best learning experience for our students. We are committed to your success
                    and are dedicated to providing outstanding support throughout your journey at Starpenzu Tech
                    Academy. Don't hesitate to reach out to us whenever you need assistance.

                </p>



            </div>

            <Footer/>
        </>

    )
}

export default HelpSupport;