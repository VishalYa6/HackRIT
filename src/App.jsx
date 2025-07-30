import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
const  App = () => {
  return (
   <>
    <Navbar/>
     <HeroSection/>
     <AboutUs />
    {/* 
    <ContactUs/>  */}
   </>
  )
}

export default  App