# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

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
