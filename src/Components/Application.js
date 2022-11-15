import React, { useEffect } from 'react'
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, FormGroup, Label,Row, Button} from 'reactstrap';



export default function Application (props){

    return(
        <Form className="Post"> 
        
        <Row className='NoPadding'>
        <Col lg='6'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
        <Label for="Pet’s ID:" sm='1'>Pet’s ID:{props.petId}</Label>  
        </FormGroup>
        </Col>   
        </Row>
          
        <Row className='NoPadding'>
        <Label for="Num" sm='12'></Label>
        <Col lg='6'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Adopter’s Name:" sm='1'>First Name:{props.firstname}</Label> 
        </FormGroup>
        </Col>

        <Col lg='6'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Adopter’s Name:" sm='1'>Last Name:{props.lastname}</Label> 
        </FormGroup>
        </Col>
        </Row>

        <Row className='NoPadding'>
        <Col lg='6'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Adopter’ id:" sm='1'>Adopter’s ID:{props.userId}</Label>  
        </FormGroup>
        </Col>

        <Col lg='6'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Adopter’s Email:" sm='1'>Email:{props.email}</Label>  
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

        <Button>Compelete</Button>
        <Button>Reject</Button>
        </Form>
    );
}

