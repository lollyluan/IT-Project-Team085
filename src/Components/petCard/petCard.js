import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import ToggleButton from 'react-bootstrap/ToggleButton';
import { Link } from "react-router-dom";


function PetCard(props) {

  // const [checked, setChecked] = React.useState(false);
  
  return (
    
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Age: {props.age} months
        </Card.Text>
        <Link to={`/petInfo/${props.id}`}>
          <Button variant="#90A955">More Information</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default PetCard;