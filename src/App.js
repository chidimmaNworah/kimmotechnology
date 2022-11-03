import React from 'react'
import {About, Footer, Header, Skills, Testimonial, Work} from './container'
import {Navbar} from './components'
import ReactGA from "react-ga"
import './App.scss'

const TRACKING_ID = "G-133CQWN80N"
ReactGA.initialize(TRACKING_ID)

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App;
