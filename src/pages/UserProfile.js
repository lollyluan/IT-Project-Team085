import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../Components/header'
import Footer from '../Components/footer'
import Banner from '../Components/UserProfile--Banner'
import SideNavBar from '../Components/UserProfile--NavBar/SideNavBar'
import Overview from '../Components/UserProfile--NavBar/Overview/Overview'




function UserProfile () {
    return (

        <div>
            <Banner></Banner>
            <SideNavBar></SideNavBar>
            <Overview></Overview>

        </div>

    )
}

export default UserProfile