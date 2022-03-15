import React from 'react'
import Contact from './components/contact/Contact'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import TopBar from './components/topbar/TopBar'
import Works from './components/works/Works'
import './app.scss'

const App = () => {
  return (
    <div className='app'>
      <TopBar />
      <div className="sections">
        Baloo
        <Intro />
        <Portfolio />
        <Works />
        <Contact />
        <Testimonials/>
      </div>
    </div>
  )
}

export default App