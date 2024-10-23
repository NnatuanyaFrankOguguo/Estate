import React from 'react'
import './Video.css'
import img_8 from '../../images/hero-Image/img_8.jpg'
import play from './play.png'
import dark_img from './dark_img.jpg'
import img_11 from '../../images/hero-Image/img_11.jpg'
import weight_lifting from './weight-lifting.png'

const Video = () => {
  return (
    <>

        <div className='video maincontainer'>
            <div className="video-container">
                <div className="video-card has-bg-image" style={{backgroundImage: `url(${img_8})`}}>
                    
                    <h2 className="h2 card-title">Explore Fitness Life</h2>

                    <img className="play-icon" src={play} alt="" loading='lazy'/>

                    <a href="#" className="btn-link">Watch More</a>

                </div>
            </div>

        </div>

        {/* CLASS SECTION UNDER THE VIDEO SECTION... */}

        <div className="section classes bg-dark has-bg-image" id='class' style={{backgroundImage: `url(${dark_img})`}}>
            <div className='mistake'>
                <div className='class-container'>
                    <p className="section-subtitle">Our Classes</p>

                    <h2 className="h3 section-title text-center">Fitness Classes For Every Goal</h2>

                </div>

                <ul className="class-list has-scrollbar">

                    <li className="scrollbar-item">
                        <div className="class-card">
                            <figure className="card-banner img-holder" style={{width:'416px', height:'240px'}}>
                                <img src={img_11} alt="" style={{width: '416px', height:"240px", }} loading='lazy' className='img-cover' />
                            </figure>

                            <div className="card-content">
                                <div className="title-wrapper">
                                    <img src={weight_lifting} alt="" style={{width: "45px", height:"52px"}} className='title-icon' />

                                    <h3 className='h3'><a href='#' className='card-title'>Weight Lifting</a></h3>
                                </div>


                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur. 
                                </p>

                                <div className="class-progress">
                                    <div className="progress-wrapper">
                                        <p className="progress-label">
                                            Class Full
                                        </p>
                                        <span className="progress-value">85%</span>
                                    </div>

                                    <div className="progress-bg">
                                        <div className="progress-bar" style={{width:"85%"}}>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </li>

                    <li className="scrollbar-item">
                        <div className="class-card">
                            <figure className="card-banner img-holder" style={{width:'416px', height:'240px'}}>
                                <img src={img_11} alt="" style={{width: '416px', height:"240px", }} loading='lazy' className='img-cover' />
                            </figure>

                            <div className="card-content">
                                <div className="title-wrapper">
                                    <img src={weight_lifting} alt="" style={{width: "45px", height:"52px"}} className='title-icon' />

                                    <h3 className='h3'><a href='#' className='card-title'>Weight Lifting</a></h3>
                                </div>


                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur. 
                                </p>

                                <div className="class-progress">
                                    <div className="progress-wrapper">
                                        <p className="progress-label">
                                            Class Full
                                        </p>
                                        <span className="progress-value">85%</span>
                                    </div>

                                    <div className="progress-bg">
                                        <div className="progress-bar" style={{width:"85%"}}>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </li>

                    <li className="scrollbar-item">
                        <div className="class-card">
                            <figure className="card-banner img-holder" style={{width:'416px', height:'240px'}}>
                                <img src={img_11} alt="" style={{width: '416px', height:"240px", }} loading='lazy' className='img-cover' />
                            </figure>

                            <div className="card-content">
                                <div className="title-wrapper">
                                    <img src={weight_lifting} alt="" style={{width: "45px", height:"52px"}} className='title-icon' />

                                    <h3 className='h3'><a href='#' className='card-title'>Weight Lifting</a></h3>
                                </div>


                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, corrupti omnis.
                                </p>

                                <div className="class-progress">
                                    <div className="progress-wrapper">
                                        <p className="progress-label">
                                            Class Full
                                        </p>
                                        <span className="progress-value">55%</span>
                                    </div>

                                    <div className="progress-bg">
                                        <div className="progress-bar" style={{width:"85%"}}>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </li>

                </ul>

            </div>

        </div>

    </>
  )
}

export default Video
