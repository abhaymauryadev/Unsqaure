import React from 'react'
import Hero from './Pages/Hero'
import Navbar from './components/Navbar'
import Ambitious from './components/Ambitious'
import Mentor from './components/mentor'
import Service from './components/Service'
import Testimonial from './components/Testimonial'
import FrequentlyAskedQuestion from './components/FrequentlyAskedQuestion'
import Footer from './components/Footer'

const App = () => {
  return (
  <div className=''>
  <Navbar/>
  <Hero/>
  <Ambitious/>
  <Mentor/>
  <Service/>
  <Testimonial/>
  <FrequentlyAskedQuestion/>
  <Footer/>
  </div>
  )
}

export default App