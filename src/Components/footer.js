import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarBrand,Nav, NavItem, NavLink } from 'reactstrap';


function Footer (){ 
    return(
    <footer>
      <Nav>
        <NavbarBrand href="/">Pets Home</NavbarBrand>
          <NavItem>
            <NavLink href="#">Support</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Community</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Company</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Help desk</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Resources</NavLink>
          </NavItem>
        </Nav>
        <p>© Pets Home. 2022. We love our users!</p>
        </footer>
    ); 
}

export default Footer;