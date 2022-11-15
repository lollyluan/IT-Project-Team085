import React from 'react'
import { ListGroup, ListGroupItem, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import defaultAvatar from "../images/default_avatar.png"
import {
  Link,
  Outlet
} from "react-router-dom"

export default class AdminSideBar extends React.Component {
  render () {
    return (
      <>
        <Col lg='3' className="AdminSide">
          <img src={defaultAvatar} alt="Sample" className='adminAvatar' />

          <div className="name">Admin</div>

          <div className="location">| Melbourne</div>

          <ul className="functions">
            <li><Link to="#">User Information</Link></li>
            <li><Link to="/admin/Dashboard/postPet">Post Pets</Link></li>
            <li><Link to="#">Management</Link></li>
            <li><Link to="/admin/Dashboard/allApplication">Adoption Application</Link></li>
            <li><Link to="#">Collection</Link></li>
            <li><Link to="#">Initiate a donation</Link></li>
            <li><Link to="#">Donation Progress</Link></li>
          </ul>


        </Col>
        <Outlet />


      </>
    )
  }
}
