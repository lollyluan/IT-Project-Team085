import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import HomePage from '../pages/HomePage/homepage'
import Login from '../pages/Login/login'
import RegisterPage from '../pages/Register/register'
import DisplayPets from '../pages/Petlist/petlist'
import PetInfo2 from '../pages/petInformation2'
import AdminLoginPage from '../pages/admin_login'
import PostPets from '../pages/PostPets'
import DiffLoginPage from '../pages/DiffLogin'

import UserProfile from '../pages/UserProfile/UserProfile'
import OverviewNavBar from '../Components/UserProfile1/SideNavbar/Overview/Overview--Navbar'
import DonationHistory from '../Components/UserProfile1/SideNavbar/Overview/DonationHistory'
import Volunteer from '../Components/UserProfile1/SideNavbar/Overview/VolunteerApply'
import UserInfor from '../Components/UserProfile1/SideNavbar/PersonInfo'

import ReviewApplication from '../pages/ReviewApplication'
import Application from '../Components/Application'
import PostPet from '../Components/post'

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

        <Route path="/petInfo/:petId" element={<PetInfo2 />} />
        <Route exact path="/admin/PostPets" element={<PostPets />}></Route>

        <Route path="/profile" element={<UserProfile />} >
          <Route path="/profile/overview" element={<OverviewNavBar />}>
            <Route index element={<DonationHistory />} />
            <Route path="donationHistory" element={<DonationHistory />} />
            <Route path="volunteer" element={<Volunteer />} />
          </Route>
          <Route path="/profile/information" element={<UserInfor />} />
        </Route>

        <Route path="/admin/Dashboard" element={<ReviewApplication />} >
          <Route path="allApplication" element={<Application />} />
          <Route path="postPet" element={<PostPet />} />
        </Route>
      </Routes>
    </Router>
  )
}
