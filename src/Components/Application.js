import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, FormGroup, Label,Row, Button} from 'reactstrap';



export default function Application (props){

    return(
        <Form className="Post">     
        <Row className='NoPadding'>
        <Label for="Num" sm='12'>{props.id}</Label>
        <Col lg='6'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Adopter’s Name:" sm='1'>Adopter’s Name:{props.userName}</Label> 
        </FormGroup>
        </Col>


        <Col lg='6'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Adopter’s Location:" sm='1'>Pet’s ID:{props.petId}</Label>  
        </FormGroup>
        </Col>
        </Row>

        <Row className='NoPadding'>
        <Col lg='6'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Adopter’s Number:" sm='1'>Adopter’s ID:{props.userId} </Label>  
        </FormGroup>
        </Col>

        <Col lg='6'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Adopter’s Email:" sm='1'>Adopte time:{props.timestamp}</Label>  
        </FormGroup>
        </Col>
        </Row>

        <Row className='NoPadding'>
        <Col lg={12}>
        <FormGroup row>
          <Label for="exampleText" sm={1}>Reasons:{props.reason}</Label>
        </FormGroup>
        </Col>
        </Row>

        </Form>
    );
}

