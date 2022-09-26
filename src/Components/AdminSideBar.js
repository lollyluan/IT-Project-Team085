import React from 'react';
import { ListGroup, ListGroupItem,Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class AdminSideBar extends React.Component {
  render() {
    return (
      <Col lg='3' className="AdminSide">
        <img alt="Sample" src="./"/>
        <h3>Name</h3>
        <p>Location</p>
        <ListGroup>
          <ListGroupItem  className='border' active tag="button" action>User InFormation</ListGroupItem>
          <ListGroupItem  className='border' tag="button" action>Post  Pets</ListGroupItem>
          <ListGroupItem  className='border' tag="button" action>Management</ListGroupItem>
          <ListGroupItem  className='border' tag="button" action>Adoption Application</ListGroupItem>
          <ListGroupItem  className='border' tag="button" action>Collection</ListGroupItem>
          <ListGroupItem  className='border' tag="button" action>Initiate a donation</ListGroupItem>
          <ListGroupItem  className='border' tag="button" action>Donation Progress</ListGroupItem>
        </ListGroup>
      </Col>
    );
  }
}
