import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarBrand,Nav, NavItem, NavLink,Button } from 'reactstrap';
import {Link, Outlet} from 'react-router-dom';
import { isLoggedIn, getToken } from '../api/login';
import {BsFillFilePersonFill} from 'react-icons/bs';


function Header (){
    //localStorage.clear();
    console.log("Login===============")
    console.log(isLoggedIn())
    console.log(getToken())

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

          {isLoggedIn() === true ?
              <div>
                <Link to="/profile">
                  <Button>< BsFillFilePersonFill/></Button>
                </Link>
              </div>
              :
              <div>
                <Link to="/DiffLogin">
                <Button className='btn' outline color="success">Login</Button>{' '}
                </Link>
              
                <Link to="/register">
                <Button className='btn' color="success">Register</Button>{' '}
                </Link>
              </div>
              
          }
        </Nav>

      </header>
    );
}

export default Header;