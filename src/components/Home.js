import React from 'react';
import Typical from 'react-typical';
import GithubImage from '../images/github.jpg';
import LinkedinImage from '../images/linkedin.jpg';
import EmailImage from '../images/email.jpg'
import ProfileImage from '../images/profile.jpg'
import Marquee from "react-fast-marquee";

import '../styles/Home.css';

function Home() {
  return (
    <>
      <div className='container'>
        <div className="jumbotron container">
          <img src={ProfileImage} className="home-profileImage" align="right" draggable="false" alt="Profile" />
          <h1 className='home-nameHeader'>Varun Wadhwa</h1>
          <h3 className='home-typicalSubHeader'>I like: <Typical loop={Infinity} wrapper='a' steps={["learning new technologies", 4000, "designing new applications", 4000, "solving challenging problems", 4000]} /></h3>
          <p className='home-paragraphSubHeader'>Hi, welcome to my personal portfolio. Feel free to reach out to me with any comments, questions, or feedback!</p>
        </div>
        <div className="row">
          <div className="col-md-4" align="center">
            <a className="home-githubhover" href="https://github.com/vwadhwa19" target="_blank" rel="noopener noreferrer"><img src={GithubImage} title="Github" className="home-githubImage" alt="Github" /></a>
            <p className="home-githubPara">Check out my Github portfolio to see some of the cool projects I have worked on!</p>
          </div>
          <div className="col-md-4" align="center">
            <a href="https://www.linkedin.com/in/varun-wadhwa/" target="_blank" rel="noopener noreferrer"><img src={LinkedinImage} title="Linkedin" className="home-linkedinImage" alt="Linkedin" /></a>
            <p>Feel free to connect and reach out to me on Linkedln to learn more about my experiences!</p>
          </div>
          <div className="col-md-4" align="center">
            <a href="mailto:varun.wadhwa19@gmail.com" target="_blank" rel="noopener noreferrer"><img src={EmailImage} title="Email" className="home-emailImage" alt="Email" /></a>
            <p className="home-emailPara">Send me an email if you have any questions or want to get in touch!</p>
          </div>
          <Marquee speed="100" gradient={false} className="home-marqueeScroll">
            <p><b>This website was designed by Varun Wadhwa. Thanks for visiting!</b></p>
          </Marquee>
        </div>
      </div>
    </>
  )
}

export default Home;