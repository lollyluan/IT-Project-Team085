import React from "react"
import {
  Link,
  Outlet
} from "react-router-dom"

import OverviewNavBar from "./SideNavbar/Overview/Overview--Navbar"
import DonationHistory from "./SideNavbar/Overview/DonationHistory"
import Volunteer from "./SideNavbar/Overview/VolunteerApply"
import UserInfor from "./SideNavbar/PersonInfo"

import adoptorAvatar from "../../images/adopter.png"
import defaultAvatar from "../../images/default_avatar.png"


export default function SideNavBar () {
  return (
    <>
      <div className="sideNav userProfile">
        <img className="avatar" src={defaultAvatar} alt="" />

        <div className="name">John Doe</div>

        <div className="location">| Melbourne</div>

        <ul className="functions">
          <li><Link to="/profile/overview">Overview</Link></li>
          <li><Link to="/profile/information">User Information</Link></li>
          <li><Link to="#">User Setting</Link></li>
          <li><Link to="#">Notification Setting</Link></li>
          <li><Link to="#">Privacy</Link></li>
          <li><Link to="#">Security</Link></li>
          <li><Link to="#">Payments</Link></li>
          <li><Link to="#">Help</Link></li>
          <li><Link to="#">About</Link></li>
        </ul>
        <Outlet />

      </div>
    </>
  )
}
