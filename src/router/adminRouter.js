import { Login } from "@mui/icons-material"
import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link

} from "react-router-dom"
import AdminLoginPage from "../pages/admin_login"

import PostPets from "../pages/PostPets"

export default function HomeRouter () {


  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route exact path="/admin/pet" element={<PostPets/>}>

          </Route>
          <Route exact path="/admin/login" element={<AdminLoginPage />}>

          </Route>
        
        </Routes>
      </div>
    </Router>
  )
}