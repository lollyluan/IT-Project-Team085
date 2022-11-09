import React from "react"
import OverviewNavBar from "./Overview--Navbar"
import ShowMyPet from "./AdoptionHistory"
import DonationHistory from "./DonationHistory"
import Volunteer from "./VolunteerApply"

import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from "react-router-dom"

export default function Overview () {
  return (
    <>

      <OverviewNavBar />
      <div className="profileContainer">
        <Routes>
          <Route path="/profile/overview/adoptionHistory" element={<ShowMyPet />}></Route>
          <Route path="/profile/overview/donationHistory" element={<DonationHistory />}></Route>
          <Route path="/profile/overview/volunteer" element={<Volunteer />}></Route>
        </Routes>
      </div>

    </>
  )
}