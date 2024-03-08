import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/NavBar';
import SignInButton from './SignInbutton';
import './SignUp.css';
import { useNavigate } from "react-router-dom";
import AxiosWithAuth from "./AxiosWithAuth";
import {Helmet} from "react-helmet-async";


export default function PasswordReset (){
   // const[visible, setVisible] = useState(false)
    const[email, setEmail] = useState('')
    const[errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate();


    const inputRefs = useRef({
        email: useRef(null),
    });



    const handleInputFocus = (name) => {
        inputRefs.current[name].current.classList.add('focused');
    };

    const handleInputBlur = (name) => {
        const inputValue = inputRefs.current[name].current.value;
        if (!inputValue) {
            inputRefs.current[name].current.parentNode.classList.remove('focused');
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            const response = await AxiosWithAuth.post("/user/password-reset/", {
                email,
            });

            if (response.status === 200 || response.status === 201) {
                console.log(response)
                console.log("All dodo");
                navigate(`/createpassword/${response.data.uidb64}/${response.data.token}`);

            } else {
                // setErrorMessage("Invalid credentials. Please try again.");
                console.log("e did nuh go");
            }
        }
        catch (error) {
            setErrorMessage("Invalid credentials. Please try again.");
            console.log("Invalid credentials. Please try again.");
        }
    };

    // function handleVisibility(){
    //     if(!visible){
    //         setVisible(true)
    //     }else{
    //         setVisible(false)
    //     }
    // }


    return(
        <>
            <Helmet>
                <title>Password Reset Page</title>
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
                <link rel="canonical" href="https://main--starpenzu-seo.netlify.app/passwordreset"/>

            </Helmet>

            <NavBar/>
            <div className="signup">
                <div className="signupHeader">
                    <Link to="/">
                        <div className="backarrow">
                            <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1684452441/starpenzu/back_qpybto.svg" alt="" />
                        </div>
                    </Link>
                    <div className="testing">
                        <div className="signupTitle">Reset Password</div>
                        <div className="signupTitle-subtext">Enter your email to reset your password</div>
                    </div>

                </div>


                <form onSubmit={handleSubmit} className="register">

                    {/* Email */}
                    <div className={`outlined-input-container ${email ? 'focused' : ''}`}>
                        <input
                            type="email"
                            className="outlined-input"
                            name="email"
                            value={email}
                            ref={inputRefs.current.email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => handleInputFocus('email')}
                            onBlur={() => handleInputBlur('email')}
                        />
                        <label className={`outlined-label ${email ? 'active' : ''}`}>Email</label>
                    </div>

                    <div className="validationsec">
                        {errorMessage && (<div className="valid">{errorMessage}</div>)}
                    </div>

                    <SignInButton
                        className='registerBtn loginbtn makepayment'
                        buttonName='Continue'
                    />
                    {/*<div className="already">Just joining us? <Link className='link-d' to='/signup'><span className="loginn">Sign Up</span></Link></div>*/}


                </form>
            </div>

            <Footer/>
        </>
    )
}