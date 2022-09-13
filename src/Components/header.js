import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header (){
    return (
        <nav className="navbar navbar-expand-lg bg-white">
        <a className="navbar-brand disabled" href="#">PetHome</a>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Donation</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Location</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Finance</a>
            </li>    
            <li className="nav-item">
                <a className="nav-link" href="#">Support</a>
              </li>   
          </ul>
        </div>  

        <div className="">
            <a href="./pages/Login/login" className="btn btn-outline-success" role="button">Log in</a>
            <a href="#" className="btn btn-success" role="button">Register</a>
        </div>     
      </nav>
    );
}

export default Header;