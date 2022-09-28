import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,NavbarBrand } from 'reactstrap';
import AdminSideBar from '../Components/AdminSideBar';
import Application from '../Components/Application'

function ReviewApplication(){
    return(
<div>
    <Nav>
        <NavbarBrand href="/">Pets Home</NavbarBrand>
    </Nav>  
    <AdminSideBar/> 
    <Application/>

</div>


    )
}

export default ReviewApplication