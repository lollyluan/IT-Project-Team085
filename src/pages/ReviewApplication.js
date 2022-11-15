import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, NavbarBrand } from 'reactstrap'
import AdminSideBar from '../Components/AdminSideBar'
import Application from '../Components/Application'
import React, { useState, useEffect } from 'react'
import ApplicationList from '../Components/ApplicationList'



function ReviewApplication () {
    return (
        <div>
            <Nav>
                <NavbarBrand>Pets Home</NavbarBrand>
            </Nav>
            <Application/>
            <AdminSideBar />
        </div>


    )
}

export default ReviewApplication