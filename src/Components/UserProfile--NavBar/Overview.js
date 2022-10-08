import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

import ShowMyPet from "./AdoptionHistory"
import ShowDonationHistory from "./DonationHistory"
import ShowVolHistory from "./VolunteerHistory"



export default function Overview () {
  return (



    <Router>

      <nav>
        <ul>
          <li>
            <Link to="overview/adoption">Adoption</Link>
          </li>
          <li>
            <Link to="overview/donation">Donation</Link>
          </li>
          <li>
            <Link to="overview/volunteer">VOL</Link>
          </li>
        </ul>
      </nav>


      <Routes>
        <Route exact path="overview/adoption" element={<ShowMyPet />}>

        </Route>
        <Route exact path="overview/donation" element={<ShowDonationHistory />}>

        </Route>
        <Route exact path="overview/volunteer" element={<ShowVolHistory />}>

        </Route>
      </Routes>

    </Router>





  )
}





// <Router>

    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/adoptionHistory">Adoption History</Link>
    //       </li>
    //       <li>
    //         <Link to="/donationHistory">Donation History</Link>
    //       </li>
    //       <li>
    //         <Link to="/volunteerHistory">Volunteer</Link>
    //       </li>
    //     </ul>
    //   </nav>


    //   <Routes>
    //     <Route exact path="/adoptionHistory" element={<ShowMyPet />}>

    //     </Route>
    //     <Route exact path="/donationHistory" element={<ShowDonationHistory />}>

    //     </Route>
    //     <Route exact path="/volunteerHistory" element={<ShowVolHistory />}>

    //     </Route>
    //   </Routes>

    // </Router>