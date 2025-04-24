import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Overview from './Components/Overview'
import Transforming from './Components/Transforming'
import Aboutus from './Components/Aboutus'
import Clients from './Components/Clients'
import Works from './Components/Works'
import Ourservices from './Components/Ourservices'
import Review from './Components/Review'

function App() {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Overview/>
      <Transforming/>
      <Aboutus/>
      <Clients/>
      <Works/>
      <Ourservices/>
      <Review/>
    </div>
  )
}

export default App
