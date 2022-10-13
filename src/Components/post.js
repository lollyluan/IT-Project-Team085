import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, FormGroup, Label, Input,Button,Row} from 'reactstrap';


export default class PostPet extends React.Component {
    render() {
    return(
        <Form className="Post">   
        <Row className='NoPadding'>
        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <div className='s1'>
          <span for="Category" sm='1'>Category:</span>
          </div>
          <Input  type="select" id="Category" name="Category:">
          <option value="Cats">CAT</option>
          <option value="Dogs">DOG</option>
          </Input>
      
        </FormGroup>
        </Col>


        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <span className='s1' for="Name" sm='1'>Name:</span>   
          <Input type="select"  name="Name" id="Pet's Name" placeholder="Pet’s Name"/>  
        </FormGroup>
        </Col>

        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <span className='s1' for="ID" sm='1'>Pet's ID</span>
          <Input  type="select" name="ID" id="Pet's ID" placeholder="--- --- ---" />
        </FormGroup>
        </Col>
        </Row>

        <Row className='NoPadding'>
        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <span className='s1' for="Country" sm='1'>Country:</span>
          <Input type="select" id="Country:" name="Country:">
          <option value="Australia">Australia</option>
          </Input>

        </FormGroup>
        </Col>

        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <span className='s1' for="City" sm={1}>City:</span>
          <Input type="select" id="City" name="City:">
          <option value="Sydney">Sydney</option>
          <option value="Melbourne">Melbourne</option>
          <option value="Brisbane">Brisbane</option>
          <option value="Perth">Perth</option>
          <option value="Adelaide">Adelaide</option>
          </Input>
  
        </FormGroup>
        </Col>

        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <span className='s1' for="SEX" sm={1}>SEX:</span> 
          <Input type="select" id="Gender" name="Gender:">
          <option value="Boy">MALE</option>
          <option value="Gril">FEMALE</option>
          </Input>

        </FormGroup>
        </Col>
        </Row>

        <Row className='NoPadding'>
        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <span className='s1' for="Age" sm={1}>Age:</span>
          <Input type="select"  name="month/year" id="Age" placeholder="month/year" />
        </FormGroup>
        </Col>
      
        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <span className='s1' for="Color" sm={1}>Color:</span>
          <Input type="select" id="Color" name="Color:">
          <option value="Orange">RED</option>
          <option value="Black">BLUE</option>
          <option value="White">GREEN</option>
          <option value="Brown">YELLOW</option>
          <option value="Double Color">ORANGE</option>
          <option value="Triple Color">PURPLE</option>
          </Input>
        </FormGroup>
        </Col>

        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <span className='s1' for="Desex" sm={1}>Desex:</span>
          <Input type="select" id="immunization" name="Immunization">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          </Input>
        </FormGroup>
        </Col>
        </Row>

        <Row className='NoPadding'>
        <Col lg={12}>
        <FormGroup row className='row-cols-lg-auto g-3 align-items-center'>
          <span for="exampleText" sm={1}>Descirption:</span>
          <Input className='textInput' type="textarea" name="text" id="exampleText"/>
        </FormGroup>
        </Col>
        </Row>


        <Row className='NoPadding'>
        <Col lg={12}>
        <FormGroup row className='row-cols-lg-auto g-3 align-items-center'>
         <span className='s2' for="exampleFile" sm={2}>Photos:</span>
         <div className='AddPhoto'>
          <img src="icons/Add.svg" className='align-items-center Update'></img>
          <Button size="sm" outline color="success">Update Photos</Button>{' '}
        </div>
        </FormGroup>
        </Col>
        </Row>

        </Form>
    );
}
}
