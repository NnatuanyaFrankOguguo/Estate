import React from 'react'
import './About.css'
import img_6 from '../../images/hero-Image/img_6.jpg'

const About = () => {
  return (
    <div className='about maincontainer'>
        <div className="about-left">
            <img src={img_6} alt='' className="about-img"/>
        </div>
        <div className="about-right">
            <h1>ABOUT GYMbro</h1>
            <h3>Our Commitment to You</h3>
            <p>GYMbro is a premium fitness center that offers state-of-the-art equipment, experinced trainers, and customized workout plans to help you achieve your fitness goals.</p>
            <p>Our welcoming environment and friendly staff every visit an enjoyable experience. Join us to transform your body, boost your energy, and improve your overrall health and wellbeing</p>

            <div>
                <div className='coach-details'>
                    <img src="" alt="" />
                    <h3>Tom Welskii</h3>
                    <p>Our Coach</p>
                </div>
                <button className='intro-btn'>Learn more...</button>
            </div>
            
        </div>
    </div>
  )
}

export default About
