import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, FormGroup, Label,Row} from 'reactstrap';

export default class Application extends React.Component {
    render() {
    return(
        <Form className="Post">     
        <Row>
        <Label for="Num" sm='1'>1.</Label>
        <Col lg='11'>PetID:XXX XXX XXX</Col>
        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Adopter’s Name:" sm='1'>Adopter’s Name:</Label>
          <Col lg='2'><p>xxxx xxx</p></Col>
        </FormGroup>
        </Col>


        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Adopter’s ID:" sm='1'>Adopter’s ID:</Label>  
        <Col lg='2'><p>xxx xxx xx</p></Col> 
        </FormGroup>
        </Col>

        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Adopter’s Location:" sm='1'>Adopter’s Location:<span>xxxxxxxxx</span></Label>  
        </FormGroup>
        </Col>
        </Row>

        <Row>
        <Col lg='6'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Adopter’s Number:" sm='1'>Adopter’s Number:<span>0474 xxxxx</span> </Label>  
        </FormGroup>
        </Col>

        <Col lg='6'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Adopter’s Email:" sm='1'>Adopter’s Email:<span>xxxxx@gmai.com</span></Label>  
        </FormGroup>
        </Col>
        </Row>

        <Row>
        <Col lg='6'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Adoption History:" sm='1'>Adoption History:<span>xxx</span></Label>  
        </FormGroup>
        </Col>
        
        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Adoption History:" sm='1'>Donation History:<span>xxx</span></Label>  
        </FormGroup>
        </Col>
        </Row>

        <Row>
        <FormGroup row>
          <Label for="exampleText" sm={12}>Reasons:<span>xxxxxxxxxxxxxxxxxxxx</span></Label>
        </FormGroup>
        </Row>
        </Form>
    );
}
}
