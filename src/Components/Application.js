import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, FormGroup, Label,Row, Button} from 'reactstrap';



export default function Application (props){

    
    return(
        <Form className="Post">     
        <Row className='NoPadding'>
        <Label for="Num" sm='12'>1. <span>PetID:XXX XXX XXX</span></Label>
        <Col lg='6'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Adopter’s Name:" sm='1'>Adopter’s Name:  <span>xxxx xxx</span></Label> 
        </FormGroup>
        </Col>


        <Col lg='6'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Adopter’s Location:" sm='1'>Adopter’s Location:<span>xxxxxxxxx</span></Label>  
        </FormGroup>
        </Col>
        </Row>

        <Row className='NoPadding'>
        <Col lg='6'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Adopter’s Number:" sm='1'>Adopter’s Number:<span>{props.userId}</span> </Label>  
        </FormGroup>
        </Col>

        <Col lg='6'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Adopter’s Email:" sm='1'>Adopter’s Email:<span>xxxxx@gmai.com</span></Label>  
        </FormGroup>
        </Col>
        </Row>

        <Row className='NoPadding'>
        <Col lg='6'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Adoption History:" sm='1'>Adoption History:<span>xxx</span></Label>  
        </FormGroup>
        </Col>
        
        <Col lg='6'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Adoption History:" sm='1'>Donation History:<span>xxx</span></Label>  
        </FormGroup>
        </Col>
        </Row>

        <Row className='NoPadding'>
        <Col lg={12}>
        <FormGroup row>
          <Label for="exampleText" sm={1}>Reasons:<span>xxxxxxxxxxxxxxxxxxxx</span></Label>
        </FormGroup>
        </Col>
        </Row>

        <Button className="button" >
            Accpet
        </Button>

        <Button className="button" >
            Reject
        </Button>


        </Form>
    );
}

