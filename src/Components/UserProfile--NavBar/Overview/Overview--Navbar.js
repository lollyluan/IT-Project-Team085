import React from "react"
import { Link } from "react-router-dom"

export default function OverviewNavBar () {
  return (
    <nav className="overviewNav userProfile">
      <Link to="/adoptionHistory"> Adoption History</Link>
      <Link to="/donationHistory"> Donation History</Link>
      <Link to="/volunteer"> Volunteer</Link>
    </nav>

  )
}