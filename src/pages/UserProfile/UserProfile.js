import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../../Components/header'
import Footer from '../../Components/footer'

function UserProfile () {
    return (
        <div>
            <Header></Header>

            <Banner></Banner>
            <SideNav></SideNav>

            <Footer></Footer>
        </div>
    )
}

export default UserProfile