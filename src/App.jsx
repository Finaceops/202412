import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Features from './Components/Features/Features'
import Advantages from './Components/Advantages/Advantages'
import Steps from './Components/Steps/Steps'
import Demo from './Components/Demo/Demo'
import Benefits from './Components/Benefits/Benefits'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import RequestDemo from './Components/RequestDemo/RequestDemo'
import UsefulLinks from './Components/UsefulLinks/UsefulLinks'

const App = () => {
  return (
    <div>
      <div id="page1">
        <Navbar />
        <Hero />
      </div>
      <div id="page2">
        <Features />
      </div>
      <div id="page3">
        {/* <Advantages /> */}
      </div>
      <div id="page4">
        {/* <Steps /> */}
      </div>
      <div id="page5">
        <Demo />
      </div>
      <div id="page6">
        {/* <Benefits /> */}
      </div>
      <div id="page7">
        <About />
      </div>
      <div id="page8">
        <RequestDemo />
      </div>
      <div id="page9">
        <UsefulLinks />
      </div>
      <div id="page10">
        <Footer />
      </div>
    </div>
  )
}

export default App