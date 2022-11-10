import './userProfile.css'

import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

import Header from "../../Components/header"
import Banner from "../../Components/UserProfile1/Banner"
import SideNavBar from "../../Components/UserProfile1/SideNav"
import Footer from "../../Components/footer"
import {Outlet} from "react-router-dom"



export default function UserProfile () {

  return (
    <div>
        <Header />
        <Banner />
        <SideNavBar />
        <Footer />
    </div>
  )
}