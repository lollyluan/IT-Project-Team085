import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function PageNumber() {
  return (
    <>
      <ButtonGroup>
        <Button variant="outline-success">1</Button>{' '}
        <Button variant="outline-success">2</Button>{' '}
        <Button variant="outline-success">3</Button>{' '}
        <Button variant="outline-success">4</Button>
      </ButtonGroup>
    </>
  );
}

export default PageNumber;