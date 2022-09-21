import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class AdminSideBar extends React.Component {
  render() {
    return (
      <div>
        <img alt="Sample" src="./"/>
        <h3>Name</h3>
        <p>Location</p>
        <ListGroup>
          <ListGroupItem active tag="button" action>User InFormation</ListGroupItem>
          <ListGroupItem tag="button" action>Post  Pets</ListGroupItem>
          <ListGroupItem tag="button" action>Management</ListGroupItem>
          <ListGroupItem tag="button" action>Adoption Application</ListGroupItem>
          <ListGroupItem tag="button" action>Collection</ListGroupItem>
          <ListGroupItem tag="button" action>Initiate a donation</ListGroupItem>
          <ListGroupItem tag="button" action>Donation Progress</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
