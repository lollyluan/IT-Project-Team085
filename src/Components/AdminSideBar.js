import React from 'react'
import { ListGroup, ListGroupItem, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import defaultAvatar from "../images/default_avatar.png"

export default class AdminSideBar extends React.Component {
  render () {
    return (
      <Col lg='3' className="AdminSide">
        <img src={defaultAvatar} alt="Sample" className='adminAvatar' />

        <div className="name">Admin</div>

        <div className="location">| Melbourne</div>

        <ul className="functions">
          <li><a to="#">User Information</a></li>
          <li><a to="#">Post Pets</a></li>
          <li><a to="#">Management</a></li>
          <li><a to="#">Adoption Application</a></li>
          <li><a to="#">Collection</a></li>
          <li><a to="#">Initiate a donation</a></li>
          <li><a to="#">Donation Progress</a></li>
        </ul>
      </Col>
    )
  }
}
