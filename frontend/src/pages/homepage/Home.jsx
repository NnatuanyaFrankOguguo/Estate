import React from 'react'
import About from '../../components/aboutsection/About.jsx'
import Video from '../../components/Videosection/Video.jsx'
import Counter from '../../components/counter/counter.jsx'

const Home = () => {
  return (
    <div>
        <Counter/>
        <About/>
        <Video/>
    </div>
  )
}

export default Home
