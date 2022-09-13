import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer (){ 
    return(
        <footer>
        <article className="navbar navbar-expand-lg">
        <a className="navbar-brand disabled" href="#">PetHome</a>
        <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Support</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Community</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Company</a>
            </li>   
            <li className="nav-item">
                <a className="nav-link" href="#">Help desk</a>
            </li>   
            <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
            </li>    
            <li className="nav-item">
                <a className="nav-link" href="#">Resources</a>
            </li> 
        </ul>
        </article>
        <p>© Pets Home. 2022. We love our users!</p>
        </footer>
    ); 
}

export default Footer;