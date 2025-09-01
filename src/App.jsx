import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Overview from './Components/Overview'
import Transforming from './Components/Transforming'
import Aboutus from './Components/Aboutus'
import Clients from './Components/Clients'
import Works from './Components/Works'
import Work1 from './Components/Work1'
import Ourservices from './Components/Ourservices'
import Review from './Components/Review'
import Contact from './Components/Contact'
import MeetOurTeam from './Components/MeetOurTeam'
import MeetOtherMembers from './Components/MeetOtherMembers'
import Footer from './Components/Footer'

function App() {
  return (
     <div className="w-full min-h-screen text-white">
      <Navbar/>
      <HeroSection/>
      <Overview />
      <Transforming />
      <Aboutus/>
      <Clients/>
      <Work1/>
      <Ourservices/>
      <MeetOurTeam/>
      <Review/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
