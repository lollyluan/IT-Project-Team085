import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, FormGroup, Label, Input,Button,Row} from 'reactstrap';

export default class PostPet extends React.Component {
    render() {
    return(
        <Form className="Post">     
        <Row>
        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Num" sm='1'>1.</Label>
          <Label for="Category" sm='1'>Category:</Label>
          <Col lg='2'>
          <Input type="select" id="Category" name="Category:">
          <option value="Cats">Cats</option>
          <option value="Dogs">Dogs</option>
          </Input>
          </Col>
        </FormGroup>
        </Col>


        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Name" sm='1'>Pet’s Name:</Label>   
        <Col lg='2'>
          <Input type="select" type="Pet's Name" name="Name" id="Pet's Name" placeholder="Name"/>  
        </Col> 
        </FormGroup>
        </Col>

        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="ID" sm='1'>Pet's ID</Label>
        <Col lg='2'>
          <Input type="select" type="Pet's ID" name="ID" id="Pet's ID" placeholder="--- --- ---" />
        </Col>
        </FormGroup>
        </Col>
        </Row>

        <Row>
        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Country" sm='1'>Country:</Label>
          <Col lg='2'>
          <Input type="select" id="Country:" name="Country:">
          <option value="Australia">Australia</option>
          </Input>
          </Col>
        </FormGroup>
        </Col>

        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="City" sm={1}>City:</Label>
          <Col lg='2'>
          <Input type="select" id="City" name="City:">
          <option value="Sydney">Sydney</option>
          <option value="Melbourne">Melbourne</option>
          <option value="Brisbane">Brisbane</option>
          <option value="Perth">Perth</option>
          <option value="Adelaide">Adelaide</option>
          </Input>
          </Col>
        </FormGroup>
        </Col>

        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Gender" sm={1}>Gender:</Label>
          <Col lg='2'>
          <Input type="select" id="Gender" name="Gender:">
          <option value="Boy">Boy</option>
          <option value="Gril">Girl</option>
          </Input>
          </Col>
        </FormGroup>
        </Col>
        </Row>

        <Row>
        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Age" sm={1}>Age</Label>
          <Col lg='2'>
          <Input type="select" type="Age" name="month/year" id="Age" placeholder="month/year" />
        </Col>
        </FormGroup>
        </Col>
        
        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Color" sm={1}>Color</Label>
          <Col lg='2'>
          <Input type="select" id="Color" name="Color:">
          <option value="Orange">Orange</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="Brown">Brown</option>
          <option value="Double Color">Double Color</option>
          <option value="Triple Color">Triple Color</option>
          </Input>
          </Col>
        </FormGroup>
        </Col>
        </Row>

        <FormGroup row>
          <Label for="exampleText" sm={1}>Descirption</Label>
          <Col lg={8} >
            <Input type="textarea" name="text" id="exampleText"/>
          </Col>
        </FormGroup>

        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <Label for="Color" sm={1}>Tags:</Label>
          <Col lg='2'>
          <Input id="Tags" multiple name="selectMulti" type="select">
          <option value="Traumatized">Traumatized</option>
          <option value="Sterilized">Sterilized</option>
          <option value="Lazy">Lazy</option>
          <option value="Defective">Defective</option>
          <option value="Young">Young</option>
          <option value="Old">Old</option>
          <option value="Lively">Lively</option>
          <option value="Young">Young</option>
          <option value="Long hair">Long hair</option>
          </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleFile" sm={1}>Photos:</Label>
         <div className='AddPhoto'>
          <img src="icons/Add.svg" className='align-items-center'></img>
          <Button size="sm" outline color="success">Update Photos</Button>{' '}
        </div>
      </FormGroup>

        </Form>
    );
}
}
