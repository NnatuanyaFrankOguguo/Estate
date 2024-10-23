import React, { useEffect, useRef, useState} from 'react'
import './Hero.css'
import leftarrow from './left.png'
import rightarrow from './right.png'
import sliderData from '../../images/hero-Image/Slider'
import hero from '../../images/hero-Image/hero.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {

    // const [current, setcurrent] = useState(0)
    // const length = sliderData.length
    // const timeout = useRef(null)

    // useEffect(()=>{
    //     const nextSlide = () => {
    //         setcurrent(current => (current === length - 1 ? 0 : current + 1))
    //     }

    //     timeout.current = setInterval(nextSlide, 5000)

    //     return function () {
    //         if(timeout.current){
    //             clearTimeout(timeout.current)
    //         }
    //     }

    // }, [current, length])

    // const nextSlide = () => {
    //     if(timeout.current){
    //         clearTimeout(timeout.current)
    //     }
    //     setcurrent(current === length - 1 ? 0 : current + 1)
        
    // }

    // const backSLide = () => {
    //     if(timeout.current){
    //         clearTimeout(timeout.current)
    //     }
    //     setcurrent(current === 0 ? length - 1 : current - 1)
    // }

    // if(!Array.isArray(sliderData) || sliderData.length <= 0)
    // {
    //     return null
    // }

    const iconStyle = {
        fontSize : '1rem',
        marginLeft : '2px'
    }

  return (
    <div className='hero-section'>
        <div className="hero-container maincontainer" >    
            <div className="hero-img">
                <img src={hero} alt="land" loading='lazy'/>
            </div>

            <div className='hero-info'>
                <div className="hero-details">
                    <div className='intro-text'>
                        <p>THE BEST</p>
                        <p>Real Estate Agency</p>
                    </div>
                </div>



                <h1 className='intro-header'>Ouchman Global Resources Agency Limited</h1>

                <h3>A real life estate company that offers you a life tenancy</h3>

                <p>Bringing a moment of satisfaction to your doorstep</p>

                <button className='intro-btn'>Get Started <FontAwesomeIcon style={iconStyle} icon={faArrowRight} /></button>

                <div className='social-container'>

                </div>


            </div>

            <div className='img-slider'>

            </div>
            

        </div>
    </div>
  )
}

export default Hero
