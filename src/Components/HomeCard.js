import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardBody } from 'reactstrap';
import { CardText } from 'reactstrap';
import { CardTitle} from 'reactstrap';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';

function HomeCard (){
    return(
<Row>
<Col sm="2">
  <img alt="Sample" src="./"/>
  <CardBody>
    <CardTitle tag="h5">Adopt a Pet</CardTitle>
    <CardText>
    Tens of thousands of pets are homeless every year and they deserve better, please give them a home.
    </CardText>
    <li className="nav-item">
        <a className="nav-link" href="#">Learn More.</a>
    </li>
  </CardBody>
</Col>


<Col sm="2">
  <img alt="Sample" src="./"/>
  <CardBody>
    <CardTitle tag="h5">Donate </CardTitle>
    <CardText>
    Pets are man's best friend, and a little kindness from you can bring them more hope and care.
    </CardText>
  
    <li className="nav-item">
        <a className="nav-link" href="#">Learn More.</a>
    </li>

  </CardBody>
</Col>

<Col sm="2">
  <img alt="Sample" src="./"/>
  <CardBody>
    <CardTitle tag="h5">Volunteers</CardTitle>
    <CardText>
    With hundreds of volunteers already on board, we are a trusted team and welcome every caring individual.
    </CardText>
    <li className="nav-item">
        <a className="nav-link" href="#">Learn More.</a>
    </li>
  </CardBody>
</Col>

</Row>
    );
}

export default HomeCard
