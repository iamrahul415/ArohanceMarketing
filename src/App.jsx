import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Overview from './Components/Overview'
import Transforming from './Components/Transforming'
import Aboutus from './Components/Aboutus'
import Clients from './Components/Clients'
import Works from './Components/Works'
import Ourservices from './Components/Ourservices'
import Review from './Components/Review'
import Thereismore from './Components/ThereIsMore'
import Meet from './Components/MeetOurTeam'
import More from './Components/MeetOtherMembers'
import Contact from './Components/Contact'
import Last from './Components/Last'
import Arohance from './Components/Arohance'
import MeetOurTeam from './Components/MeetOurTeam'
import MeetOtherMembers from './Components/MeetOtherMembers'

function App() {
  return (
     <div className="relative w-full min-h-screen text-white">
      <Navbar/>
      <HeroSection/>
      <Aboutus/>
      <Clients/>
      <Works/>
      <Ourservices/>
      <Thereismore/>
      <MeetOurTeam/>
      {/* <MeetOtherMembers/> */}
      <Review/>
      <Contact/>
      {/* <Last/>
      <Arohance/> */}
    </div>
  )
}

export default App
