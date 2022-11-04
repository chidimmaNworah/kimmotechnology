import React, { useEffect } from 'react'
import {About, Footer, Header, Skills, Testimonial, Work} from './container'
import {Navbar} from './components'
import './App.scss'
import ReactGa from 'react-ga'

const App = () => {
  useEffect(() => {
    ReactGa.initialize('G-QS69FP9SY4')

    ReactGa.pageview('/')
  }, [])

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
