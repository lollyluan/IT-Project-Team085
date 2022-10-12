import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import ToggleButton from 'react-bootstrap/ToggleButton';
import { Link, useParams } from "react-router-dom";


function PetCard(props) {

  // const [checked, setChecked] = React.useState(false);
  const ID = props.id;

  return (
    
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Age: {props.age} months
        </Card.Text>
        <Link to={`/petInfo?id=${props.id}`}>
        {/* <Link to={{ pathname: '/petInfo', query:{petId : ID}}}> */}
          <Button variant="success">More Information</Button>
        </Link>
      </Card.Body>
    </Card>
    
  );
}

export default PetCard;