import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardBody } from 'reactstrap';
import { CardText } from 'reactstrap';
import { CardTitle} from 'reactstrap';
import { Button } from 'reactstrap';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';

function Project (){
    return(
<Row>
<Col sm="6">
  <img alt="Sample" src="./"/>
  <CardBody>
    <CardTitle tag="h5">Infectious Diseases of a Kitten</CardTitle>
    <CardText>
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
    </CardText>
    <Button>
       Donate
    </Button>
  </CardBody>
</Col>


<Col sm="5">
  <img alt="Sample" src="./"/>
  <CardBody>
    <CardTitle tag="h5">Sed ut perspiciatis</CardTitle>
    <CardText>
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
    </CardText>
    <Button>
       Donate
    </Button>
  </CardBody>
</Col>

</Row>
    );
}

export default Project
