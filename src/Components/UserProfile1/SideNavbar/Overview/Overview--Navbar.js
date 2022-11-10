import React from "react"
import {
  Link,
  Outlet
} from "react-router-dom"



export default function OverviewNavBar () {

  return (
    <div className="overviewNav userProfile">
      <Link to="/profile/overview/adoptionHistory"> Adoption History</Link>
      <Link to="/profile/overview/donationHistory"> Donation History</Link>
      <Link to="/profile/overview/volunteer"> Volunteer</Link>

      <Outlet />
    </div>
  )
}