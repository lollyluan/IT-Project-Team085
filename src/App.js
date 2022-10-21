import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeRouter from './router/home'
import PetRouter from './router/pets'
import { Pets } from '@mui/icons-material'
import PetList from './Components/petlist'



import Volunteer from "./Components/UserProfile--NavBar/Overview/VolunteerApply"
import DonationHistory from "./Components/UserProfile--NavBar/Overview/DonationHistory"
import SideNavBar from "./Components/UserProfile--NavBar/SideNavBar"
function App () {
  return (
    <div className="App">
      <HomeRouter />

      <Volunteer />
      <DonationHistory />
      <SideNavBar />
    </div>
  )
}

export default App
