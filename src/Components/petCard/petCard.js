import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import ToggleButton from 'react-bootstrap/ToggleButton';
import { Link, useParams } from "react-router-dom";


function PetCard(props) {

  // const [checked, setChecked] = React.useState(false);
  const ID = props.id;
  const imageLst = props.image[0].image


  return (
    
    <Card>
      <Card.Img variant="top" src={`data:image/jpeg;base64,${imageLst}`} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Age: {props.age} months

        </Card.Text>
        <Link to={`/petInfo/${props.id}`}>
        {/* <Link to={{ pathname: '/petInfo', query:{petId : ID}}}> */}
          <Button variant="success">More Information</Button>
        </Link>
      </Card.Body>
    </Card>
    
  );
}

export default PetCard;