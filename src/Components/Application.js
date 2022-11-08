import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, FormGroup, Label,Row} from 'reactstrap';
import {getPet} from '../api/pet';
import { data } from 'jquery';


export default class Application extends React.Component {


  state = {loading:true};

  async componentDidMount(){

   this.setState({ application:data.results[0], loading:false});  
   getPet(data)
}



    render() {
    return(
      <div>
      <div>
        {this.state.loading || !this.state.application ? (
         <div>loading...</div> 
         ) :(
          <div>
        <Form className="Post">     
        <Row className='NoPadding'>
        <Label for="Num" sm='12'>1. <span>PetID:{this.state.application.id}</span></Label>
        <Col lg='6'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Adopter’s Name:" sm='1'>Adopter’s Name: <span>{this.state.application.name}</span></Label> 
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
          <Label for="Adopter’s Number:" sm='1'>Adopter’s Number:<span>0474 xxxxx</span> </Label>  
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
        </Form>
          </div>
        )}
      </div>
    
       
      </div>
    );
}
}
