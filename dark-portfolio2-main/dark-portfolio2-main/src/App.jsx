import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from "react-scroll-to-top";
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const App = () => {
  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Project/>
      <Contact/>
      <Footer/>
      <ScrollToTop smooth color='white' style={{backgroundColor: '#3BB2F6', display:'flex',alignItems:'center', justifyContent:'center'}}/>
    </div>
  )
}

export default App
