import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img1 from '../../images/cat1.png';
// import ToggleButton from 'react-bootstrap/ToggleButton';

function PetCard() {

  // const [checked, setChecked] = React.useState(false);

  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Pet Name</Card.Title>
        <Card.Text>
          Age: XX months
          Location: XXXXXXXX
        </Card.Text>
        <Button variant="#90A955">More Information</Button>
      </Card.Body>
    </Card>
  );
}

export default PetCard;