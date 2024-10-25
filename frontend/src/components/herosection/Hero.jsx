import React, { useEffect, useRef, useState} from 'react'
import './Hero.css'
import leftarrow from './left.png'
import rightarrow from './right.png'
import sliderData from '../../images/hero-Image/Slider'
import hero from '../../images/hero-Image/hero.jpg'
import facebook from '../../images/hero-Image/facebook.png'
import tiktok from '../../images/hero-Image/tiktok.png'
import instagram from '../../images/hero-Image/instagram.png'
import whatsapp from '../../images/hero-Image/whatsapp.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {

    const [current, setCurrent] = useState(0)

    const nextSlide = () => {
        setCurrent(current === sliderData.length - 1 ? 0 : current + 1)
    }


    const backSlide = () => {
        setCurrent(current === 0 ? sliderData.length - 1 : current - 1)
    }

    const iconStyle = {
        fontSize : '1rem',
        marginLeft : '2px'
    }

  return (
    <div className='hero-section' style={{backgroundImage : `url(${hero})`}}>
        <div className="hero-container maincontainer" >    
            
            <div className='hero-info'>
                <div className="hero-details">
                    <div className='intro-text'>
                        <p>THE BEST</p>
                        <p>Real Estate Agency</p>
                    </div>
                </div>

                <h1 className='intro-header'>Ouchman Global Resources Agency Limited</h1>

                <h3>A real life estate company that offers you a life tenancy</h3>

                <p className='para'>Bringing a moment of satisfaction to your doorstep</p>

                <button className='intro-btn'>Get Started <FontAwesomeIcon style={iconStyle} icon={faArrowRight} /></button>

                <div className='social-container'>
                    <a href="#" data-tooltip="Facebook" ><img className='social-icons' src={facebook} alt="facebook" /></a>
                    <a href="#" data-tooltip="Whatsapp"><img className='social-icons'  src={whatsapp} alt="whatsapp" /></a>
                    <a href="#" data-tooltip="Instagram"><img className='social-icons'  src={instagram} alt="instagram" /></a>
                    <a href="#" data-tooltip="Tiktok"><img className='social-icons' src={tiktok} alt="tiktok" /></a>
                </div>


            </div>

            <div className='img-slider'>

                {sliderData.map((slide, index) => {
                    return (
                        <div key={index}>
                            {index === current && (
                                <div className='slides'>
                                    <div className="slide-img">
                                        <img src={slide.image} className="image" alt="houses" loading='lazy' />
                                    </div>
                                    <div className="slide-text">
                                        <h3 className='title'>{slide.title}</h3>
                                    </div>
                                </div>
                                
                            )}
                            
                        </div>
                    )
                } )}

                <div className="slider-btn">
                    <img className="shift-icons" onClick={backSlide} src={leftarrow} alt="leftarrow" />
                    <img className="shift-icons" onClick={nextSlide} src={rightarrow} alt="rightarrow" />
                </div>

                

            </div>
            

        </div>
    </div>
  )
}

export default Hero
