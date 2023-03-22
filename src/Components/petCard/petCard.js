import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from "react-router-dom";


function PetCard(props) {
  

  

  return (
    
    <Card>
      
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Age: {props.age} months

        </Card.Text>
        <Link to={`/petInfo/${props.id}`}>
          <Button size="sm" variant="success">More Information</Button>
        </Link>
      </Card.Body>
    </Card>
    
  );
}

export default PetCard;