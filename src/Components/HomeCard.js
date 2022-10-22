import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardBody,CardText,CardTitle,Row,Col,Button } from 'reactstrap';
import donation from '../images/donation.png';
import adopter from '../images/adopter.png';
import volunteer from '../images/volunteer.png';
import {Link} from "react-router-dom";

function HomeCard (){
    return(
<Row>
<Col sm="2">
    <img alt="Sample" src={adopter}/>
  <CardBody>
    <CardTitle tag="h5">Adopt a Pet</CardTitle>
    <CardText>
    Tens of thousands of pets are homeless every year and they deserve better, please give them a home.
    </CardText>
    <Link to="/petlist">
    <Button color="link">Learn More.</Button>
    </Link>
  </CardBody>
</Col>


<Col sm="2">
  <img alt="Sample" src={volunteer}/>
  <CardBody>
    <CardTitle tag="h5">Donate </CardTitle>
    <CardText>
    Pets are man's best friend, and a little kindness from you can bring them more hope and care.
    </CardText>
    <Button color="link">Learn More.</Button>
  </CardBody>
</Col>

<Col sm="2">
  <img alt="Sample" src={donation}/>
  <CardBody>
    <CardTitle tag="h5">Volunteers</CardTitle>
    <CardText>
    With hundreds of volunteers already on board, we are a trusted team and welcome every caring individual.
    </CardText>
    <Button color="link">Learn More.</Button>
  </CardBody>
</Col>

</Row>
    );
}

export default HomeCard
