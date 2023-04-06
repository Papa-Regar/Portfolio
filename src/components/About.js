import React from 'react'
import Lottie from "lottie-react";
import animation from '../components/animation.json'
import { Fade } from "react-awesome-reveal";



const About = () => {
  return (
    <div id='about-section' style={{ boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)' }}>
      <div class="container" style={{ padding: 10, paddingBottom: 10, backgroundColor: 'white' }}>
        <div class="row">
          <div class="col-sm" style={{ padding: '10%' }}>
            <Lottie animationData={animation} />
          </div>
          <div class="col-sm" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', justifyContent: 'center', backgroundColor: 'white', color: 'black' }}>
            <p style={{ fontSize: 17, color: '#147EFB', fontWeight: 'bold' }}>About Me</p>
            <Fade duration={9000} triggerOnce={true}>
              <p style={{ fontSize: 48, fontWeight: 'bold' }}>A dedicated Front-End Developer</p>
            </Fade>
            <p style={{ fontSize: 17 }}>I am someone who has a deep interest in programming, especially in web development. Despite having a degree in agriculture, I have always had a passion for technology and the world of web development. I consider myself a self-taught programmer, constantly seeking to expand my knowledge and skills through online resources and experimentation.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
