import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, NavbarBrand, Button } from 'reactstrap'
import AdminSideBar from '../Components/AdminSideBar'
import Application from '../Components/Application'
import React, { useState, useEffect } from 'react'
import ApplicationList from '../Components/ApplicationList'
import { logOut } from '../api/login'



function ReviewApplication () {

    const handleLogout = async () => {
        logOut();
      };

    return (
        <div>
            <Nav>
                <NavbarBrand>Pets Home</NavbarBrand>&nbsp;
                <Button className='btn' outline color="success" onClick = {handleLogout}>Logout</Button>
            </Nav>
            
            <AdminSideBar />
        </div>


    )
}

export default ReviewApplication