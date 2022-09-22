import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img from '../images/cat1.png';
import Button from "react-bootstrap/Button";
import PetInfo from '../pages/petInformation';

function PetList() {
  return (
    <Row xs={1} md={5} className="petlist">
      {Array.from({ length: 15 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <Card.Text>
                Age: XX months
              </Card.Text>
                <Link to="/petInfo">
                  <Button variant="success">
                    More Information
                  </Button>
                </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}   
    </Row>

  );
}

export default PetList;