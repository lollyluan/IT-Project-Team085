import './App.css'
import './userProfile.css'


import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeRouter from './router/home'
import PetRouter from './router/pets'


import { Pets } from '@mui/icons-material'
import PetList from './Components/petlist'
import UploadAndDisplayImage from './Components/image'
import PostPet from "./Components/post"
import AdminLoginPage from './pages/admin_login'


import { BrowserRouter } from 'react-router-dom'

function App () {
  return (
    <div className="App">

      <PetRouter></PetRouter>
      <HomeRouter></HomeRouter>
      <AdminLoginPage></AdminLoginPage>

    </div>
  );
}

export default App;