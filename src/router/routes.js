import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import HomePage from '../pages/HomePage/homepage'
import Login from '../pages/Login/login'
import RegisterPage from '../pages/Register/register'
import DisplayPets from '../pages/Petlist/petlist'
import PetInfo from '../pages/petInformation'
import AdminLoginPage from '../pages/admin_login'
import PostPets from '../pages/PostPets'
import DiffLoginPage from '../pages/DiffLogin'
import UserProfile from '../pages/UserProfile/UserProfile'

export default function AllRoutes () {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/register" element={<RegisterPage />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/DiffLogin" element={<DiffLoginPage />}></Route>
        <Route exact path="/admin/login" element={<AdminLoginPage />}></Route>
        <Route path="/petlist" element={<DisplayPets />} />
        <Route path="/petInfo/:petId" element={<PetInfo />} />
        <Route exact path="/admin/PostPets" element={<PostPets />}></Route>
        <Route path="/profile" element={<UserProfile />} />
        <Route exact path="/admin/pet" element={<PostPets />}></Route>

      </Routes>
    </Router>
  )
}
