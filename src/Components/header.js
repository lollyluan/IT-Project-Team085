import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { isLoggedIn, getToken,logOut } from '../api/login'
import { BsFillFilePersonFill } from 'react-icons/bs'
import {loggedIn} from '../api/admim_login'
function Header () {

  const handleLogout = async () => {
    logOut();
  };
  var context;
  if(isLoggedIn() === true){
    context= (<div>
    <Button className='btn' outline color="success" onClick = {handleLogout}>Logout</Button>&nbsp;

    <Link to="/profile">
      <Button>< BsFillFilePersonFill /></Button>
    </Link>
  </div>)}
  else if(loggedIn() == true){
    context = (<div>
      <Button className='btn' outline color="success" onClick = {handleLogout}>Logout</Button>&nbsp;
  
      <Link to="/admin/DashBoard">
        <Button>< BsFillFilePersonFill /></Button>
      </Link>
    </div>)
  }
  else{
    context = <div>
    <Link to="/DiffLogin">
      <Button className='btn' outline color="success">Login</Button>&nbsp;
    </Link>

    <Link to="/register">
      <Button className='btn' color="success">Register</Button>
    </Link>
  </div>
  }
  


  return (
    <header>
      <Nav>
        <NavbarBrand href="/">Pets Home</NavbarBrand>
        <NavItem>
          <NavLink href="#">Donation</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Location</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Finance</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Support</NavLink>
        </NavItem>

        <div className="functionArea">
         {context}
        </div>
      </Nav>

    </header>
  )
}

export default Header