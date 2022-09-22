import { Login } from "@mui/icons-material";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from "../pages/Homepage/home";
import LoginPage from "../pages/Login/login";
import RegisterPage from "../pages/Register/register";
export default function HomeRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route exact path="/register" element = {<RegisterPage/>}>
     
          </Route>
          <Route exact path="/login" element={<LoginPage/>}>
         
          </Route>
          <Route exact path="/" element={<HomePage/>}>
           
          </Route>
        </Routes>
      </div>
    </Router>
  );
}