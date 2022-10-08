import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

import Overview from "./Overview"
import PersonalInfo from "./PersonInfo"



export default function SideNavBar () {
  return (
    <Router>

      <nav>
        <ul>
          <li>
            <Link to="/overview">Overview</Link>
          </li>
          <li>
            <Link to="/personalInfo">Profile</Link>
          </li>
        </ul>
      </nav>


      <Routes>
        <Route exact path="/overview" element={<Overview />}>

        </Route>
        <Route exact path="/PersonalInfo" element={<PersonalInfo />}>

        </Route>

      </Routes>

    </Router>
  )
}