import React, { useEffect } from 'react'
import {About, Footer, Header, Skills, Testimonial, Work} from './container'
import {Navbar} from './components'
import './App.scss'
import TagManager from 'react-gtm-module'

const App = () => {
  

  useEffect(() => {
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

    const tagManagerArgs = {
      gtmId
    }
    TagManager.initialize(tagManagerArgs)
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
