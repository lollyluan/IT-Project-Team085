import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarBrand,Nav, NavItem, NavLink,Button } from 'reactstrap';
import {Link} from 'react-router-dom';



function Header (){
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
        <Link to="/DiffLogin">
        <Button className='btn' outline color="success">Login</Button>{' '}
        </Link>
        
        <Link to="/register">
        <Button className='btn' color="success">Register</Button>{' '}
        </Link>
        </Nav>

      </header>
    );
}

export default Header;