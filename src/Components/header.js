import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarBrand,Nav, NavItem, NavLink,Button } from 'reactstrap';



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
        <Button className='btn' outline color="success">Login</Button>{' '}
        <Button className='btn' color="success">Register</Button>{' '}
        </Nav>

      </header>
    );
}

export default Header;