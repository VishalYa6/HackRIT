import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
const  App = () => {
  return (
   <>
    <Navbar />
    <div className="pt-10">
     <HeroSection  />
     <AboutUs />
     
    </div>
    
    {/* 
    <ContactUs/>  */}
   </>
  )
}

export default  App