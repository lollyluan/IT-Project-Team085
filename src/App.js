import './App.css'


import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeRouter from './router/home'
import PetRouter from './router/pets'
import AllRouter from './router/routes'


import { Pets } from '@mui/icons-material'
import PetList from './Components/petlist'
import UploadAndDisplayImage from './Components/image'
import PostPet from "./Components/post"
import AdminLoginPage from './pages/admin_login'

import { BrowserRouter } from 'react-router-dom'
import Application from './Components/Application'
import ReviewApplication from './pages/ReviewApplication'

import UserProfile from "./pages/UserProfile/UserProfile"

function App () {
  return (
    <div className="App">

      <AllRouter />

    </div>
  )
}

export default App