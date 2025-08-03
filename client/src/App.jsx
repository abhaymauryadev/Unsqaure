import React from 'react'
import Hero from './Pages/Hero'
import Navbar from './components/Navbar'
import Ambitious from './components/Ambitious'
import Partner from './components/Partner'
import Service from './components/Service'
import Testimonial from './components/Testimonial'
import FrequentlyAskedQuestion from './components/FrequentlyAskedQuestion'
import Footer from './components/Footer'
import Cursor from './components/Cursor'


const App = () => {
  return (
  <div>
  <Cursor/>
  <Navbar/>
  <Hero/>
  <Ambitious/>
  <Partner/>
  <Service/>
  <Testimonial/>
  <FrequentlyAskedQuestion/>
  <Footer/>
  
  </div>
  )
}

export default App