import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeRouter from './router/home'
import PetRouter from './router/pets'
import { Pets } from '@mui/icons-material'
import PetList from './Components/petlist'

import UserProfile from "./Components/UserProfile"
function App () {
  return (
    <div className="App">
      <HomeRouter />
      <UserProfile />
    </div>
  )
}

export default App;
