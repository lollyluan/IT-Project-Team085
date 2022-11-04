import React from "react"
import OverviewNavBar from "./Overview--Navbar"
import ShowMyPet from "./AdoptionHistory"
import DonationHistory from "./DonationHistory"
import Volunteer from "./VolunteerApply"


import { Route, Routes } from "react-router-dom"

export default function Overview () {
  return (
    <>
      <OverviewNavBar />
      <div className="profileContainer">
        <Routes>
          <Route path="/adoptionHistory" element={<ShowMyPet />}></Route>
          <Route path="/donationHistory" element={<DonationHistory />}></Route>
          <Route path="/volunteer" element={<Volunteer />}></Route>
        </Routes>
      </div>
    </>
  )
}