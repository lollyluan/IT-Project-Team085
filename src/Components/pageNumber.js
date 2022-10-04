import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function PageNumber(props) {
  return (
    <>
      <ButtonGroup>
        <Button value={1} onClick={props.onClick} type="input" variant="outline-success">1</Button>{' '}
        <Button value={2} onClick={props.onClick} type="input" variant="outline-success">2</Button>{' '}
        <Button value={3} onClick={props.onClick} type="input" variant="outline-success">3</Button>{' '}
        <Button value={4} onClic={props.onClick} type="input" variant="outline-success">4</Button>
      </ButtonGroup>
    </>
  );
}

export default PageNumber;